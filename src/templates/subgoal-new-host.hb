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