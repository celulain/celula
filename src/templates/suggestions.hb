<div class="window-overlay">
    <div class="window">
        <div class="window-wrapper">
            <div class="clearfix">
                <div class="window-header">
                    <div class="window-utils">
                        <a {{action "closeWindow"}}>
                            <i class="icon-remove"></i>
                        </a>
                    </div>
                </div>

                <div class="window-main-col">
                    
                  <div>
                    {{view Ember.TextArea}}
                  </div>

                  <div>
                    <a class="btn btn-block">Enviar</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>