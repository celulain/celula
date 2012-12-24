<?
$db = 'celula_ibcbh';

mysql_connect("localhost","root","[=celula]mysql");

mysql_select_db($db);

$sql = "
	SELECT 
		name, 
		surname,
		nickname
	FROM 
		core_user
";
$rs = mysql_query($sql);
while($col = mysql_fetch_array($rs)){
	echo $col['name']."\n";
}
?>