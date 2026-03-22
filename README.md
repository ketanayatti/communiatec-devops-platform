# Communiatec

**A full-stack real-time collaboration platform — designed, developed, and deployed end-to-end.**

> I built this project to demonstrate that I can take an idea from zero to a running production system — writing the application code, designing the backend, wiring up real-time communication, and then shipping it through a proper DevOps pipeline with CI/CD, Docker, and cloud infrastructure on AWS.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-production--ready-brightgreen)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6-47A248?logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-containerized-2496ED?logo=docker&logoColor=white)
![Jenkins](https://img.shields.io/badge/CI%2FCD-Jenkins-D24939?logo=jenkins&logoColor=white)
![AWS](https://img.shields.io/badge/Cloud-AWS%20EC2-FF9900?logo=amazonaws&logoColor=white)

---

## What is Communiatec?

Communiatec is a team communication and collaboration suite. Users can message each other in real time, write and share code together in a live editor, manage files in a secure vault, and get AI-powered suggestions while they work. Admins get a full dashboard with user management, system monitoring, and audit logs.

What makes this project different from a typical portfolio piece is that **I didn't stop at building the app**. I went on to design and implement the entire deployment infrastructure — cloud servers, containerization, a working CI/CD pipeline, reverse proxy routing, and automated health checks. The whole system runs on AWS, deploys automatically on every push to `main`, and is served through Docker containers behind Nginx.

---

## Table of Contents

- [Part 1 — Building the Application](#part-1--building-the-application)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Application Architecture](#application-architecture)
  - [Frontend Breakdown](#frontend-breakdown)
  - [Backend Breakdown](#backend-breakdown)
  - [Database Design](#database-design)
  - [API Reference](#api-reference)
  - [Real-Time Communication](#real-time-communication)
  - [Security Implementation](#security-implementation)
- [Part 2 — Deploying with DevOps](#part-2--deploying-with-devops)
  - [Infrastructure Design](#infrastructure-design)
  - [CI/CD Pipeline](#cicd-pipeline)
  - [Docker & Containerization](#docker--containerization)
  - [Deployment Process](#deployment-process)
  - [Challenges I Solved](#challenges-i-solved)
- [Future Plans](#future-plans)

---

# Part 1 — Building the Application

## Features

| Feature                      | Description                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------- |
| 💬 Real-Time Messaging       | Instant chat with typing indicators, user presence, and message history         |
| 👥 Group Collaboration       | Create groups, manage members, role-based permissions                           |
| 👨‍💻 Collaborative Code Editor | Monaco Editor with multi-user live sync, cursor sharing, and language switching |
| 📁 File Vault (Zoro)         | Secure file upload, download, sharing, and access control                       |
| 🤖 AI Suggestions            | Message and code suggestions powered by Google Gemini                           |
| 🔐 Auth + Browser PIN        | JWT authentication with an optional 4-digit PIN for repeat logins               |
| 🛡️ Admin Dashboard           | User management, audit logs, system settings, and message monitoring            |
| 📅 Event Management          | Schedule events with attendees and reminders                                    |

---

## Tech Stack

### Frontend

| Category           | Technology                                                      |
| ------------------ | --------------------------------------------------------------- |
| Framework          | React 18.3.1                                                    |
| Build Tool         | Vite 7.1.9                                                      |
| Routing            | React Router DOM 6                                              |
| State Management   | Zustand                                                         |
| HTTP Client        | Axios                                                           |
| Real-Time          | Socket.io-client                                                |
| UI & Styling       | Radix UI + Tailwind CSS 3.4                                     |
| Code Editor        | Monaco Editor (`@monaco-editor/react`)                          |
| 3D & Animation     | Three.js, React Three Fiber, Vanta, Framer Motion, GSAP, Lottie |
| Data Visualization | Recharts                                                        |

### Backend

| Category       | Technology                                     |
| -------------- | ---------------------------------------------- |
| Runtime        | Node.js 20                                     |
| Framework      | Express.js 4.19                                |
| Real-Time      | Socket.io 4.8.1                                |
| Database       | MongoDB 6 + Mongoose 8.5                       |
| Caching        | Redis 5.8 (with Node-Cache in-memory fallback) |
| Authentication | JWT 9.0 + Bcryptjs                             |
| File Handling  | Multer + Cloudinary                            |
| AI Integration | Google Generative AI SDK (Gemini)              |
| Logging        | Winston 3.18                                   |
| Validation     | Joi 17.9                                       |

---

## Application Architecture

Communiatec is built as a three-tier system with a React SPA on the client, an Express/Socket.io server in the middle, and MongoDB + Redis + Cloudinary on the data layer.

```
┌────────────────────────────────────────────────────────────┐
│                      CLIENT (Browser)                      │
│       React 18  ·  Zustand  ·  Socket.io-client  ·  Axios  │
└───────────────────────────┬────────────────────────────────┘
                            │  REST API (HTTP)
                            │  WebSocket (Socket.io)
┌───────────────────────────▼────────────────────────────────┐
│                   APPLICATION SERVER                       │
│   Express.js  ·  Socket.io  ·  JWT Auth  ·  RBAC Middleware │
│   Controllers  ·  Services  ·  Socket Handlers  ·  Winston  │
└──────────────┬──────────────────────────┬──────────────────┘
               │                          │
    ┌──────────▼──────────┐   ┌───────────▼────────────┐
    │  MongoDB (primary)  │   │  Redis / Node-Cache     │
    │  Mongoose ODM       │   │  Session & AI caching   │
    └─────────────────────┘   └────────────────────────┘
                              ┌────────────────────────┐
                              │  Cloudinary CDN        │
                              │  File & image storage  │
                              └────────────────────────┘
```

**HTTP REST** handles all CRUD operations — auth, profiles, messages, file management, admin.  
**WebSocket (Socket.io)** powers everything real-time — chat delivery, code sync, typing indicators, group events.

---

## Frontend Breakdown

The frontend is a React single-page application organized by feature:

**Pages** — Auth, Chat, Code Editor, File Vault, User Profile, Admin Dashboard (Users, Messages, Calendar, Settings), Privacy Policy.

**Components** — Separated by feature: chat UI, code editor controls, vault file browser, admin panels, and shared UI primitives.

**State** — Zustand manages global auth state, user profile, real-time message updates, and app-wide config.

**API Layer** — A single Axios instance with base URL, auth headers, and interceptors. All API calls go through this — no scattered fetch calls.

**Key Frontend Decisions:**

- Lazy-loaded routes with React Suspense for fast initial load
- Monaco Editor for code collaboration (same editor as VS Code)
- Three.js 3D globe on the landing screen for visual impact
- Framer Motion + GSAP for smooth transitions and animations
- Tailwind handles all styling — no custom CSS files

---

## Backend Breakdown

The server boots in a strict sequence: environment validation → security middleware → route mounting → HTTP + Socket.io setup → database connection → start listening. This order matters — it prevents any route from running before auth middleware is in place.

**Controllers handle one domain each:**

| Controller           | Responsibility                                      |
| -------------------- | --------------------------------------------------- |
| AuthController       | Register, login, logout, JWT, password reset        |
| ProfileController    | User profile CRUD, avatar upload via Cloudinary     |
| MessageController    | Send, edit, delete, paginate messages               |
| ChatSocketHandler    | Broadcast messages and typing events over WebSocket |
| CodeCollabController | Manage code sessions, sync edits, track cursors     |
| GroupController      | Group creation, members, permissions                |
| AdminController      | System-wide user management, settings, audit access |
| ZoroController       | File vault upload, download, share, permissions     |
| GeminiController     | AI-powered suggestions via Google Generative AI     |

**Security Middleware Stack (applied globally):**

```
Request → Helmet → CORS → Rate Limiter → Mongo Sanitize → XSS-Clean → HPP → JWT Auth → Route Handler
```

**Logging** — Winston logs every HTTP request, socket lifecycle event, auth event, DB connection, and admin action. Structured with timestamps and log levels (error / warn / info / debug).

---

## Database Design

MongoDB collections and what they store:

| Collection      | What it holds                                            |
| --------------- | -------------------------------------------------------- |
| `users`         | Credentials (hashed), profile info, role, avatar URL     |
| `messages`      | Sender, recipient/group, content, type, soft-delete flag |
| `groups`        | Group name, members array, creator, settings             |
| `codesessions`  | Active sessions, participants, current code, language    |
| `aisuggestions` | Cached AI suggestions by context and type                |
| `notifications` | Per-user notifications with read status                  |
| `events`        | Scheduled events, attendees, reminders                   |
| `zorofiles`     | File metadata, owner, access permissions                 |
| `settings`      | App-level and user-level configuration                   |
| `adminaudit`    | Immutable log of every admin action                      |

Indexes are set on frequently queried fields — user email, message sender, group members — and lean queries are used for read-only operations.

---

## API Reference

### Authentication

| Method | Endpoint                   | Description            |
| ------ | -------------------------- | ---------------------- |
| POST   | `/api/auth/register`       | Register new user      |
| POST   | `/api/auth/login`          | Login, receive JWT     |
| POST   | `/api/auth/logout`         | End session            |
| POST   | `/api/auth/refresh-token`  | Refresh JWT            |
| POST   | `/api/auth/reset-password` | Request password reset |
| POST   | `/api/auth/confirm-reset`  | Confirm with token     |

### Profile

| Method | Endpoint              | Description            |
| ------ | --------------------- | ---------------------- |
| GET    | `/api/profile`        | Get authenticated user |
| PUT    | `/api/profile`        | Update profile         |
| PUT    | `/api/profile/avatar` | Upload avatar          |
| DELETE | `/api/profile`        | Delete account         |

### Messages

| Method | Endpoint                        | Description           |
| ------ | ------------------------------- | --------------------- |
| POST   | `/api/messages`                 | Send message          |
| GET    | `/api/messages/:conversationId` | Fetch message history |
| PUT    | `/api/messages/:messageId`      | Edit message          |
| DELETE | `/api/messages/:messageId`      | Soft-delete message   |

### Code Sessions

| Method | Endpoint                        | Description        |
| ------ | ------------------------------- | ------------------ |
| POST   | `/api/code/sessions`            | Create session     |
| GET    | `/api/code/sessions/:id`        | Get session + code |
| PUT    | `/api/code/sessions/:id`        | Update session     |
| POST   | `/api/code/sessions/:id/invite` | Invite user        |
| DELETE | `/api/code/sessions/:id`        | End session        |

### Groups

| Method | Endpoint                            | Description      |
| ------ | ----------------------------------- | ---------------- |
| POST   | `/api/groups`                       | Create group     |
| GET    | `/api/groups`                       | List user groups |
| PUT    | `/api/groups/:id`                   | Update settings  |
| POST   | `/api/groups/:id/members`           | Add member       |
| DELETE | `/api/groups/:id/members/:memberId` | Remove member    |

### File Vault (Zoro)

| Method | Endpoint                    | Description     |
| ------ | --------------------------- | --------------- |
| POST   | `/api/zoro/upload`          | Upload to vault |
| GET    | `/api/zoro/files`           | List files      |
| GET    | `/api/zoro/files/:id`       | Download file   |
| DELETE | `/api/zoro/files/:id`       | Delete file     |
| POST   | `/api/zoro/files/:id/share` | Share file      |

### AI & Admin

| Method | Endpoint                    | Description                   |
| ------ | --------------------------- | ----------------------------- |
| POST   | `/api/suggestions/messages` | AI message suggestions        |
| POST   | `/api/suggestions/code`     | AI code suggestions           |
| POST   | `/api/gemini/generate`      | Gemini content generation     |
| GET    | `/api/admin/users`          | List all users _(admin)_      |
| GET    | `/api/admin/messages`       | All system messages _(admin)_ |
| PUT    | `/api/admin/settings`       | Update settings _(admin)_     |
| POST   | `/api/admin/audit`          | View audit log _(admin)_      |

---

## Real-Time Communication

All real-time features run over a single Socket.io connection. Each feature has its own namespace of events:

### Chat

| Event                          | What happens                          |
| ------------------------------ | ------------------------------------- |
| `message:send`                 | New message broadcast to recipient(s) |
| `message:edit`                 | Edit notification to conversation     |
| `message:delete`               | Delete notification to conversation   |
| `typing:start` / `typing:stop` | Typing indicator updates              |
| `user:online` / `user:offline` | Presence updates                      |

### Code Collaboration

| Event                      | What happens                                 |
| -------------------------- | -------------------------------------------- |
| `code:change`              | Code edit synced to all session participants |
| `cursor:move`              | Cursor position shared across participants   |
| `selection:update`         | Text selection shared                        |
| `user:join` / `user:leave` | Participant presence in session              |
| `language:change`          | Language switch notified to all              |

### Groups

| Event                   | What happens                   |
| ----------------------- | ------------------------------ |
| `group:message`         | Broadcast to all group members |
| `group:member:join`     | Announce new member            |
| `group:member:leave`    | Announce departure             |
| `group:settings:update` | Settings change notification   |

---

## Security Implementation

| Layer           | Protection                                                               |
| --------------- | ------------------------------------------------------------------------ |
| Auth            | JWT with configurable expiry + refresh token flow                        |
| Passwords       | Bcryptjs with 10+ salt rounds — no plain text ever                       |
| Access Control  | RBAC middleware (user / admin) on every protected route                  |
| Headers         | Helmet sets CSP, X-Frame-Options, and other security headers             |
| Rate Limiting   | Express Rate Limiter blocks brute force and DDoS                         |
| NoSQL Injection | Express Mongo Sanitize strips malicious operators                        |
| XSS             | XSS-Clean sanitizes request bodies                                       |
| HTTP Pollution  | HPP prevents duplicate parameter attacks                                 |
| Admin Actions   | Every admin operation logged in immutable `adminaudit` collection        |
| Login UX        | Optional 4-digit browser PIN — faster re-login without lowering security |

---

# Part 2 — Deploying with DevOps

Once the application was built, I designed and implemented the entire deployment infrastructure from scratch — no hosting platforms, no one-click deploys. I set up cloud servers on AWS, containerized both application components, wrote the Jenkins pipeline, and configured automated deployments triggered by GitHub pushes.

---

## Infrastructure Design

The infrastructure uses two separate EC2 instances inside a single AWS VPC — one for Jenkins (CI) and one for the production application. Keeping them separate means build workloads never affect the live environment.

```
Internet
    │
    ▼
Internet Gateway
    │
    ▼
┌─────────────── AWS VPC — Public Subnet ─────────────────┐
│                                                          │
│  ┌──────────────────────────┐                            │
│  │  EC2 — Jenkins CI Server │                            │
│  │  · Runs build pipeline   │──── SSH Deploy ──┐         │
│  │  · Triggers on git push  │                  │         │
│  └──────────────────────────┘                  ▼         │
│                                  ┌─────────────────────┐ │
│                                  │ EC2 — Production    │ │
│                                  │ · Nginx (port 80)   │ │
│                                  │ · Docker Engine     │ │
│                                  │ · App Containers    │ │
│                                  └─────────────────────┘ │
│                                                          │
│  [ Security Group: Jenkins ]  [ Security Group: Prod ]   │
└──────────────────────────────────────────────────────────┘
```

| Component       | Role                                                        |
| --------------- | ----------------------------------------------------------- |
| VPC             | Isolated private cloud network                              |
| Public Subnet   | Hosts both EC2 instances                                    |
| Jenkins EC2     | Runs the CI/CD automation engine                            |
| Production EC2  | Serves the live application via Docker + Nginx              |
| Nginx           | Reverse proxy — routes incoming HTTP to the right container |
| Docker Engine   | Runs application containers on the production server        |
| Security Groups | Control inbound/outbound traffic per server                 |

---

## CI/CD Pipeline

The pipeline is triggered automatically by a **GitHub webhook** every time code is pushed. What happens next depends on the branch:

| Branch    | Pipeline runs                       |
| --------- | ----------------------------------- |
| `develop` | Build + Test only                   |
| `main`    | Build + Test + Deploy to Production |

This means developers can push work-in-progress to `develop` freely. Only when code is merged to `main` does it reach production.

### Pipeline Stages

```
 git push → GitHub Webhook
                │
                ▼
    ┌───────────────────────┐
    │  1. Webhook Trigger   │  Jenkins receives push event from GitHub
    └──────────┬────────────┘
               ▼
    ┌───────────────────────┐
    │  2. Checkout Code     │  Jenkins pulls latest code from the repo
    └──────────┬────────────┘
               ▼
    ┌───────────────────────┐
    │  3. Build Application │  Compile / prepare app components
    └──────────┬────────────┘
               ▼
    ┌───────────────────────┐
    │  4. Run Tests         │  Validate before building the image
    └──────────┬────────────┘
               ▼
    ┌───────────────────────┐
    │  5. Build Docker Image│  Package app into a container image
    └──────────┬────────────┘
               ▼
    ┌───────────────────────┐
    │  6. Tag Image         │  Version-tag the image for traceability
    └──────────┬────────────┘
               ▼  (only on `main`)
    ┌───────────────────────┐
    │  7. Deploy via SSH    │  Jenkins SSHs into Production EC2
    │                       │  → Stop running container
    │                       │  → Pull new image
    │                       │  → Start new container
    └──────────┬────────────┘
               ▼
    ┌───────────────────────┐
    │  8. Health Check      │  Verify the app is running after deploy
    └───────────────────────┘
```

---

## Docker & Containerization

Both the frontend and backend are containerized as separate Docker images and run on the production server as individual containers. They communicate over a **custom Docker bridge network**, which keeps them connected to each other but isolated from the outside — only Nginx touches the external traffic.

```
EC2 Production Instance
        │
   Docker Engine
        │
   ┌────┴──────────────────────────────────────┐
   │                                           │
   │  Frontend Container      Backend Container│
   │  (React / Nginx serve)   (Node.js API)    │
   │          │                      │         │
   └──────────┴── Docker Bridge ─────┘─────────┘
                    Network
                       │
               Nginx Reverse Proxy
                  (port 80/443)
                       │
              Internet Gateway → Users
```

Nginx sits in front, forwarding HTTP requests to the correct container — frontend requests to the React app, API calls to the Node.js backend.

---

## Deployment Process

Every production deployment executes these steps on the production EC2 — automatically, via the Jenkins pipeline:

```bash
# 1. Pull updated image
docker pull communiatec-server:latest

# 2. Stop and remove the old container
docker stop communiatec-server
docker rm communiatec-server

# 3. Start new container
docker run -d -p 5000:5000 --name communiatec-server communiatec-server:latest

# Same flow for the frontend
docker run -d -p 80:80 --name communiatec-client communiatec-client:latest
```

After each deployment, the pipeline runs a health check to confirm the application is responding before marking the build as successful.

---

## Challenges I Solved

These are the real problems I ran into during implementation and how I fixed them:

**Jenkins Pipeline Failures on First Run**  
Initial pipeline runs broke because Jenkins was missing plugins and the pipeline script had incorrect stage ordering. Fixed by identifying the required plugins (GitHub integration, Docker Pipeline), installing them, and rewriting the Jenkinsfile with the correct structure.

**Docker Image Build Errors**  
Docker builds were failing with file-not-found errors during `COPY` steps. The Dockerfiles had incorrect relative paths. Fixed by correcting the build context paths and ensuring runtime dependencies were installed in the right layer order.

**Containers Not Accessible Externally**  
After deployment, the app wasn't reachable from the internet. The containers were running but port mapping wasn't configured. Fixed by explicitly setting `-p 80:80` and `-p 5000:5000` and configuring Nginx to proxy to those ports.

**Environment Inconsistency Across Dev / CI / Prod**  
Code that worked locally broke in CI, and CI builds behaved differently from production. The fix was containerization — once all environments ran the same Docker image, behavior became consistent everywhere.

---

## Future Plans

**Application**

- [ ] End-to-end encrypted messages and file transfers
- [ ] WebRTC video and voice calls
- [ ] Full-text search across messages and files
- [ ] Mobile app (iOS / Android) with offline support
- [ ] TypeScript migration for the full codebase

**Infrastructure & DevOps**

- [ ] Migrate to Kubernetes for orchestration and auto-scaling
- [ ] Infrastructure as Code with Terraform for reproducible AWS setup
- [ ] Multi-region deployment with geographic failover
- [ ] Automated database backups and disaster recovery
- [ ] APM integration (Datadog or New Relic) for production monitoring
- [ ] Vulnerability scanning integrated into the CI pipeline

**Security**

- [ ] OAuth 2.0 / SSO for enterprise identity providers
- [ ] Multi-factor authentication (MFA)
- [ ] Automated security scanning on every build

---

## Project Info

|          |                                                    |
| -------- | -------------------------------------------------- |
| Version  | 1.0.0                                              |
| Status   | Production-Ready                                   |
| Stack    | React + Node.js + MongoDB + Docker + Jenkins + AWS |
| Branches | `main` → Production · `develop` → Development      |

---

_Built end-to-end — from writing the first React component to watching the Jenkins pipeline go green on a live AWS server._
