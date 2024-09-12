import type { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "GL1 - Logout" },
    {
      name: "Green Lending 1 - Logout",
      content: "GL1 suppoerts the green transition of your mortgage portfolio.",
    },
  ];
};

export default function Screen() {
  return (
    <div className="flex items-center justify-center h-screen">
      Logging out...
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/login",
  });
}
