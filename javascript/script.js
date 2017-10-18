	function getRandomInt(min, max) {
	  
	  return Math.floor(Math.random() * (max - min) + min);
	}
		var y;
		y = getRandomInt(0,100);
		console.log(y);

	function test() {

		var nb = document.querySelector(".toinou").value;
		console.log(nb);
		console.log("toto");
		var x;
		x = /^[0-9]{1,3}$/;


		if ((nb > 100)  || (!x.test(nb)))
		{
			console.log(nb);
			console.log("titi");
			alert('azertyui');	
		}

		if (nb > y)
		{
			alert('Superieur');
		}
		else if (nb < y)
		{
			alert('Inferieur');
		}
		else if (nb == y)
		{
			alert('bravo');
		}


	}
>>>>>>> 602bc7817a706f333b7e7f0de15ca3070da2fa85
