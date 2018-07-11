/*
 * Write a for...of loop that:

    Loops through each day in the days array
     Capitalizes the first letter of the day
      and prints the day out to the console

The code should log the following to the console:

    Sunday
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday

 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


//function uppercase (str);
for (let day of days){
    day = day[0].toUpperCase() + day.slice(1);
    console.log(day);
}
