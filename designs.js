// Use delegation to implement event handlers for <td> elements
$(' #pixel_canvas ' ).on('click', 'td', function() {
    // sets background-color to new color for clicked on td
    $( this ).css( 'background-color', newColor );
});

// Get initial color
let colorPickr = $( 'input[type=color]' );
let newColor = colorPickr.val();

// Add event handler for change in color to color picker
colorPickr.change(function() {
    // Set global var newColor to new selected color
    newColor = $( this ).val();
});


// Add event handler for creating grid to button
let buttn = $( 'input[type=submit]' );
buttn.click(function(event) {
    // do not reload page when button is clicked
    event.preventDefault();
    // get rows and cols
    let rows = $( 'input[name=height]' ).val();
    let cols = $( 'input[name=width]' ).val();
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
    $( '#pixel_canvas' ).children().remove();
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
