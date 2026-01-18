# 🌐 DNS Resolver Project

## Overview
This project implements a **DNS Resolver**, designed to demonstrate how domain names are translated into IP addresses. It simulates the core behavior of real-world DNS resolution by querying different DNS components and returning the resolved IP address for a given domain.

The project focuses on understanding **networking fundamentals**, **DNS architecture**, and **request–response workflows**, which are essential for system design, backend development, and cybersecurity roles.

## Who Is This Project For?
- 🌐 **Computer Science & Networking students**  
- 🔐 **Cybersecurity and system engineering learners**  
- 💻 **Backend / Systems developers** wanting to understand low-level internet infrastructure  
- 🧠 **Interview preparation** for Networking, OS, or Security-related roles  

## 📌 Project Objective
The objective of this project is to replicate the behavior of a DNS resolver and clearly demonstrate:

- How domain names are resolved to IP addresses  
- How DNS queries flow through different layers  
- How caching improves performance  
- How failures and invalid domains are handled  

## ⚙️ Core Functionality

### ✅ DNS Query Resolution
- Accepts a domain name as input  
- Resolves the domain to its corresponding IP address  

### ✅ Recursive Resolution Logic
- Simulates the DNS resolution chain:
  - Root DNS
  - TLD DNS
  - Authoritative DNS  

### ✅ Caching Mechanism
- Stores previously resolved domains  
- Reduces repeated lookup time and improves performance  

### ✅ Error Handling
- Handles invalid or non-existent domains  
- Manages timeout and resolution failures gracefully  

## 🧠 Concepts Covered
- DNS Architecture  
- Recursive vs Iterative DNS Resolution  
- Caching and TTL  
- UDP-based communication (conceptual / implementation-based)  
- Networking fundamentals  

## 🛠️ Tech Stack
- 🐍 **Programming Language** – (C / C++ / Python / Go — depending on implementation)  
- 🌐 **Networking Libraries / Sockets**  
- 🗄️ **Local Cache / Data Structures**  

## 📦 Deliverables
- DNS Resolver source code  
- Caching implementation  
- Error handling logic  
- Documentation explaining DNS resolution flow  

## 🚀 Learning Outcomes
- Deep understanding of how the internet resolves domain names  
- Hands-on experience with networking concepts  
- Strong foundation for system design, cybersecurity, and backend roles  
