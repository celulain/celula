<div class="container">
  <div class="row">
    <div class="span8 offset2">
      <a class="btn btn-block btn-large" {{action "gotoNewParticipant"}}>
        Adicionar Participante
      </a>
    </div>
  </div>
  <hr class="space">
  <div class="row">
    <div class="span8 offset2">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th class="th-left">Nome</th>
            <th>Função</th>
            <th>Membresia</th>
          </tr>
        </thead>

        <tbody>

          {{#each content}}
          <tr>
              <td class="td-left"><a {{action "gotoParticipant" this}}>{{name}}</a></td>
              <td>{{position}}</td>
              <td>{{baptism}}</td>
          </tr>
          {{/each}}

        </tbody>
      </table>
    </div>
  </div>
</div>