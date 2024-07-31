import { MultiBarChartUI } from "@/components/MultiBarChart";
import { PieChartUI } from "@/components/PieChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortfolioPage() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Portfolio </h1>
      <Tabs defaultValue="Emissions" className="space-y-4 mt-8">
        <TabsList>
          <TabsTrigger value="Emissions">Emissions</TabsTrigger>
          <TabsTrigger value="rating">EPC rating</TabsTrigger>
          <TabsTrigger value="subsidy">Subsidy</TabsTrigger>
          <TabsTrigger value="property">Property Size</TabsTrigger>
        </TabsList>
        <TabsContent value="Emissions" className="space-y-4">
          <h1 className="text-xl">Emissions </h1>
          <PieChartUI className="mt-8" />
        </TabsContent>
        <TabsContent value="rating" className="space-y-4">
          <h1 className="text-xl">EPC rating </h1>
          <div className="flex">
            <PieChartUI className="mt-8" />
            <MultiBarChartUI className="mt-8" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
