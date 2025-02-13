import React from "react";

import { UserButton, currentUser, auth } from "@clerk/nextjs";
import { fetchOrGenerateTokens } from "@/utils/action";

const MemberProfile = async () => {
  const user = await currentUser();
  const { userId } = auth();

  await fetchOrGenerateTokens(userId)

  return (
    <div className="flex gap-2 items-center px-4">
      <UserButton afterSignOutUrl="/" />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default MemberProfile;
