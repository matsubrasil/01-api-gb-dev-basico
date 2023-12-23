import { Request, Response } from 'express'
import { CreateMovieRentUseCase } from '../../usecase/movie-rent/CreateMovieRentUseCase'

export class CreateMovieRentController {
  async handle(req: Request, res: Response) {
    const { userId, movieId } = req.body
    // console.log('userId', userId)
    // console.log('movieId', movieId)
    const createMovieRentUseCase = new CreateMovieRentUseCase()
    await createMovieRentUseCase.execute({
      userId,
      movieId,
    })

    return res.status(201).send()
  }
}
