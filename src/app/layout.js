import "./globals.css";

export const metadata = {
  title: "Manjesh Yadav | Portfolio",
  description:
    "Java Developer | MERN Stack Developer | Machine Learning Enthusiast",
  keywords: [
    "Java Developer",
    "MERN Stack",
    "Machine Learning",
    "Portfolio",
    "Next.js",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}