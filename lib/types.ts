export interface Seedling {
  id: string
  name: string
  category: "Vegetables" | "Fruits" | "Herbs" | "Trees"
  price: number
  stock_status: "In Stock" | "Low Stock" | "Out of Stock"
  description: string | null
  image_url: string | null
  created_at: string
}

export interface Feedback {
  id: string
  name: string
  phone_number: string
  message: string
  created_at: string
}
