var $userLogin = null;
$(document).ready(function(){
		init();

});

function init(){
	$userLogin = $(".userLogin");
	$userLogin.click(function(){
			alert("로그인 정보가 옳바르지 않습니다. Guest로 접속합니다.");
			window.open("Main.html","_parent");
	});
}



//
// function createAccount(){
//            window.open("createAccount1.html","_parent");
//
// }
//
// function findInfo(){
//              window.open("findInfo.html","_parent");
// }
