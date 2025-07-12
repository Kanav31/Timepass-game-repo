import { Router } from "express";
import {
    createGame,
    getAllGames,
    getGame,
    updateGame,
    deleteGame,
} from "../controllers/game.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/v1/games:
 *   post:
 *     summary: Create a new game
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - url
 *               - author
 *               - publishedDate
 *             properties:
 *               name:
 *                 type: string
 *                 example: FIFA 25
 *               url:
 *                 type: string
 *                 example: https://example.com/fifa25
 *               author:
 *                 type: string
 *                 example: EA Sports
 *               publishedDate:
 *                 type: string
 *                 format: date
 *                 example: 2025-07-12
 *     responses:
 *       201:
 *         description: Game created successfully
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.route("/").post(verifyJWT, createGame);

/**
 * @swagger
 * /api/v1/games:
 *   get:
 *     summary: Get all games
 *     tags: [Games]
 *     responses:
 *       200:
 *         description: List of games
 *       500:
 *         description: Server error
 */
router.route("/").get(getAllGames);

/**
 * @swagger
 * /api/v1/games/{id}:
 *   get:
 *     summary: Get single game by ID
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Game ID
 *     responses:
 *       200:
 *         description: Game fetched successfully
 *       404:
 *         description: Game not found
 *       400:
 *         description: Invalid ID
 */
router.route("/:id").get(getGame);

/**
 * @swagger
 * /api/v1/games/{id}:
 *   put:
 *     summary: Update game by ID
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Game ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated FIFA 25
 *               url:
 *                 type: string
 *                 example: https://example.com/new-fifa25
 *               author:
 *                 type: string
 *                 example: EA Sports Updated
 *               publishedDate:
 *                 type: string
 *                 format: date
 *                 example: 2025-08-01
 *     responses:
 *       200:
 *         description: Game updated successfully
 *       400:
 *         description: Invalid request or ID
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Game not found
 */
router.route("/:id").put(verifyJWT, updateGame);

/**
 * @swagger
 * /api/v1/games/{id}:
 *   delete:
 *     summary: Delete game by ID
 *     tags: [Games]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Game ID
 *     responses:
 *       200:
 *         description: Game deleted successfully
 *       400:
 *         description: Invalid ID
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Game not found
 */
router.route("/:id").delete(verifyJWT, deleteGame);

export default router;
