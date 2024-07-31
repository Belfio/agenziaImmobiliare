import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import LoginPage from "~/pages/login";
export const meta: MetaFunction = () => {
  return [
    { title: "GL1 - Login" },
    {
      name: "Green Lending 1 - Login",
      content: "GL1 suppoerts the green transition of your mortgage portfolio.",
    },
  ];
};
export default function Screen() {
  return <LoginPage />;
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
}
export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
  });
}
