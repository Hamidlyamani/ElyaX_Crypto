
export interface coinType {
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    circulating_supply: number;
    current_price: number;
    chart: DataToPasseToChartInfo;
    fully_diluted_valuation: number;
    high_24h: number;
    id: string;
    image: string;
    last_updated: string;
    low_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    market_cap_rank: number;
    max_supply: number;
    name: string;
    price_change_24h: number;
    price_change_percentage_24h: number;
    roi: any;
    symbol: string;
    total_supply: number;
    total_volume: number;
    color?: string;
    strok?: string
};

export interface Chartinfo {
    coinId: string;
    chart: DataToPasseToChartInfo;
    vs_currency?: string;
    time: number;
    color?: string;
    strok?: string;
}
export interface chartdata {
    price: number;
    time: string;
}
export interface ChartDataShow {
    [coinId: string]: {
        prices: chartdata[];
        market_caps: chartdata[];
        total_volumes: chartdata[];
    }
}
export interface DataToPasseToChartInfo {
    prices: chartdata[];
    market_caps: chartdata[];
    total_volumes: chartdata[];
}

export interface TimeSelectorProps {
    activeTime: number;
    onTimeChange: (time: number) => void;
}

export interface chartRep {
    prices: [number, number][];
    market_caps: [number, number][];
    total_volumes: [number, number][];
}


