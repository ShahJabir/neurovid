'use server';

import { client } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error('User not found');
    }
    // eslint-disable-next-line no-unused-vars
    const userExists = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });
  } catch (error) {
    return { error: `Failed to authenticate user: ${error}` };
  }
};
