import { Search } from "./SearchNav";
import { UserNav } from "./UserNav";

export default function DashHeader() {
  return (
    <header className="bg-white border-b border-muted dark:border-muted  ">
      <div className="flex items-center justify-between h-16 px-4 pr-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">GL1</h1>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
