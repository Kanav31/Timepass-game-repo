import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./src/swagger/swagger.js";
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cookieParser())

// import routes
import userRouter from './src/routes/user.route.js'
import gameRouter from './src/routes/game.route.js'

//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/games", gameRouter)
app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export { app }