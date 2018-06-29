$(function(){
	$('.yuyue').on('click',function(){
		$('.module').show();
		$('.user').show();
	});
	$('.user img').on('click',function(){
		$('.module').hide();
		$('.user').hide();
	});
	$('#describe').on('keyup',function(){
		if($('#describe').val().length > 512){
			$('#describe').val($('#describe').val().substr(1,512));
		}
	});
	$('#describe').on('blur',function(){
		if($('#describe').val() == ''){
			$('#describe').val('病情描述');
		}
	});
	$('#describe').on('keyup',function(){
		checkMsg();
	});
	$('#describe').on('focus',function(){
		if($('#describe').val() == '病情描述'){
			$('#describe').val('');
		}
	});
	$('#userName').on('keyup',function(){
		checkMsg();
	});
	$('#mobile').on('keyup',function(){
		checkMsg();
	});
	$('.user .button').on('click',function(){
		if(checkMsg()){
			//输入内容校验
			var username = $('#userName').val();
			var mobile = $('#mobile').val();
			var describe = $('#describe').val();
			
			var jsonData = {name:username,mobile:mobile,diseaseDesc:describe};
			$.ajax({
				contentType: "application/json;charset=utf-8",
				type:"post",
				url:"/twins-health-ws/ws/0.1/health/book",
				dataType: 'json',
				data: $.toJSON(jsonData),
				success: function(data){
					$('.module').hide();
					$('.user').hide();
					$('#userName').val('');
					$('#mobile').val('');
					$('#describe').val('病情描述');
					$('.tip').show();
					setTimeout(function(){$('.tip').hide();},2000);//两秒后提示信息消失
				}
			});
		}
	});
})
/*校验输入内容*/
function checkMsg(){
	var username = $('#userName').val();
	var mobile = $('#mobile').val();
	var describe = $('#describe').val();
	var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[6-8]|8[0-9]|70)\d{8}$/;
	if(username != '' && mobile != '' && mobileReg.test(mobile) && describe != '' && describe != '病情描述'){
		$('.user .button').css('background-color','#ed7ba0');
		return true;
	}else{
		$('.user .button').css('background-color','#747b85');
		return false;
	}
}
