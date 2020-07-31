// set the dimensions and margins of the graph
var margin = {top: 10, right: 245, bottom: 40, left: 50},
    width = 860 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz_economics")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/grantix/grantix.github.io/master/datas/CHWYstock.csv",function(data) {

  // Add X axis --> it is a date format
  var x = d3.scaleLinear()
    .domain([1,132])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));


  svg.append("text")
    .attr("transform",
          "translate(" + (width/2) + " ," + (height + margin.top + 25) + ")")
    .style("text-anchor", "middle")
    .text("Market Trading Days since COVID-19 Press Began (21 JAN 2020)");


  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 60])
    .range([ height, 0 ]);
  svg.append("g")
    .call(d3.axisLeft(y));

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Closing Price USD");


//Marker for Low Close Date

    svg.append("line")
      .style("stroke", "black")
      .style("stroke-width", 2)
      .style("stroke-dasharray", "5,5")
      .attr("x1", 152)
      .attr("y1", 30)
      .attr("x2", 152)
      .attr("y2", 460);
    //Label Trend line
    svg.append("text")
      .attr("transform",
            "translate(" + (200) + " ," + (350) + ")")
      .style("text-anchor", "middle")
      .style("stroke", "Black")
      .style("font-size", ".8em")
      .text("12 March 2020");


    //Graph Title
    svg.append("text")
      .attr("transform",
          "translate(" + (width/2) + " ," + (15) + ")")
      .style("text-anchor", "middle")
      .style("font-size", "1.5em")
      .text("CHWY Stock Price Since COVID-19 Press Began");




  // This allows to find the closest X index of the mouse:
  var bisect = d3.bisector(function(d) { return d.Day; }).left;

  // Create the circle that travels along the curve of chart
  var focus = svg
    .append('g')
    .append('circle')
      .style("fill", "none")
      .attr("stroke", "black")
      .attr('r', 8.5)
      .style("opacity", 0)

  // Create the text that travels along the curve of chart
  var focusText = svg
    .append('g')
    .append('text')
      .style("opacity", 0)
      .attr("text-anchor", "left")
      .attr("alignment-baseline", "middle")

  // Add the line
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d) { return x(d.Day) })
      .y(function(d) { return y(d.Close) })
      )

  // Create a rect on top of the svg area: this rectangle recovers mouse position
  svg
    .append('rect')
    .style("fill", "none")
    .style("pointer-events", "all")
    .attr('width', width)
    .attr('height', height)
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseout', mouseout);


  // What happens when the mouse move -> show the annotations at the right positions.
  function mouseover() {
    focus.style("opacity", 1)
    focusText.style("opacity",1)
  }

  function mousemove() {
    // recover coordinate we need
    var x0 = x.invert(d3.mouse(this)[0]);
    var i = bisect(data, x0, 1);
    selectedData = data[i]
    focus
      .attr("cx", x(selectedData.Day))
      .attr("cy", y(selectedData.Close))
    focusText
      .html("Market Day:" + selectedData.Day + "  -  " + "Closing $" + selectedData.Close)
      .attr("x", x(selectedData.Day)+15)
      .attr("y", y(selectedData.Close))
    }
  function mouseout() {
    focus.style("opacity", 0)
    focusText.style("opacity", 0)
  }

})
