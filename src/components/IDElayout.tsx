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
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuIcon from "@mui/icons-material/Menu";
import { useLanguage } from "@/contexts/LanguageContext";

const StyledTab = styled(Tab)({
  textTransform: "none",
  minHeight: "48px",
  padding: "0 16px",
});

interface IDELayoutProps {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const pages = [
  { name: "About.tsx", value: "about" },
  { name: "SkillSet.tsx", value: "skills" },
  { name: "Projects.tsx", value: "projects" },
];

export default function IDELayout({
  children,
  activeTab,
  setActiveTab,
}: IDELayoutProps) {
  const { language, setLanguage } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ja" : "en");
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "background.default",
      }}>
      <AppBar
        position="static"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Kijima{"\u2019"}s Portfolio
          </Typography>
          <Button
            color="inherit"
            onClick={toggleLanguage}
            startIcon={<TranslateIcon />}>
            {language === "en" ? "English" : "日本語"}
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", flexGrow: 1, overflow: "auto" }}>
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: "border-box",
            },
          }}>
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {pages.map((page) => (
                <ListItem key={page.name} disablePadding>
                  <ListItemButton
                    selected={activeTab === page.value}
                    onClick={() => {
                      setActiveTab(page.value);
                      if (isMobile) toggleDrawer();
                    }}>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: "48px",
              "& .MuiTabs-indicator": {
                height: "2px",
                bottom: 0,
              },
              ml: isMobile ? "0px" : "20px",
            }}>
            {pages.map((page) => (
              <StyledTab
                key={page.value}
                label={page.name}
                value={page.value}
                sx={{
                  "&.Mui-selected": {
                    color: "primary.main",
                  },
                }}
              />
            ))}
          </Tabs>

          <Box
            sx={{
              flexGrow: 1,
              p: 3,
              overflow: "auto",
              ml: isMobile ? "0px" : "20px",
              width: "100%",
            }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
