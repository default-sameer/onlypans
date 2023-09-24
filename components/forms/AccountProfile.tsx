"use client";

import React from "react";

interface Props {
  user: {
    id: string;
    userID: string;
    username: string;
    name: string;
    image: string;
    bio: string;
  };
  btnTitle: string;
}

const AccountProfile = ({ user, btnTitle }: Props) => {
  return <div>AccountProfile</div>;
};

export default AccountProfile;
