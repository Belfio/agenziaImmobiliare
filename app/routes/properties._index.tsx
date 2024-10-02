import {
  ActionFunctionArgs,
  HeadersFunction,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import pp from "~/@/lib/propertyProcessing";
import { PropertyData } from "~/@/lib/types";
import PropertiesPage from "~/pages/properties";

import { authenticator } from "~/services/auth.server";

import { Suspense } from "react";
export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": `max-age=3600`,
  };
};

export const meta: MetaFunction = () => {
  return [
    { title: "GL1 - Platform" },
    {
      name: "Green Lending 1 - Platform",
      content: "GL1 supports the green transition of your mortgage portfolio.",
    },
  ];
};

const propDummy: PropertyData = {
  properties: [],
  addressOptions: [],
  propertiesWithLandRegistryData: [],
};
export default function Index() {
  const { propertyData } = useLoaderData<{ propertyData: PropertyData }>();
  return (
    <div className="px-4">
      <Suspense
        fallback={
          <>
            <PropertiesPage properties={propDummy} />
          </>
        }
      >
        <Await resolve={propertyData}>
          {(propertyData) => <PropertiesPage properties={propertyData} />}
        </Await>
      </Suspense>
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the properties index");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const propertyData: PropertyData = await pp.loadProperties();
  return { propertyData };
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
