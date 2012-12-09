<div class="container">
  <div class="row">
    <div class="span8 offset2">
      <a class="btn btn-block btn-large" {{action "addNewVisitor"}}>
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
          <tr>
            <td class="td-left"><a {{action "editParticipant"}}>Fabrício</a></td>
            <td>Lider</td>
            <td>IBCBH</td>
          </tr>
          <tr>
            <td class="td-left"><a {{action "editParticipant"}}>Fabrício</a></td>
            <td>Anfitrião</td>
            <td>Getsêmani</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>