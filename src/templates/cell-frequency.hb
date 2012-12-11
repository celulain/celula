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
                <td colspan="8">Participantes</td>
              </tr>
              {{#each content}}
                <tr>
                  <td class="td-left">{{position}}</td>
                  <td class="td-left">
                    <a {{action "gotoParticipant" this}}>{{name}}</a>
                  </td>
                  
                    <td>
                      <span class="frequency-checkbox"><i class="icon-check-empty"></i></span>
                    </td>
                  
                </tr>
              {{/each}}
            </tbody>
          </table>


      <p class="add-visitor">
        <a class="btn btn-block btn-large">Adicionar Visitante</a>
      </p>

      </div><!--/.span12 -->
    </div><!--/.row-fluid -->
  </div><!--/span8 -->

  <div class="span4 offset1">
  <div class="" id="submetas">
    <div class="submeta-1">
      {{outlet subgoalMultiplicationDate}}
    </div>

    <div class="submeta-2">
      {{outlet subgoalGodPresence}}
    </div>

    <!-- SUBGOAL 3: Novo líder -->
    <div class="submeta-3">
      {{outlet subgoalFutureLeader}}
    </div>

    <div class="submeta-4">
      {{outlet subgoalNewParticipants}}
    </div>

    <div class="submeta-5">
      {{outlet subgoalNewHost}}
    </div>
  </div>

  <hr class="hr-subgoal">

  <div class="suggestions" {{action "gotoNewSuggestion"}}>
    <div class="icone">
      <i class="icon-comment"></i>
    </div>

    <div class="texto">
       Sugestões?
    </div>
  </div>
</div>
  </div><!--/.row-fluid -->

</div><!--/.container-fluid -->