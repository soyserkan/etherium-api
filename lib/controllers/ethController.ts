import { NextFunction, Request, Response } from 'express';
import Web3 from "web3";



interface Account {
    address: string;
    balance: string | undefined;
    error: string | undefined;
}


export class EthController {
    constructor() {
    }
    public async checkBalances(req: Request, res: Response, next: NextFunction) {
        try {
            let accounts: Account[] = [];
            const addresses = req.body.addresses;
            for (let i = 0; i < addresses.length; i++) {
                const web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.PROJECT_ID}`));
                try {
                    const result = await web3.eth.getBalance(addresses[i]);
                    if (result) {
                        accounts.push({ address: addresses[i], balance: web3.utils.fromWei(result, "ether"), error: undefined });
                    }
                } catch (service_err: any) {
                    accounts.push({ address: addresses[i], balance: undefined, error: service_err.message });
                }
            }
            res.status(200).send({ status: true, result: accounts });
        } catch (error) {
            next(error);
        }
    }
}