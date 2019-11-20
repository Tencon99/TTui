$(function() {
	'use strict'
	
	/*选中页面中所有的input[data-rule]*/
	var $inputs = $('[data-rule]');
	var inputs = [];
 	// JQuery的迭代方法
	$inputs.each(function (index,node) {
		/*解析每一个input的验证规则*/
		var tmp = new Input(node);/*出错*/
		inputs.push(tmp);
	})
	
	// console.log('inputs',inputs);
	
	
	/*验证*/

	// var result = validator.validate_max();
	// var result = validator.validate_min();
	// var maxlength = validator.validate_maxlength();
	// var minlength = validator.validate_minlength();
	// var result = validator.validate_numeric();
	// var result = validator.validate_required();
	// var pattern = validator.validate_pattern();
	// console.log('手机号验证:'+pattern+'\n');
	// console.log('最小长度验证:'+minlength+'\n最大长度验证'+maxlength);
});

