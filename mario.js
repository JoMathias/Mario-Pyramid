
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

    // TODO #1
    // print that pyramid!
  let layer = ""; //console value
  let rowStr = ""; //html value
  for (let level = 1; level <= height; level++) {
    // printing spaces
    for (let slope = 0; slope < height - level; slope++) {
      layer += " ";
      rowStr += ".";
    }
    // printing star
    for (let brick = 0; brick < level; brick++) {
      layer += "*";
      rowStr += "*";
    }
    layer += "*";
    rowStr += "*<br>";
    layer += "\n";
    
    

   
    
  }
  console.log(layer); //prints to console
  document.getElementById("rowStr").innerHTML = rowStr; //adds to html



    
  
}
