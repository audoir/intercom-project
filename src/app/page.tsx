import { auth, currentUser } from "@clerk/nextjs/server";
import SignedInView from "./components/SignedInView";
import SignedOutView from "./components/SignedOutView";

export default async function Home() {
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-8">
        <div className="text-2xl font-bold">SneakerVibe - Fin AI Demo</div>
        {userId ? (
          <SignedInView
            userId={userId}
            userEmail={user?.emailAddresses[0].emailAddress as string}
            userName={user?.fullName as string}
          />
        ) : (
          <SignedOutView />
        )}
        <div>
          <a
            href="https://intercom.help/audoir-llc/en/articles/12824812-how-to-cancel-your-order"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            See the order cancellation policy
          </a>
        </div>
      </div>
    </div>
  );
}
