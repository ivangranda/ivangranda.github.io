    var country = 'ESP';
    var country_2=null;
    var default_fill='#fff7b7';
    var country_fill='red';
    var country2_fill='green';
        var map = new Datamap({
            scope:'world',
            projection:'mercator',
            element: document.getElementById('slider'),
            fills: {
                defaultFill: default_fill
            },
            geographyConfig:{
                popupTemplate: function(geo, data) {
                	if (geo.id==country){
                		return ['<div class="hoverinfo"><strong>',
                        '' + geo.properties.name+
                        '</strong> Pais seleccionado',
                        '</div>'].join('');}
                        else{ if(geo.id==country_2){
                        	return ['<div class="hoverinfo"><strong>',
                        '' + geo.properties.name+
                        '</strong> Pais en comparación',
                        '</div>'].join('');}
                        else{
                        	return ['<div class="hoverinfo"><strong>',
                        '' + geo.properties.name+
                        '</strong> click izquierdo para seleccionar, click derecho para añadir a comparación',
                        '</div>'].join('');}
                        }
                    

                    },

                highlightOnHover: false,
                highlightBorderWidth: 3,
                highlightBorderColor: '#000000',
                highlightFillColor: default_fill,
                popupOnHover: true,
                borderColor: '#000000'

            },
            done: function(datamap){
                datamap.svg.call(d3.behavior.zoom()
                	.scaleExtent([0.7, 5])
                	.on("zoom", redraw));

                function redraw() {
 
                    datamap.svg.selectAll("g")
                    .attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
                }
                datamap.svg.selectAll('.datamaps-subunit').on("contextmenu", function (geography) {
                    var m = {};
                    
                    d3.event.preventDefault();
                    if (country_2==geography.id || country==geography.id) {
                        m[country_2]= default_fill;
                        datamap.updateChoropleth(m,{reset:false});
                        country_2 = null;
                    }
                    else{


                        m[geography.id] = country2_fill;
                        m[country_2]= default_fill;
                        datamap.updateChoropleth(m,{reset:false});
                        country_2=geography.id;}
                    update();
                });

                datamap.svg.selectAll('.datamaps-subunit').on('click',function(geography){
                    if(country_2==geography.id){
                    country_2=null;
                    }
                    var m={};
                    m[country]= default_fill;
                    m[geography.id] = country_fill;
                    
                    datamap.updateChoropleth(m,{reset:false});
                    country=geography.id;
                    update();
                });
            }
        });
        m={};
        m[country]=country_fill;
        map.updateChoropleth(m);