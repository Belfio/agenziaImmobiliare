import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import pp from "~/@/lib/propertyProcessing";
import OverviewPage from "~/pages/overview";

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
  const { propertyOverview } = useLoaderData<typeof loader>();
  return (
    <div className="font-sans p-4">
      <OverviewPage propertyOverview={propertyOverview} />
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the dashboard");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const propertyOverview = await pp.overviewProperties();
  return { propertyOverview };
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
