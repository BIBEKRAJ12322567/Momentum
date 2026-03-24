<div align="center">
  <h1>Momentum</h1>
  <p><strong>Premium Video Learning Platform for Aspiring Entrepreneurs</strong></p>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
  [![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
</div>

<br />

## 🚀 Project Overview

**Momentum** is a comprehensive, full-stack video learning platform designed explicitly for the entrepreneurial ecosystem. It empowers founders, creators, and professionals to share, discover, and consume high-value video masterclasses. 

Built with scalability, performance, and user experience at its core, Momentum offers role-based access control, rich media handling, and intuitive creator dashboards exactly as you'd find in industry-leading SaaS platforms.

## ✨ Key Features

- **Multi-Role RBAC System:** Granular permissions and dedicated dashboards tailored for `ADMIN`, `CREATOR`, and `VIEWER` roles.
- **Robust Authentication:** Secure JWT-based authentication layered with OTP email verification flows.
- **Advanced Video Management:** Seamless video delivery and thumbnail processing powered by Cloudinary cloud infrastructure.
- **Real-Time Analytics:** Insightful metric tracking for creators to monitor views, engagement rates, and audience interactions.
- **Sleek, Responsive UI:** A captivating user interface constructed with React, Tailwind CSS, and shadcn/ui components, hyper-optimized across all viewports.
- **Interactive Player Engine:** Custom viewing experience supporting watch history tracking, bookmarking logic, and dynamic progression tracking.

## 🛠️ Technology Stack

### Frontend Architecture (Client)
- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Animations:** Framer Motion
- **State & Protocol:** React Query (TanStack)
- **Routing:** React Router v6
- **Forms & Data Integrity:** React Hook Form, Zod

### Backend Architecture (API)
- **Runtime Environment:** Node.js
- **Web Framework:** Express.js
- **Database Layer:** MongoDB Document Database
- **Object-Relational Mapping:** Prisma ORM
- **Identity & Access Management:** JSON Web Tokens (JWT) & bcrypt validation 
- **Media Asset Storage:** Cloudinary API
- **Transactional Emails:** Nodemailer (SMTP)

---

## 🏗️ Local Development Setup

Follow these enterprise-standard instructions to spin up your local instance of the Momentum platform.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.x or above)
- [MongoDB](https://www.mongodb.com/) (Active Replica Set or Atlas Cluster)
- [Cloudinary](https://cloudinary.com/) (API Keys for media upload)

### 1. Repository Initialization
```bash
git clone https://github.com/your-username/momentum.git
cd momentum
```

### 2. Backend Microservice Setup
Navigate to the API directory and install the required dependencies:
```bash
cd backend
npm install
```

Configure your environment mapping by creating a `.env` file in the root of the `backend/` directory:
```env
DATABASE_URL="mongodb+srv://<user>:<password>@cluster.mongodb.net/Momentum?retryWrites=true&w=majority"
JWT_SECRET="your_cryptographically_secure_string_here"
JWT_EXPIRES_IN="7d"

PORT=3001
FRONTEND_URL="http://localhost:8080"

CLOUDINARY_CLOUD_NAME="your_cloud_id"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-specific-password"
```

Compile the schema bindings and push the indices to the remote MongoDB provider:
```bash
npm run prisma:generate
npm run prisma:db:push
```

Ignite the development worker:
```bash
npm run dev
```

### 3. Frontend Client Setup
Launch a secondary terminal session, target the frontend package, and hydrate the `node_modules`:
```bash
cd frontend
npm install
```

Ensure standard Vite environment variables exist in `frontend/.env` (if custom override is needed):
```env
VITE_API_URL="http://localhost:3001/api"
```

Spin up the local client compiler:
```bash
npm run dev
```

Your React interface will hot-reload on `http://localhost:8080` while proxying queries to the Node.js listener on `http://localhost:3001`.

---

## 📐 System Architecture

Momentum utilizes a heavily decoupled API-Driven Client pattern. The React Single Page Application (SPA) aggregates data and orchestrates layout mutations. It interfaces with the Node/Express Application Programming Interface Layer via standardized REST protocol structures.

The backend infrastructure employs a cascading middleware chain enforcing schema validation (Zod) and Role-Based JWT verifications prior to interacting safely with the Cloudinary bucket or offloading state to MongoDB via the Prisma driver.

## 🤝 Contributing

We strongly follow GitFlow strategies. We welcome industry peers to optimize and harden Momentum!
1. Fork the upstream repository
2. Checkout your isolated branch (`git checkout -b feature/OptimalFeature`)
3. Commit your standardized Changes (`git commit -m 'feat: Add optimal functionality'`)
4. Transport the local commits (`git push origin feature/OptimalFeature`)
5. Open a well-documented Pull Request

## 📄 License & EULA

Distributed under the standard MIT License schema. See `LICENSE` for the extended legal information wrapper.

---
<div align="center">
  <i>Built with ❤️ for the next generation of founders.</i>
</div>