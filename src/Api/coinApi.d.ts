export interface CoinApi {
    // Define your coinApi interface here
    // For example:
    getData?: () => Promise<any>;
    // Add other methods/properties that exist in coinApi.js
}

export const coinApi: CoinApi; 