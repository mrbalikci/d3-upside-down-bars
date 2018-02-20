// data set and height and width variables
// define golobal parameters
var theData = [17, 23, 20, 34];
var svgHeight = 600;
var svgWidth = 400;

var margin = { top: 50, right: 100, bottom: 20, left: 50};
// define svg based on HTML class and 
// append svg element to its
// set up the height and width of svg
var svg = d3.select("#svg-area")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

// append g tag to svg group
var svgGroup = svg.append("g")
    // use marging in translate "translate(50, 100)"
    .attr("transform", `translate(${margin.left}, ${margin.top}`)

svgGroup.selectAll("rect")
    .data(theData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", 50)
    .attr("height", function (d) {
        return d * 10;
    })

    // the x axis
    .attr("x", function (d, i) {
        return i * 60;
    })

    // the y axis
    .attr("y", function (d) {
        return 600 - d * 10;
    })