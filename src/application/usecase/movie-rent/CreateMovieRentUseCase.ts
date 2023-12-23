import { MovieRent, User } from '@prisma/client'
import { prisma } from '../../../prisma/client'
import { AppError } from '../../errors/appErrors'
import { CreateMovieRentDTO } from '../../../domain/dto/CreateMovieRentDTO'

export class CreateMovieRentUseCase {
  async execute({ userId, movieId }: CreateMovieRentDTO): Promise<void> {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      throw new AppError('User not found!!')
    }

    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    })

    if (!movieExists) {
      throw new AppError('Movie not found!!')
    }

    const rentAlreadyRented = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    })

    if (rentAlreadyRented) {
      throw new AppError('Movie already rented!!')
    }

    const movieRent = await prisma.movieRent.create({
      data: {
        userId,
        movieId,
      },
    })

    return
  }
}
