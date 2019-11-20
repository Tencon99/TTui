$(function () {
	'use strict';
	
	// 构造函数
	window.Input = function (selector) {
		var $ele
		,	$error_ele
		,	me = this
		,	rule = 
		{
		required:true//默认每项为必填项
		};
		
		this.load_validator = function () {
			var val = this.get_val();
			this.validator = new Validator(val,rule);
		}
		
		this.get_val = function () {
			return $ele.val();
		}
		
		function init() {
			find_ele();
			get_error_ele();
			parse_rule();
			me.load_validator();
			listen();
		}
		
		function listen () 
			$ele.on('blur',function () {/*出错 */
				// 打印出错    at HTMLInputElement.<anonymous> (input.js:33)
				var valid = me.validator.is_valid(me.get_val());
				if(valid) {
					$error_ele.hide();
				} else {
					$error_ele.show();
				}
			})
		}
		
		function get_error_ele () {
			$error_ele = $(get_error_selector());
		}
		
		function get_error_selector () {
			return '#' + $ele.attr('name') + '-input-error';
		}
		
		function find_ele () {
			if(selector instanceof jQuery) {
				$ele = selector;
			} else {
				$ele = $(selector);
			}
		}
		
		// 解析规则rule
		function parse_rule () {
			var i;
			var rule_str = $ele.data('rule');
			if(!rule_str) return;
			
			var rule_arr = rule_str.split('|');		// ['min:18' ,'maxlength:10',...]
			for(i = 0;i < rule_arr.length;i++) {
				var item_str = rule_arr[i];  		// 'min:18' 
				var item_arr = item_str.split(':');	// ['min','18'] 
				// JOSN.parse()能打印出带有双引号的字符串，识别传输字符串
				rule[item_arr[0]] = JSON.parse(item_arr[1]);// rule['min'] = ['18'] →打印出来为{min:18}
			}
			/* [
			 	'min:18',
			 	'maxlength:10',
			 	...
				]
			* */
		}
		
		init();
	};
});