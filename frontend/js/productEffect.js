var Product1Effect = function(){

	var pic_W=$('#list1').width();

	$('#list1').mousemove(function(event){
		
		var mouse_X=event.pageX;

		if(mouse_X<=Math.ceil(pic_W*0.224)) {
			$('#list1 li').eq(0).show().siblings().hide();
		} 
		else if (mouse_X>Math.ceil(pic_W*0.224) && mouse_X<=Math.ceil(pic_W*0.272)) {
			$('#list1 li').eq(1).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.272) && mouse_X<=Math.ceil(pic_W*0.322)) {
			$('#list1 li').eq(2).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.322) && mouse_X<=Math.ceil(pic_W*0.379)) {
			$('#list1 li').eq(3).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.379) && mouse_X<=Math.ceil(pic_W*0.469)) {
			$('#list1 li').eq(4).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.469) && mouse_X<=Math.ceil(pic_W*0.553)) {
			$('#list1 li').eq(5).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.553) && mouse_X<=Math.ceil(pic_W*0.612)) {
			$('#list1 li').eq(6).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.612) && mouse_X<=Math.ceil(pic_W*0.672)) {
			$('#list1 li').eq(7).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.672) && mouse_X<=Math.ceil(pic_W*0.722)) {
			$('#list1 li').eq(8).show().siblings().hide();
		}
		else {
			$('#list1 li').eq(9).show().siblings().hide();
		}

	});
	
};

var Product2Effect = function(){

	var pic_W=$('#list2').width();
	
	$('#list2').mousemove(function(event){
		
		var mouse_X=event.pageX;

		if(mouse_X<=Math.ceil(pic_W*0.162)) {
			$('#list2 li').eq(0).show().siblings().hide();
		} 
		else if (mouse_X>Math.ceil(pic_W*0.162) && mouse_X<=Math.ceil(pic_W*0.235)) {
			$('#list2 li').eq(1).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.235) && mouse_X<=Math.ceil(pic_W*0.309)) {
			$('#list2 li').eq(2).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.309) && mouse_X<=Math.ceil(pic_W*0.375)) {
			$('#list2 li').eq(3).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.375) && mouse_X<=Math.ceil(pic_W*0.443)) {
			$('#list2 li').eq(4).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.443) && mouse_X<=Math.ceil(pic_W*0.506)) {
			$('#list2 li').eq(5).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.506) && mouse_X<=Math.ceil(pic_W*0.570)) {
			$('#list2 li').eq(6).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.570) && mouse_X<=Math.ceil(pic_W*0.631)) {
			$('#list2 li').eq(7).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.631) && mouse_X<=Math.ceil(pic_W*0.691)) {
			$('#list2 li').eq(8).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.691) && mouse_X<=Math.ceil(pic_W*0.746)) {
			$('#list2 li').eq(9).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.746) && mouse_X<=Math.ceil(pic_W*0.801)) {
			$('#list2 li').eq(10).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.801) && mouse_X<=Math.ceil(pic_W*0.856)) {
			$('#list2 li').eq(11).show().siblings().hide();
		}
		else {
			$('#list2 li').eq(12).show().siblings().hide();
		}

	});
	
};

var Product3Effect = function(){

	var pic_W=$('#list3').width();
	
	$('#list3').mousemove(function(event){
		
		var mouse_X=event.pageX;

		if(mouse_X<=Math.ceil(pic_W*0.11)) {
			$('#list3 li').eq(0).show().siblings().hide();
		} 
		else if (mouse_X>Math.ceil(pic_W*0.11) && mouse_X<=Math.ceil(pic_W*0.143)) {
			$('#list3 li').eq(1).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.143) && mouse_X<=Math.ceil(pic_W*0.194)) {
			$('#list3 li').eq(2).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.194) && mouse_X<=Math.ceil(pic_W*0.26)) {
			$('#list3 li').eq(3).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.26) && mouse_X<=Math.ceil(pic_W*0.329)) {
			$('#list3 li').eq(4).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.329) && mouse_X<=Math.ceil(pic_W*0.403)) {
			$('#list3 li').eq(5).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.403) && mouse_X<=Math.ceil(pic_W*0.482)) {
			$('#list3 li').eq(6).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.482) && mouse_X<=Math.ceil(pic_W*0.569)) {
			$('#list3 li').eq(7).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.569) && mouse_X<=Math.ceil(pic_W*0.7)) {
			$('#list3 li').eq(8).show().siblings().hide();
		}
		else {
			$('#list3 li').eq(9).show().siblings().hide();
		}

	});
	
};

var Product4Effect = function(){

	var pic_W=$('#list4').width();
	
	$('#list4').mousemove(function(event){
		
		var mouse_X=event.pageX;

		if(mouse_X<=Math.ceil(pic_W*0.243)) {
			$('#list4 li').eq(0).show().siblings().hide();
		} 
		else if (mouse_X>Math.ceil(pic_W*0.243) && mouse_X<=Math.ceil(pic_W*0.29)) {
			$('#list4 li').eq(1).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.29) && mouse_X<=Math.ceil(pic_W*0.351)) {
			$('#list4 li').eq(2).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.351) && mouse_X<=Math.ceil(pic_W*0.415)) {
			$('#list4 li').eq(3).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.415) && mouse_X<=Math.ceil(pic_W*0.478)) {
			$('#list4 li').eq(4).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.478) && mouse_X<=Math.ceil(pic_W*0.54)) {
			$('#list4 li').eq(5).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.54) && mouse_X<=Math.ceil(pic_W*0.617)) {
			$('#list4 li').eq(6).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.617) && mouse_X<=Math.ceil(pic_W*0.713)) {
			$('#list4 li').eq(7).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.713) && mouse_X<=Math.ceil(pic_W*0.774)) {
			$('#list4 li').eq(8).show().siblings().hide();
		}
		else {
			$('#list4 li').eq(9).show().siblings().hide();
		}

	});
	
};

var Product5Effect = function(){

	var pic_W=$('#list5').width();

	$('#list5').mousemove(function(event){
		
		var mouse_X=event.pageX;

		if(mouse_X<=Math.ceil(pic_W*0.14)) {
			$('#list5 li').eq(0).show().siblings().hide();
		} 
		else if (mouse_X>Math.ceil(pic_W*0.14) && mouse_X<=Math.ceil(pic_W*0.206)) {
			$('#list5 li').eq(1).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.206) && mouse_X<=Math.ceil(pic_W*0.285)) {
			$('#list5 li').eq(2).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.285) && mouse_X<=Math.ceil(pic_W*0.38)) {
			$('#list5 li').eq(3).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.38) && mouse_X<=Math.ceil(pic_W*0.492)) {
			$('#list5 li').eq(4).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.492) && mouse_X<=Math.ceil(pic_W*0.558)) {
			$('#list5 li').eq(5).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.558) && mouse_X<=Math.ceil(pic_W*0.671)) {
			$('#list5 li').eq(6).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.671) && mouse_X<=Math.ceil(pic_W*0.757)) {
			$('#list5 li').eq(7).show().siblings().hide();
		}
		else if (mouse_X>Math.ceil(pic_W*0.757) && mouse_X<=Math.ceil(pic_W*0.829)) {
			$('#list5 li').eq(8).show().siblings().hide();
		}
		else {
			$('#list5 li').eq(9).show().siblings().hide();
		}

	});
	
};