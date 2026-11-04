const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatPrice(valueInCents: number): string {
  return formatter.format(valueInCents / 100);
}