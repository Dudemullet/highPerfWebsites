function addElementToTimerTable()
{
    $("#tbodyWithTimer").append("<tr><td>Table Element</td><td class='domButtons'><input type='image' src='images/remove.png'onclick='alertMe()' /><input type='image' src='images/add.png' onclick='addElementToTimerTable()' /></td></tr>");
}

function addToTimerTable(){
    var newElements = parseInt($("#rowsToAdd").val(),10);

    procesAsync(newElements,addElementToTimerTable);
}

//Call a function 'x' times
function procesAsync(items,process,callback){
    setTimeout(function(){
        process();
        items-=1;
        if (items > 0){ 
            setTimeout(arguments.callee, 25);
        } 
        else {
            if(callback){
                callback();
            }
        }
    }, 25);
}

function resetTimerTable(){
    var tbody = $("#tbodyWithTimer");
    tbody.html("");
    $("#tbodyWithTimer").append("<tr><td>Table Element</td><td class='domButtons'><input type='image' src='images/remove.png'onclick='alertMe()' /><input type='image' src='images/add.png' onclick='addElementToTimerTable()' /></td></tr>");
}