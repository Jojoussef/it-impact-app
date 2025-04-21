# Seha Front-end

![Seha Logo](public/logo.png)

A Next.js 15 application powering **Seha**, a smart AI-assisted platform for digitizing CNAM (Tunisian national health insurance) claim submissions, tracking, and insights.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Authentication](#authentication)
- [Running Locally](#running-locally)
- [Docker](#docker)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This repository contains the **frontend** for Seha, an AI-powered service that lets users:

1. **Snap & Submit**: Upload CNAM reimbursement forms from their phone or computer.
2. **Track & Trace**: Monitor prescription and refund status in a secure dashboard.
3. **AI Insights**: Receive personalized analysis and health recommendations.

Built with the new Next.js 15 App Router and shadcn/ui components, Seha delivers high performance, accessibility, and developer ergonomics.

## Features

- **User Authentication** via NextAuth.js (GitHub & Google providers)
- **Form Submission** UI with real-time validation and feedback
- **Dashboard** for viewing submission history and refund requests
- **Responsive & Accessible** design using Tailwind CSS & shadcn/ui
- **Notifications** powered by Sonner
- **Type-safe Data Layer** with Prisma ORM and PostgreSQL

## Tech Stack

- **Next.js 15** / **React 19**
- **TypeScript** for end-to-end type safety
- **Tailwind CSS** & **shadcn/ui** for styling
- **Prisma** ORM with PostgreSQL
- **NextAuth.js** for authentication
- **Framer Motion** for animations
- **Sonner** for snackbars and toasts
- **Axios** for HTTP requests
- **Lucide React** icons
- **Turbopack** and **Vercel** for fast builds and deployments

## Prerequisites

- Node.js (>= 22.14.0) and npm/yarn/pnpm
- PostgreSQL database (e.g., Aiven Cloud)
- Git

## Installation

```bash
# Clone the repo
git clone https://github.com/Jojoussef/it-impact-app.git
cd it-impact-app

# Install dependencies
pnpm install  # or `npm install` / `yarn install`
```

## Environment Variables

Create a `.env` file at the project root:

```dotenv
# Database
DATABASE_URL="postgres://user:pass@host:port/dbname?sslmode=require"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000/api/auth"

# OAuth Providers
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push Prisma schema to the database
npx prisma db push

# (Optional) Open Prisma Studio
npx prisma studio
```

## Authentication

NextAuth.js is configured under `src/app/api/auth/[...nextauth]/route.ts`. It supports GitHub and Google OAuth. Customize providers and session options as needed in `next-auth.config.ts`.

## Running Locally

```bash
pnpm dev  # or `npm run dev` / `yarn dev`
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker

Build and run with Docker:

```bash
docker build -t it-impact-app .
docker run -p 3000:3000 \
  -e DATABASE_URL=... \
  -e NEXTAUTH_SECRET=... \
  -e GITHUB_CLIENT_ID=... \
  -e GITHUB_CLIENT_SECRET=... \
  -e GOOGLE_CLIENT_ID=... \
  -e GOOGLE_CLIENT_SECRET=... \
  it-impact-app
```

Alternatively, use `Dockerfile.bun` if deploying with Bun and pnpm.

## Deployment

- **Vercel**: Connect your GitHub repo, set environment variables in the Vercel dashboard, and push to `main`.
- **Railway/Heroku**: Use the provided `Dockerfile` or build with `npm run build && npm run start`.

## Project Structure

```
├── prisma
│   ├── schema.prisma       # Prisma schema definitions
│   └── migrations/         # Optional DB migrations
├── public                  # Static assets (logos, images)
├── src
│   ├── app
│   │   ├── api/auth        # NextAuth.js routes
│   │   ├── auth            # Auth-related UI
│   │   ├── dashboard       # Dashboard pages and layout
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout and metadata
│   │   └── page.tsx        # Landing page (Seha homepage)
│   ├── components         # Reusable UI components
│   ├── lib                # Library code (e.g., API clients)
│   ├── utils              # Utility functions
│   ├── middleware.ts      # Next.js middleware
│   └── next.config.ts     # Next.js configuration
├── .env                    # Environment variables (example)
├── package.json
├── pnpm-lock.yaml / yarn.lock / package-lock.json
├── Dockerfile
├── Dockerfile.bun
├── tsconfig.json
└── README.md
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes, enhancements, or new features.

## License

This project is licensed under the [MIT License](LICENSE).

