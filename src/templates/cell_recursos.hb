<div class="row">
    <div class="span3">
        <ul class="nav nav-tabs nav-stacked">
            <li><a {{action "goRecursosDinamicas"}}>Dinâmicas</a></li>
            <li><a {{action "goRecursosLicoesDeCelula"}}>Lições de Célula</a></li>
            <li><a {{action "goRecursosLouvor"}}>Louvor</a></li>
        </ul>
    </div>

    <div class="span9">
        {{outlet}}
    </div>
</div>