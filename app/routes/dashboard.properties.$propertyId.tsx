import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import pp from "~/@/lib/propertyProcessing";
import PropertyPage from "~/pages/property";
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
  const { property } = useLoaderData<typeof loader>();
  return <PropertyPage property={property} />;
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  console.log("loader in the property page");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const propertyId = params.propertyId;
  if (!propertyId) {
    return { property: "no propId" };
  }
  const property = await pp.loadProperty(String(propertyId));
  // if (property) {
  //   pp.postProcessProperty(property);
  // }

  return { property };
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
