$(function(){
	'use strict';
	
	// rule = {
	// 	max: 100,
	// 	min: 18,
	// 	maxlength: 10,
	// 	numeric: flase,
	// }
	//构造函数↓（构造器）
	window.Validator = function (val,rule) {
		/*
			{
				max:10.
				min:2
			}
		*/
		this.is_valid = function (new_val) {
			var key;
			val = new_val || val;
			
			if(!rule.required && !val)
			return true;
			
			for(key in rule) {
				// 防止重复检查
				if(key === 'required')
				continue;
				
				// 调用rule中相对应的方法
				var rule = this['validate_' + key]();
				//e.g. this.validate_max (max==key 动态获取值)
				if(!rule) return false;
			}
		}
		
		this.validate_max = function() {
			pre_max_min();
			return val <= rule.max;
		}
		
		this.validate_min = function() {
			pre_max_min();
			return val >= rule.min;
		}
		
		this.validate_maxlength = function() {
			pre_length();
			return val.length <= rule.maxlength;
		}
		
		this.validate_minlength = function() {
			pre_length();
			return val.length >= rule.minlength;
		}
		
		// 判断是否为数字
		this.validate_numeric = function() {
			return $.isNumeric(val);
		}
		
		// 是否为必填项
		this.validate_required = function() {
			var real = $.trim(val);
			if(!real && real !== 0) {
				return false;
			}
			return true;
		}
		
		this.validate_pattern = function() {
			var reg = new RegExp(rule.pattern);
			return reg.test(val);
		}
		
		/* 用于完成this.validate_max 或 
			this.validate_min的前置工作
		* */
		var pre_max_min = function() {
			val = parseFloat(val);
		}
		
		/* 用于完成this.validate_maxlength 或
			this.validate_minlength的前置工作
		* */
		var pre_length = function() {
			val = val.toString();
		}
	}
});