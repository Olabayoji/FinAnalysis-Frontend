export const BASE_URL = 'https://sea-lion-app-x3c3i.ondigitalocean.app'
export interface IOHLCData {
    readonly close: number;
    readonly date: Date;
    readonly high: number;
    readonly low: number;
    readonly open: number;
    readonly volume: number;
}