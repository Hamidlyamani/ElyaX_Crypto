import { createContext, useContext, useEffect, useState } from "react";
import { CoinApi } from "@/Api/CoinApi";
import { coinType, chartdata } from "@/Api/types";

// Define the context type
type CoinContextType = {
    coins: any[];
    chartData: { [coinId: string]: { time: string; price: number }[] };
    loading: boolean;
    error: string | null;
};

// Create context with default values
export const CoinContext = createContext<CoinContextType | null>(null);

export const CoinProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [coins, setCoins] = useState<coinType[]>([]);
    const [chartData, setChartData] = useState<{ [coinId: string]: { time: string; price: number }[] }>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Default coin settings
    const defaultSettings = {
        coinIds: ['bitcoin', 'ethereum', 'fasttoken', 'solana'], // Coins to fetch
        vs_currency: "usd",
        time: 0.04, // Default time
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
                setLoading(false);
            }
        };

        const fetchMarketCharts = async () => {
            try {
                const chartResults: { [coinId: string]: { time: string; price: number }[] } = {};

                await Promise.all(
                    defaultSettings.coinIds.map(async (coinId) => {
                        const data = await CoinApi.getMarketChart(coinId, defaultSettings.vs_currency, defaultSettings.time);
                        chartResults[coinId] = data.prices.map(([timestamp, price]: [number, number]) => ({
                            time: defaultSettings.time <= 1
                                ? new Date(timestamp).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
                                : new Date(timestamp).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
                            price: Number(price),
                        }));
                    })
                );
                setChartData(chartResults);
            } catch (err) {
                console.error("Error fetching market charts:", err);
            }
        };

        fetchCoins();
        fetchMarketCharts();
    }, []);

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
