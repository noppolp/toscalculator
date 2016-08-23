function calculate(){
  //base info
  var baseClass = document.getElementById("base-class").value;
  var level = document.getElementById("level").value;

  //stat
  var invesStr = document.getElementById("inves-str").value;
  var invesCon = document.getElementById("inves-con").value;
  var invesInt = document.getElementById("inves-int").value;
  var invesSpr = document.getElementById("inves-spr").value;
  var invesDex = document.getElementById("inves-dex").value;

  var itemStr = document.getElementById("item-str").value;
  var itemCon = document.getElementById("item-con").value;
  var itemInt = document.getElementById("item-int").value;
  var itemSpr = document.getElementById("item-spr").value;
  var itemDex = document.getElementById("item-dex").value;

  var baseStr = 0;
  var baseCon = 0;
  var baseInt = 0;
  var baseSpr = 0;
  var baseDex = 0;
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

  var actualStr = baseStr;
  var actualCon = baseCon;
  var actualInt = baseInt;
  var actualSpr = baseSpr;
  var actualDex = baseDex;
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
  var hp = (multiplier * (level-1) * 17) + (actualCon * 85);
  document.getElementById("hp").innerHTML = hp;
}
