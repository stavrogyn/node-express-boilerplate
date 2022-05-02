import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()
  const review = await prisma.listingsAndReviews.findMany({
    where: {
      id: {
        equals: '10006546',
      },
    },
  })
  console.log(review)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
