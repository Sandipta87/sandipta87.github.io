var options =
{
    1:[2,5],
    2:[1,3,6],
    3:[2,4,7],
    4:[3,8],
    5:[1,6,9],
    6:[2,5,7,10],
    7:[3,6,8,11],
    8:[4,7,12],
    9:[5,10,13],
    10:[6,9,11,14],
    11:[7,10,12,15],
    12:[8,11,16],
    13:[9,14],
    14:[10,13,15],
    15:[11,14,16],
    16:[12,15]
}
var intMove = 0;
$( document ).ready(function() {
    setGame();
    //bindClickEvent();
});

function bindClickEvent(cnt)
{
    var cntVal = $(cnt).html();
        var cntId = '#'+$(cnt).attr('Id');
        if(cntVal !='' && cntVal != "&nbsp;")
        {
            var cntIdNum = cntId.replace("#divG", "");
            var moveOptions = options[cntIdNum];
            if(moveOptions)
            {
                for(var iCounter=0;iCounter<moveOptions.length;iCounter++)
                {
                    var moveOption = moveOptions[iCounter];
                    var targetOptionVal = $('#divG'+moveOption).html();
                    var targetOptionId = '#divG'+moveOption;
                    if(moveOption != '' && targetOptionVal.trim() == "&nbsp;")
                    {
                        moveTheBlock(cntVal,cntId,targetOptionId);
                        
                    }
                }
            }
        }
    
    
}

function moveTheBlock(sourceVal,sourceCnt,targetCnt)
{
    intMove = intMove+1;
    var strMsghtml = "<div id='divSucessMsg' class='divSucessMsg'>No. of moves taken so far: <span class='spTimeMsg'>"+intMove+"</span>!</div>";
    $("#divGameStatusMsg").html(strMsghtml);

    $(sourceCnt).html("&nbsp;");
    $(sourceCnt).addClass("divGChildEmpty");
    $(sourceCnt).removeClass("divGChild");
    
    $(targetCnt).html(sourceVal);
    $(targetCnt).addClass("divGChild");
    $(targetCnt).removeClass("divGChildEmpty");
    checkGameStatus();
}

function checkGameStatus()
{
    var checkStatus = true;
    for(var iCounter=1;iCounter<16;iCounter++)
    {
        var optionVal = $('#divG'+iCounter).html();
        if(optionVal != iCounter)
            checkStatus = false;
    }

    if(checkStatus)
    {
        var strMsghtml="";
        spTimeMsg = intMove;
        strMsghtml = "<div id='divSucessMsg' class='divSucessMsg'>Congratulations, it took <span class='spTimeMsg'>"+intMove+"</span> Moves!</div>";
        $("#divGameStatusMsg").html(strMsghtml);
    }
} 

var numArry =[];
function setGame(){
    
    
    createBoard();
    
    for(var iCounter=0;iCounter<15;iCounter++)
    {
        getRandNums();
    }

    for(var iCounter=1;iCounter<16;iCounter++)
    {
		if(numArry[iCounter-1] < 10)
			$("#divG"+iCounter).html('0'+numArry[iCounter-1]);
		else
			$("#divG"+iCounter).html(numArry[iCounter-1]);
    }
    
}

function getRandNums()
{
    var randNum = Math.floor((Math.random() * 15) + 1);
    if(numArry.indexOf(randNum)<0)
    {
        numArry.push(randNum);
    }
    else{
        getRandNums();
    }
}
function createBoard()
{
    var strHtml = '<div id="divGR1" class="divGRow">';
    strHtml +='<div id="divG1" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG2" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG3" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG4" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='</div>';
    strHtml +='<div id="divGR2" class="divGRow">';
    strHtml +='<div id="divG5" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG6" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG7" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG8" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='</div>';
    strHtml +='<div id="divGR3" class="divGRow">';
    strHtml +='<div id="divG9" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG10" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG11" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG12" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='</div>';
    strHtml +='<div id="divGR4" class="divGRow">';
    strHtml +='<div id="divG13" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG14" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG15" class="divGChild" onclick="bindClickEvent(this);"></div>';
    strHtml +='<div id="divG16" class="divGChildEmpty" onclick="bindClickEvent(this);">&nbsp;</div>';
    strHtml +='</div>';
    intMove = 0;
    $("#divGameStatusMsg").html("");
    numArry =[];
    $('#divGameBoard').html(strHtml);
}
