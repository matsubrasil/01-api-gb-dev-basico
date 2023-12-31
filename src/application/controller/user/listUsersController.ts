import { Request, Response } from 'express'
import { ListUsersUseCase } from '../../usecase/user/ListUsersUseCase'

export class ListUsersController {
  async handle(req: Request, res: Response) {
    const listUsersUseCase = new ListUsersUseCase()
    const result = await listUsersUseCase.execute()

    return res.status(200).json(result)
  }
}
