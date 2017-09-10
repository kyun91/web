var wordArry = [
                		  ["aristocracy","|ӕrɪ|stɑ:krəsi","귀족 (계층)"],
                		  ["profession","prə|feʃn","직업[직종]"],
						  ["bistro","|bi:stroʊ","작은식당"],
						  ["inferiority","ɪn|fɪri|ɔ:rəti;-|ɑ:r-","열등함"],
						  ["dissembling","dɪ|sembl","꾸미는,가장하는"],
						  ["contempt","kən|tempt","경멸하는"],
						  ["shrillness","ʃrɪl","날카로움"],
						  ["jeopardize","|dƷepərdaɪz","위태롭게하다"],
						  ["assail","asil","~를 습격하다"],
						  ["align","ə|laɪn","나란히 만들다"],
						  ["aristocracy","|ӕrɪ|stɑ:krəsi","귀족 (계층)"],
                		  ["profession","prə|feʃn","직업[직종]"],
						  ["bistro","|bi:stroʊ","작은식당"],
						  ["inferiority","ɪn|fɪri|ɔ:rəti;-|ɑ:r-","열등함"],
						  ["dissembling","dɪ|sembl","꾸미는,가장하는"],
						  ["contempt","kən|tempt","경멸하는"],
						  ["shrillness","ʃrɪl","날카로움"],
						  ["jeopardize","|dƷepərdaɪz","위태롭게하다"],
						  ["assail","asil","~를 습격하다"],
						  ["align","ə|laɪn","나란히 만들다"],
						  ["aristocracy","|ӕrɪ|stɑ:krəsi","귀족 (계층)"],
                		  ["profession","prə|feʃn","직업[직종]"],
						  ["bistro","|bi:stroʊ","작은식당"],
						  ["inferiority","ɪn|fɪri|ɔ:rəti;-|ɑ:r-","열등함"],
						  ["dissembling","dɪ|sembl","꾸미는,가장하는"],
						  ["contempt","kən|tempt","경멸하는"],
						  ["shrillness","ʃrɪl","날카로움"],
						  ["jeopardize","|dƷepərdaɪz","위태롭게하다"],
						  ["assail","asil","~를 습격하다"],
						  ["align","ə|laɪn","나란히 만들다"],
						  ["aristocracy","|ӕrɪ|stɑ:krəsi","귀족 (계층)"],
                		  ["profession","prə|feʃn","직업[직종]"],
						  ["bistro","|bi:stroʊ","작은식당"],
						  ["inferiority","ɪn|fɪri|ɔ:rəti;-|ɑ:r-","열등함"],
						  ["dissembling","dɪ|sembl","꾸미는,가장하는"],
						  ["contempt","kən|tempt","경멸하는"],
						  ["shrillness","ʃrɪl","날카로움"],
						  ["jeopardize","|dƷepərdaɪz","위태롭게하다"],
						  ["assail","asil","~를 습격하다"],
						  ["align","ə|laɪn","나란히 만들다"],
						  ["aristocracy","|ӕrɪ|stɑ:krəsi","귀족 (계층)"],
                		  ["profession","prə|feʃn","직업[직종]"],
						  ["bistro","|bi:stroʊ","작은식당"],
						  ["inferiority","ɪn|fɪri|ɔ:rəti;-|ɑ:r-","열등함"],
						  ["dissembling","dɪ|sembl","꾸미는,가장하는"],
						  ["contempt","kən|tempt","경멸하는"],
						  ["shrillness","ʃrɪl","날카로움"],
						  ["jeopardize","|dƷepərdaɪz","위태롭게하다"],
						  ["assail","asil","~를 습격하다"],
						  ["align","ə|laɪn","나란히 만들다"],
						  ["aristocracy","|ӕrɪ|stɑ:krəsi","귀족 (계층)"],
                		  ["profession","prə|feʃn","직업[직종]"],
						  ["bistro","|bi:stroʊ","작은식당"],
						  ["inferiority","ɪn|fɪri|ɔ:rəti;-|ɑ:r-","열등함"],
						  ["dissembling","dɪ|sembl","꾸미는,가장하는"],
						  ["contempt","kən|tempt","경멸하는"],
						  ["shrillness","ʃrɪl","날카로움"],
						  ["jeopardize","|dƷepərdaɪz","위태롭게하다"],
						  ["assail","asil","~를 습격하다"],
						  ["align","ə|laɪn","나란히 만들다"],
						  ["aristocracy","|ӕrɪ|stɑ:krəsi","귀족 (계층)"],
                		  ["profession","prə|feʃn","직업[직종]"],
						  ["bistro","|bi:stroʊ","작은식당"],
						  ["inferiority","ɪn|fɪri|ɔ:rəti;-|ɑ:r-","열등함"],
						  ["dissembling","dɪ|sembl","꾸미는,가장하는"],
						  ["contempt","kən|tempt","경멸하는"],
						  ["shrillness","ʃrɪl","날카로움"],
						  ["jeopardize","|dƷepərdaɪz","위태롭게하다"],
						  ["assail","asil","~를 습격하다"],
						  ["align","ə|laɪn","나란히 만들다"]
];

//////////////////////////////// ** [Paging]** 초기변수 /////////////////////////////
var totalRecord = 325; //전체 레코드 수
var nowPage=0; //현재 페이지 넘버
var nowBlock=0; //현재 블록 넘버
var pagePerBlock =10; //블록 당 페이지 수
var recPerPage=10; //페이지 당 레코드 수
var recOfBeginPage=0; //시작할 페이지의 레코드 넘버 <<이걸 이용하여, vocaList() 시작 단어 넘버 배치
var pageOfBeginBlock=0; //시작할 블록의 페이지 넘버 <<이걸 이용하여, pagingNum() 시작 블록 넘버 배치

var totalPage = parseInt(Math.ceil(totalRecord/recPerPage));
var totalBlock = parseInt(Math.ceil(totalPage/pagePerBlock));

//////////////////////////////////////// *[HTML 변수]* /////////////////////////
var $currentInfo = null;
var $wordWrapper = null;
var wordSpace = ['number','word','pronunciation','meaning'];
var $number = null;
var $word = null;
var $pronunciation = null;
var $meaning = null;
$(document).ready(function(){
  init();
  initEvent();
});

function init(){
    $currentInfo = $("#secondIn .titleInput");
    $currentInfo.eq(0).val(totalRecord);
    $currentInfo.eq(1).val(nowPage);
    $currentInfo.eq(2).val(nowBlock);

    $wordWrapper = $("#wordWrapper");
    for(var i=0; i<pagePerBlock; i++){
        $wordWrapper.append("<input>");
        $wordWrapper.append("<input>");
        $wordWrapper.append("<input>");
        $wordWrapper.append("<input>");
    }
    var count = 0;
    var $inputList = $("#wordWrapper input");

    for(var i=0; i<pagePerBlock*4; i++){
      if(count>3){
        count=0;
      }
      $inputList.eq(i).addClass(wordSpace[count]);
      count++;
    }

    $number = $("#wordWrapper .number");
    $word = $("#wordWrapper .word");
    $pronunciation = $("#wordWrapper .pronunciation");
    $meaning = $("#wordWrapper .meaning");

    var numCount = 0;
    for(var i=0; i<pagePerBlock; i++){
        $number.eq(numCount).val(numCount+1);
        $word.eq(numCount).val(wordArry[i][0]);
        $pronunciation.eq(numCount).val(wordArry[i][1]);
        $meaning.eq(numCount).val(wordArry[i][2]);

        numCount++;
    }


}

function initEvent(){


}
