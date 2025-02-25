import { createContext, useContext, useEffect, useState } from "react";
import { CoinApi } from "@/Api/CoinApi";
import { coinType, chartdata, chartRep, ChartDataShow } from "@/Api/types";
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
// Define the context type
type CoinContextType = {
    coins: any[];
    chartData: ChartDataShow;
    loading: boolean;
    error: string | null;
};

// Create context with default values
export const CoinContext = createContext<CoinContextType | null>(null);

export const CoinProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [coins, setCoins] = useState<coinType[]>([]);
    const [chartData, setChartData] = useState<ChartDataShow>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [loadingCoins, setLoadingCoins] = useState(true);
    const [loadingCharts, setLoadingCharts] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Default coin settings
    const defaultSettings = {
        coinIds: ['bitcoin', 'ethereum', 'mantra-dao', 'solana'], // Coins to fetch
        vs_currency: "usd",
        time: 0.04, // Default time
    };
    const formatChartData = (data: [number, number][]): chartdata[] => {
        return data.map(([timestamp, value]) => ({
            time:
                defaultSettings.time <= 1
                    ? new Date(timestamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
                    : new Date(timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
            price: Number(value),
        }));
    };

    useEffect(() => {
        const fetchCoins = async () => {
            try {
                const data: coinType[] = await CoinApi.getData();  // Fetch main coin data
                setCoins(data);
            } catch (err) {
                setError("Error fetching coin data");
                console.error("Error fetching coins:", err);
            } finally {
                setLoadingCoins(false); // Update loading state for coins
            }
        };

        const fetchMarketCharts = async () => {
            const chartResults: {
                [coinId: string]: {
                    prices: chartdata[];
                    market_caps: chartdata[];
                    total_volumes: chartdata[];
                };
            } = {};
            for (const coinId of defaultSettings.coinIds) {
                try {
                    const data: chartRep = await CoinApi.getMarketChart(
                        coinId,
                        defaultSettings.vs_currency,
                        defaultSettings.time
                    );

                    if (!chartResults[coinId]) {
                        chartResults[coinId] = { prices: [], market_caps: [], total_volumes: [] };
                    }

                    const formattedData = {
                        prices: formatChartData(data.prices),
                        market_caps: formatChartData(data.market_caps),
                        total_volumes: formatChartData(data.total_volumes),
                    };


                    // Append new data instead of replacing the entire array
                    chartResults[coinId].prices.push(...formattedData.prices);
                    chartResults[coinId].market_caps.push(...formattedData.market_caps);
                    chartResults[coinId].total_volumes.push(...formattedData.total_volumes);
                    // Log and update state

                    setChartData((prevChartData) => {
                        const updatedChartData = {
                            ...prevChartData,
                            [coinId]: {
                                prices: [...(prevChartData[coinId]?.prices || []), ...formattedData.prices],
                                market_caps: [...(prevChartData[coinId]?.market_caps || []), ...formattedData.market_caps],
                                total_volumes: [...(prevChartData[coinId]?.total_volumes || []), ...formattedData.total_volumes],
                            }
                        };
                        return { ...updatedChartData }; // Ensure a fresh object reference
                    });



                    await delay(200);
                } catch (err) {
                    console.error(`Error fetching chart for ${coinId}:`, err);
                } finally {

                }
            }
            setLoadingCharts(false); // Update loading state for charts
        };


        fetchCoins();
        fetchMarketCharts();
    }, []);
    useEffect(() => {
        if (!loadingCoins && !loadingCharts) {
            setLoading(false);
            // console.log("Updated chartData:", chartData);
        }
    }, [loadingCoins, loadingCharts]);
    return (
        <CoinContext.Provider value={{ coins, chartData, loading, error }}>
            {children}
        </CoinContext.Provider>
    );
};

// Custom hook for easy access
export const useCoinData = () => {
    const context = useContext(CoinContext);
    if (!context) {
        throw new Error("useCoinData must be used within a CoinProvider");
    }
    return context;
};
