import { UserNav } from "./UserNav";

export default function DashHeader({ user }: { user: { email: string } }) {
  console.log("user", user);
  return (
    <header className="bg-white border-b border-dark dark:border-muted w-full ">
      <div className="flex items-center justify-between h-16 px-4 pr-8">
        <div className="ml-auto flex items-center space-x-4">
          <UserNav user={user} />
        </div>
      </div>
    </header>
  );
}
