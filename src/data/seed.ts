import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../users/entity/user.entity";
import { Thread } from "../threads/entities/thread.entity";
import { Comment } from "../comments/entities/comment.entity";
import { usernames, threadData } from "./seed-data";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL missing");
}

const dataSource = new DataSource({
  type: "postgres",
  url: databaseUrl,
  entities: [User, Thread, Comment],
  ssl: { rejectUnauthorized: false },
});

async function seed() {
  await dataSource.initialize();

  const userRepo = dataSource.getRepository(User);
  const threadRepo = dataSource.getRepository(Thread);
  const commentRepo = dataSource.getRepository(Comment);

  const users: User[] = [];
  for (const username of usernames) {
    const existing = await userRepo.findOne({ where: { username } });
    if (existing) {
      users.push(existing);
      continue;
    }
    const created = await userRepo.save({
      username,
      passwordHash: "hashedpassword",
    });
    users.push(created);
  }

  function randomUser(excludeUser?: User): User {
    const pool = excludeUser
      ? users.filter((u) => u.id !== excludeUser.id)
      : users;
    const picked = pool[Math.floor(Math.random() * pool.length)];
    if (!picked) {
      throw new Error("No user available to pick from");
    }
    return picked;
  }

  for (const t of threadData) {
    const existingThread = await threadRepo.findOne({
      where: { title: t.title },
    });
    if (existingThread) {
      continue;
    }

    const author = randomUser();
    const thread = await threadRepo.save({
      title: t.title,
      subtitle: t.subtitle,
      body: t.body,
      author,
    });

    for (const commentBody of t.comments) {
      const commentAuthor = randomUser(author);
      await commentRepo.save({
        body: commentBody,
        thread,
        author: commentAuthor,
      });
    }
  }

  console.log("Extended seed erfolgreich");
  await dataSource.destroy();
}

seed();
