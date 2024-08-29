import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import pp from "~/@/lib/propertyProcessing";
import { PropertyData } from "~/@/lib/types";
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
  const { propertyData } = useLoaderData<typeof loader>() as {
    propertyData: PropertyData;
  };
  return (
    <div className="font-sans p-4">
      <DecarboPage properties={propertyData} />
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the dashboard");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const propertyData: PropertyData = await pp.loadProperties(500);
  if (!propertyData) {
    return {};
  }
  console.log(propertyData.properties[0]);

  return {
    propertyData,
    addressOptions: propertyData.addressOptions,
  };
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
