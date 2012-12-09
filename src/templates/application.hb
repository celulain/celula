<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container-fluid">
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <a class="brand" href="/">Igreja Batista Central</a>
            <div class="btn-group pull-right">
                <a class="btn btn-inverse dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="icon-user"></i>
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                <li>
                    <a href="/configuracoes/perfil">
                        <i class="icon-wrench"></i> Configurações
                    </a>
                </li>
                <li class="divider"></li>
                <li>
                    <a href="/auth/logout">
                        <i class="icon-signout"></i> Sair
                    </a>
                </li>
                </ul>
            </div>

            <div class="nav-collapse">
                <ul class="nav">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Célula
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="/celula/frequencia">Frequência</a></li>
                            <li><a href="/celula/membros">Participantes</a></li>
                            <li><a href="/celula/cadastro">Cadastro</a></li>
                            <li><a href="/celula/perfil">Perfil</a></li>
                        </ul>
                    </li>
                    <!--
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Setor
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="/setor/celulas">Células</a></li>
                            <li><a href="/setor/perfil">Perfil</a></li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Área
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="/area/setores">Setores</a></li>
                            <li><a href="/area/perfil">Perfil</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Rede
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="/rede/areas">Áreas</a></li>
                            <li><a href="/rede/perfil">Perfil</a></li>
                        </ul>
                    </li>
                  -->
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Recursos
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="/recursos/licoes-de-celula">Lições de Célula</a></li>
                            <li><a href="/recursos/louvor">Louvor</a></li>
                            <li><a href="/recursos/dinamicas">Dinâmicas</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!--/.nav-collapse -->
        </div><!--/.conatiner-fluid -->
    </div>
</div><!--/.navbar -->

<div class="container-fluid">
  <div class="row-fluid">

  <div class="span8">
      <div class="row-fluid">
        <div class="span12">
          <div class="page-header">
            <h1>Lançamento de frequência</h1>
          </div>                    
        </div>
      </div><!--/.row-fluid -->
            
      <div class="row-fluid">
        <div class="span12">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="#frequencia" data-toggle="tab">Célula</a>
            </li>
            <!--  <li><a href="#frequencia-cultos" data-toggle="tab">Cultos</a></li>-->
          </ul>

          <div class="tab-content">
            <div class="tab-pane active" id="frequencia">
              <div class="span12">
              
              {{outlet frequencia}}

              {{outlet newParticipant}}
            </div><!--/.span12 -->
          </div><!--/.tab-pane -->
        </div><!--/.tab-content -->
      </div><!--/.span12 -->
    </div><!--/.row-fluid -->
  </div><!--/span8 -->

  {{outlet subgoals}}
</div><!--/.row-fluid -->

<hr>
    <footer>
        <p>Desenvolvido por <a href="http://twitter.com/andrehigher">André</a> & <a href="http://twitter.com/fabriciotav">Fabrício</a></p>
    </footer>
</div><!--/.fluid-container-->




    
