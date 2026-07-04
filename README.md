# Vynox Security Dashboard

## About the Project

This project is a simple cybersecurity dashboard built using Next.js, TypeScript, Prisma, and PostgreSQL.

The main purpose of this project is to show vulnerability information in an easy-to-read dashboard. It also connects with the Google OSV API to fetch real vulnerability data based on a package name.

Users can register, log in, view the dashboard, upload a scan report, and search for vulnerabilities.

---

## Features

- User Registration
- User Login and Logout
- Protected Dashboard
- Upload Scan Report Page
- Vulnerability Dashboard
- Search vulnerabilities by package name
- Filter vulnerabilities by severity
- Google OSV API integration
- PostgreSQL database using Prisma

---

## Technologies Used

- Next.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Google OSV API
- CSS

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone <your-github-repository-link>
```

### 2. Go to the project folder

```bash
cd vuln-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Add your database URL and JWT secret.

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

### 5. Run Prisma Migration

```bash
npx prisma migrate dev
```

### 6. Start the project

```bash
npm run dev
```

Now open:

```
http://localhost:3000
```

---

## Project Structure

```
app/
│── dashboard/
│── login/
│── register/
│── upload/
│── vulnerabilities/

lib/
prisma/
```

---

## API Used

Google Open Source Vulnerabilities (OSV) API

https://api.osv.dev

---

## Future Improvements

- Better dashboard design
- Charts and graphs
- File upload processing
- Export reports
- Dark mode

---

# Screenshots

## Login Page

![Login](screenshots/login.png)

---

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Upload Page

![Upload](screenshots/upload.png)

---

## Vulnerabilities

![Vulnerabilities](screenshots/vulnerabilities.png)

---

## Author

Akash Dhar Dubey

B.Tech CSE (AI & ML)

Ajeenkya DY Patil University