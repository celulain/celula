<div class="container-fluid">
  <div class="row-fluid">
    <div class="span7">
           
      <div class="row-fluid">
        <div class="span12">
          
              <a class="btn pull-left"><i class="icon-arrow-left"></i></a>
              <a class="btn pull-right"><i class="icon-arrow-right"></i></a>

              <br><br>
          <!-- Selecionar reunião:
          {{view Ember.Select
            contentBinding="allMeetings"
            optionLabelPath="content.date"
            optionValuePath="content.date"
            valueBinding="lastSelectedMeeting"}} -->
          
          <!-- {{#if salvo}}
            <a style="float: right;" class="btn btn-success disabled">Salvo</a>
          {{else}}
            <a style="float: right;" {{action "salvarFrequencia"}} class="btn btn-success">Salvar</a>
          {{/if}} -->
          


          <table class="table table-bordered">
            <thead>
              <tr>
                <th></th>
                <th class="th-left">Nome</th>
                {{#each dateMeetings}}
                  <th class="date-meeting">{{date}}</th>
                {{/each}}
              </tr>
            </thead>
            
            <tbody>
              <tr>
                <td colspan="8">Membros IBC</td>
              </tr>
              {{#each members}}
                <tr>
                  <td class="td-left">{{funcao}}</td>
                  <td class="td-left">
                    <a {{action "editParticipant"}}>{{name}}</a>
                  </td>
                  {{#each dateMeetings}}
                    <td>
                      <span class="frequency-checkbox"><i class="icon-check-empty"></i></span>
                    </td>
                  {{/each}}
                </tr>
              {{/each}}
          
              <tr>
                <td colspan="8">Visitantes</td>
              </tr>
              {{#each visitors}}
                <tr>
                  <td class="td-left">{{funcao}}</td>
                  <td class="td-left">
                    <a {{action "editParticipant"}}>{{name}}</a>
                  </td>
                  {{#each dateMeetings}}
                    <td>
                      <span class="frequency-checkbox"><i class="icon-check"></i></span>
                    </td>
                  {{/each}}
                </tr>
              {{/each}}
            </tbody>
          </table>


      <p class="add-visitor">
        <a {{action "addNewVisitor"}} class="btn btn-block btn-large">Adicionar Visitante</a>
      </p>

      </div><!--/.span12 -->
    </div><!--/.row-fluid -->
  </div><!--/span8 -->

  {{outlet subgoals}}
  </div><!--/.row-fluid -->

</div><!--/.container-fluid -->