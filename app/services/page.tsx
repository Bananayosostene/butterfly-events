import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "wedding",
      title: "Wedding Decoration",
      icon: "💍",
      description:
        "Create the wedding of your dreams with our elegant and sophisticated decoration services. We specialize in transforming venues into breathtaking spaces.",
      features: ["Venue styling", "Floral arrangements", "Lighting design", "Custom themes"],
      image: "/placeholder.svg?key=obcjv",
    },
    {
      id: "birthday",
      title: "Birthday Decoration",
      icon: "🎂",
      description:
        "Celebrate milestones with fun, vibrant, and personalized birthday decorations. From intimate gatherings to large celebrations.",
      features: ["Balloon arrangements", "Theme decoration", "Table styling", "Photo backdrops"],
      image: "/placeholder.svg?key=yamyd",
    },
    {
      id: "church",
      title: "Church Events",
      icon: "⛪",
      description:
        "Add beauty and reverence to your church events with tasteful and respectful decoration. Perfect for ceremonies and celebrations.",
      features: ["Altar decoration", "Aisle styling", "Entrance design", "Traditional elements"],
      image: "/placeholder.svg?key=5qs2p",
    },
    {
      id: "memorial",
      title: "Memorial Decoration",
      icon: "🕯️",
      description:
        "Honor loved ones with dignified and respectful memorial decorations. We provide compassionate service during difficult times.",
      features: ["Flower arrangements", "Candle lighting", "Photo displays", "Respectful design"],
      image: "/placeholder.svg?key=kb2y6",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="py-16 px-4 bg-muted border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Discover the perfect decoration service for your special occasion.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-20">
              {services.map((service, idx) => (
                <div
                  key={service.id}
                  className={`flex flex-col gap-8 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-serif font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-foreground mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/book?service=${service.title}`}
                      className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-smooth"
                    >
                      Request This Service
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
