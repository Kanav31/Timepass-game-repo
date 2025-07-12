5️⃣ Now call secure APIs (create game, change password, etc.)

---

## 🛠 API Paths

### ✅ User Routes

| Method | Path                                       | Description                        | Auth |
|------:|--------------------------------------------:|-----------------------------------:|----:|
| POST  | `/api/v1/users/register`                    | Register new user                  | ❌  |
| POST  | `/api/v1/users/login`                       | Login user                         | ❌  |
| POST  | `/api/v1/users/logout`                       | Logout current user                | ✅  |
| POST  | `/api/v1/users/refresh-token`               | Refresh access token               | ❌  |
| POST  | `/api/v1/users/change-password`             | Change password                    | ✅  |
| GET   | `/api/v1/users/current-user`                | Get current logged-in user         | ✅  |
| GET   | `/api/v1/users/c/{username}`                | Get profile by username           | ✅  |

---

### 🎮 Game Routes

| Method | Path                     | Description                    | Auth |
|------:|-------------------------:|-------------------------------:|----:|
| GET   | `/api/v1/games`          | List all games                  | ❌  |
| POST  | `/api/v1/games`          | Create new game                  | ✅  |
| GET   | `/api/v1/games/{id}`     | Get game by ID                   | ❌  |
| PUT   | `/api/v1/games/{id}`     | Update game by ID                | ✅  |
| DELETE| `/api/v1/games/{id}`     | Delete game by ID                | ✅  |

---

## 🌐 Live Access

All APIs are **live & testable** on:
- 🔗 **Swagger UI:** [https://timepass-game-repo.onrender.com/api/v1/api-docs/](https://timepass-game-repo.onrender.com/api/v1/api-docs/)

---

## 🧰 Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JWT auth
- Swagger UI for docs

---

> ⚡ **Tip:** Use Swagger to test everything, including login & secured routes — no need for Postman!
