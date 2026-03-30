import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { SmartLink } from "@/components/smart-link"

export function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          Ready to Start Growing?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
          Get in touch with us today to order your seedlings or ask any questions. 
          We are here to help you succeed in your farming journey.
        </p>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
            <SmartLink
              href="https://wa.me/254700569709?text=Hello%20Agitech%20Seedlings!%20I%20would%20like%20to%20place%20an%20order."
              loadingMessage="📱 Connecting you to WhatsApp..."
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </SmartLink>
          </Button>
        </div>

        <div className="mt-8 text-sm text-primary-foreground/60">
          Open Monday - Saturday, 8:00 AM - 6:00 PM
        </div>
      </div>
    </section>
  )
}
