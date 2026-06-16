export const numbers = Array.from({ length: 100 }, (_, i) => {
  const num = i + 1;

  return {
    number: num,
    word: numberToWords(num),
  };
});

function numberToWords(num: number): string {
  const words = [
    "Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"
  ];

  const teens = [
    "Ten","Eleven","Twelve","Thirteen","Fourteen",
    "Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"
  ];

  const tens = [
    "","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"
  ];

  if (num < 10) return words[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) {
    return `${tens[Math.floor(num / 10)]} ${words[num % 10]}`.trim();
  }
  return "One Hundred";
}