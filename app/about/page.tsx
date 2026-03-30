import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, Target, Eye, Heart, Users, Award, MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "About Us | Agitech Seedlings",
  description: "Learn about Agitech Seedlings - your trusted partner in sustainable agriculture since 2015. Quality seedlings, expert guidance, and nationwide delivery in Kenya.",
}

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description: "We never compromise on the quality of our seedlings. Every plant is carefully nurtured and certified.",
  },
  {
    icon: Users,
    title: "Farmer-Focused",
    description: "Our farmers are at the heart of everything we do. We provide ongoing support and expert advice.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We promote sustainable farming practices that protect the environment for future generations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We continuously improve our practices to deliver the best seedlings and service possible.",
  },
]

const stats = [
  { value: "9+", label: "Years Experience" },
  { value: "1000+", label: "Happy Farmers" },
  { value: "25+", label: "Seedling Varieties" },
  { value: "47", label: "Counties Served" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Leaf className="h-4 w-4" />
                <span>Established 2015</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">
                Growing Together with Kenyan Farmers
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Agitech Seedlings is a leading provider of premium quality seedlings in Kenya. 
                We are passionate about empowering farmers with healthy, certified plants and 
                expert guidance for successful, sustainable agriculture.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide Kenyan farmers with the highest quality seedlings and 
                    comprehensive agricultural support, enabling them to achieve better 
                    yields, improve livelihoods, and contribute to food security in our nation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent/20">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted seedling provider in East Africa, recognized 
                    for our commitment to quality, innovation, and farmer success. We 
                    envision a future where every farmer has access to premium planting materials.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Agitech Seedlings was founded in 2015 with a simple yet powerful vision: 
                  to transform Kenyan agriculture by providing farmers with access to 
                  high-quality, disease-free seedlings that would help them achieve 
                  better harvests and improved incomes.
                </p>
                <p>
                  What started as a small nursery in Kiambu County has grown into one 
                  of Kenya&apos;s most trusted seedling providers, serving thousands of 
                  farmers across all 47 counties. Our journey has been driven by our 
                  unwavering commitment to quality and our deep understanding of the 
                  challenges faced by Kenyan farmers.
                </p>
                <p>
                  Today, we offer over 25 varieties of premium seedlings, including 
                  vegetables, fruits, herbs, and trees. Our team of experienced 
                  agronomists provides ongoing support to farmers, from planting 
                  advice to harvest optimization, ensuring that every seedling we 
                  sell has the best chance of thriving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Our Core Values
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-8 text-3xl font-bold text-primary-foreground md:text-4xl">
                Visit Us or Get in Touch
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col items-center gap-2 text-primary-foreground/80">
                  <MapPin className="h-6 w-6" />
                  <span className="text-sm">123 Farm Road, Kiambu County, Kenya</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-primary-foreground/80">
                  <Phone className="h-6 w-6" />
                  <a href="tel:+254700000000" className="text-sm hover:text-primary-foreground">
                    +254 700 000 000
                  </a>
                </div>
                <div className="flex flex-col items-center gap-2 text-primary-foreground/80">
                  <Mail className="h-6 w-6" />
                  <a href="mailto:info@agitechseedlings.co.ke" className="text-sm hover:text-primary-foreground">
                    info@agitechseedlings.co.ke
                  </a>
                </div>
                <div className="flex flex-col items-center gap-2 text-primary-foreground/80">
                  <Clock className="h-6 w-6" />
                  <span className="text-sm">Mon - Sat: 8AM - 6PM</span>
                </div>
              </div>
              <div className="mt-10">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/catalogue">Browse Our Catalogue</Link>
                </Button>
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
