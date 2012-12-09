Ember.TEMPLATES["new-participant-window"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"window-overlay\">\n    <div class=\"window\">\n        <div class=\"window-wrapper\">\n            <div class=\"clearfix\">\n                <div class=\"window-header\">\n                    <a ");
  stack1 = depth0;
  stack2 = "closeWindow";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                        <i class=\"icon-remove\"></i>\n                    </a>\n                </div>\n\n                <div class=\"window-main-col\">\n                    main content\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
  return buffer;
});