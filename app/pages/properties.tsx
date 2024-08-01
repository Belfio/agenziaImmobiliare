import { DataTable } from "~/@/components/DataTable";
import { columns } from "~/@/components/DataTable/columns";

import { tasks } from "~/@/data/tableData";

export default function PropertiesPage() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Properties </h1>
      <p className="text-gray-500">
        Search and filter through the properties in your portfolio and not yet
        in your portfolio (?).
      </p>
      <div className="mt-8">
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
}
