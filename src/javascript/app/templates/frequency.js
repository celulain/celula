Ember.TEMPLATES["frequency"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, undef=void 0;

function program1(depth0,data) {
  
  
  data.buffer.push("\n            <a style=\"float: right;\" class=\"btn btn-success disabled\">Salvo</a>\n          ");}

function program3(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n            <a style=\"float: right;\" ");
  stack1 = depth0;
  stack2 = "salvarFrequencia";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-success\">Salvar</a>\n          ");
  return buffer;}

function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                  <th class=\"date-meeting\">");
  stack1 = depth0;
  stack2 = "date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</th>\n                ");
  return buffer;}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                <tr>\n                  <td class=\"td-left\">");
  stack1 = depth0;
  stack2 = "funcao";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n                  <td class=\"td-left\">\n                    <a ");
  stack1 = depth0;
  stack2 = "editParticipant";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "nome";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</a>\n                  </td>\n                  ");
  stack1 = depth0;
  stack2 = "dateMeetings";
  stack3 = helpers.each;
  tmp1 = self.program(8, program8, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </tr>\n              ");
  return buffer;}
function program8(depth0,data) {
  
  
  data.buffer.push("\n                    <td>\n                      <span class=\"frequency-checkbox\"><i class=\"icon-check-empty\"></i></span>\n                    </td>\n                  ");}

function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n                <tr>\n                  <td class=\"td-left\">");
  stack1 = depth0;
  stack2 = "funcao";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</td>\n                  <td class=\"td-left\">\n                    <a ");
  stack1 = depth0;
  stack2 = "editParticipant";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = depth0;
  stack2 = "nome";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</a>\n                  </td>\n                  ");
  stack1 = depth0;
  stack2 = "dateMeetings";
  stack3 = helpers.each;
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </tr>\n              ");
  return buffer;}
function program11(depth0,data) {
  
  
  data.buffer.push("\n                    <td>\n                      <span class=\"frequency-checkbox\"><i class=\"icon-check\"></i></span>\n                    </td>\n                  ");}

  data.buffer.push("<div class=\"container-fluid\">\n  <div class=\"row-fluid\">\n    <div class=\"span7\">\n           \n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          \n              <a class=\"btn pull-left\"><i class=\"icon-arrow-left\"></i></a>\n              <a class=\"btn pull-right\"><i class=\"icon-arrow-right\"></i></a>\n\n              <br><br>\n          <!-- Selecionar reunião:\n          ");
  stack1 = depth0;
  stack2 = "Ember.Select";
  stack3 = {};
  stack4 = "allMeetings";
  stack3['contentBinding'] = stack4;
  stack4 = "content.date";
  stack3['optionLabelPath'] = stack4;
  stack4 = "content.date";
  stack3['optionValuePath'] = stack4;
  stack4 = "lastSelectedMeeting";
  stack3['valueBinding'] = stack4;
  stack4 = helpers.view;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " -->\n          \n          <!-- ");
  stack1 = depth0;
  stack2 = "salvo";
  stack3 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(3, program3, data);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" -->\n          \n\n\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th></th>\n                <th class=\"th-left\">Nome</th>\n                ");
  stack1 = depth0;
  stack2 = "dateMeetings";
  stack3 = helpers.each;
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </tr>\n            </thead>\n            \n            <tbody>\n              <tr>\n                <td colspan=\"8\">Membros IBC</td>\n              </tr>\n              ");
  stack1 = depth0;
  stack2 = "members";
  stack3 = helpers.each;
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          \n              <tr>\n                <td colspan=\"8\">Visitantes</td>\n              </tr>\n              ");
  stack1 = depth0;
  stack2 = "visitors";
  stack3 = helpers.each;
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </tbody>\n          </table>\n\n\n      <p class=\"add-visitor\">\n        <a ");
  stack1 = depth0;
  stack2 = "addNewVisitor";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " class=\"btn btn-block btn-large\">Adicionar Visitante</a>\n      </p>\n\n      </div><!--/.span12 -->\n    </div><!--/.row-fluid -->\n  </div><!--/span8 -->\n\n  ");
  stack1 = depth0;
  stack2 = "subgoals";
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
  data.buffer.push(escapeExpression(stack1) + "\n  </div><!--/.row-fluid -->\n\n</div><!--/.container-fluid -->");
  return buffer;
});