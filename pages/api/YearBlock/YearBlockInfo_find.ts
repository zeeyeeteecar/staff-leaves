import { prisma } from "../prisma";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
  const { ID, userName, fName, lName } = req.body;

  const result = await prisma.tb_staff_info.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      tb_staff_leave: {
        select: {
          staffLeaveType: true,
          staffLeaveDate: true,
        },
      },
    },
  });

  await prisma.$disconnect();
  res.json(result);
}
