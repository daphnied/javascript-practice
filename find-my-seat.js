

var row = 0;
var seat = 0;
for (row = 0; row <= 25; row++) {
  for (seat = 0; seat <= 99; seat++) {
    console.log(row + "-" + seat);
  }
}

/*
 *
 *Theater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row.

 * This is a nested for loop that prints out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */
