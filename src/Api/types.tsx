
export interface coinType {
    id: number;
    name: string;
    symbol: string;
    image: string;
current_price: number;
    price_change_percentage_24h: number;
};

export interface Chartinfo {
        coinId: string;
        vs_currency: string;
        time: number;
        color: string;
        strok?: string;
}
export interface TimeSelectorProps {
    activeTime: number;
    onTimeChange: (time: number) => void;
}