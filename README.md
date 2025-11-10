# SneakerVibe - Fin AI Demo

A Next.js application demonstrating Intercom's Fin AI integration with user authentication via Clerk. This project showcases how to implement customer support automation using Intercom's AI-powered messenger.

## Features

- **User Authentication**: Secure sign-in/sign-out using Clerk
- **Intercom Integration**: AI-powered customer support with Fin AI
- **Modern UI**: Built with Next.js 16, React 19, and Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 16.0.1
- **Frontend**: React 19.2.0, TypeScript 5
- **Authentication**: Clerk
- **Customer Support**: Intercom Messenger JS SDK

## Prerequisites

Before running this project, make sure you have:

- Node.js (version 18 or higher)
- npm or yarn package manager
- Clerk account and API keys
- Intercom account and App ID

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Intercom
NEXT_PUBLIC_INTERCOM_APP_ID=your_intercom_app_id
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd intercom-project
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (see Environment Variables section above)

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── SignedInView.tsx    # Component for authenticated users
│   │   └── SignedOutView.tsx   # Component for unauthenticated users
│   ├── layout.tsx              # Root layout component
│   └── page.tsx                # Home page component
└── middleware.ts               # Clerk middleware for authentication
```

## Key Components

### SignedInView

Displays user information and initializes the Intercom messenger for authenticated users. Currently uses a test customer ID for demonstration purposes.

### SignedOutView

Provides authentication options for users who haven't signed in yet, and initializes Intercom for unauthenticated users.

## Intercom Integration

The application integrates with Intercom's Fin AI to provide intelligent customer support. When users are signed in, the Intercom messenger is automatically initialized with their user information.

**Note**: The current implementation uses a test customer ID (`CUST-12345`) for demonstration purposes. In production, you should use the actual user ID.
