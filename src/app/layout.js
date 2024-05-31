import { Inter } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/context/DataContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TODO App",
  description: "ToDo Task App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <div>
            {children}
          </div>

        </DataProvider>
      </body>
    </html>
  );
}
