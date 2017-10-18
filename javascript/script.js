	function getRandomInt(min, max) {
	  
	  return Math.floor(Math.random() * (max - min) + min);
	}
		var y;
        var cpt;
        var i;
        i = 0;
        cpt = 0;
		y = getRandomInt(0,100);
		console.log(y);
        var plus = document.querySelector(".plus");
        var moins = document.querySelector(".moins");
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
            document.querySelector('.erreur').classList.remove("hidden");
		}else{
            document.querySelector('.erreur').classList.add("hidden");

		if (nb > y)
		{
            moins.style.backgroundColor = "red";
            plus.style.backgroundColor = "grey";
            cpt++;
		}
		else if (nb < y)
		{
            plus.style.backgroundColor = "red";
            moins.style.backgroundColor = "grey";
            cpt++;
		}
		else if (nb == y && cpt < 10)
		{
            moins.style.backgroundColor = "grey";
            plus.style.backgroundColor = "grey";
            document.querySelector('#envoyer').classList.add("hidden");
            document.querySelector('#reponse').classList.remove("hidden");
            document.querySelector("#reponse").innerHTML = " Bravo! Tu as trouvé la bonne reponse en " + cpt + " coups";
		}
        console.log(cpt);
        if (cpt > 10)
            {
                console.log("titi");
                document.querySelector("#reponse").classList.remove("hidden");
                document.querySelector("#envoyer").classList.add("hidden");
             document.querySelector("#reponse").innerHTML = "   Tu as échoué";   
            }
        
        }

	}
