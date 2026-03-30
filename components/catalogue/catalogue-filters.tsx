"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState, useTransition } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const categories = ["All", "Vegetables", "Fruits", "Herbs", "Trees"]

interface CatalogueFiltersProps {
  currentCategory?: string
  currentSearch?: string
}

export function CatalogueFilters({ currentCategory, currentSearch }: CatalogueFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [searchValue, setSearchValue] = useState(currentSearch || "")

  const updateFilters = (category?: string, search?: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (category && category !== "All") {
      params.set("category", category)
    } else {
      params.delete("category")
    }
    
    if (search) {
      params.set("search", search)
    } else {
      params.delete("search")
    }

    startTransition(() => {
      router.push(`/catalogue?${params.toString()}`)
    })
  }

  const handleCategoryClick = (category: string) => {
    updateFilters(category, searchValue)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    updateFilters(currentCategory, searchValue)
  }

  const handleSearchChange = (value: string) => {
    setSearchValue(value)
    if (value === "") {
      updateFilters(currentCategory, "")
    }
  }

  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <form onSubmit={handleSearchSubmit} className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search seedlings..."
          value={searchValue}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="pl-10"
        />
      </form>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === "All" 
            ? !currentCategory 
            : currentCategory === category
          
          return (
            <Button
              key={category}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryClick(category)}
              disabled={isPending}
              className={isActive ? "bg-primary hover:bg-primary/90" : ""}
            >
              {category}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
