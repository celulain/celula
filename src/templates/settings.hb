<div class="container">
    <div class="row">
        <div class="span8 offset2">
            <div class="row">
                <div class="span2">
                    <ul class="nav nav-pills nav-stacked">
                        <li>
                            <a {{action "gotoSettingsProfile" href="true"}}>Perfil</a>
                        </li>
                        <li>
                            <a {{action "gotoSettingsAddress" href="true"}}>Endereço</a>
                        </li>
                        <li>
                            <a {{action "gotoSettingsContact" href="true"}}>Contato</a>
                        </li>
                        <li>
                            <a {{action "gotoSettingsPassword" href="true"}}>Senha</a>
                        </li>
                    </ul>
                </div>
                <div class="span6">
                    {{outlet container}}
                </div>
            </div>
        </div>
    </div>
</div>