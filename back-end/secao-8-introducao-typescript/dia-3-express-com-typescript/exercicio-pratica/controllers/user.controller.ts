import { Request, Response } from 'express';
import { UserService } from "../services/index";
import statusCodes from '../statusCodes';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(statusCodes.OK).json(users);
  };
}