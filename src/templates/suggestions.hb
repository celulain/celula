<div class="window-overlay">
    <div class="window-suggestion">
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
                    {{view Ember.TextArea class="suggestion-textarea"}}
                  </div>

                  <div>
                    <a class="btn suggestion-textarea">Enviar</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>