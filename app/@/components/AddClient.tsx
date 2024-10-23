import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function AddClient({ className }: { className?: string }) {
  return (
    <Card className={`${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">
          <h2>Add Client</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="">meetings</div>
      </CardContent>
    </Card>
  );
}
