
	function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }

}
    function chosen(myId){
    	var choice = document.getElementById(myId);
    	var actual = document.getElementById('newcol');
    	if(choice.style.backgroundColor == actual.style.backgroundColor){
    	//	alert("aia e");
    		blend();
    		setTimeout(congratulate(), 2000);
    		setTimeout(function(){
    			var elem = document.getElementById('congratsDiv');
    			console.log("ba macar e aici");
    			elem.classList.add("display-none");
    		}, 6000);
    		
    	}else{
    		// alert("OOpsie Daisie")
    		nope(choice);
    	}
    }

    function congratulate(){
    	console.log("congrats!");
    	var elem = document.getElementById('congratsDiv');
    	var box3 = document.getElementById('newcol');
    	elem.style.backgroundColor = box3.style.backgroundColor;
    	//elementToFadeInAndOut
    	elem.className = "elementToFadeInAndOut";
    	elem.classList.add("congrats");
    }

    function nope(choice){
    //		choice.innerHTML = "Nope";
    		setTimeout(function(){
    			choice.innerHTML = "";
    		}, 2000);

    }

    function blend(){
//     	#box1{
// 	right:-70px;
// }
// #box2{
// 	left:-70px;
// }
	var box1 = document.getElementById("box1");
	box1.style.marginRight = "-50px";
	var box2 = document.getElementById("box2");
	box2.style.marginLeft = "-50px";

    }

    function refreshColors(){
    var r, g, b;
	var box1 = document.getElementById( 'box1' );
	box1.style.backgroundColor = 'rgba(' + Math.floor(Math.random() * 256)  +',' + Math.floor(Math.random() * 256) +',' +Math.floor(Math.random() * 256)+ ', 1)';
	console.log("box1 este ", box1);
	var box2 = document.getElementById( 'box2' );
	box2.style.backgroundColor = 'rgba(' + Math.floor(Math.random() * 256)  +',' + Math.floor(Math.random() * 256) +',' +Math.floor(Math.random() * 256)+', 0.5)';

	if(box1.style.marginRight == "-50px"){box1.style.marginRight = "20px"};
	if(box2.style.marginLeft == "-50px"){box2.style.marginLeft = "20px"};

	var colorString1 = window.getComputedStyle( box1 ,null).getPropertyValue('background-color');
	console.log("colorString1: ", colorString1);
	var colorString2 = window.getComputedStyle( box2 ,null).getPropertyValue('background-color');
	var numberPattern = /\d+/g;

	var box1rgb = colorString1.match( numberPattern );
	console.log("box1rgb este", box1rgb);
	var box2rgb = colorString2.match( numberPattern );

	r =Math.floor((Number(box1rgb[0])+ Number(box2rgb[0])) /2);
	console.log("(Number(box1rgb[0])", (Number(box1rgb[0])));
	console.log("(Number(box1rgb[0])+ Number(box2rgb[0])", (Number(box1rgb[0])+ Number(box2rgb[0])));
	console.log("(Number(box1rgb[0])+ Number(box2rgb[0])) /2", (Number(box1rgb[0])+ Number(box2rgb[0])) /2);
	g =Math.floor((Number(box1rgb[1])+ Number(box2rgb[1])) /2);
	b =Math.floor((Number(box1rgb[2])+ Number(box2rgb[2])) /2);

	var box3= document.getElementById('newcol');
	box3.style[0] = "background-color";
	box3.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ', 1)';

	var choice1 = document.getElementById( 'choice1' );


//	var rand = Math.floor(Math.random() * 10)+5;
	var choice2 = document.getElementById( 'choice2' );


	var choice3 = document.getElementById( 'choice3' );


	var choices=[choice1, choice2, choice3];
	shuffle(choices);

	choices[0].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	choices[1].style.backgroundColor = 'rgb(' + (r-Math.floor(Math.random() * 50)+35) + ',' + (g-Math.floor(Math.random() * 50)+35) + ',' + (b-Math.floor(Math.random() * 50)+35) + ')';
	choices[2].style.backgroundColor = 'rgb(' + (r+Math.floor(Math.random() * 50)+35) + ',' + (g+Math.floor(Math.random() * 50)+35) + ',' + (b+Math.floor(Math.random() * 50)+35) + ')';
    console.log("choice1 ", choice1.style.backgroundColor);
    console.log("choice2 ", choice2.style.backgroundColor);
    console.log("choice3 ", choice3.style.backgroundColor);
    console.log("choices[0].style.backgroundColor ",choices[0].style.backgroundColor);
    }
	refreshColors();