const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetLength = alphabet.length;

export function generateRandomId(length = 10, agg = ""){
  if(length <= 0) return agg;
  const randoIndex = Math.floor(Math.random() * alphabetLength);
  const randoLetter = alphabet[randoIndex];
return generateRandomId(length - 1, agg + randoLetter);
}
