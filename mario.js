
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
    console.log("Yippee! I'm printing a pyramid!");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid!
  let layer = "";
  for (let level = 1; level <= height; level++) {
    // printing spaces
    for (let slope = 0; slope < height - level; slope++) {
      layer += " ";
    }
    // printing star
    for (let brick = 0; brick < level; brick++) {
      layer += "*";
    }
    layer += "*\n";
  }
  console.log(layer);

    

}
