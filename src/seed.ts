import { DataSource } from "typeorm";
import { User } from "./users/entity/user.entity";
import { Thread } from "./threads/entities/thread.entity";
import { Comment } from "./comments/entities/comment.entity";

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "cyberchat",
  password: process.env.DB_PASSWORD || "cyberchat",
  database: process.env.DB_NAME || "cyberchat",
  entities: [User, Thread, Comment],
});

async function seed() {
  await dataSource.initialize();

  const userRepo = dataSource.getRepository(User);
  const threadRepo = dataSource.getRepository(Thread);

  const user = await userRepo.save({
    username: "testuser",
    passwordHash: "hashedpassword",
  });
  const thread = await threadRepo.save({
    title: "Erster Thread",
    subtitle: "Ein Test-Subtitle",
    body: "Das ist der Inhalt des ersten Threads.",
    author: user,
  });

  console.log("Seed erfolgreich");
  await dataSource.destroy();
}

seed();
