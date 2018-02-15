var room = "ballroom";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "ballroom") {
  weapon = "poison";
  suspect === "Mr. Kalehoff";
  solved = true;
} else if (room === "dining room") {
  weapon = "knife";
  suspect === "Mr. Parkes";
  solved = true;
} else if (room === "gallery") {
  weapon = "trophy";
  suspect === "Ms. Van Cleve";
  solved = true;
} else {
  (room === "billiards room");
  weapon = "pool stick";
  suspect === "Mrs. Sparr";
  solved = "true";
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
