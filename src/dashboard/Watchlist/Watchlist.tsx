import { WatchlistHeader } from "@/Components/ui/WatchlistHeader";
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { useState, useEffect } from 'react';

async function getData(): Promise<Payment[]> {
  // Sample array of payment data
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489ae731",
      amount: 250,
      status: "success",
      email: "john@example.com",
    },
    {
      id: "912cf445",
      amount: 75,
      status: "failed",
      email: "sara@example.com",
    },
    {
      id: "637bd298",
      amount: 180,
      status: "processing",
      email: "alex@example.com",
    },
    {
      id: "145ef923",
      amount: 320,
      status: "success",
      email: "emma@example.com",
    }
  ]
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div >
      <WatchlistHeader />
      <DataTable columns={columns} data={data} />
    </div>
  )
}

