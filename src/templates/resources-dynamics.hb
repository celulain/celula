<div class="container">
    <div class="row">
        <div class="span8 offset2">
            <h3>Dinâmicas</h3>

            <!-- <div>
                Dinâmica para {{view Ember.TextField}} pessoas <a class="btn">Procurar</a>
            </div> -->
            
            {{#each content}}
            <div class="dynamic">
                <div class="dynamic-name">{{name}}</div>
                <div class="dynamic-participants">De {{min_participants}} a {{max_participants}} pessoas</div>
                <div class="dynamic-stuff"><strong>Material:</strong> {{stuff}}</div>
                <div class="dynamic-goal"><strong>Objetivo:</strong> {{goal}}</div>
                <div class="dynamic-description">Dinâmica</div>
                <div class="dynamic-text">{{text}}</div>
            </div>
            {{/each}}
            
        </div>
    </div>
</div>