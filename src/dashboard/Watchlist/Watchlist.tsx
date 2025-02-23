
import NoData from "../noData";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useCoinData } from "@/contextes/coinDataContext";


export default function DemoPage() {

  const { coins, error, loading } = useCoinData();
  if (loading) {
    return (
      <div >
        loading....
      </div>
    );
  }
  if (error) {
    return (
      <div >
        <NoData />
      </div>
    );
  }
  return (
    <div className="overflow-auto">
      <DataTable columns={columns} data={coins} />
    </div>
  )
}

