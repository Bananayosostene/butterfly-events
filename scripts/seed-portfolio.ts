const { PrismaClient } = require("@prisma/client")
const { createHash } = require("crypto")

const prisma = new PrismaClient()

async function main() {
  console.log("Seeding database...")

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@butterflyltd.com"
  const adminPassword = process.env.ADMIN_PASSWORD || "ButterFly123!"
  const hashedPassword = createHash('sha256').update(adminPassword).digest('hex')

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: adminEmail }
  })

  if (!existingAdmin) {
    await prisma.adminUser.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
      },
    })
    console.log(`Admin user created: ${adminEmail}`)
  } else {
    console.log("Admin user already exists")
  }

  // Seed portfolio images
  const portfolioImages = [
    {
      title: "Summer Wedding Celebration",
      category: "Weddings",
      imageUrl: "/wedding-decoration-elegant.jpg",
    },
    {
      title: "Colorful Birthday Party",
      category: "Birthdays",
      imageUrl: "/birthday-party-decor.png",
    },
    {
      title: "Church Ceremony Setup",
      category: "Church",
      imageUrl: "/church-event-decoration.jpg",
    },
    {
      title: "Memorial Service Arrangement",
      category: "Memorial",
      imageUrl: "/memorial-service-decoration.jpg",
    },
  ]

  for (const image of portfolioImages) {
    const existing = await prisma.portfolioImage.findFirst({
      where: { title: image.title }
    })
    
    if (!existing) {
      await prisma.portfolioImage.create({
        data: image,
      })
    }
  }

  console.log("Database seeding complete!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
