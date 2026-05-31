# HealthHub — Frontend

A full-featured healthcare appointment platform built with React, TypeScript, and Vite. HealthHub connects patients with doctors, supports online appointment booking with Stripe payments, and includes dedicated dashboards for patients, doctors, and administrators.

---

## ✨ Features

### For Patients
- Browse and filter doctors by specialty
- View doctor profiles with fees, address, and availability
- Book appointments and pay online via **Stripe**
- Fill in pre-visit information before each appointment
- Manage and cancel upcoming appointments
- Maintain a personal health profile and medical history
- AI-powered chatbot (n8n) for health queries

### For Doctors
- Dedicated dashboard with appointment stats
- View and manage patient appointments
- Access patient details and pre-visit info
- Update availability, fees, and profile info

### For Admins
- Dashboard overview of platform metrics
- Add and manage doctors
- View and moderate all appointments

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| UI Library | HeroUI v2 |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM v6 |
| State Management | Zustand |
| Forms & Validation | React Hook Form + Zod |
| Animations | Framer Motion |
| Payments | Stripe (`@stripe/react-stripe-js`) |
| HTTP Client | Axios |
| Chatbot | n8n (`@n8n/chat`) |
| Lottie Animations | lottie-react |

---

## 📁 Project Structure

```
src/
├── App.tsx                   # Home page with n8n chatbot integration
├── CheckAuth.tsx             # Auth guard wrapper
├── ScrollToTop.tsx           # Scroll reset on navigation
├── router.tsx                # All application routes
├── main.tsx                  # Entry point
├── provider.tsx              # App-level providers
│
├── components/
│   ├── navbar.tsx
│   ├── Checkout.tsx          # Stripe payment component
│   ├── MyProfileEditModal.tsx
│   ├── UpdateHealthProfileModal.tsx
│   ├── adminComponents/      # Admin navbar, sidebar, drawer
│   ├── doctorComponents/     # Doctor navbar, sidebar, drawer
│   ├── homeComponents/       # Hero, Speciality, TopDoctors sections
│   └── lottie/               # Lottie animation components
│
├── pages/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── AllDoctors.tsx
│   ├── Doctor.tsx            # Single doctor profile & booking
│   ├── Login.tsx / Register.tsx
│   ├── MyProfile.tsx
│   ├── MyAppointments.tsx
│   ├── MyMedicalHistory.tsx
│   ├── PreVisitPage.tsx      # Pre-visit info form
│   ├── PaitentCompleteProfile.tsx
│   ├── PatientDetails.tsx    # Doctor view of a patient
│   ├── AdminDashboard.tsx
│   ├── AdminAppointments.tsx
│   ├── AdminAddDoctor.tsx
│   ├── AdminDoctorsList.tsx
│   ├── DoctorDashboard.tsx
│   ├── DoctorAppointments.tsx
│   └── DoctorProfile.tsx
│
├── layouts/
│   ├── default.tsx           # Public / patient layout
│   ├── AdminLayout.tsx
│   └── DoctorLayout.tsx
│
├── store/
│   ├── useUser.ts            # Auth & user state
│   ├── useAppointment.ts     # Appointment state & actions
│   └── useAdmin.ts           # Admin state & actions
│
├── validations/              # Zod schemas
├── utils/                    # Date helpers, age calculator
├── types/                    # Shared TypeScript types
├── config/                   # Site config
└── styles/                   # Global CSS + n8n chat styles
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd health_hub_frontend

# 2. Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_API_URL=http://localhost:5000          # Backend API base URL
VITE_N8N_WEBHOOK_URL=<your-n8n-webhook>    # n8n chatbot webhook URL
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...    # Stripe publishable key
```

### Running the App

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---

## 🗺 Routes

| Path | Description | Access |
|---|---|---|
| `/` | Home page | Public |
| `/all-doctors` | Browse all doctors | Public |
| `/doctor/:id` | Doctor profile & booking | Public |
| `/about` | About page | Public |
| `/contact` | Contact page | Public |
| `/login` | Login | Public |
| `/register` | Register | Public |
| `/complete-profile` | Complete patient profile | Patient |
| `/my-profile` | Patient profile | Patient |
| `/my-appointments` | Patient appointments | Patient |
| `/my-medical-history` | Medical history | Patient |
| `/pre-visit/:id` | Pre-visit form | Patient |
| `/payment` | Stripe checkout | Patient |
| `/admin-panel` | Admin dashboard | Admin |
| `/admin-panel/appointments` | All appointments | Admin |
| `/admin-panel/add-doctor` | Add a new doctor | Admin |
| `/admin-panel/doctors-list` | Manage doctors | Admin |
| `/doctor-panel` | Doctor dashboard | Doctor |
| `/doctor-panel/appointments` | Doctor's appointments | Doctor |
| `/doctor-panel/profile` | Doctor profile settings | Doctor |
| `/doctor-panel/patient/:id` | Patient details | Doctor |

---

## 📦 Key Dependencies

```json
"react": "18.3.1",
"react-router-dom": "^6.30.3",
"zustand": "^5.0.8",
"react-hook-form": "^7.65.0",
"zod": "^4.1.12",
"@stripe/react-stripe-js": "^5.6.0",
"@n8n/chat": "^1.6.0",
"framer-motion": "^11.18.2",
"axios": "^1.13.2",
"@heroui/react": "^2.8.5",
"tailwindcss": "4.1.11"
```

---

## 🔧 pnpm Setup (Optional)

If you use **pnpm**, add the following to your `.npmrc` before installing:

```
public-hoist-pattern[]=*@heroui/*
```

Then run:

```bash
pnpm install
```

---

## 🚢 Deployment

This project includes a `vercel.json` configuration for seamless deployment on [Vercel](https://vercel.com).

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Make sure to add your environment variables in the Vercel project settings.

---

## 📄 License

Licensed under the [MIT License](./LICENSE).

---

Created by **Osama Ahmed**
