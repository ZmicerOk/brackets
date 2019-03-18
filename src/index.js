module.exports = function check(str, bracketsConfig) {
  // your solution

checkTerri(0,str.length,str,bracketsConfig)


}


checkTerri = function (l, r, str, bracketsConfig) {
  r = str.length;
  l = 0;
  let resm = true;
  if (!checkCondInArr(str[l], str[r], bracketsConfig)) {
    //  return false
  while((r>l)&&(!checkCondInArr(l+1,r,str.substr(l+1,r-l),bracketsConfig))){
    r--;
  }
  if(!checkCondInArr(l+1,r,str.substr(l+1,r-l),bracketsConfig))
  {
    resm=false; 
  }

  } else {
    if (substr(l + 1, str.length - 1).length > 0) {
      checkTerri(l + 1, r - 1,str.substr(l + 1, str.length - 1),bracketsConfig);
    }
  }
  return resm;
};

checkCondInArr = function (arg1, arg2, bracketsConfig) {
  let res = false;
  for(let tempi=0;tempi<bracketsConfig.length;tempi++) {
    
    if ((bracketsConfig[tempi][0] = arg1) && (bracketsConfig[tempi][2] = arg2)) {
      res = true;
    }
  }
  return res;
};