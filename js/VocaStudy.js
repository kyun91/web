var freword = [

["jeopardize","위태롭게하다"],
["assail","~를 습격하다"],
["align","나란히 만들다"],
["aristocracy","귀족 (계층)"],
        ["profession","직업[직종]"],
["bistro","작은식당"],
["inferiority","열등함"],
["dissembling","꾸미는,가장하는"],
["contempt","경멸하는"],
["shrillness","날카로움"],
["jeopardize","위태롭게하다"],
["assail","~를 습격하다"],
["align","나란히 만들다"],
["aristocracy","귀족 (계층)"],
        ["profession","직업[직종]"],
["bistro","작은식당"],
["inferiority","열등함"],
["dissembling","꾸미는,가장하는"],
["contempt","경멸하는"],
["shrillness","날카로움"],
["jeopardize","위태롭게하다"],
["assail","~를 습격하다"],
["align","나란히 만들다"],
["aristocracy","귀족 (계층)"],
        ["profession","직업[직종]"],
["bistro","작은식당"],
["inferiority","열등함"],
["dissembling","꾸미는,가장하는"],
["contempt","경멸하는"],
["shrillness","날카로움"]

];










$(document).ready(function(){
    init();
    initEvent();
});



var $SelectTitle = null;
var $unSelected = null;
var $exam1 = null;
var $exam2 = null;
var $FirstA = null;
var $SecondA = null;
var $LinkA = null;
var $formDis = null;
function init() {
    // $SelectTitle = $(".SelectTitle");
    // $unSelected = $(".unSelected");
    $FirstA = $("#exam1 li a");
    $SecondA = $("#exam2 li a");
    $exam1 = $(".exam1");
    $exam2 = $(".exam2");
    $LinkA = $(".ulTitle a");
    $formDis = $("form");


}

function initEvent() {
  //$LinkA = $(".ulTitle a");
    $LinkA.click(function(){
        $LinkA.removeClass();
        $formDis.removeClass();
        $formDis.addClass("unSelectedCont");
        $LinkA.addClass("unSelected");
        $(this).siblings().removeClass("unSelectedCont");
        $(this).addClass("SelectTitle");
    });
}
