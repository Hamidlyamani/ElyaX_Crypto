import { Balance } from "@/Components/Balance";
import { Coins } from "@/Components/ui/Coins";
import { PortfolioHome } from "@/Components/portfolioHome";
import { ChartCoin } from "@/Components/ChartCoin";
import { useCoinData } from "@/contextes/coinDataContext";
import HomeSkeleton from "./HomeSkeleton.tsx";
import NoData from "../noData.tsx";

export default function Home() {
  const { loading, error } = useCoinData();


  const renderContent = () => {


    if (loading) {
      return (
        <div >
          <HomeSkeleton />
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

      <div >
        <Balance />
        <Coins />
        <div className="flex gap-4 flex-col-reverse lg:flex-row justify-between">
          <PortfolioHome />
          <ChartCoin />
        </div>
      </div>
    );
  };

  return renderContent();
}

