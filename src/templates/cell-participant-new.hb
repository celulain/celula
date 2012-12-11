<div class="window-overlay">
    <div class="window">
        <div class="window-wrapper">
            <div class="clearfix">
                <div class="window-header">
                    <div class="window-utils">
                        <a {{action "gotoParticipants"}}>
                            <i class="icon-remove"></i>
                        </a>
                    </div>
                </div>

                <div class="window-main-col">
                    <div class="form-horizontal">
                      <div class="control-group">
                        <label class="control-label" for="firstName">Nome</label>
                        <div class="controls">
                          {{view Ember.TextField
                            class="input-xlarge"
                            id="firstName"
                            valueBinding="firstName"}}
                          
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="lastName">Sobrenome</label>
                        <div class="controls">
                          {{view Ember.TextField
                            class="input-xlarge"
                            id="lastName"
                            valueBinding="lastName"}}
                          
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="nickname">Como quer ser chamado</label>
                        <div class="controls">
                          {{view Ember.TextField
                            class="input-xlarge"
                            id="nickname"
                            valueBinding="nickname"}}
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="email">Email</label>
                        <div class="controls">
                          {{view Ember.TextField
                            class="input-xlarge"
                            id="email"
                            valueBinding="email"}}
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="phone">Telefone</label>
                        <div class="controls">
                          {{view Ember.TextField
                            class="input-xlarge"
                            id="phone"
                            valueBinding="phone"}}
                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="participantSex">Sexo</label>
                        <div class="controls">
                          
                          <div class="btn-group" data-toggle="buttons-radio">
                            <button type="button" data-sex="1" {{bindAttr class="isMale:active :btn"}} {{action "toggleSex" target="controller"}}>Masculino</button>
                            <button type="button" data-sex="2" {{bindAttr class="isFemale:active :btn"}} {{action "toggleSex" target="controller"}}>Feminino</button>
                          </div>

                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="participantBaptism">Batismo</label>
                        <div class="controls">
                          
                          <div class="btn-group" data-toggle="buttons-radio">
                          <button type="button" data-baptism="1" {{bindAttr class="isBaptism1:active :btn"}} {{action "toggleBaptism" target="controller"}}>IBCBH</button>
                          <button type="button" data-baptism="2" {{bindAttr class="isBaptism2:active :btn"}} {{action "toggleBaptism" target="controller"}}>Outra Igreja</button>
                          <button type="button" data-baptism="3" {{bindAttr class="isBaptism3:active :btn"}} {{action "toggleBaptism" target="controller"}}>Não foi batizado</button>
                        </div>

                        </div>
                      </div>

                      <div class="control-group">
                        <label class="control-label" for="participantPosition">Posição</label>
                        <div class="controls">
                          
                          <div class="btn-group" data-toggle="buttons-checkbox">
                          <button type="button" {{bindAttr class="trainingLeader:active :btn"}} {{action "toggleTrainingLeader" target="controller"}}>Líder em Treinamento</button>
                          <button type="button" {{bindAttr class="host:active :btn"}} {{action "toggleHost" target="controller"}}>Anfitrião</button>
                        </div>

                        </div>
                      </div>


                      <div class="control-group">
                        <div class="controls">
                          <button class="btn btn-success" {{action "createParticipant"}}>Salvar</button>
                          <button class="btn" {{action "clear" target="controller"}}>Limpar</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>