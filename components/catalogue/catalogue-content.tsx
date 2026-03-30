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
  
  let query = supabase
    .from("seedlings")
    .select("id,name,category,price_kes,stock_status,description,image_url,created_at")
    .order("name")
  
  if (category) {
    query = query.eq("category", category)
  }
  
  if (search) {
    query = query.ilike("name", `%${search}%`)
  }

  const { data, error } = await query
  const seedlings = data?.map((item: any) => ({
    ...item,
    price: item.price_kes ? Number(item.price_kes) : item.price ? Number(item.price) : 0,
  }))

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
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 [&:has(.group\/card:hover)>.group\/card:not(:hover)]:opacity-95 [&:has([data-in-view=true])>[data-in-view=false]]:opacity-95">
        {seedlings.map((seedling) => (
          <SeedlingCard key={seedling.id} seedling={seedling} />
        ))}
      </div>
    </div>
  )
}
