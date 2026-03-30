import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { FeedbackForm } from "@/components/feedback/feedback-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react"

export const metadata = {
  title: "Feedback | Agitech Seedlings",
  description: "Share your feedback, suggestions, or inquiries with Agitech Seedlings. We value your input and are here to help.",
}

export default function FeedbackPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-secondary/30 py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <MessageSquare className="h-4 w-4" />
                <span>We Value Your Feedback</span>
              </div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                Get in Touch
              </h1>
              <p className="mt-4 text-muted-foreground">
                Have questions, suggestions, or feedback? We would love to hear from you. 
                Fill out the form below and we will get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-xl font-semibold text-foreground">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href="tel:+254700569709" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +254 700 569709
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:info@agitechseedlings.co.ke" 
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@agitechseedlings.co.ke
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">
                        123 Farm Road, Kiambu County, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10">
                      <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp</p>
                      <a 
                        href="https://wa.me/254700569709"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-[#25D366] transition-colors"
                      >
                        Chat with us instantly
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg bg-secondary/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Business Hours:</strong>
                    <br />
                    Monday - Saturday: 8:00 AM - 6:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Feedback Form */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we will respond within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FeedbackForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
