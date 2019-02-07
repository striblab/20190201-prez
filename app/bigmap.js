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
        
        var projection = d3.geoAlbersUsa().scale(1000).translate([250, 240]);

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
                } else if (self.race == 4) {
                    if (d.properties.STUSPS == "CA") { return "#F2614C"; }
                    else if (d.properties.STUSPS == "NE" || d.properties.STUSPS == "WI" || d.properties.STUSPS == "WV" || d.properties.STUSPS == "PA") { return "#D4CB6A"; }
                    else if (d.properties.STUSPS == "OH") { return "#F2D2A4"; }
                    else if (d.properties.STUSPS == "OR") { return "#c0272d"; }
                    else if (d.properties.STUSPS == "IL") { return "#E562AC"; }
                    else if (d.properties.STUSPS == "MA") { return "#8B4513"; }
                    else if (d.properties.STUSPS == "SD") { return "#DAA520"; }
                    else if (d.properties.STUSPS == "NH") { return "#999999"; }
                    else { return "#dddddd"; }
                }
            })
            .style("stroke-width", "1")
            .attr("class","state")

            g.append("g")
            .attr("class", "states-names")
            .selectAll("text")
            .data(us.features)
            .enter()
            .append("svg:text")
            .text(function(d){
               if (d.properties.STUSPS != "DC") { return d.properties.STUSPS; }
                
                // if (d.properties.STUSPS != "MD" && d.properties.STUSPS != "CT" && d.properties.STUSPS != "MA" && d.properties.STUSPS != "RI" && d.properties.STUSPS != "VT" && d.properties.STUSPS != "NH" && d.properties.STUSPS != "DE" && d.properties.STUSPS != "NJ" && d.properties.STUSPS != "HI" && d.properties.STUSPS != "DC") { 
                //     return d.properties.STUSPS;
                // }
            })
            .attr("x", function(d){
                if (d.properties.STUSPS == "LA" || d.properties.STUSPS == "CA") { return path.centroid(d)[0] - 7; }
                else if (d.properties.STUSPS == "FL") { return path.centroid(d)[0] + 11; }
                else if (d.properties.STUSPS == "MI") { return path.centroid(d)[0] + 8; }
                else { return path.centroid(d)[0]; }
            })
            .attr("y", function(d){
                if (d.properties.STUSPS == "MI") { return path.centroid(d)[1] + 15; }
                else { return  path.centroid(d)[1] + 2; }
            })
            .attr("text-anchor","middle")
            .attr('fill', 'white');

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