
printPyramid(5);
// TODO #2
// Take in user input for the height


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid!
    let bricks = "#" //declaring and assigning brick
    let spaces = ' '; //declaring and assigning space

  
    //you will need to use a for loop nested inside another for loop.
  for(let layer = space+space+brick+brick; layer < height;){  //outer loop
      str = "";
      for(let j=0; j<rows+1; j++){//inner loop

        layer += brick; //this adds a # to the end of the string.

      }

      console.log(str); //once a row is done we print it out
    }
    

}
