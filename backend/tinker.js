import repl from 'repl';
import dotenv from 'dotenv';
import connectDB from './src/db/index.js';
import { User } from './src/models/user.model.js';
import { Game } from './src/models/game.model.js';

dotenv.config({
    path: './.env'
});

(async () => {
    try {
        await connectDB();
        console.log('Succesfully connected to MongoDB');

        // Start REPL
        const replServer = repl.start({
            prompt: 'tinker > ',
        });

        // Expose models & utils in REPL context
        replServer.context.User = User;
        replServer.context.Game = Game;

        console.log('You can now use: User, Game');
    } catch (error) {
        console.error('Error starting tinker:', error);
        process.exit(1);
    }
})();
