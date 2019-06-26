$('.carousel').carousel({
	interval: 2000
});

$('.tooltip').tooltip('show')

var clientWidth = document.body.clientWidth;
if(clientWidth < 768) {

	var t = $('.fixed-top')[0].clientHeight;

	if($(".carousel")[0]) {
		$(".carousel")[0].style.marginTop = t + 'px';
	}
	//$(".phone_showList")[0].style.marginTop = t + 'px';

	const element = document.querySelectorAll('.phone_animate');
	for(var i = 0; i < element.length; i++) {
		element[i].classList.add('animated', 'slideInUp');
	}

	const case_caption_element = document.querySelectorAll('.case_caption p');
	const case_main_element = document.querySelectorAll('.case_main img');
	const contain_module_element = document.querySelectorAll('.contain_module');
	const case_caption_dy_element = document.querySelectorAll('.case_caption_dy p');
	const wz_bg_dy_element = document.querySelectorAll('.wz_bg_dy');

	if($(".case_caption")[0]) {
		$(".case_caption")[0].style.marginTop = t + 'px';
		case_caption_element[0].classList.add('animated', 'fadeInUp');
	}

	if($(".case_caption_dy")[0]) {
		$(".case_caption_dy")[0].style.marginTop = t + 'px';
		case_caption_dy_element[0].classList.add('animated', 'fadeInUp');
	}

	if(case_main_element[0]) {
		case_main_element[0].classList.add('animated', 'fadeInUp');
	}

	if(contain_module_element[0]) {
		contain_module_element[0].classList.add('animated', 'fadeInUp');
	}

	if(wz_bg_dy_element[0]) {
		setTimeout(function() {
			wz_bg_dy_element[0].style.display = "block";
			wz_bg_dy_element[0].classList.add('animated', 'fadeInUp');
		}, 100)
	}

	/**
	 * 点击返回顶部方法，加计时器是为了过渡顺滑
	 */
	var footer_click = document.getElementsByClassName('footer_top')[0];
	footer_click.addEventListener('click', goTop);

	function goTop() {
		var pp = document.documentElement;
		var stop = document.body;
		var timer = setInterval(function() {
			//获取滚动条的滚动高度
			var osTop = pp.scrollTop || stop.scrollTop;
			//用于设置速度差，产生缓动的效果
			var speed = Math.floor(-osTop / 6);
			pp.scrollTop = stop.scrollTop = osTop + speed;
			isTop = true; //用于阻止滚动事件清除定时器
			if(osTop == 0) {
				clearInterval(timer);
			}
		}, 20);
	}

} else {
	const left_bg_element = document.querySelectorAll('.left_bg div img');
	const com_animate = document.querySelectorAll('.communication_animate div');
	const com_animate_footer = document.querySelectorAll('.communication_animate footer');
	const case_caption_pc_element = document.querySelectorAll('.case_caption_pc p');
	const contain_module_element = document.querySelectorAll('.contain_module');
	const wz_bg_dy_pc_element = document.querySelectorAll('.wz_bg_dy_pc');
	const slide_state_h1_element = document.querySelectorAll('.slide_state h1');
	const slide_state_h6_element = document.querySelectorAll('.slide_state h6');
	const content_dlr_element = document.querySelectorAll('.content_dlr div');

	if(com_animate_footer[0]) {
		com_animate_footer[0].classList.add('animated', 'slideInUp');
	}

	if(case_caption_pc_element[0]) {
		case_caption_pc_element[0].classList.add('animated', 'fadeInUp');
	}

	if(contain_module_element[0]) {
		contain_module_element[0].classList.add('animated', 'fadeInUp');
	}

	if(wz_bg_dy_pc_element[0]) {
		setTimeout(function() {
			wz_bg_dy_pc_element[0].style.display = "block";
			wz_bg_dy_pc_element[0].classList.add('animated', 'fadeInUp');
		}, 100)
	}

	if(slide_state_h1_element[0]) {
		slide_state_h1_element[0].classList.add('animated', 'fadeInUp');
	}

	if(slide_state_h6_element[0]) {
		slide_state_h6_element[0].style.display = "none";
		setTimeout(function() {
			slide_state_h6_element[0].style.display = "block";
			slide_state_h6_element[0].classList.add('animated', 'fadeInUp');
		}, 500)
	}
	
	for(var i = 0; i < content_dlr_element.length; i++){		
		if(content_dlr_element[i]) {
			content_dlr_element[i].classList.add('animated', 'fadeInUp');
		}
	}
	

	for(var i = 0; i < com_animate.length; i++) {
		com_animate[i].classList.add('animated', 'slideInUp');
	}

	for(var i = 0; i < left_bg_element.length; i++) {
		if(i % 2 == 1) {
			left_bg_element[i].classList.add('animated', 'fadeInLeft');
		} else {
			left_bg_element[i].classList.add('animated', 'fadeInRight');
		}
	}

	/**
	 * 点击返回顶部方法，加计时器是为了过渡顺滑
	 */
	var footer_click = document.getElementsByClassName('backTop')[0];
	if(footer_click) {
		$(".backTop").click(function(){
			var pp = document.documentElement;
			var stop = document.body;
			var timer = setInterval(function() {
				//获取滚动条的滚动高度
				var osTop = pp.scrollTop || stop.scrollTop;
				//用于设置速度差，产生缓动的效果
				var speed = Math.floor(-osTop / 6);
				pp.scrollTop = stop.scrollTop = osTop + speed;
				isTop = true; //用于阻止滚动事件清除定时器
				if(osTop == 0) {
					clearInterval(timer);
				}
			}, 20);
		})
	}
}