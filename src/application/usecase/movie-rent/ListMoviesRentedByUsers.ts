import { User } from '@prisma/client'
import { prisma } from '../../../prisma/client'

export class ListMoviesRentedByUsers {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany({
      include: {
        movie_rent: {
          select: {
            movie: true,
          },
        },
      },
      where: {
        movie_rent: {
          some: {},
        },
      },
    })

    return users
  }
}
