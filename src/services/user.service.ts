import { prisma } from "../connections/db.connections";
export async function findUser(userName: string, password: string) {
  return await prisma.user.findUniqueOrThrow({
    where: {
      userName,
    },
  });
}

export async function createUser(userName: string, hashedPassword: string) {
  return await prisma.user.create({
    data: {
      userName,
      password: hashedPassword,
    },
  });
}
