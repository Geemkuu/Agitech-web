import Link from "next/link"
import { Leaf, MapPin, Phone, Mail } from "lucide-react"
import { SmartLink } from "@/components/smart-link"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight text-foreground">Agitech</span>
                <span className="text-xs font-medium text-primary">Seedlings</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Quality seedlings for healthy harvests. Your trusted partner in sustainable agriculture since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <SmartLink href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/catalogue" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Catalogue
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/feedback" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Feedback
                </SmartLink>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Categories</h3>
            <ul className="space-y-3">
              <li>
                <SmartLink href="/catalogue?category=Vegetables" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Vegetables
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/catalogue?category=Fruits" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Fruits
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/catalogue?category=Herbs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Herbs
                </SmartLink>
              </li>
              <li>
                <SmartLink href="/catalogue?category=Trees" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trees
                </SmartLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>123 Farm Road, Kiambu County, Kenya</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <SmartLink href="tel:+254700569709" loadingMessage="📞 Preparing your call..." className="hover:text-primary transition-colors">
                  +254 700 569709
                </SmartLink>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <SmartLink href="mailto:info@agitechseedlings.co.ke" loadingMessage="📧 Opening your email client..." className="hover:text-primary transition-colors">
                  info@agitechseedlings.co.ke
                </SmartLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Agitech Seedlings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
