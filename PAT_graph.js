    // Grafico de patentes
    d3.csv('datos/patentes_mundial_adapt.csv', function(d) {
        data_patent=d;

        x.domain(d3.extent(data_patent,function(d){return +d['']}));
        y.domain(d3.extent(data_patent,function(d){return +d['ESP']}));

        var patentes_graph = d3.select("#PAT_graph")
            .append("svg")
            .attr("id","patentes_graph")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

            .append("g")
            .attr("transform",
                "translate("+ margin.left + "," + margin.top + ")");

            patentes_graph.append("path")
                .attr("class","line")
                .attr("id","line_2")
                .attr("d",valueline_2(d))
                .on('mouseover',function(d){
                    d3.select(this)
                        .style("stroke-width",5)})
                .on('mouseout',function(d){
                    d3.select(this)
                        .style("stroke-width",2)});

            patentes_graph.append("path")
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
        patentes_graph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)" );

        // Add the Y Axis
        patentes_graph.append("g")
            .attr("class", "y axis")
            .call(yAxis);


        /*patentes_graph.append("text")
            //.attr("text-anchor","end")
            .attr("y", -margin.top/2)
            .attr("x", 0)
            .attr("dy",".75em")
            //.attr("transform","translate(width/2)")
            .text("Patentes en trámite")    */
            });