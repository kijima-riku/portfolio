"use client";

import React, { ReactNode } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IDElayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

const pages = [
  { name: "About.tsx", path: "/about" },
  { name: "SkillSet.tsx", path: "/skills" },
  { name: "Projects.tsx", path: "/projects" },
];

export default function IDElayout({ children }: IDElayoutProps) {
  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}>
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {pages.map((page) => (
              <ListItem key={page.name} disablePadding>
                <Link
                  href={page.path}
                  passHref
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                  }}>
                  <ListItemButton selected={pathname === page.path}>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
