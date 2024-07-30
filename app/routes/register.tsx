import { Button, buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/UserAuthForm";
import { cn } from "@/lib/utils";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, json, Link, MetaFunction } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";
import { register } from "~/services/login.server";

export const meta: MetaFunction = () => {
  return [
    { title: "GL1 - Register" },
    {
      name: "Green Lending 1 - Register",
      content: "GL1 suppoerts the green transition of your mortgage portfolio.",
    },
  ];
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            GL1
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;We want to support your efforts in the green transition
                of your mortgage portoflio&rdquo;
              </p>
              <footer className="text-sm">Soma dn Aviv</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <Link
            to="/login"
            className="absolute right-4 top-4 md:right-8 md:top-8"
          >
            Login
          </Link>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Second, we need to export an action function, here we will use the
// `authenticator.authenticate method`
export async function action({ request }: ActionFunctionArgs) {
  console.log("action in the register");
  const formData = await request.formData();

  await register({
    username: String(formData.get("email")),
    password: String(formData.get("password")),
  });

  return json({ ok: true });
}

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not

// export async function loader({ request }: LoaderFunctionArgs) {
//   // If the user is already authenticated redirect to /dashboard directly
//   return await authenticator.isAuthenticated(request, {
//     successRedirect: "/dashboard",
//   });
// }
