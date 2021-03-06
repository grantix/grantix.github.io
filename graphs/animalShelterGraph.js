// set the dimensions and margins of the graph
var margin = {top: 18, right: 50, bottom: 45, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz_animalshelters")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/grantix/grantix.github.io/master/datas/animalShelterNearMe.csv",

  // When reading the csv, I must format variables:
  function(d){
    return { Day : d3.timeParse("%Y-%m-%d")(d.Day), animalshelter : d.animalshelter }
  },

  // Now I can use this dataset:
  function(data) {

    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.Day; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    svg.append("text")
      .attr("transform",
            "translate(" + (width/2) + " ," + (height + margin.top + 25) + ")")
      .style("text-anchor", "middle")
      .text("Date");
    // Add red trend line on top of graph
    svg.append("line")
      .style("stroke", "red")
      .style("stroke-width", 2)
      .attr("x1", 0)
      .attr("y1", 180)
      .attr("x2", 400)
      .attr("y2", 130);
    //Label Trend line
    svg.append("text")
      .attr("transform",
            "translate(" + (width + 25) + " ," + ((height/2) - 50) + ")")
      .style("text-anchor", "middle")
      .style("stroke", "red")
      .text("+10%");



    // Add Y axis
    var y = d3.scaleLinear()
      .domain([30, d3.max(data, function(d) { return +d.animalshelter; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Avg. % Searches for Animal Shelters");


      //Graph Title
      svg.append("text")
        .attr("transform",
            "translate(" + (width/2) + " ," + (2) + ")")
        .style("text-anchor", "middle")
        .style("font-size", "1.2em")
        .text("2020 Searches for 'Animal Shelters'");

    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.Day) })
        .y(function(d) { return y(d.animalshelter) })
        )

})
