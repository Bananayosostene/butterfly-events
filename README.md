# Butterfly Events Ltd - Event Decoration Website

A modern, full-stack website for Butterfly Events Ltd event decoration services built with Next.js, TypeScript, MongoDB, and Prisma.

## Features

- **Client-Facing Features**
  - Home page with hero section and service preview
  - Services showcase with detailed information
  - Portfolio gallery with category filters
  - Booking form with WhatsApp integration
  - Contact page with multiple contact methods
  - Mobile-first responsive design

- **Admin Dashboard**
  - Secure admin login
  - Booking management system
  - Portfolio image management
  - Dashboard overview with key metrics
  - Upcoming events tracking

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Database**: MongoDB
- **ORM**: Prisma
- **Styling**: Tailwind CSS v4
- **Authentication**: Simple HTTP-only cookie-based auth
- **Frontend Components**: shadcn/ui

## Setup Instructions

### 1. Prerequisites

- Node.js 18+
- MongoDB Atlas account (free tier available at mongodb.com)

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Database

Create a `.env.local` file in the root directory:

```env
DATABASE_URL="mongodb+srv://user:password@cluster.mongodb.net/butterfly-ltd"
ADMIN_EMAIL="admin@butterflyltd.com"
ADMIN_PASSWORD="ButterFly123!"
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL="http://localhost:3000"
```

Replace `user`, `password`, and `cluster` with your MongoDB Atlas credentials.

### 4. Setup Prisma

```bash
npm run prisma:generate
npm run prisma:migrate
```

### 5. Create Admin User

```bash
npm run setup
```

This will create the admin user with the credentials specified in `.env.local`.

### 6. Update WhatsApp Number

Replace `+250788724867` with your actual WhatsApp number in:

- `app/page.tsx`
- `app/contact/page.tsx`
- `components/footer.tsx`

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── (client routes)
│   │   ├── page.tsx           # Home page
│   │   ├── services/          # Services page
│   │   ├── portfolio/         # Portfolio gallery
│   │   ├── book/              # Booking form
│   │   └── contact/           # Contact page
│   ├── admin/                 # Admin dashboard
│   │   ├── page.tsx           # Dashboard overview
│   │   ├── login/             # Admin login
│   │   ├── bookings/          # Booking management
│   │   └── portfolio/         # Portfolio management
│   ├── api/                   # API routes
│   │   ├── bookings/          # Booking endpoints
│   │   ├── portfolio/         # Portfolio endpoints
│   │   └── admin/             # Admin endpoints
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles
├── components/
│   ├── header.tsx             # Navigation header
│   ├── footer.tsx             # Footer component
│   └── ui/                    # shadcn/ui components
├── lib/
│   ├── db.ts                  # Prisma client
│   ├── auth.ts                # Authentication utilities
│   └── utils.ts               # Utility functions
├── prisma/
│   └── schema.prisma          # Database schema
└── scripts/
    └── setup-admin.ts         # Admin setup script
```

## Pages Overview

### Client Pages

- **Home** (`/`) - Hero section with CTA and service overview
- **Services** (`/services`) - Detailed service cards with images
- **Portfolio** (`/portfolio`) - Filterable gallery by event type
- **Booking** (`/book`) - Booking form with WhatsApp integration
- **Contact** (`/contact`) - Contact information and social links

### Admin Pages

- **Login** (`/admin/login`) - Admin authentication
- **Dashboard** (`/admin`) - Overview with stats and upcoming events
- **Bookings** (`/admin/bookings`) - List and manage all bookings
- **Portfolio** (`/admin/portfolio`) - Upload and manage gallery images

## Database Models

### AdminUser

- `id`: Unique identifier
- `email`: Admin email address
- `password`: Hashed password
- `createdAt`, `updatedAt`: Timestamps

### Booking

- `id`: Unique identifier
- `fullName`: Client name
- `phone`: Contact number
- `eventType`: Type of event (Wedding, Birthday, etc.)
- `eventDate`: Date of the event
- `eventLocation`: Event location
- `preferredColors`: Optional color preferences
- `notes`: Optional client notes
- `status`: Booking status (NEW, CONFIRMED, DONE)
- `adminNotes`: Internal notes
- `createdAt`, `updatedAt`: Timestamps

### PortfolioImage

- `id`: Unique identifier
- `title`: Image title
- `category`: Event category
- `imageUrl`: URL to the image
- `createdAt`, `updatedAt`: Timestamps

## API Endpoints

### Bookings

- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings

### Portfolio

- `GET /api/portfolio` - Get all portfolio images
- `POST /api/portfolio` - Upload new portfolio image

### Admin

- `POST /api/admin/login` - Admin login

## Environment Variables

- `DATABASE_URL`: MongoDB connection string
- `ADMIN_EMAIL`: Default admin email
- `ADMIN_PASSWORD`: Default admin password
- `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL`: Dev redirect URL

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Ensure MongoDB is accessible from your hosting environment

## Customization

### Colors

Update the color tokens in `app/globals.css` to match your brand:

- `--primary`: Main brand color (currently rose/pink)
- `--accent`: Highlight color (currently gold/yellow)

### WhatsApp Integration

Update the WhatsApp phone number in the booking pages. Make sure it includes your country code.

### Contact Information

Update contact details in:

- `app/contact/page.tsx`
- `components/footer.tsx`

## Security Notes

- Admin passwords are hashed using SHA-256
- Sessions use HTTP-only cookies
- Change default admin credentials before deployment
- Never commit `.env.local` to version control

## Support

For issues or questions, contact Butterfly Events Ltd through WhatsApp or Instagram.

## License

Private project for Butterfly Events Ltd
