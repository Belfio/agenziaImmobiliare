import { UserAuthForm } from "~/@/components/UserAuthForm";
import { Link } from "@remix-run/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/@/components/ui/card";

export default function LoginPage() {
  return (
    <Card className="w-fit m-auto mt-8">
      <CardHeader className="text-center">
        <div className="w-full relative"></div>
        <CardTitle>
          <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
        </CardTitle>
        <CardDescription>
          {/* <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p> */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center"></div>
            <UserAuthForm />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="m-auto">
          <Link to="/register" className="text-sm text-primary-500">
            Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
