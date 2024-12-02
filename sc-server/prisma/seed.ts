import { PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('Abc@12345', 10);
  const user: Pick<User, 'email' | 'password' | 'username'> = {
    email: 'sos.connect@gmail.com',
    password: hashedPassword,
    username: 'SOS Connect',
  };

  const userCreated = await prisma.user.upsert({
    where: { email: user.email },
    create: user,
    update: user,
  });

  console.log(userCreated);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
