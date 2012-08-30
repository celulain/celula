<div class="row-fluid">
    <div class="span12">
        <div class="page-header">
            <h1>Participantes</h1>
        </div>
    </div>
</div><!--/.row-fluid -->
<div class="row-fluid">
    <div class="span12">
        <a class="btn btn-primary" href="#add_participante" data-toggle="modal">
            <i class="icon-plus icon-white"></i> Participante
        </a>
        <hr />
    </div>
</div><!--/.row-fluid -->
<div class="row-fluid">
    <div class="span9">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th class="th-left">Nome</th>
                    <th>Função</th>
                    <th>Categoria</th>
                    <th>Presença</th>
                </tr>
            </thead>
            <tbody>
                                <tr>
                    <td class="td-left">
                        <a href="#participante1" data-toggle="modal">
                            M?rio C?sar Gon?alves Moreira                        </a>
                    </td>
                    <td>Participante</td>
                    <td>Membro IBC</td>
                    <td>0</td>
                </tr>
                                <tr>
                    <td class="td-left">
                        <a href="#participante1" data-toggle="modal">
                            Fabr?cio Tavares de Oliveira                        </a>
                    </td>
                    <td>LÃ­der</td>
                    <td>Membro IBC</td>
                    <td>0</td>
                </tr>
                            </tbody>
        </table>
    </div>
    
</div><!--/.row-fluid -->

<!-- MODAL ADICIONAR PARTICIPANTE -->
<div class="modal hide" id="add_participante">
    <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">×</button>
        <h3>Adicionar Participante</h3>
    </div>
    <div class="modal-body">
        <form class="form-horizontal" action="/celula/membros" method="post" name="addMember">
        <input type="hidden" id="cell_id" name="cell_id" value="625" />
            <div class="control-group">
                <label class="control-label" for="input01">Nome</label>
                <div class="controls">
                    <input type="text" class="input-large typeahead" id="input01" name="new_name" placeholder="nome completo" data-provide="typeahead">
                </div><!--/.controls -->
            </div><!--/.control-group -->
                        <div class="control-group">
                            <label class="control-label" for="input01">Apelido</label>
                            <div class="controls">
                                <input type="text" class="input-large" id="input01" name="new_nick" placeholder="como quer ser chamado">
                            </div><!--/.controls -->
                        </div><!--/.control-group -->
                        <div class="control-group">
                            <label class="control-label" for="input01">Sexo</label>
                            <div class="controls">
                                <label for="male" class="radio">
                                    <input type="radio" value="1" name="new_sex" id="male">
                                    Masculino
                                </label>
                                <label for="female" class="radio">
                                    <input type="radio" value="2" name="new_sex" id="female">
                                    Feminino
                                </label>
                            </div><!--/.controls -->
                        </div><!--/.control-group -->
                        <div class="control-group">
                            <label class="control-label" for="input01">Data de nascimento</label>
                            <div class="controls">
                                <input type="text" class="input-large" id="input01" name="new_birthday" placeholder="dd/mm/aaaa (não obrigatório)">
                            </div><!--/.controls -->
                        </div><!--/.control-group -->
                        <div class="control-group">
                            <label class="control-label" for="input01">Batizado</label>
                            <div class="controls">
                                <label for="baptized_ibc" class="radio">
                                    <input type="radio" value="1" name="baptized" id="baptized_ibc">
                                    Na IBC
                                </label>
                                <label for="baptized_other" class="radio">
                                    <input type="radio"  value="2" name="baptized" id="baptized_other">
                                    Em outra igreja
                                </label>
                                <label for="baptized_no" class="radio">
                                    <input type="radio"  value="3" name="baptized" id="baptized_no">
                                    Não
                                </label>
                            </div><!--/.controls -->
                        </div><!--/.control-group -->
                         <div class="control-group">
                            <label class="control-label" for="input01">Função</label>
                            <div class="controls">
                                <label for="baptized_ibc" class="radio">
                                    <input type="radio" value="4" name="role" id="role">
                                    Líder em Treinamento
                                </label>
                                <label for="baptized_other" class="radio">
                                    <input type="radio" value="2" name="role" id="role">
                                    Participante
                                </label>
                                <label for="baptized_no" class="radio">
                                    <input type="radio"  value="5"  name="role" id="role">
                                    Visitante
                                </label>
                                <label for="baptized_no" class="radio">
                                    <input type="radio"  value="3"  name="role" id="role">
                                    Anfitrião
                                </label>
                            </div><!--/.controls -->
                        </div><!--/.control-group -->
    </div>
    <div class="modal-footer">
        <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
        <a href="#" class="btn btn-primary" onclick="document.addMember.submit();">Salvar</a>
    </div>
        </form>
</div>

<!-- MODAIS PARTICIPANTES-->

<div class="modal hide" id="participante1">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Luiz Carlos Menezes</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>

<div class="modal hide" id="participante2">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Nome</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>

<div class="modal hide" id="participante3">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Nome</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>

<div class="modal hide" id="participante4">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Nome</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>

<div class="modal hide" id="participante5">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Nome</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>

<div class="modal hide" id="participante6">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Nome</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>

<div class="modal hide" id="participante7">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Nome</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>

<div class="modal hide" id="participante8">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Nome</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>

<div class="modal hide" id="participante9">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Nome</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>

<div class="modal hide" id="participante10">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal">×</button>
    <h3>Renato Vargas</h3>
  </div>
  <div class="modal-body">
    <p>Dados do participante</p>
  </div>
  <div class="modal-footer">
    <a href="#" class="btn" data-dismiss="modal">Cancelar</a>
    <a href="#" class="btn btn-primary">Salvar alterações</a>
  </div>
</div>