# 💼 Job Application Backend API

A RESTful Backend API for a Job Application Portal built using **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. This project provides secure authentication, job management, file uploads, authorization, and input validation.

---

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 🔑 JWT Token Authentication
- 👤 User Profile Management
- 💼 Job CRUD Operations
- 🛡 Authorization Middleware
- 📤 Resume/File Upload Support
- ✅ Request Validation
- 🗄 MongoDB Database Integration
- 📂 Clean MVC Architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt.js
- Multer
- dotenv

---

## 📁 Project Structure

```
MINOR-PROJECT/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── jobController.js
│   │   └── userController.js
│   │
│   ├── middlewares/
│   │   ├── auth.js
│   │   ├── authorizeJob.js
│   │   └── upload.js
│   │
│   ├── models/
│   │   ├── jobModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── jobRoute.js
│   │   └── userRoute.js
│   │
│   ├── utils/
│   │   └── validator.js
│   │
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 📌 Folder Description

| Folder | Description |
|----------|-------------|
| config | Database connection configuration |
| controllers | Business logic for users and jobs |
| middlewares | Authentication, authorization, and file upload middleware |
| models | Mongoose database schemas |
| routes | API endpoint definitions |
| utils | Helper functions and validators |
| server.js | Main application entry point |

---

## ⚙ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/job-application-backend.git
```

### Navigate to project

```bash
cd job-application-backend
```

### Install dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Start Development Server

```bash
npm run dev
```

or

```bash
npm start
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/users/register | Register User |
| POST | /api/users/login | Login User |

---

### Users

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/users/profile | Get User Profile |
| PUT | /api/users/profile | Update User Profile |

---

### Jobs

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/jobs | Create Job |
| GET | /api/jobs | Get All Jobs |
| GET | /api/jobs/:id | Get Single Job |
| PUT | /api/jobs/:id | Update Job |
| DELETE | /api/jobs/:id | Delete Job |

---

## 🔒 Authentication

Protected routes require a JWT token.

Example:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📤 File Upload

The project supports file uploads using **Multer**.

Supported use cases include:

- Resume Upload
- Profile Image Upload
- Documents

---

## 🧪 Validation

Input validation is handled inside the `utils/validator.js` file to ensure:

- Required fields
- Email format
- Password strength
- Data sanitization

---

## 📦 Dependencies

- express
- mongoose
- dotenv
- jsonwebtoken
- bcryptjs
- multer
- cors
- nodemon

---

## 📈 Future Improvements

- Email Verification
- Forgot Password
- Refresh Tokens
- Role-Based Authentication (Admin/User)
- Search & Filter Jobs
- Pagination
- Swagger API Documentation
- Docker Support
- Unit Testing (Jest)

---

## 👨‍💻 Author

**Shivraj Jat**

- GitHub: https://github.com/Shivraj-jaat
- LinkedIn: https://www.linkedin.com/in/shivraj-jat-bbb8b630a

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star on GitHub!
