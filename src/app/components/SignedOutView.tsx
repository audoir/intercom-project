"use client";

import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Intercom from "@intercom/messenger-js-sdk";

export default function SignedOutView() {
  Intercom({
    app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID as string,
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </div>
  );
}
