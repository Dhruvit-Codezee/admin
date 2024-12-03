"use client";

import { PageLoader } from "@/Components/common/PageLoader";
import { useSession } from "next-auth/react";

// eslint-disable-next-line sonarjs/function-return-type
export const SessionLoader = ({ children }) => {
  const { status } = useSession();


  if (status === "loading") {
    return <PageLoader/>;
  }

  return children;
};
