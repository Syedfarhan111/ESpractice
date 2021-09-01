// console.log(typeof typeof 1);
// console.log(1 + "1");
// console.log("PickUpBiz" + 2 + " " + "SOftware" + 8);

var getName = (fname, Lname) => {
  return fname + " " + Lname;
};
var getName = (fname, Mname, Lname) => {
  return fname + " " + Mname + " " + Lname;
};

console.log(getName("Amjad", "Khan"));

console.log(getName("Amjad", "Wahid Ali", "Khan"));
