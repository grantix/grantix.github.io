async function init() {
  const data = await d3.csv('https://flunky.github.io/cars2017.csv');

    var width = 200;
    var height = 200;
    var margin = 50;
    var x = d3.scaleLog().domain([10,150]).range([0,width]).base(10);
    var y = d3.scaleLog().domain([10,150]).range([height, 0]).base(10);
    d3.select("svg")
      .attr("width", width + 2*margin)
      .attr("height",height + 2*margin)
      .append("g")
        .attr("transform","translate("+margin+","+margin+")")


      .selectAll("circle").data(data).enter().append("circle")
        .attr("cx",d => x(+d['AverageCityMPG']))
        .attr("cy",d => y(+d['AverageHighwayMPG']))
        .attr("r", function(d) { return 2+(+d['EngineCylinders']);} )



  d3.select("svg").append("g")
    .attr("transform","translate("+margin+","+margin+")")
    .call(d3.axisLeft(y).tickValues([10,20,50,100]).tickFormat((d3.format('~s'))));


  d3.select("svg").append("g")
    .attr("transform","translate("+margin+","+(height+margin)+")")
    .call(d3.axisBottom(x).tickValues([10,20,50,100]).tickFormat((d3.format('~s'))));

}
