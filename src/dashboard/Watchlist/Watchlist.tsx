
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useCoinData } from "@/contextes/coinDataContext";


export default function DemoPage() {

  const { coins, loading } = useCoinData();
  if (loading) {
    return (
      <div >
        loading....
      </div>
    );
  }
  return (
    <div className="overflow-auto">
      <DataTable columns={columns} data={coins} />
    </div>
  )
}

