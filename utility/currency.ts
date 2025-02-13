import jlconfig from "@/jlconfig.json";

export function currencyFormat(amount: number, currency: string) {
    if(currency == '') { currency = jlconfig.currency; }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    });
    return formatter.format(amount);
}