<h1 align="center">Communiatec</h1>

<p align="center">
An End-to-End Full-Stack Collaboration Platform
</p>

<p align="center">
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=26&duration=3000&pause=1000&color=00D9FF&center=true&vCenter=true&width=900&lines=Real-Time+Chat+and+Group+Collaboration;AI-Powered+Messaging+Experience;Secure+Vault+File+Workflows;Code+Collaboration+with+Socket.io" />
</p>

---

# Project Documentation

<p align="center">

![Full Stack](https://img.shields.io/badge/Architecture-Full%20Stack-0A66C2?style=for-the-badge)
![Realtime](https://img.shields.io/badge/Realtime-Socket.io-111827?style=for-the-badge&logo=socketdotio)
![Database](https://img.shields.io/badge/Database-MongoDB-1f9d55?style=for-the-badge&logo=mongodb)
![Deployment](https://img.shields.io/badge/Deployment-DevOps%20Ready-orange?style=for-the-badge)

</p>

Use these docs for complete project understanding:

- [Development Showcase](DEVELOPMENT.md)
- [DevOps Showcase](DEVOPS.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Security Guide](SECURITY.md)

---

# Tech Stack

<p align="center">
<img src="https://skillicons.dev/icons?i=react,vite,nodejs,express,mongodb,docker,nginx,jenkins,aws,js&perline=10" />
</p>

---

# Project Overview

Communiatec is a production-style full stack platform that combines modern development and operational practices in one repository.

It delivers:

- realtime direct and group messaging
- collaborative code sessions with live synchronization
- AI-assisted suggestions and response workflows
- secure vault upload, sharing, and download features
- role-based admin controls and maintenance mode handling

---

# Core Modules

| Module | Responsibility |
|------|------|
| Client | React UI, routing, socket integration, app state |
| Server | REST APIs, Socket.io handlers, business logic |
| Server/models | Data schemas for users, chat, groups, vault, admin, AI |
| scripts | Health check, recovery, setup, and update automation |
| docs | Architecture and workflow diagrams |

---

# Local Development

## Option 1: Docker (recommended)

Run full stack:

`docker compose up -d`

Application URLs:

- Frontend: `http://localhost:5173`
- Backend health: `http://localhost:4000/api/health`

Stop:

`docker compose down`

## Option 2: Manual setup

Backend:

`cd Server`

`npm install`

`npm run dev`

Frontend:

`cd Client`

`npm install`

`npm run dev`

---

# Environment Setup

Copy and update environment files:

- `Server/env.example` -> `Server/.env`
- `Client/env.example` -> `Client/.env`

Important variables:

- Backend: `DATABASE_URL`, `JWT_SECRET`, `ENCRYPTION_KEY`, `CORS_ALLOWED_ORIGINS`
- Frontend: `VITE_APP_SERVER_URL` (or `VITE_API_URL`)

---

# CI/CD and Operations

This repository includes:

- Jenkins pipeline in `Jenkinsfile`
- Docker orchestration in `docker-compose.yml`
- deployment runbook in `DEPLOYMENT.md`
- operational scripts in `scripts/`

Quick ops entry points:

- `scripts/check-server-health.sh`
- `scripts/recover-server.sh`
- `scripts/update-app.sh`
- `scripts/setup-ec2.sh`

---

# Contributing

1. Fork the repository
2. Create a feature branch
3. Commit focused changes
4. Open a pull request

---

# Author

**Ketan Ayatti**

<p align="center">

⭐ If this project helped you, consider giving it a star.

</p>
