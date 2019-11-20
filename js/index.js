//获取导航条的高度
//包含该div本身的高度, 以及padding,border,margin上下的总高度
var navHeight = $('nav').outerHeight(true);
//获取轮播图总高度
var homeHeight = $('.home').outerHeight(true);
//获取滑动条到达轮播图后的总高度
var fixHeight = navHeight + homeHeight;
// console.log('滑动条到达轮播图后的总高度为'+fixHeight);
var moduleHeight = $('.mainModule').outerHeight(true);

//获取推文策划的div
var hwc = $('#help-with-content');
//获取新媒体剪辑的div
var nmc = $('#new-media-content');
//获取调查问卷的div
var qc = $('#questionnaire-content');
// console.log('推文策划：'+hwc+'\n新媒体剪辑：'+nmc+'\n调差问卷：'+qc);
$(document).ready(function() {
	$('.single-info').hover(function() {
		$(this).css('border','1px solid #000');
		// $(this).css('borderTopLeftRadius','10px').css('borderTopRightRadius','10px');
		},function(){
		$(this).css('border','0');	
	$('#help-with').hover(function() {
		hwc.css('display','block');
		hwc.css('fontSize','40px').css('Color','#56bfeb');
	});
});
	$('.sign-in').click(function(){
		$('.loadingDiv').css('display','block');
		$('#log-in').css('display','none');
		$('#sign-in').css('display','block');
	});
	$('.log-in').click(function(){
		$('.loadingDiv').css('display','block');
		$('#sign-in').css('display','none');
		$('#log-in').css('display','block');
	});
	
	$('.icon-close-black').click(function(){
		$('.loadingDiv').css('display','none');
	});
	
	// $('#phone').click(function() {
	// 	$('#phone').addclass('green-border');
	// });
	
	$('input').focus(function() {
		$(this).addClass('green-border');
	});
	$('input').blur(function() {
		$(this).removeClass('green-border');
	});
	
	// 验证手机为11位是所显示的样式
	var phone = $('#phone');
	
	function pho_length() {
		if($('#phone').val().length == 11 ){
			$('#code-btn').removeClass('disabled-code');
		} else {
			$('#code-btn').addClass('disabled-code');
		}
	}
	
	phone.blur(function(){
		pho_length();
	});
	
	phone.hover(function(){
		pho_length();
	});
	
	phone.focus(function(){
		$(this).keydown(function(){
			var phone_length = phone.val().length;
			// 从0计算11位
			if(phone_length == 10) {
				$('#code-btn').removeClass('disabled-code');
			} else {
				$('#code-btn').addClass('disabled-code');
			}
			console.log(phone_length);
		});
	});
	// 

	// return true;
	// console.log(pd);
	// if(phone.length != 11){
	// 	$('#code-btn').removeClass('disabled-code');
	// }else {
	// 	$('#code-btn').addClass('disabled-code');
	// }
});

//JS
	function check() {
	var pho = $.trim($('#phone').val());
	var code = $.trim($('#auth-code').val());
	var pwd = $.trim($('#pwd').val());
	// var cbox = $.trim($('#agreeCheckbox').val());
		if(pho != "" && code != "" && pwd != "") {
			// console.log("不为空");
			$('#sign-in-btn').removeClass('disabled');
		} else {
			// console.log("为空");
			$('#sign-in-btn').addClass('disabled');
		}
	}