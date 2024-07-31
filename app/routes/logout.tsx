import { Button } from "@/components/ui/button";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, MetaFunction } from "@remix-run/react";
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
    <div>
      Sad to see you leaaaavinggg
      <Form method="post" className="bg-gray-200">
        <Button>Login</Button>
      </Form>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
}
