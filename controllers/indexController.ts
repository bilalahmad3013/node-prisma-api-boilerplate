import { Request, Response } from "express";
import { apiSuccess } from "../utils/apiHandler";

export const indexController = (req: Request, res: Response) => {
  apiSuccess(res, { message: "Hello from Express!" });
};
