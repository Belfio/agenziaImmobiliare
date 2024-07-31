import db from "@/lib/db";
import { Cred, LoginForm } from "@/lib/types";

import argon2 from "argon2";

export async function login(
  email: string,
  password: string
): Promise<Cred | null> {
  console.log("logging in user");
  const user = await db.cred.get(email);
  if (!user) return null;
  // const isCorrectPassword = true;
  const isCorrectPassword = await argon2.verify(user.passwordHash, password);
  if (!isCorrectPassword) {
    console.log("password incorrect");
    return null;
  }
  return user;
}

export async function register({
  email,
  password,
}: LoginForm): Promise<{ status: "ok" } | { status: "error"; error: string }> {
  console.log("registering user", email, password);

  const passwordHash = await argon2.hash(password);
  try {
    await db.cred.create({
      email,
      passwordHash,
      createdAt: new Date().toISOString(),
      userId:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
    });
    return { status: "ok" };
  } catch (error) {
    console.log("Error", error);
    return { status: "error", error: JSON.stringify(error) || "Error" };
  }
}
