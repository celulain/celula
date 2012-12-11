<div class="container">
    <div class="row">
        <div class="span8 offset2">
            <h3>Sugestões enviadas</h3>
            <ul>
                {{#each content}}
                <li>{{date}} • {{suggestion}}</li>
                {{/each}}
            </ul>
        </div>
    </div>
</div>