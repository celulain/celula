<?
$db = 'celula_ibcbh';

mysql_connect("localhost","root","[=celula]mysql");

mysql_select_db($db);

$sql = "
	SELECT
		user_id, 
		name, 
		surname,
		nickname
	FROM 
		core_user
";
$rs = mysql_query($sql);
while($col = mysql_fetch_array($rs)){
	$sql_update = "
		UPDATE 
			core_user
		SET 
			name='".utf8_encode($col['name'])."',
			surname='".utf8_encode($col['surname'])."',
			nickname='".utf8_encode($col['nickname'])."'
		WHERE 
			user_id=".$col['user_id']."
	";
	mysql_query($sql_update);
	// echo $sql_update."\n";
}


$sql_address = "
	SELECT 
		user_id,
		address,
		district
	FROM 
		core_user_address
";

$rs_address = mysql_query($sql_address);
while($col = mysql_fetch_array($rs_address)){
	$sql_update = "
		UPDATE 
			core_user_address
		SET 
			address='".utf8_encode($col['address'])."',
			district='".utf8_encode($col['district'])."'
		WHERE 
			user_id=".$col['user_id']."
	";
	mysql_query($sql_update);
	// echo $sql_update."\n";
}
?>