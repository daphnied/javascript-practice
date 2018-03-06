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
  solved = true;
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}

/* four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.

the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.

Fill in the blanks with the name of the suspect, the room, and the weapon.
__________ did it in the __________ with the __________! */
