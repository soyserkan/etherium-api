import express, { Application, Router } from "express";
import { errorHandlerMiddleware } from "./middlewares/error-handler";

import EthRoute from "./routes/ethRoute";

export class App {
    private app: Application;
    constructor(private port: number) {
        this.app = express();
        this.middlewares();
        this.routes();
        this.config();
    }
    private config() {
        if (!process.env.PROJECT_ID) {
            console.log("PROJECT_ID is required!")
            process.exit(1);
        }
    }
    private middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }
    private routes() {
        const router: Router = express.Router();
        this.app.use("/", router);
        this.app.use('/api/eth', EthRoute);
        this.app.use(errorHandlerMiddleware);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server => listening to port: ${this.port}!`);
        });
    }
}