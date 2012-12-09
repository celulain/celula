Ember.TEMPLATES["subgoals"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n        Faltam <strong>");
  stack1 = depth0;
  stack2 = "remainingDays";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</strong> dias ou <strong>");
  stack1 = depth0;
  stack2 = "remainingWeeks";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</strong> semanas\n      ");
  return buffer;}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4, stack5;
  data.buffer.push("\n        <div>\n          <span class=\"text-medium\">");
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
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(6, program6, data);
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
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(10, program10, data);
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
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(14, program14, data);
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
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(18, program18, data);
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
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(22, program22, data);
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
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(26, program26, data);
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
  tmp1 = self.program(28, program28, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(30, program30, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </span>\n        </div>\n      ");
  return buffer;}
function program4(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program6(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program8(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program10(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program12(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program14(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program16(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program18(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program20(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program22(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program24(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program26(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

function program28(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star\"></i>\n            ");}

function program30(depth0,data) {
  
  
  data.buffer.push("\n              <i class=\"icon-star-empty\"></i>\n            ");}

  data.buffer.push("<div class=\"span4\">\n\n  <div class=\"\" id=\"submetas\">\n    <div class=\"submeta-1\">\n      <h3>Data de Multiplicação</h3>\n\n      <p ");
  stack1 = depth0;
  stack2 = "editSubgoal1";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"subgoal-text text-large\">\n        ");
  stack1 = depth0;
  stack2 = "multiplicationDate";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n      </p>\n\n      <div class=\"edit-subgoal-1\">\n\n      ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "dd/mm/aaaa";
  stack3['placeholder'] = stack4;
  stack4 = "newMultiplicationDate";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n\n      <a ");
  stack1 = depth0;
  stack2 = "saveSubgoal1";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-success\">Salvar</a>\n      <a ");
  stack1 = depth0;
  stack2 = "closeSubgoal1";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n        <i class=\"icon-remove style-icon-remove\"></i>\n      </a>\n      </div><!-- /.edit-subgoal-1 -->\n\n      ");
  stack1 = depth0;
  stack2 = "hasMultiplicationDate";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div><!-- /.submeta-1 -->\n\n\n    <div class=\"submeta-2\">\n      <h3>Presença de Deus</h3>\n\n      ");
  stack1 = depth0;
  stack2 = "godPresence";
  foundHelper = helpers.outlet;
  stack3 = foundHelper || depth0.outlet;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, tmp1); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "outlet", stack2, tmp1); }
  else { stack1 = stack3; }
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <!-- SUBGOAL 3: Novo líder -->\n    <div class=\"submeta-3\">\n      <h3>Novo Líder</h3>\n\n      ");
  stack1 = depth0;
  stack2 = "futureLeader";
  stack3 = helpers.each;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n    <div class=\"submeta-4\">\n      <h3>Novos Participantes</h3>\n\n\n    </div>\n    <div class=\"submeta-5\">\n      <h3>Novo Anfitrião</h3>\n\n      <p ");
  stack1 = depth0;
  stack2 = "editSubgoal5";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"subgoal-text\">\n              ");
  stack1 = depth0;
  stack2 = "newHost";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n            </p>\n            <div class=\"edit-subgoal-5\">\n              ");
  stack1 = depth0;
  stack2 = "Ember.TextField";
  stack3 = {};
  stack4 = "newHostInput";
  stack3['valueBinding'] = stack4;
  stack4 = "Nome do futuro anfitrião";
  stack3['placeholder'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n\n              <a ");
  stack1 = depth0;
  stack2 = "saveSubgoal5";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-success\">Salvar</a>\n              <a ");
  stack1 = depth0;
  stack2 = "closeSubgoal5";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                <i class=\"icon-remove style-icon-remove\"></i>\n              </a>\n            </div><!-- /.edit-subgoal-5 -->\n    </div>\n  </div>\n\n\n</div><!--/span4 -->");
  return buffer;
});