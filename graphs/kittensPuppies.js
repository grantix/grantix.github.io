// Create 2 datasets
var data1 = [
   {day: 1, search: 46},
   {day: 2, search: 41},
   {day: 3, search: 44},
   {day: 4, search: 45},
   {day: 5, search: 51},
   {day: 6, search: 49},
   {day: 7, search: 41},
   {day: 8, search: 41},
   {day: 9, search: 41},
   {day: 10, search: 40},
   {day: 11, search: 38},
   {day: 12, search: 52},
   {day: 13, search: 49},
   {day: 14, search: 36},
   {day: 15, search: 41},
   {day: 16, search: 37},
   {day: 17, search: 37},
   {day: 18, search: 41},
   {day: 19, search: 48},
   {day: 20, search: 51},
   {day: 21, search: 38},
   {day: 22, search: 37},
   {day: 23, search: 36},
   {day: 24, search: 41},
   {day: 25, search: 34},
   {day: 26, search: 44},
   {day: 27, search: 46},
   {day: 28, search: 47},
   {day: 29, search: 35},
   {day: 30, search: 39},
   {day: 31, search: 39},
   {day: 32, search: 36},
   {day: 33, search: 44},
   {day: 34, search: 46},
   {day: 35, search: 36},
   {day: 36, search: 35},
   {day: 37, search: 35},
   {day: 38, search: 37},
   {day: 39, search: 37},
   {day: 40, search: 45},
   {day: 41, search: 47},
   {day: 42, search: 39},
   {day: 43, search: 37},
   {day: 44, search: 37},
   {day: 45, search: 40},
   {day: 46, search: 41},
   {day: 47, search: 45},
   {day: 48, search: 45},
   {day: 49, search: 36},
   {day: 50, search: 40},
   {day: 51, search: 41},
   {day: 52, search: 28},
   {day: 53, search: 33},
   {day: 54, search: 44},
   {day: 55, search: 43},
   {day: 56, search: 35},
   {day: 57, search: 34},
   {day: 58, search: 35},
   {day: 59, search: 43},
   {day: 60, search: 41},
   {day: 61, search: 59},
   {day: 62, search: 59},
   {day: 63, search: 42},
   {day: 64, search: 49},
   {day: 65, search: 51},
   {day: 66, search: 53},
   {day: 67, search: 56},
   {day: 68, search: 71},
   {day: 69, search: 70},
   {day: 70, search: 67},
   {day: 71, search: 67},
   {day: 72, search: 72},
   {day: 73, search: 74},
   {day: 74, search: 70},
   {day: 75, search: 84},
   {day: 76, search: 83},
   {day: 77, search: 69},
   {day: 78, search: 72},
   {day: 79, search: 71},
   {day: 80, search: 69},
   {day: 81, search: 74},
   {day: 82, search: 91},
   {day: 83, search: 88},
   {day: 84, search: 67},
   {day: 85, search: 69},
   {day: 86, search: 70},
   {day: 87, search: 76},
   {day: 88, search: 81},
   {day: 89, search: 93},
   {day: 90, search: 93},
   {day: 91, search: 74},
   {day: 92, search: 77},
   {day: 93, search: 79},
   {day: 94, search: 77},
   {day: 95, search: 78},
   {day: 96, search: 93},
   {day: 97, search: 88},
   {day: 98, search: 84},
   {day: 99, search: 75},
   {day: 100, search: 75},
   {day: 101, search: 74},
   {day: 102, search: 75},
   {day: 103, search: 90},
   {day: 104, search: 93},
   {day: 105, search: 76},
   {day: 106, search: 83},
   {day: 107, search: 79},
   {day: 108, search: 81},
   {day: 109, search: 86},
   {day: 110, search: 97},
   {day: 111, search: 100},
   {day: 112, search: 84},
   {day: 113, search: 83},
   {day: 114, search: 86},
   {day: 115, search: 79},
   {day: 116, search: 79},
   {day: 117, search: 89},
   {day: 118, search: 98},
   {day: 119, search: 83},
   {day: 120, search: 83},
   {day: 121, search: 80},
   {day: 122, search: 81},
   {day: 123, search: 82},
   {day: 124, search: 98},
   {day: 125, search: 92},
   {day: 126, search: 88},
   {day: 127, search: 81},
   {day: 128, search: 80},
   {day: 129, search: 78},
   {day: 130, search: 80},
   {day: 131, search: 94},
   {day: 132, search: 91},
   {day: 133, search: 71},
   {day: 134, search: 71},
   {day: 135, search: 75},
   {day: 136, search: 79},
   {day: 137, search: 83},
   {day: 138, search: 88},
   {day: 139, search: 96},
   {day: 140, search: 78},
   {day: 141, search: 82},
   {day: 142, search: 79},
   {day: 143, search: 74},
   {day: 144, search: 74},
   {day: 145, search: 90},
   {day: 146, search: 86},
   {day: 147, search: 80},
   {day: 148, search: 73},
   {day: 149, search: 82},
   {day: 150, search: 77},
   {day: 151, search: 79},
   {day: 152, search: 94},
   {day: 153, search: 88},
   {day: 154, search: 83},
   {day: 155, search: 77},
   {day: 156, search: 74},
   {day: 157, search: 74},
   {day: 158, search: 73},
   {day: 159, search: 90},
   {day: 160, search: 90},
   {day: 161, search: 76},
   {day: 162, search: 71},
   {day: 163, search: 78},
   {day: 164, search: 69},
   {day: 165, search: 75},
   {day: 166, search: 80},
   {day: 167, search: 80},
   {day: 168, search: 63},
   {day: 169, search: 73},
   {day: 170, search: 73},
   {day: 171, search: 70},
   {day: 172, search: 72},
   {day: 173, search: 81},
   {day: 174, search: 83},
   {day: 175, search: 67},
   {day: 176, search: 66},
   {day: 177, search: 72},
   {day: 178, search: 68},
   {day: 179, search: 75},
   {day: 180, search: 83},
   {day: 181, search: 85},
   {day: 182, search: 71},
   {day: 183, search: 71},
   {day: 184, search: 68},
   {day: 185, search: 71},
   {day: 186, search: 76},
   {day: 187, search: 88},
   {day: 188, search: 86},
   {day: 189, search: 71},
   {day: 190, search: 72}
];

var data2 = [
  {day: 1, search: 53},
  {day: 2, search: 44},
  {day: 3, search: 45},
  {day: 4, search: 48},
  {day: 5, search: 59},
  {day: 6, search: 57},
  {day: 7, search: 42},
  {day: 8, search: 43},
  {day: 9, search: 44},
  {day: 10, search: 43},
  {day: 11, search: 43},
  {day: 12, search: 55},
  {day: 13, search: 63},
  {day: 14, search: 43},
  {day: 15, search: 47},
  {day: 16, search: 41},
  {day: 17, search: 43},
  {day: 18, search: 46},
  {day: 19, search: 56},
  {day: 20, search: 58},
  {day: 21, search: 47},
  {day: 22, search: 45},
  {day: 23, search: 47},
  {day: 24, search: 42},
  {day: 25, search: 44},
  {day: 26, search: 63},
  {day: 27, search: 62},
  {day: 28, search: 59},
  {day: 29, search: 47},
  {day: 30, search: 45},
  {day: 31, search: 45},
  {day: 32, search: 45},
  {day: 33, search: 58},
  {day: 34, search: 62},
  {day: 35, search: 45},
  {day: 36, search: 46},
  {day: 37, search: 44},
  {day: 38, search: 44},
  {day: 39, search: 45},
  {day: 40, search: 55},
  {day: 41, search: 58},
  {day: 42, search: 42},
  {day: 43, search: 42},
  {day: 44, search: 41},
  {day: 45, search: 41},
  {day: 46, search: 43},
  {day: 47, search: 53},
  {day: 48, search: 55},
  {day: 49, search: 44},
  {day: 50, search: 43},
  {day: 51, search: 42},
  {day: 52, search: 34},
  {day: 53, search: 39},
  {day: 54, search: 52},
  {day: 55, search: 51},
  {day: 56, search: 38},
  {day: 57, search: 38},
  {day: 58, search: 41},
  {day: 59, search: 45},
  {day: 60, search: 47},
  {day: 61, search: 65},
  {day: 62, search: 67},
  {day: 63, search: 54},
  {day: 64, search: 56},
  {day: 65, search: 54},
  {day: 66, search: 58},
  {day: 67, search: 60},
  {day: 68, search: 79},
  {day: 69, search: 76},
  {day: 70, search: 59},
  {day: 71, search: 61},
  {day: 72, search: 59},
  {day: 73, search: 60},
  {day: 74, search: 63},
  {day: 75, search: 79},
  {day: 76, search: 83},
  {day: 77, search: 62},
  {day: 78, search: 61},
  {day: 79, search: 63},
  {day: 80, search: 65},
  {day: 81, search: 70},
  {day: 82, search: 88},
  {day: 83, search: 85},
  {day: 84, search: 71},
  {day: 85, search: 71},
  {day: 86, search: 70},
  {day: 87, search: 73},
  {day: 88, search: 75},
  {day: 89, search: 100},
  {day: 90, search: 94},
  {day: 91, search: 73},
  {day: 92, search: 74},
  {day: 93, search: 74},
  {day: 94, search: 73},
  {day: 95, search: 73},
  {day: 96, search: 87},
  {day: 97, search: 91},
  {day: 98, search: 73},
  {day: 99, search: 73},
  {day: 100, search: 68},
  {day: 101, search: 71},
  {day: 102, search: 70},
  {day: 103, search: 89},
  {day: 104, search: 90},
  {day: 105, search: 69},
  {day: 106, search: 67},
  {day: 107, search: 66},
  {day: 108, search: 65},
  {day: 109, search: 67},
  {day: 110, search: 82},
  {day: 111, search: 85},
  {day: 112, search: 69},
  {day: 113, search: 70},
  {day: 114, search: 67},
  {day: 115, search: 66},
  {day: 116, search: 66},
  {day: 117, search: 79},
  {day: 118, search: 84},
  {day: 119, search: 66},
  {day: 120, search: 67},
  {day: 121, search: 66},
  {day: 122, search: 64},
  {day: 123, search: 63},
  {day: 124, search: 78},
  {day: 125, search: 80},
  {day: 126, search: 74},
  {day: 127, search: 61},
  {day: 128, search: 60},
  {day: 129, search: 61},
  {day: 130, search: 58},
  {day: 131, search: 68},
  {day: 132, search: 70},
  {day: 133, search: 54},
  {day: 134, search: 58},
  {day: 135, search: 60},
  {day: 136, search: 59},
  {day: 137, search: 60},
  {day: 138, search: 74},
  {day: 139, search: 79},
  {day: 140, search: 62},
  {day: 141, search: 62},
  {day: 142, search: 62},
  {day: 143, search: 58},
  {day: 144, search: 61},
  {day: 145, search: 72},
  {day: 146, search: 76},
  {day: 147, search: 64},
  {day: 148, search: 59},
  {day: 149, search: 60},
  {day: 150, search: 59},
  {day: 151, search: 61},
  {day: 152, search: 72},
  {day: 153, search: 75},
  {day: 154, search: 62},
  {day: 155, search: 61},
  {day: 156, search: 58},
  {day: 157, search: 60},
  {day: 158, search: 61},
  {day: 159, search: 72},
  {day: 160, search: 76},
  {day: 161, search: 61},
  {day: 162, search: 61},
  {day: 163, search: 60},
  {day: 164, search: 58},
  {day: 165, search: 66},
  {day: 166, search: 70},
  {day: 167, search: 70},
  {day: 168, search: 64},
  {day: 169, search: 58},
  {day: 170, search: 63},
  {day: 171, search: 59},
  {day: 172, search: 62},
  {day: 173, search: 71},
  {day: 174, search: 73},
  {day: 175, search: 57},
  {day: 176, search: 58},
  {day: 177, search: 56},
  {day: 178, search: 61},
  {day: 179, search: 61},
  {day: 180, search: 72},
  {day: 181, search: 76},
  {day: 182, search: 60},
  {day: 183, search: 61},
  {day: 184, search: 59},
  {day: 185, search: 62},
  {day: 186, search: 61},
  {day: 187, search: 73},
  {day: 188, search: 77},
  {day: 189, search: 58},
  {day: 190, search: 69}
];

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 40, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz_kittensPuppies")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Initialise a X axis:
var x = d3.scaleLinear().range([0,width]);
var xAxis = d3.axisBottom().scale(x);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .attr("class","myXaxis");

svg.append("text")
  .attr("transform",
        "translate(" + (width/2) + " ," + (height + margin.top + 25) + ")")
  .style("text-anchor", "middle")
  .text("Days of COVID-19 Press");


  // Add red trend line on top of graph
svg.append("line")
  .style("stroke", "black")
  .style("stroke-width", 2)
  .style("stroke-dasharray", "5,5")
  .attr("x1", 120)
  .attr("y1", 30)
  .attr("x2", 120)
  .attr("y2", 350);
//Label Trend line
svg.append("text")
  .attr("transform",
        "translate(" + (150) + " ," + (280) + ")")
  .style("text-anchor", "middle")
  .style("stroke", "Black")
  .style("font-size", ".8em")
  .text("(One week after COVID-19 shutdowns began)");

svg.append("text")
  .attr("transform",
        "translate(" + (150) + " ," + (260) + ")")
  .style("text-anchor", "middle")
  .style("stroke", "Black")
  .style("font-size", ".8em")
  .text("March 22");


// Initialize an Y axis
var y = d3.scaleLinear().range([height, 0]);
var yAxis = d3.axisLeft().scale(y);
svg.append("g")
  .attr("class","myYaxis")

svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0 - margin.left)
  .attr("x",0 - (height / 2))
  .attr("dy", "1em")
  .style("text-anchor", "middle")
  .text("Avg. % Searches for 'Cats' or 'Dogs'");


// Create a function that takes a dataset as input and update the plot:
function update(data) {

  // Create the X axis:
  x.domain([0, d3.max(data, function(d) { return d.day }) ]);
  svg.selectAll(".myXaxis").transition()
    .duration(3000)
    .call(xAxis);

  // create the Y axis
  y.domain([0, d3.max(data, function(d) { return d.search  }) ]);
  svg.selectAll(".myYaxis")
    .transition()
    .duration(3000)
    .call(yAxis);

  // Create a update selection: bind to the new data
  var u = svg.selectAll(".lineTest")
    .data([data], function(d){ return d.day });

  // Updata the line
  u
    .enter()
    .append("path")
    .attr("class","lineTest")
    .merge(u)
    .transition()
    .duration(3000)
    .attr("d", d3.line()
      .x(function(d) { return x(d.day); })
      .y(function(d) { return y(d.search); }))
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2.5)
}

// At the beginning, I run the update function on the first dataset:
update(data1)
