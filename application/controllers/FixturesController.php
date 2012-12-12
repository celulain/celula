<?php

class FixturesController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        // action body
    }

    public function participantsAction() {
        $this->_helper->layout()->setLayout('json');

        // Parâmetros
        $params = $this->getRequest()->getParams();
        if ($params['id']) {
            $id = $params['id'];
        } else {
            $id = 0;
        }

        // Determina o método da requisição
        $method = $this->getRequest()->getMethod();

        function methodPost($params) {

            $return = array(
                'id' => '5','first_name' => 'Raiane','last_name' => 'Brito','nickname' => '','usual_name' => false,'email' => '','phone' => '','sex' => '1','baptism' => 'IBCBH','position' => ''
            );
            return $return;
        }

        function methodGet($params) {
            // Implement: find / findMany / findAll

            $return = array(
                array('id' => '1','first_name' => 'Fabrício','last_name' => 'Tavares de Oliveira','nickname' => 'Fafá','usual_name' => true,'email' => 'fabriciotavareso@gmail.com','phone' => '3197413107','sex' => '1','baptism' => 'IBCBH','position' => 'Líder'),
                array('id' => '2','first_name' => 'André','last_name' => 'Lopes Gonzaga','nickname' => 'Andrézim','usual_name' => false,'email' => 'andrelopesgonzaga@gmail.com','phone' => '','sex' => '1','baptism' => 'Metodista','position' => 'Líder'),
                array('id' => '3','first_name' => 'Vinícius','last_name' => 'Zanotelli','nickname' => 'Vini','usual_name' => true,'email' => '','phone' => '','sex' => '1','baptism' => 'IBCBH','position' => ''),
                array('id' => '4','first_name' => 'Flávio','last_name' => 'Mancebo Machado','nickname' => '','usual_name' => false,'email' => '','phone' => '','sex' => '1','baptism' => 'IBCBH','position' => '')
            );
            return $return;
        }

        function methodPut($params) {

            $return = array(
                array('id' => '4','first_name' => 'Flávio','last_name' => 'Mancebo Machado','nickname' => '','usual_name' => false,'email' => '','phone' => '','sex' => '1','baptism' => 'IBCBH','position' => '')
            );
            return $return;
        }

        function methodDelete($params) {

            if ($id) {
                // Ação para um resource.
            } else {
                // Ação para todos resources.
            }
            
            $statusCode = '';
            $statusMessage = '';
            $data = array();

            $return = array(
                'status' => $statusCode,
                'message' => $statusMessage,
                'data' => $data
            );
            return $return;
        }

        // Chama a ação correta para o método
        switch ($method) {
            case 'POST':
                $json = methodPost($params);
                break;
            case 'GET':
                $json = methodGet($params);
                break;
            case 'PUT':
                $json = methodPut($params);
                break;
            case 'DELETE':
                $json = methodDelete($params);
                break;
            default:
                $json = methodGet($params);
                break;
        }

        // Retorno JSON do request
        echo Zend_Json::encode($json);
    }

    public function cellsAction()
    {
        $this->_helper->layout()->setLayout('json');
        
        $json = array(
            'meetings' => array(
                array('id' => '1', 'cell_id' => 'a','date' => '12/10/2012'),
                array('id' => '2', 'cell_id' => 'a','date' => '19/10/2012')
            )
        );
        echo Zend_Json::encode($json);        
    }

    public function churchesAction()
    {
        $this->_helper->layout()->setLayout('json');
        
    }

    public function meetingsAction()
    {
        $this->_helper->layout()->setLayout('json');

        $json = array(
            'meetings' => array(
                array('id' => '1', 'cell_id' => 'a','date' => '12/10/2012'),
                array('id' => '2', 'cell_id' => 'a','date' => '19/10/2012'),
                array('id' => '3', 'cell_id' => 'a','date' => '26/10/2012'),
                array('id' => '4', 'cell_id' => 'a','date' => '02/11/2012'),
                array('id' => '5', 'cell_id' => 'a','date' => '09/11/2012'),
                array('id' => '6', 'cell_id' => 'a','date' => '16/11/2012'),
                array('id' => '7', 'cell_id' => 'a','date' => '23/11/2012'),
                array('id' => '8', 'cell_id' => 'a','date' => '30/11/2012'),
                array('id' => '9', 'cell_id' => 'a','date' => '07/12/2012')
            )
        );
        echo Zend_Json::encode($json);
    }

    public function membersAction()
    {
        $this->_helper->layout()->setLayout('json');

        // Parâmetros
        $params = $this->getRequest()->getParams();
        if ($params['id']) {
            $id = $params['id'];
        } else {
            $id = 0;
        }

        // Determina o método da requisição
        $method = $this->getRequest()->getMethod();

        // Retorno
        $statusCode = '200';
        $statusMessage = 'Ok';
        $data = array(
                'multiplicationDate' => 'bola'
            );

        $json = array(
            'participants' => array(
                array('id' => '1', 'name' => 'Fabricio'),
                array('id' => '2', 'name' => 'André'),
                array('id' => '3', 'name' => 'Vini')
            )
        );

        // Retorno JSON do request
        echo Zend_Json::encode($json);
    }

    public function lessonsAction()
    {
        $this->_helper->layout()->setLayout('json');

        // Parâmetros
        $params = $this->getRequest()->getParams();
        if ($params['id']) {
            $id = $params['id'];
        } else {
            $id = 0;
        }

        // Determina o método da requisição
        $method = $this->getRequest()->getMethod();

        // Retorno
        $statusCode = '200';
        $statusMessage = 'Ok';
        $data = array(
                'multiplicationDate' => 'bola'
            );

        
        switch ($id) {
            case '1':
                $json = array('id' => '1', 'name' => 'Fabricio');
                break;
            case '2':
                $json = array('lessons' => array('id' => '2', 'name' => 'Andre'));
                break;
            case '3':
                $json = array('lesson' => array(array('id' => '3', 'name' => 'Vini')));
                break;
            
            default:
                $json = array(
                    array('id' => '1', 'name' => 'Fabricio'),
                    array('id' => '2', 'name' => 'André'),
                    array('id' => '3', 'name' => 'Vini')
                );
                break;
        }
        // Retorno JSON do request
        echo Zend_Json::encode($json);
    }

    public function suggestionsAction() {
        $this->_helper->layout()->setLayout('json');
        
        $json = array(
            'suggestions' => array(
                array(
                    'id' => '32',
                    'user_id' => '12321312',
                    'date' => '12-05-2012',
                    'suggestion' => 'Bolota',
                ),
                array(
                    'id' => '12',
                    'user_id' => '12321312',
                    'date' => '12-08-2012',
                    'suggestion' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in condimentum nulla. Nullam nunc lacus, congue nec adipiscing vitae, tincidunt non leo. Sed sodales nisl a arcu sodales ac accumsan purus ullamcorper. Donec ultrices leo in lorem hendrerit fermentum. Vestibulum quis tempor ligula. Duis purus neque, suscipit eget dignissim sed, congue a orci. Aliquam eget rhoncus risus. Etiam at dui lectus, quis scelerisque mi. Nullam pretium accumsan pharetra. Morbi ut massa quis lacus luctus tristique id quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas ut metus non nunc dapibus facilisis. Aliquam vitae diam eget turpis tristique lobortis ultrices quis nisl. Ut nisi neque, vulputate id faucibus sit amet, porttitor ut neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean sodales commodo tellus ut malesuada.',
                )
            )
        );
        echo Zend_Json::encode($json);

    }

    public function praisesAction() {
        $this->_helper->layout()->setLayout('json');
        
        $json = array(
            'praises' => array(
                array(
                    'id' => '1',
                    'name' => 'louvor 1',
                    'path' => '12321312'
                ),
                array(
                    'id' => '2',
                    'name' => 'louvor 2',
                    'path' => '12321312'
                )
            )
        );
        echo Zend_Json::encode($json);
    }

    public function dynamicsAction() {
        $this->_helper->layout()->setLayout('json');
        
        $json = array(
                array(
                    'id' => '1',
                    'name' => 'Apanhar o bastão',
                    'min_participants' => 2,
                    'max_participants' => 6,
                    'goal' => 'apresentação de grupos ou propiciar maior integração.',
                    'stuff' => 'bastão ou vassoura',
                    'text' => 'formar um círculo o mais aberto possível. cada participante deve inicialmente falar seu nome para que os demais o recordam ou aprendam.
Escolhe-se um jogador que se coloca no centro do círculo segurando uma das extremidades do bastão que está apoiado no chão. Este deve iniciar o jogo falando o nome de um dos componentes do círculo. ao mesmo tempo em que o chama deve soltar o bastão. Aquele que foi chamado deve  correr para o centro e tentar apanhar o bastão antes que este toque o chão. Se conseguir apanhá-lo substituirá o jogador do centro e continua o jogo chamando outro participante. Caso contrário, ou seja, se não pegar o bastão antes que este chegue ao chão, retornará ao seu lugar e o jogador do centro permanece onde está reiniciando a atividade.
O jogo termina quando todos tiverem sido chamados.'
                ),
                array(
                    'id' => '2',
                    'name' => 'A Palavra de Deus que transforma',
                    'min_participants' => 4,
                    'max_participants' => 10,
                    'goal' => 'Fazer o grupo refletir de que forma assimilamos a PALAVRA DE DEUS em nossas vidas.',
                    'stuff' => 'uma bolinha de isopor, um giz, um vidrinho de remédio vazio, uma esponja e uma vasilha com água.',
                    'text' => 'Primeiro se explica que a água é a palavra de Deus e que o objeto somos nós, depois se coloca a água na vasilha, e alguém mergulha o isopor, após ver o que ocorre com o isopor, mergulhar o giz, depois a vidro de remédio e por último a esponja. Explicar que a água é a Palavra de Deus e os objetos somos nós. Dê um objeto para cada pessoa.
Colocar 1º a bolinha de isopor na água. Refletir: o isopor não afunda e nem absorve a água. Como nós absorvemos a Palavra de Deus? Somos também impermeáveis?
Mergulhar o giz na água. Refletir: o giz retém a água só para si, sem repartir. E nós?
Encher de água o vidrinho de remédio. Despejar toda a água que ele se encheu. Refletir: o vidrinho tinha água só para passar para os outros, mas sem guardar nada para si mesmo. E nós ?
Mergulhar a esponja e espremer a água. Refletir: a esponja absorve bem a água e mesmo espremendo ela continua molhada.
Iluminação Bíblica: Is 40,8 ; Mt 7,24 ; 2Tm 3,16'
                )
        );
        echo Zend_Json::encode($json);
    }

    public function cellProfilesAction() {
        $this->_helper->layout()->setLayout('json');
        
        $json = array(
            'cellProfiles' => array(
                array(
                    'id' => '1',
                    'cell_id' => '1',
                    'leader' => 'Fabrício Tavares de Oliveira',
                    'gender' => 'Masculina',
                    'min_age' => 22,
                    'max_age' => 29,
                    'address' => 'Cidade Nova',
                    'church' => 'Igraja Batista Central'
                )
            )
        );
        echo Zend_Json::encode($json);
    }

}











