import {
  ActionFunctionArgs,
  redirect,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useContext, useEffect } from "react";
import pp from "~/@/lib/propertyProcessing";
import { User } from "~/@/lib/types";
import OverviewPage from "~/pages/overview";
import { UserContext } from "~/providers/userContext";

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
  const { propertyOverview, userProfile } = useLoaderData<typeof loader>();
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    setUser(userProfile);
  }, [userProfile, setUser]);
  return (
    <div className="font-sans p-4">
      <OverviewPage propertyOverview={propertyOverview} />
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
  const propertyOverview = await pp.overviewProperties();
  const userProfile: User = {
    email: user.email,
    name: "name",
    id: "id",
    roles: ["user"],
    createdAt: user.createdAt,
    avatar: "img",
    surname: "surname",
  };
  return { propertyOverview, userProfile };
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
