import { Card, CardContent } from "@/components/ui/card"
import { Carrot, Cherry, Flower2, TreeDeciduous } from "lucide-react"
import { SmartLink } from "@/components/smart-link"

const categories = [
  {
    name: "Vegetables",
    description: "Tomatoes, cabbages, onions, peppers, and more nutritious vegetables.",
    icon: Carrot,
    count: "8 varieties",
    href: "/catalogue?category=Vegetables",
    color: "bg-green-500/10 text-green-600",
  },
  {
    name: "Fruits",
    description: "Strawberries, watermelons, mangoes, bananas, and tropical fruits.",
    icon: Cherry,
    count: "6 varieties",
    href: "/catalogue?category=Fruits",
    color: "bg-red-500/10 text-red-600",
  },
  {
    name: "Herbs",
    description: "Basil, mint, rosemary, coriander, and aromatic herbs.",
    icon: Flower2,
    count: "5 varieties",
    href: "/catalogue?category=Herbs",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    name: "Trees",
    description: "Avocados, citrus, moringa, macadamia, and fruit trees.",
    icon: TreeDeciduous,
    count: "6 varieties",
    href: "/catalogue?category=Trees",
    color: "bg-amber-500/10 text-amber-600",
  },
]

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find the perfect seedlings for your agricultural needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <SmartLink key={category.name} href={category.href}>
              <Card className="group h-full cursor-pointer border-2 border-transparent transition-all hover:border-primary/20 hover:shadow-lg">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${category.color} transition-transform group-hover:scale-110`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <span className="text-xs font-medium text-primary">
                    {category.count}
                  </span>
                </CardContent>
              </Card>
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  )
}
