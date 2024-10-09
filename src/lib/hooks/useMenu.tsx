import { useState } from "react";

export function useMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return { menuOpen, toggleMenu };
}
