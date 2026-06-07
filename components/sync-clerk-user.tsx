import { currentUser } from "@clerk/nextjs/server";
import { eq, or } from "drizzle-orm";

import { db, users } from "@/db";

export async function SyncClerkUser() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const email =
    user.primaryEmailAddress?.emailAddress ??
    user.emailAddresses.at(0)?.emailAddress;

  if (!email) {
    return null;
  }

  const name =
    [user.firstName, user.lastName].filter(Boolean).join(" ") ||
    user.username ||
    email;

  const existingUser = await db.query.users.findFirst({
    where: or(eq(users.clerkId, user.id), eq(users.email, email)),
  });

  if (existingUser) {
    await db
      .update(users)
      .set({
        clerkId: user.id,
        name,
        email,
        imageUrl: user.imageUrl,
        updatedAt: new Date(),
      })
      .where(eq(users.id, existingUser.id));

    return null;
  }

  await db.insert(users).values({
    clerkId: user.id,
    name,
    email,
    imageUrl: user.imageUrl,
  });

  return null;
}
