<div class="row">
    <div class="span3">
        <ul class="nav nav-tabs nav-stacked">
            <li>
            <a {{action "goSettingsProfile"}}><i class="icon-user"></i> Perfil</a>
          </li>
          <li>
            <a {{action "goSettingsContact"}}><i class="icon-bullhorn"></i> Contato</a>
          </li>
          <li>
            <a {{action "goSettingsAddress"}}><i class="icon-map-marker"></i> Endereço</a>
          </li>
          <li>
            <a {{action "goSettingsPassword"}}><i class="icon-lock"></i> Senha</a>
          </li>
      </ul>
    </div>

    <div class="span9">
        {{outlet}}
    </div>
    
</div><!--/.row -->
