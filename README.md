````md
# Safari API

An Express-based API with Prisma as the ORM, providing endpoints for managing banks, branches, and application submissions.

## 🚀 Features

- Fetch available banks and branches
- Submit applications
- JWT-based authentication
- Uses Prisma with PostgreSQL

## 🛠️ Installation

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd safari
```
````

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and configure your database:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/safari
JWT_SECRET=your_jwt_secret
```

### 4. Run database migrations

```sh
npx prisma migrate dev --name init
```

### 5. Seed the database

```sh
npm run seed
```

## 🚀 Running the App

### Development Mode

```sh
npm run dev
```

The server will start and reload on changes.

## 📡 API Endpoints

### 1️⃣ Bank and Branch Data

- `GET /api/banks` → Get all bank names
- `GET /api/branches?bank_id={id}` → Get branches for a selected bank

### 2️⃣ Application Submission

- `POST /api/applications/submit` → Submit an application

## 🏗️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT

---

## 📜 License

This project is licensed under the ISC License.
