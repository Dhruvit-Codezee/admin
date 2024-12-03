"use client";


import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Box, Stack } from "@mui/material";

export function PrivatePageLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box>
    <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    <Box sx={{ display: "flex" }}>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* <Stack
  component="main"
  sx={{
    flex: 1, 
    p: 4, 
    mt: "64px", 
    transition: "all 0.3s", 
    ml: isSidebarOpen ? "14.4rem" : "2.2rem", 
  }}
>
  {children}
</Stack> */}
      <main 
        className={`flex-1 p-4 mt-[64px] transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"
          }`}
      >
        {children}
      </main>
    </Box>
  </Box>
  );
}

