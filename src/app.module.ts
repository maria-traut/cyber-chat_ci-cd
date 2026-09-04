import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./auth/guards/jwt-auth.guard";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentsModule } from "./comments/comments.module";
import { ThreadsModule } from "./threads/threads.module";
import { Thread } from "./threads/entities/thread.entity";
import { Comment } from "./comments/entities/comment.entity";
import { UsersModule } from "./users/users.module";
import { User } from "./users/entity/user.entity";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || "cyberchat",
      password: process.env.DB_PASSWORD || "cyberchat",
      database: process.env.DB_NAME || "cyberchat",
      entities: [Thread, Comment, User],
      synchronize: true,
      logging: false,
    }),
    CommentsModule,
    ThreadsModule,
    UsersModule,
    AuthModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
