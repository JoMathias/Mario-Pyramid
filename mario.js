// TODO #2


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
function printPyramid(height, bricktype) {
  height = document.getElementById("height").value
  console.log("Yippee! I'm printing a pyramid!");

  bricktype = document.getElementById("brick").value
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
      layer += bricktype;
      rowStr += bricktype;
    }
    layer += "*";
    rowStr += bricktype + "<p></p>";
    layer += "\n";
    

  }
  console.log(layer); //prints to console
  document.getElementById("pyramid").innerHTML = rowStr; //prints to html

}

function numberLable (height){
  height = document.getElementById("height").value
  height = `${height}`
  document.getElementById("heightLable").innerHTML = height; //prints to html
}
//replaces rowStr with document.getElementById("brick").value