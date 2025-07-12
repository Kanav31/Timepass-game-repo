# 🕹️ Timepass Game Backend

This is a Node.js + Express + MongoDB backend to manage users and games.  
It includes user authentication (JWT) and CRUD operations for games, all documented with Swagger.

---

## 🚀 Live API Documentation

You can explore and test all API endpoints directly from your browser:

👉 [**Live Game**](https://timepass-game-repo.onrender.com/api/v1/api-docs/)

---

## 🔑 Authorization (IMPORTANT)

Some endpoints (like creating a game, logging out, or changing password) are **protected**.

To use them on Swagger:

1. First **register** a new user:
   - Use: `POST /api/v1/users/register`  
   - Provide `username` and `password` in the request body.

2. Then **login**:
   - Use: `POST /api/v1/users/login`
   - You’ll get an `accessToken` in the response.

3. Click on the **Authorize** 🔒 button (top right in Swagger UI).
   - Enter the token in this the box that will be visible:  

Once authorized, the locked 🔒 endpoints become unlocked and you can try them out.

---

## 📦 Features & API Paths

### ✅ User APIs

| Method | Path                                        | Description                            |
|-------|----------------------------------------------|----------------------------------------|
| POST  | `/api/v1/users/register`                     | Register a new user                    |
| POST  | `/api/v1/users/login`                        | Login and get access token             |
| POST  | `/api/v1/users/logout`                        | Logout current user (requires token)   |
| POST  | `/api/v1/users/refresh-token`                | Refresh JWT access token               |
| POST  | `/api/v1/users/change-password`              | Change password (requires token)       |
| GET   | `/api/v1/users/current-user`                 | Get logged-in user's details (requires token) |
| GET   | `/api/v1/users/c/{username}`                 | Get public profile by username (requires token) |

---

### 🎮 Game APIs

| Method | Path                    | Description                                 |
|-------|-------------------------|---------------------------------------------|
| POST  | `/api/v1/games`         | Create a new game (requires token)         |
| GET   | `/api/v1/games`        | List all games                             |
| GET   | `/api/v1/games/{id}`    | Get single game by ID                      |
| PUT   | `/api/v1/games/{id}`    | Update game by ID (requires token)         |
| DELETE| `/api/v1/games/{id}`    | Delete game by ID (requires token)         |

---

## ⚙️ Local Setup (for developers)

1. Clone the repository:
   ```bash
   git clone https://github.com/Kanav31/Timepass-game-repo.git
   cd Timepass-game-repo/backend
