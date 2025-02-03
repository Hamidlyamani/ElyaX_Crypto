import { createContext } from 'react';
import { CoinApi } from '@/Api/CoinApi';

type CoinContextType = {
    getSpecificCoins: typeof CoinApi.getSpecificCoins;
    getData: typeof CoinApi.getData;
    getMarketChart: typeof CoinApi.getMarketChart;
}

export const coinContext = createContext<CoinContextType>({
    getSpecificCoins: CoinApi.getSpecificCoins,
    getData: CoinApi.getData,
    getMarketChart: CoinApi.getMarketChart
});

