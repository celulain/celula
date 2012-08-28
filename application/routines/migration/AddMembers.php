<?php

$con = mysql_connect("localhost","root","root");
$db = mysql_select_db("ibcbh");

// talvez lideres (acesso ao sistema)
$sql_lideres = "
	INSERT INTO
		ibcbh.core_user
	SELECT
		m.CodMembro,
		u.usulogin,
		u.email,
		SHA1('ibcbh'),
		u.usudatacadastro
	FROM
		antigo.tblmembros m
	INNER JOIN
		antigo.tblgrupos g ON (g.Lider=m.CodMembro)
	INNER JOIN
		antigo.tblusuarioxcelula tl ON (tl.codcel=g.Codigo)
	INNER JOIN 
		antigo.tblusuario u ON (tl.codusu=u.usucod)
	GROUP BY
		m.CodMembro
	ORDER BY
		m.CodMembro ASC

";
mysql_query($sql_lideres);
$user_id = mysql_insert_id();

$sql_lideres_dados = "
	INSERT INTO
		ibcbh.core_user_address
	SELECT
		m.CodMembro,
		m.EnderecoMembro,
		m.NumeroEndMembro,
		m.ComplEndMembro,
		m.BairroEndMembro,
		0,
		m.FoneResMembro,
		m.CepEndMembro
	FROM
		antigo.tblmembros m
	ORDER BY
		m.CodMembro ASC;
";

mysql_query($sql_lideres_dados);

$sql_lideres_detailed = "
	INSERT INTO
		 ibcbh.core_user_detailed
	SELECT
		m.CodMembro,
		SUBSTRING_INDEX( m.NomeMembro , ' ', 1 ) AS first,
		SUBSTRING(m.NomeMembro, LOCATE(' ', m.NomeMembro)+1) AS last,
		IF(m.SexoMembro='M',1,2),
		m.Apelido,
		m.DataNascMembro
	FROM
		antigo.tblmembros m
	ORDER BY
		m.CodMembro ASC;
";
mysql_query($sql_lideres_detailed);

$sql_lideres_information = "
INSERT INTO core_user_information SELECT user_id,1 FROM core_user_detailed
";


$sql_cell = "

	INSERT INTO
		ibcbh.cell
	SELECT
		g.Codigo,
		g.DataCriacao,
		NULL
	FROM
		antigo.tblmembros m
	INNER JOIN
		antigo.tblgrupos g ON (g.Lider=m.CodMembro)
	GROUP BY
		m.CodMembro
	ORDER BY
		m.CodMembro ASC
";

$sql_cell_leader = "

	INSERT INTO
		ibcbh.cell_user
	SELECT
		g.Codigo,
		m.CodMembro,
		1,
		NULL
	FROM
		antigo.tblmembros m
	INNER JOIN
		antigo.tblgrupos g ON (g.Lider=m.CodMembro)
	INNER JOIN
		antigo.tblusuarioxcelula tl ON (tl.codcel=g.Codigo)
	INNER JOIN 
		antigo.tblusuario u ON (tl.codusu=u.usucod)
	GROUP BY
		m.CodMembro
	ORDER BY
		m.CodMembro ASC

";

$sql_cell_member = "

	INSERT INTO
		cell_user
	SELECT 
		c.Celula,
		c.Membro,
		2,
		NULL
	FROM  
		antigo.tblcellgradereuniao c
	INNER JOIN
		antigo.tblmembros m ON (c.Membro=m.CodMembro)
	WHERE 
		1 #c.Celula=178
		AND c.Tipo=1
		AND m.CodMembro NOT IN (SELECT user_id FROM cell_user)
	GROUP 
		BY c.Membro

";

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

$sql_cell_address = "

	INSERT INTO
		ibcbh.cell_host
	SELECT
		g.Codigo,
		g.Endereco,
		g.NumeroEnd,
		g.Bairro,
		0,
		g.Cep
	FROM
		antigo.tblgrupos g

";

$sql_cell_info = "
	INSERT INTO
		ibcbh.cell_detailed
	SELECT
		g.Codigo,
		IF(g.Dia='Segunda-Feira',1,IF(g.Dia='Terça-Feira',2,IF(g.Dia='Quarta-Feira',3,IF(g.Dia='Quinta-Feira',4,IF(g.Dia='Sexta-Feira',5,IF(g.Dia='S?bado',6,6)))))),
		0,
		0,
		g.Horarioentrada
	FROM 
		antigo.tblgrupos g
";

?>