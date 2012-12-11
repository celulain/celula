Ember.TEMPLATES["subgoal-future-leader"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4, stack5;
  data.buffer.push("\n        <div class=\"edit-field\">\n          <span class=\"text-medium\">");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</span>\n\n          <span class=\"ft-requirement\" data-requirement=\"1\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement1";
  stack3 = helpers['if'];
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(4, program4, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"2\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement2";
  stack3 = helpers['if'];
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(8, program8, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"3\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement3";
  stack3 = helpers['if'];
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(12, program12, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"4\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement4";
  stack3 = helpers['if'];
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(16, program16, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"5\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement5";
  stack3 = helpers['if'];
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(20, program20, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"6\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement6";
  stack3 = helpers['if'];
  tmp1 = self.program(22, program22, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(24, program24, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n\n          <span class=\"ft-requirement\" data-requirement=\"7\" ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = depth0;
  stack4 = "futureLeaderRequirement";
  stack5 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack3);
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack5.call(depth0, stack4, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n            ");
  stack1 = depth0;
  stack2 = "requirements.requirement7";
  stack3 = helpers['if'];
  tmp1 = self.program(26, program26, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(28, program28, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n        </div>\n      ");
  return buffer;}
function program2(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program4(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program6(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program8(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program10(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program12(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program14(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program16(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program18(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program20(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program22(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program24(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program26(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program28(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

  data.buffer.push("      <h3 class=\"subgoal-title\">Novo Líder</h3>\n\n      ");
  stack1 = depth0;
  stack2 = "futureLeader";
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
  return buffer;
});