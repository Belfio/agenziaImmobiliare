import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import pp from "~/@/lib/propertyProcessing";
import { PropertyData } from "~/@/lib/types";
import PropertiesPage from "~/pages/properties";

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
      <PropertiesPage properties={propertyData} />
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  console.log("loader in the properties index");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const propertyData: PropertyData = await pp.loadProperties(500);
  if (!propertyData) {
    return {};
  }
  const property = propertyData.properties.find(
    (property) =>
      property.propertyAttributes.address.toLowerCase() ===
      url.searchParams.get("address")?.toLowerCase()
  );
  if (property) {
    pp.postProcessProperty(property);
  }
  // await new Promise(resolve => setTimeout(resolve, 200))

  return {
    propertyData,
    property,
    addressOptions: propertyData.addressOptions,
  };
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
