import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  const whatsappUrl =
    "https://wa.me/+250788724867?text=Hello%20Butterfly%20Ltd%2C%20I%20would%20like%20to%20book%20your%20services";

  const services = [
    {
      icon: "💍",
      title: "Wedding Decoration",
      desc: "Elegant decoration for your special day",
    },
    {
      icon: "🎂",
      title: "Birthday Decoration",
      desc: "Fun and festive birthday celebrations",
    },
    {
      icon: "⛪",
      title: "Church Events",
      desc: "Solemn and beautiful church decorations",
    },
    {
      icon: "🕯️",
      title: "Memorial Decoration",
      desc: "Respectful and elegant memorial services",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage:
                "url(/placeholder.svg?height=1080&width=1920&query=elegant+event+decoration+flowers)",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              We decorate your special moments with elegance{" "}
              <span className="text-accent">&</span> care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your events into unforgettable celebrations with our
              expert decoration services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition-smooth inline-flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.773.966-.949 1.165-.176.199-.359.223-.656.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.718.732 5.357 2.122 7.682l-2.265 6.571 6.931-2.23c2.188 1.186 4.661 1.813 7.268 1.813h.007A9.871 9.871 0 0021.647 13.98a9.858 9.858 0 00-9.596-9.401z" />
                </svg>
                Book on WhatsApp
              </a>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-center text-foreground mb-16">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-smooth"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <Link
                    href={`/book?service=${service.title}`}
                    className="text-accent font-semibold hover:opacity-80 transition-smooth"
                  >
                    Request Service →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
              Ready to Book?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with us today and let{"'"}s make your event
              unforgettable.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition-smooth"
            >
              Start Booking Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
