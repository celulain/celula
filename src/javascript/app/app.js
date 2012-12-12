var brush = function() {
    x.domain(brush.empty() ? x2.domain() : brush.extent());
    focus.select("path").attr("d", area);
    focus.select(".x.axis").call(xAxis);
}

window.App = Em.Application.create({
    ready: function() {

        // FIXTURE Data for local storage
        App.CellProfile.createRecord({
            leader: "Fabricio",
            gender: "",
            min_age: "",
            max_age: "",
            address: "",
            church: ""
        });
    }
});
