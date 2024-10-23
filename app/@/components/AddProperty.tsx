import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function AddProperty({ className }: { className?: string }) {
  return (
    <Card className={`${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">
          <h2>Add Property</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="">meetings</div>
      </CardContent>
    </Card>
  );
}
