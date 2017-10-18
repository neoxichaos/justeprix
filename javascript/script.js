function check(){
	var x;
	var y;
	x = document.querySelector(".toinou");
	console.log(x);
	y = /^[0-9]{1,3}$/;
	if ( x.value > 100 || !y.test(x.value)) {
		alert('erreur');
	}
}