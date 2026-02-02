# DNS Resolver from Scratch (Node.js + TypeScript)

A basic DNS Resolver built **from scratch** using UDP sockets.  
This project demonstrates how DNS queries are created, sent, and parsed manually.

✅ Current implementation resolves domains like **google.com** by performing recursive resolution.

---

## ✨ Features

- ✅ Builds raw DNS Query packets (no external DNS libraries)
- ✅ Sends queries via UDP (`dgram`)
- ✅ Parses DNS Response packets
- ✅ Supports recursive resolution via Name Servers (NS)
- ✅ Handles IPv4 & IPv6 Name Server IPs using `udp4` / `udp6`
- ✅ Written in **TypeScript**

---

## 📦 Tech Stack

- Node.js
- TypeScript
- UDP sockets (`dgram`)

---

## 🚀 How to Run

### Clone the repo
```bash
git clone https://github.com/srijan008/dns-resolver.git
cd dns-resolver
```
### Install dependencies
```bash
npm install
```

### Run the resolver
```bash
npm run start
