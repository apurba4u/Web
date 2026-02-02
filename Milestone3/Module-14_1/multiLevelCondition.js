/**
 * Multi Level Condition
 */

const money = 110;

if (money > 300) {
  console.log("Bro you are rich!!!");
} else {
  if (money > 100) {
    console.log("Tui Gorib o na boro lok o nah");
  } else {
    if(money > 0) console.log("Tui kola kha, calcium bara");
    else console.log("Tui gorib, tui amar bondhu nah");
  }
}