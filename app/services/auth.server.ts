import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { User } from "~/utils/types";

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<User>(sessionStorage);
