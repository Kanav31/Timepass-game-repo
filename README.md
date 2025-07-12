# 🎮 Timepass Game Backend

Node.js + Express + MongoDB backend with user auth and game management.

## 📚 Live API Docs
View and test endpoints easily:
👉 [Swagger UI](https://timepass-game-repo.onrender.com/api/v1/api-docs/)

---

## 🧑‍💻 Users API

| Method | Path | Description |
|-------|------|-------------|
| POST   | `/api/v1/users/register`         | Register a new user |
| POST   | `/api/v1/users/login`            | Login user |
| POST   | `/api/v1/users/logout`           | Logout current user (requires token) |
| POST   | `/api/v1/users/refresh-token`    | Refresh access token |
| POST   | `/api/v1/users/change-password`  | Change password (requires token) |
| GET    | `/api/v1/users/current-user`     | Get current logged-in user (requires token) |
| GET    | `/api/v1/users/c/{username}`     | Get user profile by username (requires token) |

---

## 🕹 Games API

| Method | Path | Description |
|-------|------|-------------|
| POST   | `/api/v1/games`            | Create new game (requires token) |
| GET    | `/api/v1/games`            | Get all games |
| GET    | `/api/v1/games/{id}`       | Get game by ID |
| PUT    | `/api/v1/games/{id}`       | Update game by ID (requires token) |
| DELETE | `/api/v1/games/{id}`       | Delete game by ID (requires token) |

---

## ☁️ Deploy
Live: https://timepass-game-repo.onrender.com/  
Swagger: https://timepass-game-repo.onrender.com/api/v1/api-docs/

---

> ✨ Generated automatically by AI
