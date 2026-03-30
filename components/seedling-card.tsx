"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export interface Seedling {
  id: string
  name: string
  category: string
  price: number
  stock_status: "In Stock" | "Low Stock" | "Out of Stock"
  description: string | null
  image_url: string | null
}

interface SeedlingCardProps {
  seedling: Seedling
}

export function SeedlingCard({ seedling }: SeedlingCardProps) {
  const stockColor = {
    "In Stock": "bg-primary/10 text-primary border-primary/20",
    "Low Stock": "bg-accent/10 text-accent border-accent/20",
    "Out of Stock": "bg-destructive/10 text-destructive border-destructive/20",
  }

  const whatsappMessage = `Hello! I'm interested in ordering ${seedling.name} seedlings (KES ${seedling.price} each). Please let me know about availability.`

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        {seedling.image_url ? (
          <Image
            src={seedling.image_url}
            alt={seedling.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl text-muted-foreground/30">🌱</span>
          </div>
        )}
        <Badge 
          variant="outline" 
          className={`absolute right-2 top-2 ${stockColor[seedling.stock_status]}`}
        >
          {seedling.stock_status}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="mb-1 text-xs font-medium uppercase tracking-wide text-primary">
          {seedling.category}
        </div>
        <h3 className="mb-2 font-semibold text-foreground text-balance">{seedling.name}</h3>
        {seedling.description && (
          <p className="mb-3 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
            {seedling.description}
          </p>
        )}
        <div className="text-lg font-bold text-foreground">
          KES {seedling.price.toLocaleString()}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          asChild 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={seedling.stock_status === "Out of Stock"}
        >
          <a
            href={`https://wa.me/254700000000?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {seedling.stock_status === "Out of Stock" ? "Out of Stock" : "Order Now"}
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
