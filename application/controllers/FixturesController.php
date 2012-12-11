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

        // Retorno
        $statusCode = '200';
        $statusMessage = 'Ok';
        $data = array(
                'multiplicationDate' => 'bola'
            );

        switch ($id) {
            case '1':
                $json = array(
                'participants' => array(
                    array(
                        'id' => '1',
                        'first_name' => 'Fabrício',
                        'last_name' => 'Tavares de Oliveira',
                        'nickname' => 'Fafá',
                        'usual_name' => true,
                        'email' => 'fabriciotavareso@gmail.com',
                        'phone' => '3197413107',
                        'sex' => '1',
                        'baptism' => 'IBCBH',
                        'position' => 'Líder'
                        )
                    )
                );
                break;
            case '2':
                $json = array('lessons' => array('id' => '2', 'name' => 'Andre'));
                break;
            case '3':
                $json = array('lesson' => array(array('id' => '3', 'name' => 'Vini')));
                break;
            
            default:
                $json = array(
                'participants' => array(
                    array(
                        'id' => 'dsg4v4',
                        'first_name' => 'Fabrício',
                        'last_name' => 'Tavares de Oliveira',
                        'nickname' => 'Fafá',
                        'usual_name' => true,
                        'email' => 'fabriciotavareso@gmail.com',
                        'phone' => '3197413107',
                        'sex' => '1',
                        'baptism' => 'IBCBH',
                        'position' => 'Líder'
                        ),
                    array(
                        'id' => 's4vs45',
                        'first_name' => 'André',
                        'last_name' => 'Lopes Gonzaga',
                        'nickname' => 'Andrézim',
                        'usual_name' => false,
                        'email' => 'andrelopesgonzaga@gmail.com',
                        'phone' => '',
                        'sex' => '1',
                        'baptism' => 'Metodista',
                        'position' => 'Líder'
                        ),
                    array(
                        'id' => 'hghjghj3g45',
                        'first_name' => 'Vinícius',
                        'last_name' => 'Zanotelli',
                        'nickname' => 'Vini',
                        'usual_name' => true,
                        'email' => '',
                        'phone' => '',
                        'sex' => '1',
                        'baptism' => 'IBCBH',
                        'position' => ''
                        ),
                    array(
                        'id' => '4kjh34jkh5',
                        'first_name' => 'Flávio',
                        'last_name' => 'Mancebo Machado',
                        'nickname' => '',
                        'usual_name' => false,
                        'email' => '',
                        'phone' => '',
                        'sex' => '1',
                        'baptism' => 'IBCBH',
                        'position' => ''
                        )
                )
                );
                break;
        }
        // Retorno JSON do request
        echo Zend_Json::encode($json);
        // array(
        //                 'id' => '1',
        //                 'first_name' => 'Fabricio'
        //                 'last_name' => 'Tavares de Oliveira',
        //                 'nickname' => 'Fafá'
        //                 ),
    }

    public function cellsAction()
    {
        $this->_helper->layout()->setLayout('json');
        
    }

    public function churchesAction()
    {
        $this->_helper->layout()->setLayout('json');
        
    }

    public function meetingsAction()
    {
        $this->_helper->layout()->setLayout('json');
        
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
                'lessons' => array(
                    array('id' => '1', 'name' => 'Fabricio'),
                    array('id' => '2', 'name' => 'André'),
                    array('id' => '3', 'name' => 'Vini')
                )
                );
                break;
        }
        // Retorno JSON do request
        echo Zend_Json::encode($json);
    }


}











