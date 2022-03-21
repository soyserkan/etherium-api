import { Request, Response, NextFunction } from "express";
import Joi, { ValidationResult } from "joi";


export function checkBody(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        addresses: Joi.array().items(
            Joi.string().required()
        ).required()
    });
    const result = schema.validate(req.body) as ValidationResult;
    if (!result) {
        throw new Error("Invalid body");
    }
    if (result && result.error) {
        throw new Error(result.error.details?.map(x => x.message)?.[0]);
    }
    next();
}