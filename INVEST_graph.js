// Grafico de investigadoes
    d3.csv('datos/investigadores_mundial_adapt.csv', function(d) {
        data_invest=d;

        x.domain(d3.extent(data_invest,function(d){return +d['']}));
        y.domain(d3.extent(data_invest,function(d){return +d['ESP']}));

        var investigadores_graph = d3.select("#INVEST_graph")
            .append("svg")
            .attr("id","investigadores_graph")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate("+ margin.left + "," + margin.top + ")");

        investigadores_graph.append("path")
            .attr("class","line")
            .attr("id","line_2")
            .attr("d",valueline_2(d))
            .on('mouseover',function(d){
                d3.select(this)
                    .style("stroke-width",5)})
            .on('mouseout',function(d){
                d3.select(this)
                    .style("stroke-width",2)});

        investigadores_graph.append("path")
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
        investigadores_graph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)" );

        // Add the Y Axis
        investigadores_graph.append("g")
            .attr("class", "y axis")
            .call(yAxis);


        /*investigadores_graph.append("text")
            .attr("y", -margin.top/2)
            .attr("x", 0)
            .attr("dy",".75em")
            .text("Investigadores por cada 100.000 habitantes ")    */
            });
