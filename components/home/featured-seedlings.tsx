import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SeedlingCard } from "@/components/seedling-card"
import { createClient } from "@/lib/supabase/server"

export async function FeaturedSeedlings() {
  const supabase = await createClient()
  
  const { data: seedlings } = await supabase
    .from("seedlings")
    .select("*")
    .eq("stock_status", "In Stock")
    .limit(4)

  if (!seedlings || seedlings.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Featured Seedlings
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our most popular plants, ready for your garden
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/catalogue" className="flex items-center gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seedlings.map((seedling) => (
            <SeedlingCard key={seedling.id} seedling={seedling} />
          ))}
        </div>
      </div>
    </section>
  )
}
