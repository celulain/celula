var brush = function() {
    x.domain(brush.empty() ? x2.domain() : brush.extent());
    focus.select("path").attr("d", area);
    focus.select(".x.axis").call(xAxis);
}

var App = Em.Application.create();

// BEGIN Participants Controller
App.ParticipantsController = Em.ArrayController.extend({
    content: []
});
// END Participants Controller
