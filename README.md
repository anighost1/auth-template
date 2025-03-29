Authentication Template with Email Verification

Overview

This is a Node.js-based authentication template that includes:

User registration (signup) with email verification using Node-Mailjet

User login with JWT-based authentication

Password hashing using bcrypt

Secure token generation for authentication

MongoDB as the database with Mongoose ORM

Express.js as the backend framework

Features

User signup with email verification

User login with JWT token authentication

Password hashing with bcrypt

Secure API routes with token-based authentication

Resend email verification option

Tech Stack

Node.js

Express.js

MongoDB with Mongoose

bcrypt for password hashing

jsonwebtoken (JWT) for authentication

Node-Mailjet for email verification

Installation

Prerequisites

Make sure you have Node.js and MongoDB installed on your system.

Steps to Install

Clone the repository:

git clone https://github.com/anighost1/auth-template.git
cd auth-template

Install dependencies:

npm install

Configure environment variables:
Create a .env file in the root directory and add the following:

PORT = port number
MONGO_URI = mongo DB URI
JWT_SECRET = a jwt secret key
MJ_APIKEY = mailjet api key
MJ_SECRET = mailjet secret key
MJ_SENDER_EMAIL = sender email id
MJ_SENDER_NAME = sender name


Start the server:

npm start

API Endpoints

1. Register User (Signup)

Endpoint: POST /api/auth/signup

Description: Registers a new user and sends an email verification link.

Request Body:

{
  "name": "John Doe",
  "username": "yourusername",
  "email": "john@example.com",
  "password": "yourpassword"
}


2. Verify Email

Endpoint: GET /api/auth/verify-email/:token

Description: Verifies the user's email via the token sent in the email.

3. Login User

Endpoint: POST /api/auth/login

Description: Authenticates the user and returns a JWT token.

Request Body:

{
  "identifier": "emailOrPassword",
  "password": "yourpassword"
}

License

This project is open-source and available under the MIT License.

Contributing

Feel free to submit issues or pull requests for improvements.