Ember.TEMPLATES["application"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, stack4, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  stack1 = depth0;
  stack2 = "window";
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
  data.buffer.push(escapeExpression(stack1) + "\n\n<div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n        <div class=\"container-fluid\">\n            <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </a>\n            <a class=\"brand\" href=\"/\">Igreja Batista Central</a>\n            <div class=\"btn-group pull-right\">\n                <a class=\"btn btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    <i class=\"icon-user\"></i>\n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                <li>\n                    <!-- <a ");
  stack1 = depth0;
  stack2 = "gotoSettings";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">\n                        <i class=\"icon-wrench\"></i> Configurações\n                    </a> -->\n                    <a href=\"/configuracoes/perfil\">\n                        <i class=\"icon-wrench\"></i> Configurações\n                    </a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"/auth/logout\">\n                        <i class=\"icon-signout\"></i> Sair\n                    </a>\n                </li>\n                </ul>\n            </div>\n\n            <div class=\"nav-collapse\">\n                <ul class=\"nav\">\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Célula\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoFrequency";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Frequência</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoParticipants";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Participantes</a></li>\n                            <!-- <li><a ");
  stack1 = depth0;
  stack2 = "gotoRegister";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Cadastro</a></li> -->\n                            <li><a href=\"/celula/cadastro\">Cadastro</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoProfile";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <!--\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Setor\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/setor/celulas\">Células</a></li>\n                            <li><a href=\"/setor/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Área\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/area/setores\">Setores</a></li>\n                            <li><a href=\"/area/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Rede\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a href=\"/rede/areas\">Áreas</a></li>\n                            <li><a href=\"/rede/perfil\">Perfil</a></li>\n                        </ul>\n                    </li>\n                  -->\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Recursos\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoLessons";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Lições de Célula</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoPraise";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Louvor</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoDynamics";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Dinâmicas</a></li>\n                        </ul>\n                    </li>\n\n\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Admin\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a ");
  stack1 = depth0;
  stack2 = "gotoAdminMembers";
  stack3 = {};
  stack4 = "true";
  stack3['href'] = stack4;
  stack4 = helpers.action;
  tmp1 = {};
  tmp1.hash = stack3;
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack4.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Membros</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </div><!--/.nav-collapse -->\n        </div><!--/.conatiner-fluid -->\n    </div>\n</div><!--/.navbar -->\n\n");
  stack1 = depth0;
  stack2 = "container";
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
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;
});