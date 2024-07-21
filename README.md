# E-Commerce User Authentication and Category Selection

## Overview

This project demonstrates a simple sign-up and login flow for an e-commerce website. Users can mark categories of interest, which will be stored in a database. The application includes registration, login, and email verification functionality, with a protected page displaying paginated category options.

## Technologies Used

- **Framework**: Next.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **API Handling**: tRPC
- **UI**: Tailwind CSS
- **Authentication**: JWT
- **Email Verification**: Resend
- **Utilities**: Faker (for generating dummy data), js-cookie, bcrypt, jsonwebtoken, zod

## Setup

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```sh
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?sslmode=require"
RESEND_API_KEY="your_resend_api_key"
TOKEN_SECRET="your_token_secret"
```

## Installation

1. Clone the Repository

```sh
   git clone <repository-url>
```

2. Navigate to the Project Directory

```sh
cd <project-directory>
```

3. Install Dependencies

```sh
npm install
```

4. Set Up the Database

```sh
npx prisma migrate dev
```

5. Seed the Database with Dummy Categories

```sh
npx prisma db seed
```

6. Running the Application

```sh
npm run dev
```

Navigate to http://localhost:3000 to view the application.

## Features

Registration: Users can sign up by providing their name, email, and password. A verification email with a code is sent to the user for email verification.
Login: Existing users can log in using their email and password. A JWT token is stored in cookies upon successful login.
Email Verification: Users must verify their email using a code sent to their inbox.
Category Selection: Authenticated users can view and select categories of interest from a paginated list. Selected categories are saved in the database.
Protected Routes: Users are redirected to the login page if not authenticated and trying to access protected routes.

## API Endpoints

POST /api/trpc/user/login: Logs in a user and returns a JWT token.
POST /api/trpc/user/signup: Registers a new user and sends a verification email.
POST /api/trpc/user/verify: Verifies the user's email using the verification code.
GET /api/trpc/user/getCategories: Retrieves a paginated list of categories.
POST /api/trpc/user/toggleCategory: Toggles the selection status of a category for the user.
GET /api/trpc/user/getUserCategories: Retrieves the categories selected by the user.

## Deployment

Deploy the application using Vercel or your preferred hosting provider.

Create a New Vercel Project
Link Your GitHub Repository to Vercel
Configure the Environment Variables in Vercel
Deploy the Project

## Contributing

Feel free to submit issues or pull requests. For larger changes, please open an issue to discuss potential modifications.
