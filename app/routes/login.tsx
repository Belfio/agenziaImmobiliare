import type {
  ActionFunctionArgs,
  HeadersFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
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
export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": `max-age=3600`,
  };
};

export default function Screen() {
  return <LoginPage />;
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/",
    failureRedirect: "/login?error=true",
  });
}
export async function loader({ request }: LoaderFunctionArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
}
