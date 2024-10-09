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
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import TranslateIcon from "@mui/icons-material/Translate";
import { useLanguage } from "@/components/LanguageContext";

const StyledTab = styled(Tab)({
  textTransform: "none",
  minHeight: "48px",
  padding: "0 16px",
});

interface VSCodeLayoutProps {
  children: ReactNode;
}

const pages = [
  { name: "About.tsx", path: "/about" },
  { name: "SkillSet.tsx", path: "/skills" },
  { name: "Projects.tsx", path: "/projects" },
];

export default function VSCodeLayout({ children }: VSCodeLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar
        position="static"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Button
            color="inherit"
            onClick={toggleLanguage}
            startIcon={<TranslateIcon />}>
            {language === "en" ? "English" : "日本語"}
          </Button>
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
                    onClick={() => router.push(page.path)}>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Tabs
            value={pathname}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: "48px",
              "& .MuiTabs-indicator": {
                height: "2px",
                bottom: 0,
              },
              ml: "20px", // 左マージンを追加
            }}>
            {pages.map((page) => (
              <StyledTab
                key={page.path}
                label={page.name}
                value={page.path}
                sx={{
                  "&.Mui-selected": {
                    color: "primary.main",
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
