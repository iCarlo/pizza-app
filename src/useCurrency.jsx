const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const priceConverter = (amount) => intl.format(amount);

export function useCurrency(amount) {
  return priceConverter(amount);
}
