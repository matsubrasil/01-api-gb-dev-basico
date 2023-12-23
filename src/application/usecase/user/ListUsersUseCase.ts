import { User } from '@prisma/client'

import { prisma } from '../../../prisma/client'

type UserDTO = {
  id: string
  name: string
  email: string
}
export class ListUsersUseCase {
  async execute(): Promise<UserDTO[]> {
    const result = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
      orderBy: {
        name: 'desc',
      },
    })

    return result
  }
}
