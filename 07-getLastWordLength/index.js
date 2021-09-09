export const getLastWordLength = str => {
  if(!str) return 0
  str = str.trim().split(" ")

 return str[str.length -1].length
};
