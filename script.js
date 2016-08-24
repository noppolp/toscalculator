function calculate(){
  //base info
  var baseClass = document.getElementById("base-class").value;
  var level = document.getElementById("level").value;

  //stat
  var invesStr = parseInt(document.getElementById("inves-str").value);
  var invesCon = parseInt(document.getElementById("inves-con").value);
  var invesInt = parseInt(document.getElementById("inves-int").value);
  var invesSpr = parseInt(document.getElementById("inves-spr").value);
  var invesDex = parseInt(document.getElementById("inves-dex").value);

  var itemStr = parseInt(document.getElementById("item-str").value);
  var itemCon = parseInt(document.getElementById("item-con").value);
  var itemInt = parseInt(document.getElementById("item-int").value);
  var itemSpr = parseInt(document.getElementById("item-spr").value);
  var itemDex = parseInt(document.getElementById("item-dex").value);

  var baseStr = 0;
  var baseCon = 0;
  var baseInt = 0;
  var baseSpr = 0;
  var baseDex = 0;
  //basestat
  switch(baseClass) {
    case "swordman":
        baseStr = 7;
        baseCon = 8;
        baseInt = 2;
        baseSpr = 3;
        baseDex = 5;
        break;
    case "wizard":
        baseStr = 3;
        baseCon = 3;
        baseInt = 8;
        baseSpr = 7;
        baseDex = 4;
        break;
    case "archer":
        baseStr = 6;
        baseCon = 3;
        baseInt = 3;
        baseSpr = 4;
        baseDex = 8;
        break;
    case "cleric":
        baseStr = 5;
        baseCon = 6;
        baseInt = 4;
        baseSpr = 4;
        baseDex = 3;
        break;
  }

  var actualStr = Math.ceil(((calBonusStat(invesStr) + baseStr + invesStr)* 1.6) + itemStr);
  var actualCon = Math.ceil(calBonusStat(invesCon) + baseCon + invesCon + itemCon);
  var actualInt = Math.ceil(((calBonusStat(invesInt) + baseInt + invesInt) * 1.6) + itemInt);
  var actualSpr = Math.ceil(calBonusStat(invesSpr) + baseSpr + invesSpr + itemSpr);
  var actualDex = Math.ceil(calBonusStat(invesDex) + baseDex + invesDex + itemDex);
  // Display Stat Result
  document.getElementById("actual-str").innerHTML = actualStr;
  document.getElementById("actual-con").innerHTML = actualCon;
  document.getElementById("actual-int").innerHTML = actualInt;
  document.getElementById("actual-spr").innerHTML = actualSpr;
  document.getElementById("actual-dex").innerHTML = actualDex;

  //HP
  var multiplier = 0;
  switch(baseClass) {
    case "swordman":
        multiplier = 3.3;
        break;
    case "wizard":
        multiplier = 1.1;
        break;
    case "archer":
        multiplier = 1.4;
        break;
    case "cleric":
        multiplier = 1.5;
        break;
  }
  var hp = Math.ceil((multiplier * (level-1) * 17) + (actualCon * 85));
  document.getElementById("hp").innerHTML = hp;
}

function calBonusStat(invesStat){
  var result = 0;
  for (var i = 0; i <= invesStat; i++) {
    //result++;
    if (i >= 1 && i <= 50) {
      if (i%5===0) {
        result++;
      }
    }else if (i >= 51 && i <= 150) {
      if (i%4===0) {
        result++;
      }
    }else if (i >= 151 && i <= 300) {
      if (i%3===0) {
        result++;
      }
    }else if (i >= 300 && i <= 500) {
      if (i%2===0) {
        result++;
      }
    }else if (i >= 501) {
      result++;
    }
  }
  return result;
}
