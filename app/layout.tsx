import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "مساعد حمدي يحي", description: "المساعد الرقمي الشخصي لحمدي يحي" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }