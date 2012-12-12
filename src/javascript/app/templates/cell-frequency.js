Ember.TEMPLATES["cell-frequency"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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
  data.buffer.push("\n            <li>");
  stack1 = depth0;
  stack2 = "date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</li>\n          ");
  return buffer;}

function program7(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n\n          ");
  stack1 = depth0;
  stack2 = "position";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ", ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ", ");
  stack1 = depth0;
  stack2 = "meetings";
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
  data.buffer.push(" <br>\n          ");
  return buffer;}
function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push(" ");
  stack1 = depth0;
  stack2 = "date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1));
  return buffer;}

function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n              <div class=\"row-fluid\">\n                <div class=\"span12\">\n                  ");
  stack1 = depth0;
  stack2 = "position";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                </div>\n              </div>\n              ");
  return buffer;}

function program12(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3;
  data.buffer.push("\n              <div class=\"row-fluid\">\n                <div class=\"span12\">\n                  ");
  stack1 = depth0;
  stack2 = "name";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                </div>\n              </div>\n              ");
  return buffer;}

function program14(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n              <div class=\"row-fluid\">\n                <div class=\"span12 frequency-check\">\n                  <a ");
  stack1 = depth0;
  stack2 = "checkPresence";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = {};
  stack2 = "date1:check";
  stack1['class'] = stack2;
  stack2 = "id";
  stack1['data-user-id'] = stack2;
  stack2 = "meeting_id1";
  stack1['data-meeting-id'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "  data-position=\"1\">\n                    <i class=\"icon-ok\"></i>\n                  </a>\n                  \n                </div>\n              </div>\n              ");
  return buffer;}

function program16(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n              <div class=\"row-fluid\">\n                <div class=\"span12 frequency-check\">\n                  <a ");
  stack1 = depth0;
  stack2 = "checkPresence";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = {};
  stack2 = "date2:check";
  stack1['class'] = stack2;
  stack2 = "id";
  stack1['data-user-id'] = stack2;
  stack2 = "meeting_id2";
  stack1['data-meeting-id'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "  data-position=\"2\">\n                    <i class=\"icon-ok\"></i>\n                  </a>\n                  \n                </div>\n              </div>\n              ");
  return buffer;}

function program18(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n              <div class=\"row-fluid\">\n                <div class=\"span12 frequency-check\">\n                  <a ");
  stack1 = depth0;
  stack2 = "checkPresence";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = {};
  stack2 = "date3:check";
  stack1['class'] = stack2;
  stack2 = "id";
  stack1['data-user-id'] = stack2;
  stack2 = "meeting_id3";
  stack1['data-meeting-id'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "  data-position=\"3\">\n                    <i class=\"icon-ok\"></i>\n                  </a>\n                  \n                </div>\n              </div>\n              ");
  return buffer;}

function program20(depth0,data) {
  
  var buffer = '', stack1, stack2, stack3, stack4;
  data.buffer.push("\n              <div class=\"row-fluid\">\n                <div class=\"span12 frequency-check\">\n                  <a ");
  stack1 = depth0;
  stack2 = "checkPresence";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = {};
  stack2 = "date4:check";
  stack1['class'] = stack2;
  stack2 = "id";
  stack1['data-user-id'] = stack2;
  stack2 = "meeting_id4";
  stack1['data-meeting-id'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "  data-position=\"4\">\n                    <i class=\"icon-ok\"></i>\n                  </a>\n                  \n                </div>\n              </div>\n              ");
  return buffer;}

  data.buffer.push("<div class=\"container-fluid\">\n  <div class=\"row-fluid\">\n    <div class=\"span7\">\n           \n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          \n              <a ");
  stack1 = depth0;
  stack2 = "previousMeeting";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = {};
  stack2 = "noPrevious:disabled :btn :pull-left";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-arrow-left\"></i></a>\n              <a ");
  stack1 = depth0;
  stack2 = "nextMeeting";
  stack3 = {};
  stack4 = "controller";
  stack3['target'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + " ");
  stack1 = {};
  stack2 = "noNext:disabled :btn :pull-right";
  stack1['class'] = stack2;
  stack2 = helpers.bindAttr;
  tmp1 = {};
  tmp1.hash = stack1;
  tmp1.contexts = [];
  tmp1.data = data;
  stack1 = stack2.call(depth0, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-arrow-right\"></i></a>\n\n              <br><br>\n          <!-- Selecionar reunião:\n          ");
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
  data.buffer.push(" -->\n\n\n          Todas meetings:<br>\n          <ul>\n          ");
  stack1 = depth0;
  stack2 = "App.meetings";
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
  data.buffer.push("\n          </ul>\n\n\n          ");
  stack1 = depth0;
  stack2 = "content";
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
  data.buffer.push("\n          \n          <div class=\"row-fluid frequency-table\">\n            <div class=\"span2 frequency-name\">\n              <div class=\"row-fluid\">\n                <div class=\"span12\">\n                  <strong>Função</strong>\n                </div>\n              </div>\n\n              ");
  stack1 = depth0;
  stack2 = "processedDummy";
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
  data.buffer.push("\n            </div>\n            \n            <div class=\"span2 frequency-name\">\n              <div class=\"row-fluid\">\n                <div class=\"span12\">\n                  <strong>Nome</strong>\n                </div>\n              </div>\n\n              ");
  stack1 = depth0;
  stack2 = "processedDummy";
  stack3 = helpers.each;
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n\n            <div class=\"span2 frequency-col-date\">\n              <div class=\"row-fluid\">\n                <div class=\"span12\">\n                  <strong>");
  stack1 = depth0;
  stack2 = "date1.date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</strong>\n                </div>\n              </div>\n\n              ");
  stack1 = depth0;
  stack2 = "processedDummy";
  stack3 = helpers.each;
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n              <hr>\n              <div class=\"row-fluid\">\n                <div class=\"span12 frequency-presents\">\n                  ");
  stack1 = depth0;
  stack2 = "date1.presents";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                </div>\n              </div>\n            </div>\n\n            <div class=\"span2 frequency-col-date\">\n\n              <div class=\"row-fluid\">\n                <div class=\"span12\">\n                  <strong>");
  stack1 = depth0;
  stack2 = "date2.date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</strong>\n                </div>\n              </div>\n\n              ");
  stack1 = depth0;
  stack2 = "processedDummy";
  stack3 = helpers.each;
  tmp1 = self.program(16, program16, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n              <hr>\n              <div class=\"row-fluid\">\n                <div class=\"span12 frequency-presents\">\n                  ");
  stack1 = depth0;
  stack2 = "date2.presents";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                </div>\n              </div>\n            </div>\n\n            <div class=\"span2 frequency-col-date\">\n              <div class=\"row-fluid\">\n                <div class=\"span12\">\n                  <strong>");
  stack1 = depth0;
  stack2 = "date3.date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</strong>\n                </div>\n              </div>\n              \n              ");
  stack1 = depth0;
  stack2 = "processedDummy";
  stack3 = helpers.each;
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n              <hr>\n              <div class=\"row-fluid\">\n                <div class=\"span12 frequency-presents\">\n                  ");
  stack1 = depth0;
  stack2 = "date3.presents";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                </div>\n              </div>\n            </div>\n\n            <div class=\"span2 frequency-col-date\">\n              <div class=\"row-fluid\">\n                <div class=\"span12\">\n                  <strong>");
  stack1 = depth0;
  stack2 = "date4.date";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "</strong>\n                </div>\n              </div>\n\n              ");
  stack1 = depth0;
  stack2 = "processedDummy";
  stack3 = helpers.each;
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n              <hr>\n              <div class=\"row-fluid\">\n                <div class=\"span12 frequency-presents\">\n                  ");
  stack1 = depth0;
  stack2 = "date4.presents";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n                </div>\n              </div>\n            </div>\n          </div>          \n\n          \n\n\n      <p class=\"add-visitor\">\n        <a class=\"btn btn-block btn-large\">Adicionar Visitante</a>\n      </p>\n\n      </div><!--/.span12 -->\n    </div><!--/.row-fluid -->\n  </div><!--/span8 -->\n\n  <div class=\"span4 offset1\">\n  <div class=\"\" id=\"submetas\">\n    <div class=\"submeta-1\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalMultiplicationDate";
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
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <div class=\"submeta-2\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalGodPresence";
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
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <!-- SUBGOAL 3: Novo líder -->\n    <div class=\"submeta-3\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalFutureLeader";
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
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <div class=\"submeta-4\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalNewParticipants";
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
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n\n    <div class=\"submeta-5\">\n      ");
  stack1 = depth0;
  stack2 = "subgoalNewHost";
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
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n  </div>\n\n  <hr class=\"hr-subgoal\">\n\n  <div class=\"suggestions\" ");
  stack1 = depth0;
  stack2 = "gotoNewSuggestion";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n    <div class=\"icone\">\n      <i class=\"icon-comment\"></i>\n    </div>\n\n    <div class=\"texto\">\n       Sugestões?\n    </div>\n  </div>\n</div>\n  </div><!--/.row-fluid -->\n\n</div><!--/.container-fluid -->");
  return buffer;
});