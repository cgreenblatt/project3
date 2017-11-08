// Select color input
// Select size input
let buttn = $( "input[type=submit]" );
buttn.click(function(event) {
    event.preventDefault();
    let rows = $( "input[name=height" ).val();
    let cols = $( "input[name=width" ).val();
    makeGrid(rows,cols);
});

function makeGrid(rows, cols) {

    let tableStr = "";
    $( "#pixel_canvas" ).children().remove();
    for (let i = 0; i < rows; i++) {
        tableStr += "<tr>";
        for (let j = 0; j < cols; j++) {
            tableStr += "<td></td>"
        }
        tableStr += "</tr>";
    }
    $( "#pixel_canvas" ).append(tableStr);

}
