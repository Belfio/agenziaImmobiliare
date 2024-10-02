import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./globals.css";
import "@/assets/fonts/Arial_Nova/Arial_Nova.ttf";
import "@/assets/fonts/Poppins/Poppins-Regular.ttf";
import "@/assets/fonts/Poppins/Poppins-Light.ttf";
import "@/assets/fonts/Poppins/Poppins-Bold.ttf";
import { HeadersFunction } from "@remix-run/node";
import DashboardLayout from "./pages/dashboardLayout";
import { UserProvider } from "./providers/userContext";

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": `max-age=3600`,
  };
};

export function Layout() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <UserProvider>
          <DashboardLayout />
        </UserProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
