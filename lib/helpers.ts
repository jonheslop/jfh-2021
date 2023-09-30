export function convertToClosestFraction(decimal: number): string {
  const epsilon = 1.0E-5;
  let numerator = 1;
  let denominator = 1;
  let error = Math.abs(decimal - numerator / denominator);

  for (let d = 2; d <= 10000; d++) {
    const n = Math.round(decimal * d);
    const newError = Math.abs(decimal - n / d);

    if (newError < error) {
      numerator = n;
      denominator = d;
      error = newError;
    }

    if (error < epsilon) {
      break;
    }
  }
  
  denominator = Math.round(denominator / 100) * 100;

  return `${numerator}/${denominator}`;
}
