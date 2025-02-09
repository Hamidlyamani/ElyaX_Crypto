import { Balance } from "@/Components/Balance";
import { Coins } from "@/Components/ui/Coins";
import Header from "@/Components/Header";
import { PortfolioHome } from "@/Components/portfolioHome";
import { ChartCoin } from "@/Components/ChartCoin";
import { useCoinData } from "@/contextes/coinDataContext";


export default function Home() {
  const { coins, chartData, loading, error } = useCoinData();
  console.log("loading")
  console.log(coins)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mx-4 md:mx-8 my-4 ">
      <Header namePage="dachboard" />

      <Balance />
      <Coins />
      <div className="flex gap-4 flex-col-reverse lg:flex-row  justify-between">
        <PortfolioHome />
        <ChartCoin />
      </div>
    </div>
  )
}

