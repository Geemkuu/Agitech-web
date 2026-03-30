import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Shield, Truck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Leaf className="h-4 w-4" />
              <span>Quality Seedlings Since 2015</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Grow Your Dreams with{" "}
              <span className="text-primary">Premium Seedlings</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed md:text-xl">
              Certified, healthy seedlings for vegetables, fruits, herbs, and trees. 
              Empowering Kenyan farmers with quality plants for sustainable harvests.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/catalogue" className="flex items-center gap-2">
                  Browse Catalogue
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://wa.me/254700000000?text=Hello%20Agitech%20Seedlings!%20I%20would%20like%20to%20inquire%20about%20your%20seedlings."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Certified Quality</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-5 w-5 text-primary" />
                <span>Nationwide Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-5 w-5 text-primary" />
                <span>Disease Free</span>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl bg-primary/5 p-8">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-primary/20" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-accent/20" />
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-card shadow-xl">
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                    <Leaf className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">25+ Varieties</h3>
                  <p className="text-muted-foreground">Quality seedlings ready for your farm</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="rounded-lg bg-secondary p-3 text-center">
                      <div className="text-2xl font-bold text-primary">1000+</div>
                      <div className="text-xs text-muted-foreground">Happy Farmers</div>
                    </div>
                    <div className="rounded-lg bg-secondary p-3 text-center">
                      <div className="text-2xl font-bold text-primary">9+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
