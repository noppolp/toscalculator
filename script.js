function calculate(){
  //Hp = (multiplier X (lv-1)x17)+ conx85
  var multiplier = document.getElementById("base-class").value;
  var level = document.getElementById("level").value;
  var con = document.getElementById("con").value
  var hp = (multiplier * (level-1) * 17) + (con * 85);
  document.getElementById("hp").innerHTML = hp;
}
