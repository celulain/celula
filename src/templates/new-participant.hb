<div class="add-new-visitor-box">
  {{view Em.TextField valueBinding="name" placeholder="Nome do visitante"}}

  <div>
  <a {{action "saveNewVisitor"}} class="btn btn-success">Salvar</a>
  <a {{action "closeNewVisitor"}}>
    <i class="icon-remove style-icon-remove"></i>
  </a>
  </div>
</div>


<p class="add-visitor" {{action "addNewVisitor"}}>
  <i class="icon-plus"></i>
  Adicionar visitante
</p>