import { DataSource } from "typeorm";
import { User } from "./users/entity/user.entity";
import { Thread } from "./threads/entities/thread.entity";
import { Comment } from "./comments/entities/comment.entity";
import "dotenv/config";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL missing");
}

const dataSource = new DataSource({
  type: "postgres",
  url: databaseUrl,
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
    body: "Das s der Inhalt des ersten Threads.",
    author: user,
  });

  console.log("Seed erfolgreich");
  await dataSource.destroy();
}

seed();
