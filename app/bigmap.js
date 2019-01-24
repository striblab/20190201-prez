import 'intersection-observer';
import us from '../sources/us_states.json';
import * as d3 from 'd3';

class BigMap {

    constructor(target, race) {
        this.target = target;
        this.race = race
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
            .style("fill", function(d){
                if (self.race == 0) {
                    if (d.properties.STUSPS == "OR" || d.properties.STUSPS == "WI" || d.properties.STUSPS == "IL" || d.properties.STUSPS == "PA") { return "#0258a0"; }
                    else if (d.properties.STUSPS == "CA" || d.properties.STUSPS == "SD" || d.properties.STUSPS == "NE" || d.properties.STUSPS == "IN") { return "#857AAA"; }
                    else if (d.properties.STUSPS == "OH") { return "#7F98AA"; }
                    else if (d.properties.STUSPS == "NH") { return "#A7E6E3"; }
                    else if (d.properties.STUSPS == "FL") { return "#5BBF48"; }
                    else { return "#dddddd"; }
                } else if (self.race == 1) {
                    if (d.properties.STUSPS == "WA" || d.properties.STUSPS == "TX" || d.properties.STUSPS == "MN" || d.properties.STUSPS == "MI" || d.properties.STUSPS == "WV" || d.properties.STUSPS == "PA" || d.properties.STUSPS == "MD" || d.properties.STUSPS == "CT" || d.properties.STUSPS == "RI" || d.properties.STUSPS == "MA" || d.properties.STUSPS == "ME" || d.properties.STUSPS == "DC") { return "#0258a0"; }
                    else if (d.properties.STUSPS == "AR" || d.properties.STUSPS == "LA" || d.properties.STUSPS == "MS" || d.properties.STUSPS == "AL" || d.properties.STUSPS == "GA") { return "#5BBF48"; }
                    else { return "#c0272d"; }
                } else if (self.race == 2) {
                    if (d.properties.STUSPS == "MN" || d.properties.STUSPS == "DC") { return "#0258a0"; }
                    else { return "#c0272d"; }
                } else if (self.race == 3) {
                    if (d.properties.STUSPS == "ND" || d.properties.STUSPS == "KS" || d.properties.STUSPS == "OK" || d.properties.STUSPS == "AL" || d.properties.STUSPS == "MS" || d.properties.STUSPS == "TN") { return "#D4CB6A"; }
                    else if (d.properties.STUSPS == "MN" || d.properties.STUSPS == "IA" || d.properties.STUSPS == "LA" || d.properties.STUSPS == "ME") { return "#F2D2A4"; }
                    else if (d.properties.STUSPS == "GA" || d.properties.STUSPS == "SC") { return "#F2614C"; }
                    else { return "#c0272d"; }
                }
            })
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