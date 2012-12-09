Ember.TEMPLATES["application"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n        <div class=\"container-fluid\">\n            <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </a>\n            <a class=\"brand\" href=\"/\">Igreja Batista Central</a>\n            <div class=\"btn-group pull-right\">\n                <a class=\"btn btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    <i class=\"icon-user\"></i>\n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                <li>\n                    <a href=\"/configuracoes/perfil\">\n                        <i class=\"icon-wrench\"></i> Configurações\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"/auth/logout\">\n                        <i class=\"icon-signout\"></i> Sair\n                    </a>\n                </li>\n                </ul>\n            </div>\n\n            <div class=\"nav-collapse\">\n                <ul class=\"nav\">\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Célula\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/celula/frequencia\">Frequência</a></li>\n                            <li><a href=\"/celula/membros\">Participantes</a></li>\n                            <li><a href=\"/celula/cadastro\">Cadastro</a></li>\n                            <li><a href=\"/celula/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <!--\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Setor\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/setor/celulas\">Células</a></li>\n                            <li><a href=\"/setor/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Área\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/area/setores\">Setores</a></li>\n                            <li><a href=\"/area/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Rede\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/rede/areas\">Áreas</a></li>\n                            <li><a href=\"/rede/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n                  -->\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Recursos\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/recursos/licoes-de-celula\">Lições de Célula</a></li>\n                            <li><a href=\"/recursos/louvor\">Louvor</a></li>\n                            <li><a href=\"/recursos/dinamicas\">Dinâmicas</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </div><!--/.nav-collapse -->\n        </div><!--/.conatiner-fluid -->\n    </div>\n</div><!--/.navbar -->\n\n<div class=\"container-fluid\">\n  <div class=\"row-fluid\">\n\n  <div class=\"span8\">\n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <div class=\"page-header\">\n            <h1>Lançamento de frequência</h1>\n          </div>                    \n        </div>\n      </div><!--/.row-fluid -->\n            \n      <div class=\"row-fluid\">\n        <div class=\"span12\">\n          <ul class=\"nav nav-tabs\">\n            <li class=\"active\">\n              <a href=\"#frequencia\" data-toggle=\"tab\">Célula</a>\n            </li>\n            <!--  <li><a href=\"#frequencia-cultos\" data-toggle=\"tab\">Cultos</a></li>-->\n          </ul>\n\n          <div class=\"tab-content\">\n            <div class=\"tab-pane active\" id=\"frequencia\">\n              <div class=\"span12\">\n              \n              ");
  stack1 = depth0;
  stack2 = "frequencia";
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
  data.buffer.push(escapeExpression(stack1) + "\n\n              ");
  stack1 = depth0;
  stack2 = "newParticipant";
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
  data.buffer.push(escapeExpression(stack1) + "\n            </div><!--/.span12 -->\n          </div><!--/.tab-pane -->\n        </div><!--/.tab-content -->\n      </div><!--/.span12 -->\n    </div><!--/.row-fluid -->\n  </div><!--/span8 -->\n\n  ");
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
  data.buffer.push(escapeExpression(stack1) + "\n</div><!--/.row-fluid -->\n\n<hr>\n    <footer>\n        <p>Desenvolvido por <a href=\"http://twitter.com/andrehigher\">André</a> & <a href=\"http://twitter.com/fabriciotav\">Fabrício</a></p>\n    </footer>\n</div><!--/.fluid-container-->\n\n\n\n\n    \n");
  return buffer;
});