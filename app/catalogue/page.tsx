import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { CatalogueContent } from "@/components/catalogue/catalogue-content"
import { CatalogueFilters } from "@/components/catalogue/catalogue-filters"
import { Spinner } from "@/components/ui/spinner"

export const metadata = {
  title: "Seedling Catalogue | Agitech Seedlings",
  description: "Browse our full catalogue of premium seedlings including vegetables, fruits, herbs, and trees. Filter by category and search for specific varieties.",
}

export default async function CataloguePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>
}) {
  const params = await searchParams
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">
              Seedling Catalogue
            </h1>
            <p className="mt-2 text-muted-foreground">
              Browse our complete collection of quality seedlings
            </p>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <CatalogueFilters 
              currentCategory={params.category} 
              currentSearch={params.search} 
            />
            <Suspense fallback={
              <div className="flex items-center justify-center py-24">
                <Spinner className="h-8 w-8 text-primary" />
              </div>
            }>
              <CatalogueContent 
                category={params.category} 
                search={params.search} 
              />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
