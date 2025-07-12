import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Game } from "../models/game.model.js";

const createGame = asyncHandler(async (req, res) => {
    const { name, url, author, publishedDate } = req.body;

    if ([name, url, author, publishedDate].some(field => !field?.trim())) {
        throw new ApiError(400, "All fields are required");
    }

    const game = await Game.create({
        name,
        url,
        author,
        publishedDate
    });

    return res.status(201).json(new ApiResponse(201, game, "Game created successfully"));
});

const getGame = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const game = await Game.findById(id);

    if (!game) {
        throw new ApiError(404, "Game not found");
    }

    return res.status(200).json(new ApiResponse(200, game, "Game fetched successfully"));
});

const getAllGames = asyncHandler(async (req, res) => {
    const games = await Game.find();

    return res.status(200).json(new ApiResponse(200, games, "All games fetched successfully"));
});

const updateGame = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const updatedGame = await Game.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
    );

    if (!updatedGame) {
        throw new ApiError(404, "Game not found");
    }

    return res.status(200).json(new ApiResponse(200, updatedGame, "Game updated successfully"));
});

const deleteGame = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const deletedGame = await Game.findByIdAndDelete(id);

    if (!deletedGame) {
        throw new ApiError(404, "Game not found");
    }

    return res.status(200).json(new ApiResponse(200, {}, "Game deleted successfully"));
});

export {
    createGame,
    getGame,
    getAllGames,
    updateGame,
    deleteGame
};
