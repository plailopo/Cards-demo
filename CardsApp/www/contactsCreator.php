<?php

$contacts = array();


$fnames = ['Marco', 'Enrico', 'Francesco', 'Luca', 'Jimmy', 'Chiara', 'Laura', 'Filippo', 'Federica', 'Roberto', 'Paul', 'Jack', 'Gianni', 'Silvia'];
$lnames = ['Rossi', 'Smith', 'Fitzgerald', 'Obama', 'Bianchi', 'Verdi', 'De Marchi', 'Beethoven', 'Dalla Libera'];


for($i=0; $i < 8000; $i++){
	$fn = $fnames[rand(0, count($fnames)-1)];
	$ln = $lnames[rand(0, count($lnames)-1)];
	$contacts[] = array(
			'firstname' => $fn,
			'lastname' => $ln,
			'phone' => '+39 3' . generateRandomNumber(9),
			'email' => $fn . '.' . $ln . '@cards.com'
	);
}

file_put_contents('contacts8000.json', json_encode($contacts));



function generateRandomString($length = 10) {
	
	$characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$charactersLength = strlen($characters);
	$randomString = '';
	for ($i = 0; $i < $length; $i++) {
		$randomString .= $characters[rand(0, $charactersLength - 1)];
	}
	return $randomString;
}

function generateRandomNumber($length = 10) {

	$characters = '0123456789';
	$charactersLength = strlen($characters);
	$randomString = '';
	for ($i = 0; $i < $length; $i++) {
		$randomString .= $characters[rand(0, $charactersLength - 1)];
	}
	return $randomString;
}

?>

<h1>Creato JSON!!!</h1>