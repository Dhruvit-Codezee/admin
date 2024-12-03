"use client";

import "./globals.css";
import { PublicPageLayout } from "@/Components/Layouts/PublicPageLayout";
import { PrivatePageLayout } from "@/Components/Layouts/PrivatePageLayout";
import { SessionLoader } from "@/provider/SessionLoader";
import { usePathname } from "next/navigation";
import { AuthSessionProvider } from "@/provider/AuthSessionProvider";
import axios from "axios";


export default function RootLayout({ children }) {

  const currentPathname = usePathname();

  const authPage = currentPathname.startsWith("/auth");

  // axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_SERVER;

  return (
    <html lang="en">
      <body className="antialiased" >
        <AuthSessionProvider>
          <SessionLoader>
            {/* <Providers> */}
            {authPage ? (
              <PublicPageLayout>{children}</PublicPageLayout>
            ) : (
              <PrivatePageLayout  >{children}</PrivatePageLayout>
            )}
            {/* </Providers> */}
          </SessionLoader>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
