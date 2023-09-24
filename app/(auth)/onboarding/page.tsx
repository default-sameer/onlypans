import AccountProfile from "@/components/forms/AccountProfile";
import React from "react";
import { currentUser } from "@clerk/nextjs";

const OnBoarding = async () => {
  const user = await currentUser();

  const userInfo = {
    // this comes from database
    userID: "0834-234234",
    username: "johndoe",
    name: "John Doe",
    image: "",
    bio: "",
  };

  const userData = {
    id: user?.id,
    // this comes from database
    userID: userInfo?.userID,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    image: userInfo?.image || user?.imageUrl || "",
    bio: userInfo?.bio || "",
  };
  return (
    <section className="flex flex-col gap-10">
      <div>
        <h1>OnBoarding</h1>
        <p>Complete your profile to get started on OnlyPans.</p>
      </div>
      <div className="bg-slate-950 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </div>
    </section>
  );
};

export default OnBoarding;
