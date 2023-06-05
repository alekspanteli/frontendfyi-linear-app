import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { Container } from "@/components/container";
import { Header } from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} bg-background text-white`}
    >
      <body>
        <Header />
        <main className="pt-[--navbar-height]">{children}</main>
        <footer>
          <Container>footer</Container>
        </footer>
      </body>
    </html>
  );
}
