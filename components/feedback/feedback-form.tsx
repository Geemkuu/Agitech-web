"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { FieldGroup, Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field"
import { Check, AlertCircle } from "lucide-react"
import { submitFeedback } from "@/app/feedback/actions"

const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone_number: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

type FeedbackFormData = z.infer<typeof feedbackSchema>

export function FeedbackForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
  })

  const onSubmit = async (data: FeedbackFormData) => {
    setSubmitStatus("idle")
    setErrorMessage("")

    const result = await submitFeedback(data)

    if (result.success) {
      setSubmitStatus("success")
      reset()
    } else {
      setSubmitStatus("error")
      setErrorMessage(result.error || "Something went wrong. Please try again.")
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">Thank You!</h3>
        <p className="mb-6 text-muted-foreground">
          Your feedback has been submitted successfully. We will get back to you soon.
        </p>
        <Button onClick={() => setSubmitStatus("idle")} variant="outline">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Field invalid={!!errors.name}>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <Input
            id="name"
            placeholder="Enter your full name"
            {...register("name")}
          />
          {errors.name && <FieldError>{errors.name.message}</FieldError>}
        </Field>

        <Field invalid={!!errors.phone_number}>
          <FieldLabel htmlFor="phone_number">Phone Number</FieldLabel>
          <Input
            id="phone_number"
            type="tel"
            placeholder="e.g., +254 700 000 000"
            {...register("phone_number")}
          />
          <FieldDescription>
            We will use this to contact you regarding your feedback.
          </FieldDescription>
          {errors.phone_number && <FieldError>{errors.phone_number.message}</FieldError>}
        </Field>

        <Field invalid={!!errors.message}>
          <FieldLabel htmlFor="message">Your Message</FieldLabel>
          <Textarea
            id="message"
            placeholder="Tell us about your experience, suggestions, or questions..."
            rows={5}
            {...register("message")}
          />
          {errors.message && <FieldError>{errors.message.message}</FieldError>}
        </Field>

        {submitStatus === "error" && (
          <div className="flex items-center gap-2 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Spinner className="mr-2 h-4 w-4" />
              Submitting...
            </>
          ) : (
            "Submit Feedback"
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
