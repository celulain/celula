<div class="container">
    <div class="row">
        <div class="span8 offset2">
            <h3>Sugestões enviadas</h3>
            
            {{#each content}}
            <div class="suggestion-item">
                
            <p class="suggestion-date">Enviada em {{date}}</p>
            <p class="">{{suggestion}}</p>
                
            </div>
            {{/each}}
        </div>
    </div>
</div>