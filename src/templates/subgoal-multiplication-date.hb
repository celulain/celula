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