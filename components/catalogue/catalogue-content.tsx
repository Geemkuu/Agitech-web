import { createClient } from "@/lib/supabase/server"
import { SeedlingCard } from "@/components/seedling-card"
import { Empty } from "@/components/ui/empty"
import { Leaf } from "lucide-react"

interface CatalogueContentProps {
  category?: string
  search?: string
}

export async function CatalogueContent({ category, search }: CatalogueContentProps) {
  const supabase = await createClient()
  
  let query = supabase.from("seedlings").select("*").order("name")
  
  if (category) {
    query = query.eq("category", category)
  }
  
  if (search) {
    query = query.ilike("name", `%${search}%`)
  }

  const { data: seedlings, error } = await query

  if (error) {
    return (
      <Empty
        icon={Leaf}
        title="Unable to load seedlings"
        description="Please try again later."
      />
    )
  }

  if (!seedlings || seedlings.length === 0) {
    return (
      <Empty
        icon={Leaf}
        title="No seedlings found"
        description={
          search 
            ? `No results for "${search}". Try a different search term.`
            : category 
              ? `No seedlings available in the ${category} category.`
              : "No seedlings available at the moment."
        }
      />
    )
  }

  return (
    <div>
      <p className="mb-6 text-sm text-muted-foreground">
        Showing {seedlings.length} seedling{seedlings.length !== 1 ? "s" : ""}
        {category && ` in ${category}`}
        {search && ` matching "${search}"`}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {seedlings.map((seedling) => (
          <SeedlingCard key={seedling.id} seedling={seedling} />
        ))}
      </div>
    </div>
  )
}
