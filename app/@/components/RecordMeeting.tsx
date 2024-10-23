import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function RecordMeeting({ className }: { className?: string }) {
  return (
    <Card className={`${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold text-white">
          <h2 className="text-white">Record Meeting</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm">meetings</div>
        <Button className="dark">Record</Button>
      </CardContent>
    </Card>
  );
}
