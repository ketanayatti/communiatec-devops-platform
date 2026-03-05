<h1 align="center">Communiatec</h1>

<p align="center">
A DevOps-Driven Full-Stack Communication Platform
</p>

<p align="center">
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=26&duration=3000&pause=1000&color=0AFFEF&center=true&vCenter=true&width=900&lines=Production+Grade+DevOps+Pipeline;Dockerized+Full+Stack+Deployment;CI%2FCD+Automation+with+Jenkins;AWS+Infrastructure+Deployment" />
</p>

---

# CI/CD Status

<p align="center">

![Jenkins Build](https://img.shields.io/jenkins/build?jobUrl=YOUR_JENKINS_JOB_URL&style=for-the-badge&logo=jenkins)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue?style=for-the-badge&logo=docker)
![AWS](https://img.shields.io/badge/AWS-Cloud%20Deployment-orange?style=for-the-badge&logo=amazonaws)
![Linux](https://img.shields.io/badge/Linux-Ubuntu-black?style=for-the-badge&logo=linux)

</p>

---

# Tech Stack

<p align="center">
<img src="https://skillicons.dev/icons?i=docker,jenkins,aws,linux,nodejs,nginx,git,github,vite,js&perline=10" />
</p>

---

# Project Overview

Communiatec is a **DevOps-focused full stack platform** built to demonstrate how modern applications are developed, containerized, and deployed using real industry DevOps practices.

This project showcases:

• CI/CD pipeline automation with Jenkins  
• Containerized application deployment using Docker  
• Cloud infrastructure deployment on AWS  
• Automated production deployments  
• Reverse proxy configuration using Nginx  

The repository serves as a **DevOps portfolio project demonstrating production deployment workflows.**

---

# Architecture Overview

The system follows a **cloud-based DevOps deployment architecture** consisting of:

• Continuous Integration infrastructure  
• Containerized application services  
• Automated CI/CD pipelines  
• Cloud production environment  

---

# AWS Cloud Infrastructure Architecture

This diagram represents the **overall cloud infrastructure layout**, including Jenkins CI server, production EC2 instance, VPC network configuration, and internet gateway.

👉 **[Click here to view AWS Infrastructure Architecture](docs/aws-infrastructure-architecture.png)**

---

# Containerized Application Architecture

This architecture shows how the application runs using **Docker containers inside the production server**.

Frontend and backend containers communicate through a **Docker bridge network**.

👉 **[Click here to view Container Architecture](docs/docker-container-architecture.png)**

---

# CI/CD Pipeline Architecture

This diagram explains the **automated Jenkins pipeline flow**, from source code push to production deployment.

Pipeline stages include:

• Source code checkout  
• Application build  
• Automated testing  
• Docker image creation  
• Image version tagging  
• Deployment to production  

👉 **[Click here to view Jenkins CI/CD Pipeline](docs/jenkins-cicd-pipeline.png)**

---

# Branch-Based Deployment Strategy

The project follows a **branch-based CI/CD workflow** to separate development and production pipelines.

| Branch | Pipeline Behavior |
|------|------|
| develop | Build + Test |
| main | Build + Test + Deploy |

👉 **[Click here to view Branch Workflow Diagram](docs/branch-based-cicd-workflow.png)**

---

# Deployment Workflow

When code is merged into the **main branch**, Jenkins performs the following steps:

1. Checkout repository  
2. Build application  
3. Run automated tests  
4. Build Docker image  
5. Deploy to production server via SSH  

Production server then performs:

• Pull latest Docker image  
• Stop previous container  
• Remove old container  
• Run new container  
• Perform application health check  

This ensures **consistent and reliable deployments.**

---

# Infrastructure Components

The project uses the following infrastructure components:

• AWS EC2 – Jenkins CI Server  
• AWS EC2 – Production Server  
• AWS VPC Network  
• Internet Gateway  
• Security Groups  
• Docker Runtime Environment  
• Nginx Reverse Proxy  

---

# Project Structure

Communiatec  
│  
├── Client  
│   ├── src  
│   ├── public  
│   ├── Dockerfile  
│   ├── nginx.conf  

├── Server  
│   ├── controllers  
│   ├── routes  
│   ├── models  
│   ├── services  
│   ├── middlewares  
│   ├── socket-handlers  
│   ├── Dockerfile  

├── docs  
│   ├── aws-infrastructure-architecture.png  
│   ├── branch-based-cicd-workflow.png  
│   ├── docker-container-architecture.png  
│   └── jenkins-cicd-pipeline.png  

├── Jenkinsfile  
├── docker-compose.yml  
└── generate-keys.js  

---

# Local Development

Clone the repository

`git clone https://github.com/YOUR_USERNAME/communiatec.git`

Navigate to the project directory

`cd communiatec`

Run the application

`docker-compose up --build`

Application will be available at

`http://localhost`

---

# DevOps Practices Demonstrated

This project demonstrates hands-on experience with:

• CI/CD pipeline automation  
• Docker containerized deployments  
• AWS infrastructure setup  
• Reverse proxy configuration  
• Automated production deployment  
• Branch-based development workflows  

---

# Future Improvements

Planned DevOps enhancements:

• Kubernetes orchestration  
• Infrastructure as Code using Terraform  
• Monitoring using Prometheus & Grafana  
• Blue-Green deployments  
• Centralized logging infrastructure  

---

# Author

**Ketan**

DevOps Intern  
Linux • Cloud • Automation

---

<p align="center">

⭐ If you found this project useful, consider giving it a star.

</p>
