const pixelCanvas = $(' #pixel_canvas ' );

// Use delegation to implement event handlers for <td> elements
pixelCanvas.on('click', 'td', function() {
    // sets background-color to new color for clicked on td
    $( this ).css( 'background-color', newColor );
});

// Get initial color
const colorPickr = $( 'input[type=color]' );
let newColor = colorPickr.val();

// Add event handler for change in color to color picker
colorPickr.change(function() {
    // Set global var newColor to new selected color
    newColor = $( this ).val();
});


// Add event handler for creating grid to button
const buttn = $( 'input[type=submit]' );
const inputRows = $( 'input[name=height]' );
const inputCols = $( 'input[name=width]' );

buttn.click(function(event) {
    // do not reload page when button is clicked
    event.preventDefault();
    // get rows and cols
    let rows = inputRows.val();
    let cols = inputCols.val();
    // do not allow rows or cols over 50
    if (rows > 50)
        rows = 50;
    if (cols > 50)
        cols = 50;
    // make the grid
    makeGrid(rows,cols);
});


/** @description Creates a new grid
*
*   @param {number} row - The number of rows to create
*   @param {number} cols - The number of columns to create
*/
function makeGrid(rows, cols) {

    // initialize HTML string for table
    let tableStr = '';
    // remove all <table> children
    pixelCanvas.empty();
    for (let i = 0; i < rows; i++) {
        tableStr += '<tr>';
        let j = 0;
        while (j < cols) {
            tableStr += '<td></td>';
            j++;
        }
        tableStr += '</tr>';
    }
    // append HTML string to table
    $( '#pixel_canvas' ).append(tableStr);
}
