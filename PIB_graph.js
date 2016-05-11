var data_PIB;
var margin = {top: 10, right: 00, bottom: 50, left: 80},
    width = 300 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

    // Set the ranges
    var x = d3.scale.linear().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(8)
        .innerTickSize(-height)
        .outerTickSize(0);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left").ticks(8)
        .innerTickSize(-width)
        .outerTickSize(0);
        

    var valueline_1 = d3.svg.line()
        .x(function(d) { return x(d['']); })
        .y(function(d) { return y(d[country]); });

    var valueline_2 = d3.svg.line()
        .x(function(d) { return x(d['']); })
        .y(function(d) { 
            if (country_2==null){
                return y(d[country]);
            }
            else{
            return y(d[country_2]); }
        })

    // Gráfico de PIB
    d3.csv('datos/PIB_mundial_adapt.csv', function(d) {
        data_PIB=d;


        x.domain(d3.extent(data_PIB,function(d){return +d['']}));
        y.domain(d3.extent(data_PIB,function(d){return +d['ESP']}));

        // Adds the svg canvas
        var PIB_graph = d3.select("#PIB_graph")
            .append("svg")
            .attr("x",0)
            .attr("y",0)
            .attr("id","PIB_graph")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        PIB_graph.append("path")
            .attr("class","line")
            .attr("id","line_2")
            .attr("d",valueline_2(d))
            .on('mouseover',function(d){
                d3.select(this)
                    .style("stroke-width",5)})
            .on('mouseout',function(d){
                d3.select(this)
                    .style("stroke-width",2)});
            
        PIB_graph.append("path")
            .attr("class","line")
            .attr("id","line_1")
            .attr("d",valueline_1(d))
            .on('mouseover',function(d){
                d3.select(this)
                    .style("stroke-width",5)})
            .on('mouseout',function(d){
                d3.select(this)
                    .style("stroke-width",2)});



        // Add the X Axis
        PIB_graph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)" );

        // Add the Y Axis
       PIB_graph.append("g")
            .attr("class", "y axis")
            .call(yAxis);
            });