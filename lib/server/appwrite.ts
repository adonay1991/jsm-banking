"use server";

import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  const session = cookies().get("appwrite-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },

    get database() {
      return new Databases(client);
    },

    get user() {
      return new Users(client);
    },
  };
}
