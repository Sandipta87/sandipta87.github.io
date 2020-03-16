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
    console.log(sourceVal+" - "+sourceCnt+" - "+targetCnt);
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
        alert('Congress, Game Over!');
    }
} 

var numArry =[];
function setGame(){
    
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