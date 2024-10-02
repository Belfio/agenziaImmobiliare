import type { ActionFunctionArgs } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";
import RegisterPage from "~/pages/register";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "GL1 - Register" },
    {
      name: "Green Lending 1 - Register",
      content: "GL1 suppoerts the green transition of your mortgage portfolio.",
    },
  ];
};

export default function AuthenticationPage() {
  return <RegisterPage />;
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("action in the register");

  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/logout",
  });
}
