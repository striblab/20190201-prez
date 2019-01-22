import 'intersection-observer';
import us from '../sources/us_states.json';
import * as d3 from 'd3';
import * as topojson from 'topojson';

class BigMap {

    constructor(target) {
        this.target = target;
    }

 render() {
    var self = this;

        var width = 800,
        height = 500,
        centered;
        
        var projection = d3.geoAlbersUsa().scale(1000).translate([250, 290]);

        var path = d3.geoPath()
            .projection(projection);

        var svg = d3.select(self.target + " svg")
            .attr("width", width)
            .attr("height", height);

        svg.append("rect")
            .attr("class", "background")
            .attr("width", width)
            .attr("height", height);

        var g = svg.append("g");

        g.selectAll("path")
        .data(us.features)
        .enter().append("path")
            .attr("d", path)
            .style("stroke", "#ffffff")
            .style("fill", "#999999")
            .style("stroke-width", "1")
            .attr("class","state")


    var aspect = 800 / 500,
    chart = $(self.target + " svg");

    $(window).on("resize", function() {
        var targetWidth = chart.parent().width();
        chart.attr("width", targetWidth);
        chart.attr("height", targetWidth / aspect);
    });

    var targetWidth = chart.parent().width();
    chart.attr("width", targetWidth);
    chart.attr("height", targetWidth / aspect);
 }

}


export {
    BigMap as
    default
}