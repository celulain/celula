<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </a>
            <a class="brand" href="/app">Nome da Igreja</a>
            <div class="btn-group pull-right">
                <a class="btn btn-inverse dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="icon-user icon-white"></i>
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                <li>
                    <a {{action "goSettings"}}>Configurações</a>
                </li>
                <li class="divider"></li>
                <li>
                    <a href="/">Sair</a>
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
                            <li><a {{action "goCelulaFrequencia"}}>Frequência</a></li>
                            <li><a {{action "goCelulaParticipantes"}}>Participantes</a></li>
                            <li><a {{action "goCelulaCadastro"}}>Cadastro</a></li>
                            <li><a {{action "goCelulaPerfil"}}>Perfil</a></li>
                        </ul>
                    </li>
                    <li><a {{action "goRecursos"}}>Recursos</a></li>

                </ul>
            </div><!--/.nav-collapse -->
        </div><!--/.conatiner -->
    </div>
</div><!--/.navbar -->

<div class="container">
    {{outlet}}


    <hr>
    <footer>
        <p>Copyright 2012 <a href="http://twitter.com/andrehigher">André</a> & <a href="http://twitter.com/fabriciotav">Fabrício</a></p>
    </footer>
</div><!--/.fluid-container-->