const objToSearchStr = (obj: Record<string, string | number>) => {
  const strPairs: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    strPairs.push(`${key}=${value}`);
  }

  return strPairs.join("&");
};
export default objToSearchStr;
