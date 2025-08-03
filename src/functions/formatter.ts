// Davi Teixeira => DT
// Davi => D
export function formatUserName(name: string): string {
  if (name === "") return "";
  const splitedName = name.trim().split(/\s+/);

  if (splitedName.length === 1) {
    return splitedName[0][0].toLocaleUpperCase();
  }

  return (
    splitedName[0][0] + splitedName[splitedName.length - 1][0]
  ).toUpperCase();
}
