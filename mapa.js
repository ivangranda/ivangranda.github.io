var country = 'ESP';
    var country_2='';
        var default_fill='#fff7b7';
        var map = new Datamap({
            scope:'world',
            projection:'mercator',
            element: document.getElementById('slider'),
            fills: {
                defaultFill: default_fill
            },
            geographyConfig:{
                highlightOnHover: false,
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
                    if (country_2==geography.id) {
                        m[country_2]= default_fill;
                        datamap.updateChoropleth(m,{reset:false});
                        country_2 = '';
                    }
                    else{
                        m[geography.id] = 'green';
                        m[country_2]= default_fill;
                        datamap.updateChoropleth(m,{reset:false});
                        country_2=geography.id;}

                });
                datamap.svg.selectAll('.datamaps-subunit').on('click',function(geography){
                    var m={};
                    m[country]= default_fill;
                    m[geography.id] = 'red';

                    datamap.updateChoropleth(m,{reset:false});
                    country=geography.id;
                    update();
                });
            }
        });
        map.graticule();