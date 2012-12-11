<div class="container">
    <div class="row">
    <div class="span8 offset2">
      <a class="btn btn-block btn-large" {{action "addNewVisitor"}}>
        Lição de Célula da Semana
      </a>
    </div>
  </div>

  <hr class="space">
    <div class="row">
        <div class="span8 offset2">
            <h3>Lições de Célula</h3>
            <ul class="resource-list">
                {{#each content}}
                    <li>
                        <span class="resource-date">DATA</span>
                        <a class="resource-download" {{bindAttr href="name"}}><i class="icon-download-alt"></i></a>
                        <a class="resource-link" {{bindAttr href="name"}}>{{name}}</a>
                    </li>
                {{/each}}
            </ul>
        </div>
    </div>

    <div class="row">
        <div class="span8 offset2">
            <h3>Séries de Lições</h3>
            <ul>
                
            </ul>
        </div>
    </div>
</div>