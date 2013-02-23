<?php

$con = mysql_connect("localhost","root","root");
$db = mysql_select_db("ibcbh");

// registrando no db os usuários da migração
$sql_migration = "
	INSERT INTO
		celula_migration.users_migration
	SELECT
		NULL,
		m.CodMembro
	FROM
		celula_antigo.tblmembros m
	ORDER BY
		m.CodMembro ASC;
";

$sql_membresia = "
	INSERT INTO
		celula_ibcbh.core_user
	SELECT
		cm.user_id_antigo,
		SUBSTRING_INDEX( m.NomeMembro , ' ', 1 ) AS first,
		SUBSTRING(m.NomeMembro, LOCATE(' ', m.NomeMembro)+1) AS last,
		IF(m.SexoMembro='M',1,2),
		m.Apelido,
		m.DataNascMembro
	FROM
		celula_antigo.tblmembros m
	INNER JOIN
		celula_migration.users_migration cm ON (cm.user_id_antigo=m.CodMembro)
	ORDER BY
		m.CodMembro ASC;
";

$sql_membresia_endereco = "
	INSERT INTO
		celula_ibcbh.core_user_address
	SELECT
		cm.user_id_antigo,
		m.EnderecoMembro,
		m.NumeroEndMembro,
		m.ComplEndMembro,
		m.BairroEndMembro,
		2700, #### BELO HORIZONTE POIS O SISTEMA ANTIGO NAO GUARDAVA PELO ID DA CIDADE
		m.CepEndMembro,
		m.FoneResMembro		
	FROM
		celula_antigo.tblmembros m
	INNER JOIN
		celula_migration.users_migration cm ON (cm.user_id_antigo=m.CodMembro)
	ORDER BY
		m.CodMembro ASC;
";

$sql_membresia_informacoes_adicionais = "

	INSERT INTO
		celula_ibcbh.core_user_information
	SELECT
		cm.user_id_antigo,
		1,
		IF(m.Igreja LIKE '%Batista Central%',1,2) AS baptized,
		NULL AS CPF,
		NULL AS RG,
		m.DataBatismo,
		m.EstadoCivilMembro		
	FROM
		celula_antigo.tblmembros m
	INNER JOIN
		celula_migration.users_migration cm ON (cm.user_id_antigo=m.CodMembro)
	ORDER BY
		m.CodMembro ASC;

";





// talvez lideres (acesso ao sistema)
$sql_login = "
	INSERT INTO
		celula_ibcbh.core_user_system
	SELECT
		cm.user_id_antigo,
		LOWER(u.usulogin) AS username,
		u.email,
		SHA1('ibcbh'),
		u.usudatacadastro
	FROM
		celula_antigo.tblmembros m
	INNER JOIN
		celula_antigo.tblgrupos g ON (g.Lider=m.CodMembro)
	INNER JOIN
		celula_antigo.tblusuarioxcelula tl ON (tl.codcel=g.Codigo)
	INNER JOIN 
		celula_antigo.tblusuario u ON (tl.codusu=u.usucod)
	INNER JOIN
		celula_migration.users_migration cm ON (cm.user_id_antigo=m.CodMembro)
	WHERE
		u.usulogin!='ALCIDES'
	GROUP BY
		m.CodMembro
	ORDER BY
		m.CodMembro ASC

";


$sql_cell = "

	INSERT INTO
		celula_ibcbh.cell
	SELECT
		g.Codigo,
		IFNULL(g.DataCriacao,DATE(NOW())),
		NULL
	FROM
		celula_antigo.tblmembros m
	INNER JOIN
		celula_antigo.tblgrupos g ON (g.Lider=m.CodMembro)
	INNER JOIN
		celula_migration.users_migration cm ON (cm.user_id_antigo=m.CodMembro)
	GROUP BY
		m.CodMembro
	ORDER BY
		m.CodMembro ASC
";

$sql_cell_leader = "

	INSERT INTO
		celula_ibcbh.cell_user
	SELECT
		NULL,
		g.Codigo,
		cm.user_id_antigo,
		DATE(NOW()),
		1
	FROM
		celula_antigo.tblmembros m
	INNER JOIN
		celula_antigo.tblgrupos g ON (g.Lider=m.CodMembro)
	INNER JOIN
		celula_antigo.tblusuarioxcelula tl ON (tl.codcel=g.Codigo)
	INNER JOIN 
		celula_antigo.tblusuario u ON (tl.codusu=u.usucod)
	INNER JOIN 
		celula_migration.users_migration cm ON (cm.user_id_antigo=m.CodMembro)
	GROUP BY
		m.CodMembro
	ORDER BY
		m.CodMembro ASC;

";

$sql_cell_member = "

	INSERT INTO
		celula_ibcbh.cell_user
	SELECT 
		NULL,
		c.Celula,
		cm.user_id_antigo,
		DATE(NOW()),
		2
	FROM  
		celula_antigo.tblcellgradereuniao c
	INNER JOIN
		celula_antigo.tblmembros m ON (c.Membro=m.CodMembro)
	INNER JOIN 
		celula_migration.users_migration cm ON (cm.user_id_antigo=m.CodMembro)
	WHERE 
		1 #c.Celula=178
		AND c.Tipo=1
		AND cm.user_id_antigo NOT IN (SELECT user_id FROM celula_ibcbh.cell_user)
	GROUP BY 
		c.Membro,
		c.Celula

";

$sql_cell_address = "

	INSERT INTO
		celula.cell_host
	SELECT
		g.Codigo,
		CONVERT(g.Endereco USING utf8),
		g.NumeroEnd,
		0,
		g.Bairro,
		2700,
		g.Cep
	FROM
		celula_antigo.tblgrupos g
	WHERE
		g.codigo IN (SELECT cell_id FROM celula_ibcbh.cell)

";

$sql_cell_info = "
	INSERT INTO
		celula_ibcbh.cell_detailed
	SELECT
		g.Codigo,
		IF(g.Dia='Segunda-Feira',1,IF(g.Dia='Terça-Feira',2,IF(g.Dia='Quarta-Feira',3,IF(g.Dia='Quinta-Feira',4,IF(g.Dia='Sexta-Feira',5,IF(g.Dia='S?bado',6,6)))))),
		0,
		0,
		g.Horarioentrada
	FROM 
		celula_antigo.tblgrupos g
	WHERE
		g.codigo IN (SELECT cell_id FROM celula_ibcbh.cell)
";

// O nickname a partir de uma determinada data, estava como NULL. Retirar isso!
$cell_nickname_null = "
	UPDATE
		celula_ibcbh.core_user
	SET
		nickname=''
	WHERE
		nickname IS NULL
";


$sql_leadership = "



";

// POR ENQUANTO NAO VAMOS IMPORTAR OS FREQUENTADORES
$sql_cell_goers = "

	SELECT 
		m.* 
	FROM  
		tblcellgradereuniao c
	INNER JOIN 
		tblfrequentadores m ON ( m.Codigo = c.Membro ) 
	WHERE 
		c.Celula=178
		AND c.Tipo =2
	GROUP 
		BY c.Membro
		
";



?>