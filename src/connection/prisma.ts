import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function connect() {
  await prisma.$connect()
  const review = await prisma.listingsAndReviews.findMany({
    where: {
      id: {
        equals: '10006546',
      }
    }
  })
  console.log(review)
}

connect()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
