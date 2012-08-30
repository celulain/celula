<div class="page-header">
            <h1>Endereço</h1>
        </div>
        <div class="row-fluid">
            <div class="span12">
                <form class="form-horizontal" method="post" action="">
                                            <div class="control-group">
                <label class="control-label" for="input01">Endereço</label>
                <div class="controls">
                    <input type="text" class="input-xlarge" id="input01" name="address" id="address" value="<?=$this->address?>">
                </div><!--/.controls -->
            </div><!--/.control-group -->
            <div class="control-group">
                <label class="control-label" for="input01">Número</label>
                <div class="controls">
                    <input type="text" class="input-xlarge" id="input01" name="number" id="number" value="<?=$this->number?>">
                </div><!--/.controls -->
            </div><!--/.control-group -->
            <div class="control-group">
                <label class="control-label" for="input01">Complemento</label>
                <div class="controls">
                    <input type="text" class="input-xlarge" id="input01" name="apartament" id="apartament" value="<?=$this->apartament?>">
                </div><!--/.controls -->
            </div><!--/.control-group -->
            <div class="control-group">
                <label class="control-label" for="input01">Bairro</label>
                <div class="controls">
                    <input type="text" class="input-xlarge" id="input01" name="district" id="district" value="<?=$this->district?>">
                </div><!--/.controls -->
            </div><!--/.control-group -->
            <div class="control-group">
                <label class="control-label" for="input01">Município</label>
                <div class="controls">
                    <select class="" name="city" id="city">
                        <option value="1">Belo Horizonte</option>
                        <option value="2">Contagem</option>
                        <option value="3">Nova Lima</option>
                        <option value="4">Betim</option>
                    </select>
                </div><!--/.controls -->
            </div><!--/.control-group -->
            <div class="control-group">
                <label class="control-label" for="input01">CEP</label>
                <div class="controls">
                    <input type="text" class="span2" id="input01" name="zip_code" id="zip_code" placeholder="ex.: 30330-333" value="<?=$this->zip_code?>">
                </div><!--/.controls -->
            </div><!--/.control-group -->
                        <div class="form-actions">
                            <button type="submit" class="btn btn-primary">Salvar alterações</button>
                            <button class="btn">Cancelar</button>
                        </div>
                </form>
            </div>
        </div>