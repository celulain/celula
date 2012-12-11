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