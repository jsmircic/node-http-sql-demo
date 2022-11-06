import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const seedDb = async () => {
  await prisma.bussPart.create({
    data: {
      BpCode: "BP1",
      BpName: "Testni busspart ",
    },
  });
};

seedDb();
