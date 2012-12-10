<div class="span4">

  <div class="" id="submetas">
    <div class="submeta-1">
      <h3 class="subgoal-title">Data de Multiplicação</h3>

      <p {{action "editSubgoal1"}} class="edit-field">
        {{multiplicationDate}}
      </p>

      <div class="edit-subgoal-1">

      {{view Ember.TextField  placeholder="dd/mm/aaaa" valueBinding="newMultiplicationDate"}}

      <a {{action "saveSubgoal1"}} class="btn btn-success">Salvar</a>
      <a {{action "closeSubgoal1"}}>
        <i class="icon-remove style-icon-remove"></i>
      </a>
      </div><!-- /.edit-subgoal-1 -->

      {{#if hasMultiplicationDate}}
        Faltam <strong>{{remainingDays}}</strong> dias ou <strong>{{remainingWeeks}}</strong> semanas
      {{/if}}
    </div><!-- /.submeta-1 -->


    <div class="submeta-2">
      <h3 class="subgoal-title">Presença de Deus</h3>

      {{outlet godPresence}}
    </div>

    <!-- SUBGOAL 3: Novo líder -->
    <div class="submeta-3">
      <h3 class="subgoal-title">Novo Líder</h3>

      {{#each futureLeader}}
        <div class="edit-field">
          <span class="text-medium">{{name}}</span>

          <span class="ft-requirement" data-requirement="1" {{action "futureLeaderRequirement" name}}>
            {{#if requirements.requirement1}}
              <i class="icon-star"></i>
            {{else}}
              <i class="icon-star-empty"></i>
            {{/if}}
          </span>

          <span class="ft-requirement" data-requirement="2" {{action "futureLeaderRequirement" name}}>
            {{#if requirements.requirement2}}
              <i class="icon-star"></i>
            {{else}}
              <i class="icon-star-empty"></i>
            {{/if}}
          </span>

          <span class="ft-requirement" data-requirement="3" {{action "futureLeaderRequirement" name}}>
            {{#if requirements.requirement3}}
              <i class="icon-star"></i>
            {{else}}
              <i class="icon-star-empty"></i>
            {{/if}}
          </span>

          <span class="ft-requirement" data-requirement="4" {{action "futureLeaderRequirement" name}}>
            {{#if requirements.requirement4}}
              <i class="icon-star"></i>
            {{else}}
              <i class="icon-star-empty"></i>
            {{/if}}
          </span>

          <span class="ft-requirement" data-requirement="5" {{action "futureLeaderRequirement" name}}>
            {{#if requirements.requirement5}}
              <i class="icon-star"></i>
            {{else}}
              <i class="icon-star-empty"></i>
            {{/if}}
          </span>

          <span class="ft-requirement" data-requirement="6" {{action "futureLeaderRequirement" name}}>
            {{#if requirements.requirement6}}
              <i class="icon-star"></i>
            {{else}}
              <i class="icon-star-empty"></i>
            {{/if}}
          </span>

          <span class="ft-requirement" data-requirement="7" {{action "futureLeaderRequirement" name}}>
            {{#if requirements.requirement7}}
              <i class="icon-star"></i>
            {{else}}
              <i class="icon-star-empty"></i>
            {{/if}}
          </span>
        </div>
      {{/each}}

    </div>
    <div class="submeta-4">
      <h3 class="subgoal-title">Novos Participantes</h3>

      <div class="edit-field">
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
        <span class=""><i class="icon-sign-blank"></i></span>
      </div>

    </div>
    <div class="submeta-5">
      <h3 class="subgoal-title">Novo Anfitrião</h3>

      <p {{action "editSubgoal5"}} class="edit-field">
              {{newHost}}
            </p>
            <div class="edit-subgoal-5">
              {{view Ember.TextField valueBinding="newHostInput" placeholder="Nome do futuro anfitrião"}}

              <a {{action "saveSubgoal5"}} class="btn btn-success">Salvar</a>
              <a {{action "closeSubgoal5"}}>
                <i class="icon-remove style-icon-remove"></i>
              </a>
            </div><!-- /.edit-subgoal-5 -->
    </div>
  </div>

  <hr class="hr-subgoal">

  <div class="suggestions" {{action "openSuggestionsWindow"}}>
    <i class="icon-comment-alt"></i> <span>Sugestões?</span>
  </div>


</div><!--/span4 -->