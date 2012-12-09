App.GodPresenceView = Em.View.extend({
    templateName: 'god-presence',
    data: function() {
        var bola = null;
        $.ajax('/js/app/data.csv', {
            context: bola,
            success: function(data) {
                console.log(data);
                bola = data;
            }
        });
        return bola;
    }.property(),
    // brush: function brush() {
    //     x.domain(brush.empty() ? x2.domain() : brush.extent());
    //     focus.select("path").attr("d", area);
    //     focus.select(".x.axis").call(xAxis);
    // },
    didInsertElement: function() {
        var brush = this.get('brush');
        var id = this.$().attr('id');

        var margin = {top: 10, right: 10, bottom: 100, left: 40},
            margin2 = {top: 130, right: 10, bottom: 20, left: 40},
            width = 260 - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom,
            height2 = 200 - margin2.top - margin2.bottom;

        var parseDate = d3.time.format("%b %Y").parse;

        var x = d3.time.scale().range([0, width]),
            x2 = d3.time.scale().range([0, width]),
            y = d3.scale.linear().range([height, 0]),
            y2 = d3.scale.linear().range([height2, 0]);

        var xAxis = d3.svg.axis().scale(x).orient("bottom"),
            xAxis2 = d3.svg.axis().scale(x2).orient("bottom"),
            yAxis = d3.svg.axis().scale(y).orient("left").ticks(2);

        var brush = d3.svg.brush()
            .x(x2)
            .on("brush", brush);

        var area = d3.svg.area()
            .interpolate("monotone")
            .x(function(d) { return x(d.date); })
            .y0(height)
            .y1(function(d) { return y(d.presence); });

        var area2 = d3.svg.area()
            .interpolate("monotone")
            .x(function(d) { return x2(d.date); })
            .y0(height2)
            .y1(function(d) { return y2(d.presence); });

        var svg = d3.select('#' + id).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        svg.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height);

        var focus = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var context = svg.append("g")
            .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

        // var data = this.get('data');


        d3.csv("/js/app/data.csv", function(data, error) {

            data.forEach(function(d) {
              d.date = parseDate(d.date);
              d.presence = +d.presence;
            });

            x.domain(d3.extent(data.map(function(d) { return d.date; })));
        y.domain([0, d3.max(data.map(function(d) { return d.presence; }))]);
        x2.domain(x.domain());
        y2.domain(y.domain());

        focus.append("path")
            .datum(data)
            .attr("clip-path", "url(#clip)")
            .attr("d", area);

        focus.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        focus.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        context.append("path")
            .datum(data)
            .attr("d", area2);

        context.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height2 + ")")
            .call(xAxis2);

        context.append("g")
            .attr("class", "x brush")
            .call(brush)
          .selectAll("rect")
            .attr("y", -6)
            .attr("height", height2 + 7);
        });

        // data.forEach(function(d) {
            // d.date = parseDate(d.date);
            // d.presence = +d.presence;
        // });
    }
});
