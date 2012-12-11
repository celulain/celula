{{outlet window}}

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
                    <!-- <a {{action "gotoSettings" href="true"}}>
                        <i class="icon-wrench"></i> Configurações
                    </a> -->
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
                            <li><a {{action "gotoFrequency" href="true"}}>Frequência</a></li>
                            <li><a {{action "gotoParticipants" href="true"}}>Participantes</a></li>
                            <!-- <li><a {{action "gotoRegister" href="true"}}>Cadastro</a></li> -->
                            <li><a href="/celula/cadastro">Cadastro</a></li>
                            <li><a {{action "gotoProfile" href="true"}}>Perfil</a></li>
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
                            <li><a {{action "gotoLessons" href="true"}}>Lições de Célula</a></li>
                            <!-- <li><a {{action "gotoPraise" href="true"}}>Louvor</a></li>
                            <li><a {{action "gotoDynamics" href="true"}}>Dinâmicas</a></li> -->
                            <li><a href="/recursos/louvor">Louvor</a></li>
                            <li><a href="/recursos/dinamicas">Dinâmicas</a></li>
                        </ul>
                    </li>


                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Admin
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a {{action "gotoAdminMembers" href="true"}}>Membros</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!--/.nav-collapse -->
        </div><!--/.conatiner-fluid -->
    </div>
</div><!--/.navbar -->

{{outlet container}}
