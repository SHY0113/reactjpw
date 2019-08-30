//封装：将一个功能写到一个函数中

//存 cookie document.cookie = "键=值"	时间
function setCookie(name,val,day){
	var d = new Date ();
	d.setDate(d.getDate() + day);
	document.cookie = name + "=" + val + ";expires=" + d;
	//document.cookie = `${name}=${value};expries=${d}`;
}

//取cookie
function getCookie(name){
	var str = document.cookie;
	if(str){
		var arr = str.split("; ");
		for(var i = 0 ;i<arr.length;i++){
			var item = arr[i].split("=");
			if(item[0] === name){
				return item[1];
			}
		}
		//如果有cookie，但cookie中没有key 返回""
		return "";
	}
	//如果没有cookie  返回""
	return "";
}


//删除cookie 设置cookie的时候给个过期的时间
function removeCookie (name){
	setCookie(name,"",-1);
}
export {
	setCookie,
	getCookie,
	removeCookie
}