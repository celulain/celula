var Adm = Em.Application.create();
Adm.ApplicationController = Em.Controller.extend();
Adm.ConteudoController = Em.Controller.extend();
Adm.HomeController = Em.Controller.extend();
Adm.IgrejaController = Em.Controller.extend();
Adm.MembresiaController = Em.Controller.extend();
Adm.ApplicationView = Em.View.extend({
    templateName: 'application'
});
Adm.ConteudoView = Em.View.extend({
    templateName: 'conteudo'
});
Adm.HomeView = Em.View.extend({
    templateName: 'home'
});
Adm.IgrejaView = Em.View.extend({
    templateName: 'igreja'
});
Adm.MembresiaView = Em.View.extend({
    templateName: 'membresia'
});
/**
    STATES TREE
    -----------
.
└── root
    ├── index
    ├── igreja
    │   ├── hierarquia
    │   └── pastores
    ├── membresia
    │   ├── adicionar
    │   ├── remover
    │   └── atribuir função
    └── conteudo
        ├── licoes de celula
        ├── dinamicas
        └── louvor

*/

Adm.Router = Em.Router.extend({
    enableLogging: true,

    root: Em.Route.extend({
        index: Em.Route.extend({
            route: '/',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'home');
            }
        }),

        goIgreja: Em.Route.transitionTo('root.igreja'),
        igreja: Em.Route.extend({
            route: '/igreja',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'igreja');
            }
        }),

        goMembresia: Em.Route.transitionTo('root.membresia'),
        membresia: Em.Route.extend({
            route: '/membresia',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'membresia');
            }
        }),

        goConteudo: Em.Route.transitionTo('root.conteudo'),
        conteudo: Em.Route.extend({
            route: '/conteudo',
            connectOutlets: function(router) {
                router.get('applicationController').connectOutlet('view', 'conteudo');
            }
        })
    })
});

Adm.initialize();
Ember.TEMPLATES["application"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </a>\n            <a class=\"brand\" href=\"/admin\">Painel Administrativo</a>\n            <div class=\"btn-group pull-right\">\n                <a class=\"btn btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    <i class=\"icon-user icon-white\"></i>\n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                <li>\n                    <a href=\"#\">Configurações</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"#\">Sair</a>\n                </li>\n                </ul>\n            </div>\n\n            <div class=\"nav-collapse\">\n                <ul class=\"nav\">\n                    <li><a ");
  stack1 = depth0;
  stack2 = "goIgreja";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Igreja</a></li>\n                    <li><a ");
  stack1 = depth0;
  stack2 = "goMembresia";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Membresia</a></li>\n                    <li><a ");
  stack1 = depth0;
  stack2 = "goConteudo";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Conteúdo</a></li>\n                </ul>\n            </div><!--/.nav-collapse -->\n        </div><!--/.conatiner -->\n    </div>\n</div><!--/.navbar -->\n\n<div class=\"container\">\n    ");
  stack1 = depth0;
  stack2 = "outlet";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n\n\n    <hr>\n    <footer>\n        <p>Copyright 2012 <a href=\"http://twitter.com/andrehigher\">André</a> & <a href=\"http://twitter.com/fabriciotav\">Fabrício</a></p>\n    </footer>\n</div><!--/.fluid-container-->");
  return buffer;
});Ember.TEMPLATES["cell_application"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"navbar-inner\">\n        <div class=\"container\">\n            <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </a>\n            <a class=\"brand\" href=\"/app\">Nome da Igreja</a>\n            <div class=\"btn-group pull-right\">\n                <a class=\"btn btn-inverse dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    <i class=\"icon-user icon-white\"></i>\n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu\">\n                <li>\n                    <a ");
  stack1 = depth0;
  stack2 = "goSettings";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Configurações</a>\n                </li>\n                <li class=\"divider\"></li>\n                <li>\n                    <a href=\"/\">Sair</a>\n                </li>\n                </ul>\n            </div>\n\n            <div class=\"nav-collapse\">\n                <ul class=\"nav\">\n                    <li class=\"dropdown\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> Célula\n                            <b class=\"caret\"></b>\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a ");
  stack1 = depth0;
  stack2 = "goCelulaFrequencia";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Frequência</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "goCelulaParticipantes";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Participantes</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "goCelulaCadastro";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Cadastro</a></li>\n                            <li><a ");
  stack1 = depth0;
  stack2 = "goCelulaPerfil";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Perfil</a></li>\n                        </ul>\n                    </li>\n                    <li><a ");
  stack1 = depth0;
  stack2 = "goRecursos";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Recursos</a></li>\n\n                </ul>\n            </div><!--/.nav-collapse -->\n        </div><!--/.conatiner -->\n    </div>\n</div><!--/.navbar -->\n\n<div class=\"container\">\n    ");
  stack1 = depth0;
  stack2 = "outlet";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n\n\n    <hr>\n    <footer>\n        <p>Copyright 2012 <a href=\"http://twitter.com/andrehigher\">André</a> & <a href=\"http://twitter.com/fabriciotav\">Fabrício</a></p>\n    </footer>\n</div><!--/.fluid-container-->");
  return buffer;
});Ember.TEMPLATES["cell_celula-cadastro"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row-fluid\">\n    <form class=\"form-horizontal\" method=\"post\" name=\"registerCell\" action=\"/celula/cadastro\">\n    <input type=\"hidden\" id=\"cell_id\" name=\"cell_id\" value=\"<?=$this->cell_id?>\" />\n        <fieldset>\n            <legend>Reuniões</legend>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Dia da semana</label>\n                <div class=\"controls\">\n                    <select class=\"span2\" name=\"\" id=\"\">\n                        <option value=\"1\">Segunda-feira</option>\n                        <option value=\"2\">Terça-feira</option>\n                        <option value=\"3\">Quarta-feira</option>\n                        <option value=\"4\">Quinta-feira</option>\n                        <option value=\"5\">Sexta-feira</option>\n                        <option value=\"6\">Sábado</option>\n                    </select>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Hora início</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"span1\" id=\"input01\" placeholder=\"hh:mm\" value=\"\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n        </fieldset>\n        <fieldset>\n            <legend>Endereço</legend>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Endereço</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"address\" name=\"address\" value=\"<?=$this->address?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Número</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"number\" name=\"number\" value=\"<?=$this->number?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Complemento</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"apartament\" name=\"apartament\" value=\"<?=$this->apartament?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Bairro</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"district\" name=\"district\" value=\"<?=$this->district?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Município</label>\n                <div class=\"controls\">\n                    <select class=\"\" name=\"city\" id=\"city\">\n                        <option value=\"0\">Belo Horizonte</option>\n                        <option value=\"0\">Contagem</option>\n                        <option value=\"0\">Nova Lima</option>\n                        <option value=\"0\">Betim</option>\n                    </select>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">CEP</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"span2\" id=\"zip_code\" name=\"zip_code\" placeholder=\"ex.: 30330-333\"  value=\"<?=$this->zip_code?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n        </fieldset>\n        <div class=\"form-actions\">\n            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n            <button class=\"btn\">Cancelar</button>\n        </div>\n    </form>\n</div><!--/.row-fluid -->");
});Ember.TEMPLATES["cell_celula-frequencia"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row-fluid\">\n    <div class=\"span8\">\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <div class=\"page-header\">\n                    <h1>Lançamento de frequência</h1>\n                </div>                    \n            </div>\n        </div><!--/.row-fluid -->\n            \n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <ul class=\"nav nav-tabs\">\n                    <li class=\"active\">\n                        <a href=\"#frequencia\" data-toggle=\"tab\">Célula</a>\n                    </li>\n                    <!--  <li><a href=\"#frequencia-cultos\" data-toggle=\"tab\">Cultos</a></li>-->\n                </ul>\n\n                <div class=\"tab-content\">\n                    <div class=\"tab-pane active\" id=\"frequencia\">\n                        <div class=\"span12\">\n                            <table class=\"table table-bordered\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"th-left\">Nome</th>\n                                        <th>17-11</th>\n                                        <th>24-11</th>\n                                        <th>01-12</th>\n                                        <th>08-12</th>\n                                        <th>15-12</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td colspan=\"8\">Membros IBC</td>\n                                    </tr>\n                                                                        <tr>\n                                        <td>Participante</td>\n                                        <td class=\"td-left\">M?rio C?sar Gon?alves Moreira</td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td></td>\n                                    </tr>\n                                                                        <tr>\n                                        <td>LÃ­der</td>\n                                        <td class=\"td-left\">Fabr?cio Tavares de Oliveira</td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td class=\"frequencia\">\n                                          <i class=\"icon-ok frequencia-presente\"></i>\n                                        </td>\n                                        <td></td>\n                                    </tr>\n                                                                    </tbody>\n                            </table>\n                        </div><!--/.span12 -->\n                    </div><!--/.tab-pane -->\n                    \n                    <div class=\"tab-pane\" id=\"frequencia-cultos\">\n                        <div class=\"span12\">\n                            <table class=\"table table-bordered\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"th-left\">Nome</th>\n                                        <th>Mar 2012</th>\n                                        <th>Abr 2012</th>\n                                        <th>Mai 2012</th>\n                                        <th>Jun 2012</th>\n                                        <th>Jul 2012</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                      <td colspan=\"8\">Membros IBC</td>\n                                    </tr>\n                                    <tr>\n                                      <td>Líder</td>\n                                      <td class=\"td-left\">Luiz Carlos Menezes</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Rodrigo Ferreira</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td>LT 1</td>\n                                      <td class=\"td-left\">Weliton Rodrigues</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                  <tr>\n                                    <td colspan=\"8\">Batizados Não-Membros</td>\n                                  </tr>\n                                    <tr>\n                                      <td>LT 2</td>\n                                      <td class=\"td-left\">Allyson Martins</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Breno Ferrari</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td>Anfitrião</td>\n                                      <td class=\"td-left\">Daniel Mazoni</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                  <tr>\n                                    <td colspan=\"8\">Não Batizados</td>\n                                  </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">João Paulo Santos</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                  <tr>\n                                    <td colspan=\"8\">Visitantes</td>\n                                  </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Leonardo Matos</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Paulo Eduardo Melo</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                    <tr>\n                                      <td></td>\n                                      <td class=\"td-left\">Renato Vargas</td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-remove frequencia-ausente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\">\n                                        <i class=\"icon-ok frequencia-presente\"></i>\n                                      </td>\n                                      <td class=\"frequencia\"></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div><!--/.span12 -->\n                    </div><!--/.tab-pane -->\n                </div><!--/.tab-content -->\n            </div><!--/.span12 -->\n        </div><!--/.row-fluid -->\n    </div><!--/span8 -->\n    \n    <div class=\"span4\">\n        <div class=\"page-header\">\n            <h1>5 Submetas</h1>\n        </div>\n\n        <div class=\"accordion\" id=\"submetas\">\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta1\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Data de multiplicação\n                    </a>\n                </div>\n                <div id=\"submeta1\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <div class=\"row-fluid\">\n                            <div class=\"span12\">\n                                Faltam <strong>142</strong> dias\n                            </div>\n                        </div>\n                        \n                        <div class=\"row-fluid\">\n                            <div class=\"span12\">\n                                <form action=\"\">\n                                    <div class=\"input-append\">\n                                        <span class=\"input-small uneditable-input\">\n                                            24-12-2012\n                                        </span><button class=\"btn\"><i class=\"icon-pencil\"></i></button>\n                                    </div>\n                                    \n                                </form>\n                            </div>\n                        </div>\n\n                        \n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta2\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Presença de Deus\n                    </a>\n                </div>\n                <div id=\"submeta2\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <input class=\"span12\" type=\"range\">\n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta3\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Novo Líder\n                    </a>\n                </div>\n                <div id=\"submeta3\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <div class=\"row-fluid\">\n                            <div class=\"span8\">\n                                <p>Weliton Rodrigues</p>\n                            </div>\n                            <div class=\"span4\">\n                                <span class=\"avaliacao-star\">\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star-empty\"></i>\n                                    </a>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"row-fluid\">\n                            <div class=\"span8\">\n                                <p>Allyson Martins</p>\n                            </div>\n                            <div class=\"span4\">\n                                <span class=\"avaliacao-star\">\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star-empty\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star-empty\"></i>\n                                    </a>\n                                    <a href=\"\">\n                                        <i class=\"icon-star-empty\"></i>\n                                    </a>\n                                </span>\n                            </div>\n                        </div>\n                        \n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta4\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Novos Frequentadores\n                    </a>\n                </div>\n                <div id=\"submeta4\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <div class=\"row-fluid\">\n                            <div class=\"span4\">\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        Atual\n                                    </div>\n                                </div>\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        <strong>7</strong>\n                                    </div>\n                                </div>\n                                \n                            </div><!--/.span4 -->\n                            <div class=\"span4\">\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        Alvo\n                                    </div>\n                                </div>\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        <strong>12</strong>\n                                    </div>\n                                </div>\n                                \n                            </div><!--/.span4 -->\n                            <div class=\"span4\">\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        Faltam\n                                    </div>\n                                </div>\n                                <div class=\"row-fluid\">\n                                    <div class=\"span12\">\n                                        <strong>5</strong>\n                                    </div>\n                                </div>\n                                \n                            </div><!--/.span4 -->\n\n                        </div>\n\n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n            <div class=\"accordion-group\">\n                <div class=\"accordion-heading\">\n                    <a href=\"#submeta5\" class=\"accordion-toggle submetas-info\" data-toggle=\"collapse\" data-parent=\"#submetas\">\n                        Novo Anfitrião\n                    </a>\n                </div>\n                <div id=\"submeta5\" class=\"accordion-body collapse\">\n                    <div class=\"accordion-inner\">\n                        <div class=\"row-fluid\">\n                            <form action=\"\">\n                                <div class=\"input-append\">\n                                    <span class=\"input-large uneditable-input\">\n                                        João Paulo Santos\n                                    </span><button class=\"btn\"><i class=\"icon-pencil\"></i></button>\n                                </div>\n                                \n                            </form>\n                        </div>\n                        \n                    </div>\n                </div>\n            </div><!--/.accordion-group -->\n        </div><!--/.accordion -->\n    </div><!--/span-->\n</div><!--/.row-fluid -->");
});Ember.TEMPLATES["cell_celula-participantes"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row-fluid\">\n    <div class=\"span12\">\n        <div class=\"page-header\">\n            <h1>Participantes</h1>\n        </div>\n    </div>\n</div><!--/.row-fluid -->\n<div class=\"row-fluid\">\n    <div class=\"span12\">\n        <a class=\"btn btn-primary\" href=\"#add_participante\" data-toggle=\"modal\">\n            <i class=\"icon-plus icon-white\"></i> Participante\n        </a>\n        <hr />\n    </div>\n</div><!--/.row-fluid -->\n<div class=\"row-fluid\">\n    <div class=\"span9\">\n        <table class=\"table table-striped table-bordered\">\n            <thead>\n                <tr>\n                    <th class=\"th-left\">Nome</th>\n                    <th>Função</th>\n                    <th>Categoria</th>\n                    <th>Presença</th>\n                </tr>\n            </thead>\n            <tbody>\n                                <tr>\n                    <td class=\"td-left\">\n                        <a href=\"#participante1\" data-toggle=\"modal\">\n                            M?rio C?sar Gon?alves Moreira                        </a>\n                    </td>\n                    <td>Participante</td>\n                    <td>Membro IBC</td>\n                    <td>0</td>\n                </tr>\n                                <tr>\n                    <td class=\"td-left\">\n                        <a href=\"#participante1\" data-toggle=\"modal\">\n                            Fabr?cio Tavares de Oliveira                        </a>\n                    </td>\n                    <td>LÃ­der</td>\n                    <td>Membro IBC</td>\n                    <td>0</td>\n                </tr>\n                            </tbody>\n        </table>\n    </div>\n    \n</div><!--/.row-fluid -->\n\n<!-- MODAL ADICIONAR PARTICIPANTE -->\n<div class=\"modal hide\" id=\"add_participante\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n        <h3>Adicionar Participante</h3>\n    </div>\n    <div class=\"modal-body\">\n        <form class=\"form-horizontal\" action=\"/celula/membros\" method=\"post\" name=\"addMember\">\n        <input type=\"hidden\" id=\"cell_id\" name=\"cell_id\" value=\"625\" />\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Nome</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-large typeahead\" id=\"input01\" name=\"new_name\" placeholder=\"nome completo\" data-provide=\"typeahead\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Apelido</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" class=\"input-large\" id=\"input01\" name=\"new_nick\" placeholder=\"como quer ser chamado\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Sexo</label>\n                            <div class=\"controls\">\n                                <label for=\"male\" class=\"radio\">\n                                    <input type=\"radio\" value=\"1\" name=\"new_sex\" id=\"male\">\n                                    Masculino\n                                </label>\n                                <label for=\"female\" class=\"radio\">\n                                    <input type=\"radio\" value=\"2\" name=\"new_sex\" id=\"female\">\n                                    Feminino\n                                </label>\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Data de nascimento</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" class=\"input-large\" id=\"input01\" name=\"new_birthday\" placeholder=\"dd/mm/aaaa (não obrigatório)\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Batizado</label>\n                            <div class=\"controls\">\n                                <label for=\"baptized_ibc\" class=\"radio\">\n                                    <input type=\"radio\" value=\"1\" name=\"baptized\" id=\"baptized_ibc\">\n                                    Na IBC\n                                </label>\n                                <label for=\"baptized_other\" class=\"radio\">\n                                    <input type=\"radio\"  value=\"2\" name=\"baptized\" id=\"baptized_other\">\n                                    Em outra igreja\n                                </label>\n                                <label for=\"baptized_no\" class=\"radio\">\n                                    <input type=\"radio\"  value=\"3\" name=\"baptized\" id=\"baptized_no\">\n                                    Não\n                                </label>\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                         <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Função</label>\n                            <div class=\"controls\">\n                                <label for=\"baptized_ibc\" class=\"radio\">\n                                    <input type=\"radio\" value=\"4\" name=\"role\" id=\"role\">\n                                    Líder em Treinamento\n                                </label>\n                                <label for=\"baptized_other\" class=\"radio\">\n                                    <input type=\"radio\" value=\"2\" name=\"role\" id=\"role\">\n                                    Participante\n                                </label>\n                                <label for=\"baptized_no\" class=\"radio\">\n                                    <input type=\"radio\"  value=\"5\"  name=\"role\" id=\"role\">\n                                    Visitante\n                                </label>\n                                <label for=\"baptized_no\" class=\"radio\">\n                                    <input type=\"radio\"  value=\"3\"  name=\"role\" id=\"role\">\n                                    Anfitrião\n                                </label>\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n    </div>\n    <div class=\"modal-footer\">\n        <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n        <a href=\"#\" class=\"btn btn-primary\" onclick=\"document.addMember.submit();\">Salvar</a>\n    </div>\n        </form>\n</div>\n\n<!-- MODAIS PARTICIPANTES-->\n\n<div class=\"modal hide\" id=\"participante1\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Luiz Carlos Menezes</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante2\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante3\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante4\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante5\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante6\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante7\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante8\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante9\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Nome</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>\n\n<div class=\"modal hide\" id=\"participante10\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n    <h3>Renato Vargas</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>Dados do participante</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Cancelar</a>\n    <a href=\"#\" class=\"btn btn-primary\">Salvar alterações</a>\n  </div>\n</div>");
});Ember.TEMPLATES["cell_celula-perfil"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row-fluid\">\n    <div class=\"span12\">\n        <div class=\"form-horizontal\">\n            <div class=\"control-group\">\n                <div class=\"controls\">\n                    <div class=\"span2\">\n                        <div class=\"thumbnail\">\n                            <img src=\"http://placehold.it/140x140\" alt=\"\">\n                        </div>\n                    </div>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Líder</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">\n                        Luiz Carlos Menezes\n                    </span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Gênero</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">\n                        Masculina Par\n                    </span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Faixa etária</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">\n                        25 a 32 anos\n                    </span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Bairro</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">\n                        Nova Granada\n                    </span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Discipulador</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">João Paulo</span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Coordenador</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">João Paulo</span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Rede</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">Zoe</span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Congregação</label>\n                <div class=\"controls\">\n                    <span class=\"input-xlarge uneditable-input\">Igreja Batista Central</span>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n        </div><!--/.form-horizontal -->\n    </div><!--/.span12 -->\n</div><!--/.row-fluid -->\n        ");
});Ember.TEMPLATES["cell_celula"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li><a href=\"\">Hierarquia</a></li>\n            <li class=\"active\"><a href=\"\">Pastores</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#\">Adicionar</a></li>\n            <li><a href=\"#\">Remover</a></li>\n        </ul>\n    </div>\n</div>");
});Ember.TEMPLATES["cell_home"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("cell home");
});Ember.TEMPLATES["cell_recursos-dinamicas"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("din");
});Ember.TEMPLATES["cell_recursos-home"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("home rec");
});Ember.TEMPLATES["cell_recursos-licoes-de-celula"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("licoes de celula");
});Ember.TEMPLATES["cell_recursos-louvor"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("louvor");
});Ember.TEMPLATES["cell_recursos"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li><a ");
  stack1 = depth0;
  stack2 = "goRecursosDinamicas";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Dinâmicas</a></li>\n            <li><a ");
  stack1 = depth0;
  stack2 = "goRecursosLicoesDeCelula";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Lições de Célula</a></li>\n            <li><a ");
  stack1 = depth0;
  stack2 = "goRecursosLouvor";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + ">Louvor</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        ");
  stack1 = depth0;
  stack2 = "outlet";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n</div>");
  return buffer;
});Ember.TEMPLATES["cell_settings-address"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"page-header\">\n            <h1>Endereço</h1>\n        </div>\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <form class=\"form-horizontal\" method=\"post\" action=\"\">\n                                            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Endereço</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"input01\" name=\"address\" id=\"address\" value=\"<?=$this->address?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Número</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"input01\" name=\"number\" id=\"number\" value=\"<?=$this->number?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Complemento</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"input01\" name=\"apartament\" id=\"apartament\" value=\"<?=$this->apartament?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Bairro</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"input01\" name=\"district\" id=\"district\" value=\"<?=$this->district?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Município</label>\n                <div class=\"controls\">\n                    <select class=\"\" name=\"city\" id=\"city\">\n                        <option value=\"1\">Belo Horizonte</option>\n                        <option value=\"2\">Contagem</option>\n                        <option value=\"3\">Nova Lima</option>\n                        <option value=\"4\">Betim</option>\n                    </select>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">CEP</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"span2\" id=\"input01\" name=\"zip_code\" id=\"zip_code\" placeholder=\"ex.: 30330-333\" value=\"<?=$this->zip_code?>\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n                        <div class=\"form-actions\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n                            <button class=\"btn\">Cancelar</button>\n                        </div>\n                </form>\n            </div>\n        </div>");
});Ember.TEMPLATES["cell_settings-contact"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"page-header\">\n            <h1>Contato</h1>\n        </div>\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <form class=\"form-horizontal\" method=\"post\" action=\"\">\n            \n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Telefone</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" class=\"input-large\" id=\"input01\" name=\"phone\" id=\"phone\" value=\"<?=$this->phone?>\" placeholder=\"(DDD) 9999-9999\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n\n                        <div class=\"form-actions\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n                            <button class=\"btn\">Cancelar</button>\n                        </div>\n                </form>\n            </div>\n        </div>");
});Ember.TEMPLATES["cell_settings-password"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"page-header\">\n            <h1>Senha</h1>\n        </div>\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n                <form class=\"form-horizontal\" action=\"\" method=\"post\">\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Senha atual</label>\n                            <div class=\"controls\">\n                                <input type=\"password\" class=\"input-large\" id=\"input01\" name=\"old_password\" id=\"old_password\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Nova senha</label>\n                            <div class=\"controls\">\n                                <input type=\"password\" class=\"input-large\" id=\"input01\" name=\"new_password\" id=\"new_password\" placeholder=\"mín. 6 caracteres\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Repita nova senha</label>\n                            <div class=\"controls\">\n                                <input type=\"password\" class=\"input-large\" id=\"input01\" name=\"confirm_password\" id=\"confirm_password\" placeholder=\"mín. 6 caracteres\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"form-actions\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n                            <button class=\"btn\">Cancelar</button>\n                        </div>\n                </form>\n            </div>\n        </div>");
});Ember.TEMPLATES["cell_settings-profile"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"page-header\">\n            <h1>Perfil</h1>\n        </div>\n        <div class=\"row-fluid\">\n            <div class=\"span12\">\n             <form class=\"form-horizontal\" action=\"\" method=\"post\" name=\"form_perfil\">\n             <div class=\"control-group\">\n                <div class=\"controls\">\n                    <div class=\"span2\">\n                        <div class=\"thumbnail\">\n                            <img src=\"http://placehold.it/140x140\" alt=\"\">\n                        </div>\n                    </div>\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"input01\">Alterar foto</label>\n                <div class=\"controls\">\n                    <input class=\"input-file\" type=\"file\" name=\"photo\" id=\"photo\">\n                </div><!--/.controls -->\n            </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Nome</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" name=\"name\" value=\"<?=$this->name?>\" class=\"input-large\" id=\"name\" placeholder=\"nome completo\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Sobrenome</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" name=\"surname\" value=\"<?=$this->surname?>\" class=\"input-large\" id=\"input01\" placeholder=\"nome completo\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Apelido</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" name=\"nickname\" value=\"<?=$this->nickname?>\" class=\"input-large\" id=\"input01\" placeholder=\"como quer ser chamado\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Sexo</label>\n                            <div class=\"controls\">\n                                <label for=\"male\" class=\"radio\">\n                                    <input type=\"radio\" name=\"gender\" id=\"male\" <?if ($this->gender == 1){?>checked=\"checked\"<?}?> value=\"1\">\n                                    Masculino\n                                </label>\n                                <label for=\"female\" class=\"radio\">\n                                    <input type=\"radio\"  name=\"gender\" id=\"female\" <?if ($this->gender == 2){?>checked=\"checked\"<?}?> value=\"2\">\n                                    Feminino\n                                </label>\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"control-group\">\n                            <label class=\"control-label\" for=\"input01\">Data de nascimento</label>\n                            <div class=\"controls\">\n                                <input type=\"text\" name=\"birthday\" value=\"<?=$this->birthday?>\" class=\"input-large\" id=\"birthday\" placeholder=\"data de nascimento\">\n                            </div><!--/.controls -->\n                        </div><!--/.control-group -->\n                        <div class=\"form-actions\">\n                            <button type=\"submit\" class=\"btn btn-primary\">Salvar alterações</button>\n                            <button class=\"btn\">Cancelar</button>\n                        </div>\n                </form>\n            </div>\n        </div>");
});Ember.TEMPLATES["cell_settings"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var buffer = '', stack1, stack2, stack3, foundHelper, tmp1, self=this, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li>\n            <a ");
  stack1 = depth0;
  stack2 = "goSettingsProfile";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-user\"></i> Perfil</a>\n          </li>\n          <li>\n            <a ");
  stack1 = depth0;
  stack2 = "goSettingsContact";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-bullhorn\"></i> Contato</a>\n          </li>\n          <li>\n            <a ");
  stack1 = depth0;
  stack2 = "goSettingsAddress";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-map-marker\"></i> Endereço</a>\n          </li>\n          <li>\n            <a ");
  stack1 = depth0;
  stack2 = "goSettingsPassword";
  stack3 = helpers.action;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "><i class=\"icon-lock\"></i> Senha</a>\n          </li>\n      </ul>\n    </div>\n\n    <div class=\"span9\">\n        ");
  stack1 = depth0;
  stack2 = "outlet";
  stack3 = helpers._triageMustache;
  tmp1 = {};
  tmp1.hash = {};
  tmp1.contexts = [];
  tmp1.contexts.push(stack1);
  tmp1.data = data;
  stack1 = stack3.call(depth0, stack2, tmp1);
  data.buffer.push(escapeExpression(stack1) + "\n    </div>\n    \n</div><!--/.row -->\n");
  return buffer;
});Ember.TEMPLATES["conteudo"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li class=\"active\"><a href=\"\">Dinâmicas</a></li>\n            <li><a href=\"\">Lições de Célula</a></li>\n            <li><a href=\"\">Louvor</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#\">Listar</a></li>\n            <li><a href=\"#\">Adicionar</a></li>\n            <li><a href=\"#\">Remover</a></li>\n        </ul>\n    </div>\n</div>");
});Ember.TEMPLATES["home"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("home");
});Ember.TEMPLATES["igreja"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li><a href=\"\">Hierarquia</a></li>\n            <li class=\"active\"><a href=\"\">Pastores</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#\">Adicionar</a></li>\n            <li><a href=\"#\">Remover</a></li>\n        </ul>\n    </div>\n</div>");
});Ember.TEMPLATES["membresia"] = Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers;
  var foundHelper, self=this;


  data.buffer.push("<div class=\"row\">\n    <div class=\"span3\">\n        <ul class=\"nav nav-tabs nav-stacked\">\n            <li class=\"active\"><a href=\"\">Membros</a></li>\n        </ul>\n    </div>\n\n    <div class=\"span9\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#\">Listar</a></li>\n            <li><a href=\"#\">Adicionar</a></li>\n            <li><a href=\"#\">Remover</a></li>\n        </ul>\n    </div>\n</div>");
});