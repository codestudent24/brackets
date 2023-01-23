module.exports = function check(str, bracketsConfig) {
  console.log("str = " + str);
  for (let i = 0; i < bracketsConfig.length; i++) {
    console.log(bracketsConfig[i]);
  }

  let index = 0;
  for (let i = 0; i < str.length; i++) {
    //    console.log("checking for " + str[i]);
    //    console.log("i = " + i);
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (
        str[i] === bracketsConfig[j][0] &&
        str[i + 1] === bracketsConfig[j][1]
      ) {
        str = str.replace(`${str[i]}${str[i + 1]}`, "");
        i = -1;
        //        console.log("str = " + str);
        //        console.log("i = " + i);
      }
    }
  }
  if (str == "") return true;
  return false;
};
