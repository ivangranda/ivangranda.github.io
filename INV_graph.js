
d3.csv('datos/inversiones_mundial_adapt.csv', function(d) {
        data_inv=d;

        x.domain(d3.extent(data_inv,function(d){return +d['']}));
        y.domain(d3.extent(data_inv,function(d){return +d['ESP']}));

        var inversiones_graph = d3.select("#INV_graph")
            .append("svg")
            .attr("id","inv_graph")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

            .append("g")
            .attr("transform",
                "translate("+ margin.left + "," + margin.top + ")");

        inversiones_graph.append("path")
            .attr("class","line")
            .attr("id","line_1")
            .data(data_inv)
            .attr("d",valueline_1(data_inv))
            .on('mouseover',function(d){
                d3.select(this)
                    .style("stroke-width",5)
                })
            .on('mouseout',function(d){
                d3.select(this)
                    .style("stroke-width",2)
            });

        inversiones_graph.append("path")
            .attr("class","line")
            .attr("id","line_2")
            .data(data_inv)
            .attr("d",valueline_2(data_inv))
            .on('mouseover',function(d){
                d3.select(this)
                    .style("stroke-width",5)
                })
            .on('mouseout',function(d){
                d3.select(this)
                    .style("stroke-width",2)
            });

        // Add the X Axis
        inversiones_graph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)" );

        // Add the Y Axis
        inversiones_graph.append("g")
            .attr("class", "y axis")
            .call(yAxis);


        inversiones_graph.append("text")
            .attr("y", -margin.top/2)
            .attr("x", 0)
            .attr("dy",".75em")
            //.attr("transform","translate(width/2)")
            .text("Inversión en I+D+i (%PIB) ")    });