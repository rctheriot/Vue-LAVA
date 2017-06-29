<template>
  <div class="bar-div">
    <svg class="bar-graph"></svg>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import * as d3 from "d3";
  
  export default {
    name: "svg",
    computed: {
      ...mapGetters([
        'getData'
      ])
    },
    mounted() {
      var data = this.getData;

      // set the dimensions and margins of the graph
      var margin = {top: 20, right: 20, bottom: 200, left: 40};

      var element = d3.select('.bar-div').node();

      var width = element.getBoundingClientRect().width - margin.left - margin.right;
      var height = element.getBoundingClientRect().height * 3 - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleBand()
                .range([0, width])
                .padding(0.1);
      var y = d3.scaleLinear()
                .range([height, 0]);
                
      // append the svg object to the body of the page
      // append a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      var svg = d3.select(".bar-graph")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")");
      // get the data
      // format the data
      data.forEach(function(d) {
        d.Protein = +d.Protein;
      });
      // Scale the range of the data in the domains
      x.domain(data.map(function(d) { return d.Brand; }));
      y.domain([0, d3.max(data, function(d) { return d.Protein; })]);
      // append the rectangles for the bar chart
      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.Brand); })
          .attr("width", x.bandwidth())
          .attr("y", function(d) { return y(d.Protein); })
          .attr("height", function(d) { return height - y(d.Protein); });
      // add the x Axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")", )
          .call(d3.axisBottom(x))
          .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(90)")
            .style("text-anchor", "start");
          
      // add the y Axis
      svg.append("g")
          .call(d3.axisLeft(y));
    },
  };
  
</script>

<style scroped>
  .bar {
    fill: steelblue;
  }
</style>
