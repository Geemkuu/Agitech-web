"use server"

import { createClient } from "@/lib/supabase/server"

interface FeedbackData {
  name: string
  phone_number: string
  message: string
}

export async function submitFeedback(data: FeedbackData) {
  const supabase = await createClient()

  const { error } = await supabase.from("feedback").insert({
    name: data.name,
    phone_number: data.phone_number,
    message: data.message,
  })

  if (error) {
    console.error("Error submitting feedback:", error)
    return { success: false, error: "Failed to submit feedback. Please try again." }
  }

  return { success: true }
}
