import customAxios from './axios.ts';
import { AxiosResponse } from 'axios';
import { Coin } from './types';

export const CoinApi = {
    getData: async (vs_currency = 'usd'): Promise<Coin[]> => {
        try {
            const response: AxiosResponse<Coin[]> = await customAxios.get('/markets', {
                params: {
                    vs_currency,
                    order: 'market_cap_desc',
                    per_page: 30,
                    page: 1
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching coin data:', error);
            throw error;
        }
    },
    getSpecificCoins: async (coinIds = ['bitcoin', 'ethereum', 'ripple'], vs_currency = 'usd') => {
        try {
            const response = await customAxios.get('/markets', {
                params: {
                    vs_currency,
                    ids: coinIds.join(',')
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching specific coins:', error);
            throw error;
        }
    },
    getMarketChart: async (coinId = 'bitcoin', vs_currency = 'usd', days = 1) => {
        try {
            const response = await customAxios.get(`/${coinId}/market_chart`, {
                params: {
                    vs_currency,
                    days
                }
            });
            return response.data;
        } catch (error) {
            console.error(`Error fetching market chart for ${coinId}:`, error);
            throw error;
        }
    }
};