"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import Intercom from "@intercom/messenger-js-sdk";

const TEST_CUSTOMER_ID = "CUST-12345";

export default function SignedInView({
  userId,
  userEmail,
  userName,
}: {
  userId: string;
  userEmail: string;
  userName: string;
}) {
  Intercom({
    app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID as string,
    // user_id: userId, // use the real user id in production
    user_id: TEST_CUSTOMER_ID,
    name: userName,
    email: userEmail,
  });

  return (
    <div className="flex gap-4">
      <div className="text-white">
        <span className="font-bold">You are signed in as:</span>
        <br />
        user id: {TEST_CUSTOMER_ID}
        <br />
        name: {userName}
        <br />
        email: {userEmail}
      </div>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
