Ember.TEMPLATES["suggestions"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                <li>");
  stack1 = depth0;
  stack2 = "date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " • ");
  stack1 = depth0;
  stack2 = "suggestion";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</li>\n                ");
  return buffer;}

  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"span8 offset2\">\n            <h3>Sugestões enviadas</h3>\n            <ul>\n                ");
  stack1 = depth0;
  stack2 = "content";
  stack3 = helpers.each;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n        </div>\n    </div>\n</div>");
  return buffer;
});