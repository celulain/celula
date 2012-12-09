Ember.TEMPLATES["cell-participants"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"span8 offset2\">\n      <a class=\"btn btn-block btn-large\" ");
  stack1 = depth0;
  stack2 = "addNewVisitor";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n        Adicionar Participante\n      </a>\n    </div>\n  </div>\n  <hr class=\"space\">\n  <div class=\"row\">\n    <div class=\"span8 offset2\">\n      <table class=\"table table-striped table-bordered\">\n        <thead>\n          <tr>\n            <th class=\"th-left\">Nome</th>\n            <th>Função</th>\n            <th>Membresia</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr>\n            <td class=\"td-left\"><a ");
  stack1 = depth0;
  stack2 = "editParticipant";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Fabrício</a></td>\n            <td>Lider</td>\n            <td>IBCBH</td>\n          </tr>\n          <tr>\n            <td class=\"td-left\"><a ");
  stack1 = depth0;
  stack2 = "editParticipant";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Fabrício</a></td>\n            <td>Anfitrião</td>\n            <td>Getsêmani</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>");
  return buffer;
});