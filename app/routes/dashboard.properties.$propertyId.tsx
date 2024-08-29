import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import pp from "~/@/lib/propertyProcessing";
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
  const { propertyId } = useParams();
  const { property } = useLoaderData<typeof loader>();

  return (
    <div className="">
      {JSON.stringify(propertyId)}
      {JSON.stringify(property)}
    </div>
  );
}

export async function loader({ request, params }: LoaderFunctionArgs) {
  console.log("loader in the property page");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const propertyId = params.property;
  if (!propertyId) {
    return { property: null };
  }
  const property = await pp.loadProperty(String(propertyId));
  return { property };
}

export async function action({ request }: ActionFunctionArgs) {
  return await authenticator.logout(request, {
    redirectTo: "/logout",
  });
}
