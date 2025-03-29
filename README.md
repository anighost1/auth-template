# 🚀 Authentication Template with Email Verification

## 🌟 Overview

Welcome to the **Authentication Template** – a robust and secure user authentication system built with Node.js. This project provides essential features like **email verification, JWT authentication, and secure password hashing** to help you kickstart your authentication system effortlessly.

### 🔑 Key Features

✅ **User Signup** with email verification using **Node-Mailjet** ✉️\
✅ **User Login** with JWT-based authentication 🔐\
✅ **Secure Password Hashing** using **bcrypt** 🔑\
✅ **Token-Based Authentication** for secure API access 🚀\
✅ **Resend Email Verification** option for unverified users 🔄\
✅ **MongoDB with Mongoose ORM** for efficient data storage 📦

---

## 🛠️ Tech Stack

- **Node.js** 🟢
- **Express.js** 🚀
- **MongoDB + Mongoose** 🗄️
- **bcrypt** for password hashing 🔑
- **jsonwebtoken (JWT)** for authentication 🔐
- **Node-Mailjet** for email verification 📩

---

## ⚡ Installation Guide

### ✅ Prerequisites

Ensure you have the following installed:

- **Node.js** (LTS version recommended)
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)

### 🚀 Steps to Get Started

1️⃣ **Clone the repository:**

```sh
git clone https://github.com/anighost1/auth-template.git
cd auth-template
```

2️⃣ **Install dependencies:**

```sh
npm install
```

3️⃣ **Configure environment variables:** Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
MJ_APIKEY=your_mailjet_api_key
MJ_SECRET=your_mailjet_secret_key
MJ_SENDER_EMAIL=your_sender_email
MJ_SENDER_NAME=your_sender_name
```

4️⃣ **Start the server:**

```sh
npm start
```

🎉 The server should now be running at `http://localhost:5000` 🎉

---

## 📌 API Endpoints

### 🔹 1. Register User (Signup)

- **Endpoint:** `POST /api/auth/signup`
- **Description:** Registers a new user and sends an email verification link.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "username": "yourusername",
    "email": "john@example.com",
    "password": "yourpassword"
  }
  ```

### 🔹 2. Verify Email

- **Endpoint:** `GET /api/auth/verify-email/:token`
- **Description:** Verifies the user's email via the token sent in the email.

### 🔹 3. Login User

- **Endpoint:** `POST /api/auth/login`
- **Description:** Authenticates the user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "identifier": "emailOrUsername",
    "password": "yourpassword"
  }
  ```

---

## 📜 License

This project is **open-source** and available under the **MIT License**.

## 💡 Contributing

We welcome contributions! Feel free to **submit issues or pull requests** to help improve this project. 🚀

---

### 🎯 Made with ❤️ by Anil Tigga

