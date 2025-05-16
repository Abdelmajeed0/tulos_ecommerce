import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommerce Backend",
  description: "Backend build with sanity with next js project",
};
function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

export default RootLayout;
