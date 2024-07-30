import db from "@/lib/db";
import { LoginForm } from "@/lib/types";
// import bcrypt from "bcrypt";
import argon2 from "argon2";

export async function login(username: string, password: string) {
  console.log("logging in user");
  const user = await db.cred.get(username);
  console.log("user", user);
  if (!user) return null;
  const isCorrectPassword = await argon2.verify(user.passwordHash, password);
  if (!isCorrectPassword) return null;
  return { id: user.userId, username };
}

export async function register({ username, password }: LoginForm) {
  console.log("registering user");

  const passwordHash = await argon2.hash(password);

  const user = await db.cred.create({
    username,
    passwordHash,
    createdAt: new Date().toISOString(),
    userId:
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
  });
  return { status: "ok" };
}
