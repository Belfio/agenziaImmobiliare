import { type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
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
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">GL1</h1>
    </div>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("loader in the index");
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
    successRedirect: "/dashboard",
  });
}
