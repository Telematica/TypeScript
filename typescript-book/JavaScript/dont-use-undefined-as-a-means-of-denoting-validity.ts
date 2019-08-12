//Bad
/*
function toInt(str: string) {
  return str ? parseInt(str) : undefined;
}
*/

function toInt(str: string): { valid: boolean, int?: number } {
  const int = parseInt(str);
  if (isNaN(int)) {
    return { valid: false };
  }
  else {
    return { valid: true, int };
  }
}