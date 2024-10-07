import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import pp from "~/@/lib/propertyProcessing";
import { PropertyData } from "~/@/lib/types";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the properties index");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const propertyData: PropertyData = await pp.loadProperties();
  return json(propertyData, {
    headers: {
      "Cache-Control": "public, max-age=86400",
    },
  });
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
