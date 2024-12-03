import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PageLoader } from "../common/PageLoader";

export function PublicPageLayout({ children }) {
  const { status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "authenticated") {
    return <PageLoader />;
  }

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        // background: (theme) => theme.palette.app.color.slate[800],
      }}
    >
      {children}
    </Box>
  );
}
