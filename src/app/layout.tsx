// app/layout.tsx
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import ThemeRegistry from "@/components/ThemeRegistry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </LanguageProvider>
      </body>
    </html>
  );
}
