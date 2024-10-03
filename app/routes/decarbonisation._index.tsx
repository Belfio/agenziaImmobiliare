import {
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import db from "~/@/lib/db";
import DecarboPage from "~/pages/decarbo";

import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "GL1 - Platform" },
    {
      name: "Green Lending 1 - Platform",
      content: "GL1 suppoerts the green transition of your mortgage portfolio.",
    },
  ];
};

export default function Index() {
  const { targets } = useLoaderData<typeof loader>();
  return (
    <div className="font-sans px-4">
      <DecarboPage targets={targets} />
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the dashboard");
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  if (!user) {
    return redirect("/login");
  }

  const targets = await db.target.getAll(user.userId);

  return { targets };
}
