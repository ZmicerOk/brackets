module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) {
    return false;
  }

  let configArray = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    configArray.push(bracketsConfig[i].join(""));
  }

  let tryout = 1;

  do {
    for (let j = 0; j < configArray.length; j++) {
      if (str.includes(configArray[j])) {
        str = str.replace(configArray[j], "");
        tryout++;
      }
    }
    tryout--;
  } while (tryout);
  return str.length == 0;
};
