import { Shield, Leaf, Truck, HeadphonesIcon, Award, Sprout } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Certified Quality",
    description: "All our seedlings are certified and meet the highest quality standards for healthy growth.",
  },
  {
    icon: Leaf,
    title: "Disease-Free Plants",
    description: "Rigorously tested and treated seedlings to ensure your crops start healthy and stay healthy.",
  },
  {
    icon: Sprout,
    title: "Expert Guidance",
    description: "Free agronomic advice on planting, care, and harvesting for optimal yields.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "We deliver to all counties in Kenya with careful packaging to protect your seedlings.",
  },
  {
    icon: Award,
    title: "9+ Years Experience",
    description: "Trusted by thousands of farmers across Kenya since 2015 for premium seedlings.",
  },
  {
    icon: HeadphonesIcon,
    title: "WhatsApp Support",
    description: "Quick and easy ordering plus ongoing support via WhatsApp for all your needs.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Agitech Seedlings?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to empowering farmers with quality seedlings and expert support 
            for successful, sustainable agriculture.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
