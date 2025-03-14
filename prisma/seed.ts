import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  const banks = [
    {
      value: "Commercial Bank of Ethiopia",
      branches: ["Finfine Branch", "Piassa Branch", "Bole Branch"],
    },
    {
      value: "Dashen Bank",
      branches: ["Megenagna Branch", "Mexico Branch", "Sarbet Branch"],
    },
    {
      value: "Awash Bank",
      branches: ["Gofa Branch", "Lideta Branch", "CMC Branch"],
    },
    {
      value: "Berhan Bank",
      branches: [
        "Megenagna Branch",
        "Bole Medhanialem Branch",
        "Torhailoch Branch",
      ],
    },
    {
      value: "Wegagen Bank",
      branches: ["Dembel Branch", "Arada Branch", "Kera Branch"],
    },
  ];

  for (const bank of banks) {
    const createdBank = await prisma.tbl_bank.create({
      data: {
        value: bank.value,
        tbl_branch: {
          create: bank.branches.map((branchValue) => ({
            value: branchValue,
          })),
        },
      },
    });

    console.log(`✅ Created bank: ${createdBank.value}`);
  }

  console.log("🎉 Seeding completed!");
}

main()
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
