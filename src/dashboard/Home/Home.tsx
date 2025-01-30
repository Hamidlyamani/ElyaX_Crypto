import { Balance } from "@/Components/Balance";
import { Coins } from "@/Components/ui/Coins";
import Header from "@/Components/Header";
import { PortfolioHome } from "@/Components/portfolioHome";
import { ChartCoin } from "@/Components/ChartCoin";



export default function Home() {
  return (<div className="mx-8 my-4">
    <Header />
    <Balance />
    <Coins />
    <div className="flex gap-4  justify-between">
      <PortfolioHome />
      <ChartCoin />
    </div>
  </div>
  )
}

