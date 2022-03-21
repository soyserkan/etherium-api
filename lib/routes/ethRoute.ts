import { Router } from 'express';
import { EthController } from '../controllers/ethController';
import { checkBody } from '../middlewares/check-body';

class EthRouter {
    router: Router;
    private ethController: EthController;
    constructor() {
        this.router = Router();
        this.ethController = new EthController();
        this.routes();
    }
    public routes() {
        this.router.post('/balance/check-balances', checkBody, this.ethController.checkBalances);
    }
}

const ethRoutes = new EthRouter();
ethRoutes.routes();
export default ethRoutes.router;