import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

function createCategory() {
  return {
    title: faker.commerce.productName(),
  };
}

async function main() {
  const categories = faker.helpers.multiple(createCategory, {
    count: 100,
  });
  console.log(categories);

  await prisma.category.createMany({
    data: categories,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
