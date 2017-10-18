
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

	}