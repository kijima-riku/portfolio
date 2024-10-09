"use client";

import React, { ReactNode, useState } from "react";
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
  Tabs,
  Tab,
} from "@mui/material";
import { styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

interface VSCodeLayoutProps {
  children: ReactNode;
}

const pages = [
  { name: "About.tsx", path: "/about" },
  { name: "SkillSet.tsx", path: "/skills" },
  { name: "Projects.tsx", path: "/projects" },
];

const StyledTab = styled(Tab)({
  textTransform: "none", // これにより大文字変換が無効になります
  minHeight: "48px", // タブの高さを調整
  padding: "0 16px", // パディングを調整
});

export default function VSCodeLayout({ children }: VSCodeLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(pathname);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
    router.push(newValue);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar
        position="static"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
          }}>
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {pages.map((page) => (
                <ListItem key={page.name} disablePadding>
                  <ListItemButton
                    selected={pathname === page.path}
                    onClick={() => {
                      setActiveTab(page.path);
                      router.push(page.path);
                    }}>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: "48px", // タブバーの高さを調整
              "& .MuiTabs-indicator": {
                // インジケーターのスタイルを調整
                height: "2px",
                bottom: 0,
              },
            }}>
            {pages.map((page) => (
              <StyledTab
                key={page.path}
                label={page.name}
                value={page.path}
                sx={{
                  "&.Mui-selected": {
                    color: "primary.main", // 選択されたタブの色を調整
                  },
                }}
              />
            ))}
          </Tabs>
          <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}
