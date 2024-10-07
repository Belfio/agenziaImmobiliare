import { json, LoaderFunctionArgs } from "@remix-run/node";
import pp from "~/@/lib/propertyProcessing";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the properties index");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const propertyOverview = await pp.overviewProperties();
  return json(propertyOverview, {
    headers: {
      "Cache-Control": "public, max-age=86400",
    },
  });
}
