function alertMe()
{
    alert("Hello world");
}

function domAddElement()
{
    //One method to insert
    //var table = $("#domTable");
    //var root =  table.find("tbody")[0];//the TBODY
    //var clone = $("table tbody tr")[0].cloneNode(true);
    //root.appendChild(clone);//append the clone

    //The best method to inserts
    $("#domTableBody").append("<tr><td>Table Element</td><td class='domButtons'><input type='image' src='images/remove.png'onclick='alertMe()' /><input type='image' src='images/add.png' onclick='domAddElement(this)' /></td></tr>");
}

function startAdding(){
    var newElements = $("#addToTable").val();
    var start = Date.now()
    
    while(newElements--){
        domAddElement();
    }

    $("#timeLabel").text("Took: " + (Date.now()-start));
}

function resetDomTable(){
    var tbody = $("#domTableBody");
    tbody.html("");
    $("#domTableBody").append("<tr><td>Table Element</td><td class='domButtons'><input type='image' src='images/remove.png'onclick='alertMe()' /><input type='image' src='images/add.png' onclick='domAddElement(this)' /></td></tr>");
}
