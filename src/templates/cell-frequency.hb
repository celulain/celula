<div class="container-fluid">
  <div class="row-fluid">
    <div class="span7">
           
      <div class="row-fluid">
        <div class="span12">
          
              <a {{action "previousMeeting" target="controller"}} {{bindAttr class="noPrevious:disabled :btn :pull-left"}}><i class="icon-arrow-left"></i></a>
              <a {{action "nextMeeting" target="controller"}} {{bindAttr class="noNext:disabled :btn :pull-right"}}><i class="icon-arrow-right"></i></a>

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


          Todas meetings:<br>
          <ul>
          {{#each App.meetings}}
            <li>{{date}}</li>
          {{/each}}
          </ul>


          {{#each content}}

          {{position}}, {{name}}, {{#each meetings}} {{date}}{{/each}} <br>
          {{/each}}
          
          <div class="row-fluid frequency-table">
            <div class="span2 frequency-name">
              <div class="row-fluid">
                <div class="span12">
                  <strong>Função</strong>
                </div>
              </div>

              {{#each processedDummy}}
              <div class="row-fluid">
                <div class="span12">
                  {{position}}
                </div>
              </div>
              {{/each}}
            </div>
            
            <div class="span2 frequency-name">
              <div class="row-fluid">
                <div class="span12">
                  <strong>Nome</strong>
                </div>
              </div>

              {{#each processedDummy}}
              <div class="row-fluid">
                <div class="span12">
                  {{name}}
                </div>
              </div>
              {{/each}}
            </div>

            <div class="span2 frequency-col-date">
              <div class="row-fluid">
                <div class="span12">
                  <strong>{{date1.date}}</strong>
                </div>
              </div>

              {{#each processedDummy}}
              <div class="row-fluid">
                <div class="span12 frequency-check">
                  <a {{action "checkPresence" target="controller"}} {{bindAttr class="date1:check" data-user-id="id" data-meeting-id="meeting_id1"}}  data-position="1">
                    <i class="icon-ok"></i>
                  </a>
                  
                </div>
              </div>
              {{/each}}

              <hr>
              <div class="row-fluid">
                <div class="span12 frequency-presents">
                  {{date1.presents}}
                </div>
              </div>
            </div>

            <div class="span2 frequency-col-date">

              <div class="row-fluid">
                <div class="span12">
                  <strong>{{date2.date}}</strong>
                </div>
              </div>

              {{#each processedDummy}}
              <div class="row-fluid">
                <div class="span12 frequency-check">
                  <a {{action "checkPresence" target="controller"}} {{bindAttr class="date2:check" data-user-id="id" data-meeting-id="meeting_id2"}}  data-position="2">
                    <i class="icon-ok"></i>
                  </a>
                  
                </div>
              </div>
              {{/each}}

              <hr>
              <div class="row-fluid">
                <div class="span12 frequency-presents">
                  {{date2.presents}}
                </div>
              </div>
            </div>

            <div class="span2 frequency-col-date">
              <div class="row-fluid">
                <div class="span12">
                  <strong>{{date3.date}}</strong>
                </div>
              </div>
              
              {{#each processedDummy}}
              <div class="row-fluid">
                <div class="span12 frequency-check">
                  <a {{action "checkPresence" target="controller"}} {{bindAttr class="date3:check" data-user-id="id" data-meeting-id="meeting_id3"}}  data-position="3">
                    <i class="icon-ok"></i>
                  </a>
                  
                </div>
              </div>
              {{/each}}

              <hr>
              <div class="row-fluid">
                <div class="span12 frequency-presents">
                  {{date3.presents}}
                </div>
              </div>
            </div>

            <div class="span2 frequency-col-date">
              <div class="row-fluid">
                <div class="span12">
                  <strong>{{date4.date}}</strong>
                </div>
              </div>

              {{#each processedDummy}}
              <div class="row-fluid">
                <div class="span12 frequency-check">
                  <a {{action "checkPresence" target="controller"}} {{bindAttr class="date4:check" data-user-id="id" data-meeting-id="meeting_id4"}}  data-position="4">
                    <i class="icon-ok"></i>
                  </a>
                  
                </div>
              </div>
              {{/each}}

              <hr>
              <div class="row-fluid">
                <div class="span12 frequency-presents">
                  {{date4.presents}}
                </div>
              </div>
            </div>
          </div>          

          


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