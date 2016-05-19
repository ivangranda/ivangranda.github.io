function update()
				{
				    trans=900;
				    extentY_1 = d3.extent(data_ID,function(d){return +d[country]})
				    extentY_2 = d3.extent(data_ID,function(d){return +d[country_2]})
				    y.domain([d3.min([extentY_1[0],extentY_2[0]]),d3.max([extentY_1[1],extentY_2[1]])])


				    //yAxis.scale(y)
				    d3.select('#ID_graph').selectAll('.y.axis')
				        .transition().duration(trans)
				        .call(yAxis)
				    d3.select('#ID_graph').select('#line_1')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_1(data_ID))


				    d3.select('#ID_graph').select('#line_2')
				    .transition()
				        .duration(trans)
				        .attr('d',valueline_2(data_ID))
				        

				   //extentY = d3.extent(data_inv,function(d){return +d[country]})
				   	extentY_1 = d3.extent(data_inv,function(d){return +d[country]})
				    extentY_2 = d3.extent(data_inv,function(d){return +d[country_2]})
				    y.domain([d3.min([extentY_1[0],extentY_2[0]]),d3.max([extentY_1[1],extentY_2[1]])])
				 
				    d3.select('#inv_graph').selectAll('.y.axis')
				        .transition().duration(500)
				        .call(yAxis)
				    d3.select('#inv_graph').select('#line_1')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_1(data_inv))

				    d3.select('#inv_graph').select('#line_2')
				    .transition()
				        .duration(trans)
				        .attr('d',valueline_2(data_inv))
				        
								
				    extentY_1 = d3.extent(data_exp_HT,function(d){return +d[country]})
				    extentY_2 = d3.extent(data_exp_HT,function(d){return +d[country_2]})
				    y.domain([d3.min([extentY_1[0],extentY_2[0]]),d3.max([extentY_1[1],extentY_2[1]])])
				    
				    d3.select('#exportaciones_graph').selectAll('.y.axis')
				        .transition().duration(500)
				        .call(yAxis)
				    d3.select('#exportaciones_graph').select('#line_1')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_1(data_exp_HT))

				    d3.select('#exportaciones_graph').select('#line_2')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_2(data_exp_HT))

				    extentY_1 = d3.extent(data_art,function(d){return +d[country]})
				    extentY_2 = d3.extent(data_art,function(d){return +d[country_2]})
				    y.domain([d3.min([extentY_1[0],extentY_2[0]]),d3.max([extentY_1[1],extentY_2[1]])])
				    
				    d3.select('#articulos_graph').selectAll('.y.axis')
				        .transition().duration(500)
				        .call(yAxis)
				    d3.select('#articulos_graph').select('#line_1')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_1(data_art))

				    d3.select('#articulos_graph').select('#line_2')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_2(data_art))

				    extentY_1 = d3.extent(data_invest,function(d){return +d[country]})
				    extentY_2 = d3.extent(data_invest,function(d){return +d[country_2]})
				    y.domain([d3.min([extentY_1[0],extentY_2[0]]),d3.max([extentY_1[1],extentY_2[1]])])
				    
				    d3.select('#investigadores_graph').selectAll('.y.axis')
				        .transition().duration(500)
				        .call(yAxis)
				    d3.select('#investigadores_graph').select('#line_1')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_1(data_invest))

				    d3.select('#investigadores_graph').select('#line_2')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_2(data_invest))

				    extentY_1 = d3.extent(data_patent,function(d){return +d[country]})
				    extentY_2 = d3.extent(data_patent,function(d){return +d[country_2]})
				    y.domain([d3.min([extentY_1[0],extentY_2[0]]),d3.max([extentY_1[1],extentY_2[1]])])
				    
				    d3.select('#patentes_graph').selectAll('.y.axis')
				        .transition().duration(500)
				        .call(yAxis)
				    d3.select('#patentes_graph').select('#line_1')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_1(data_patent))

				    d3.select('#patentes_graph').select('#line_2')
				        .transition()
				        .duration(trans)
				        .attr('d',valueline_2(data_patent))
				}