var myFragment =  document.createDocumentFragment();

function addChunk()
{
    var newElement = $("<tr><td>Table Element</td><td class='domButtons'><input type='image' src='images/remove.png'onclick='alertMe()' /><input type='image' src='images/add.png' onclick='addChunk()' /></td></tr>")[0];
    myFragment.appendChild(newElement);
}

function addToChunkTable(){
    var newElements = parseInt($("#chunksToAdd").val(),10);

    procesAsync(newElements,addChunk, function(){
        document.getElementById("chunksTbody").appendChild(myFragment);
    });
}

function resetChunkTable(){
    var tbody = $("#chunksTbody");
    tbody.html("");
    tbody.append("<tr><td>Table Element</td><td class='domButtons'><input type='image' src='images/remove.png'onclick='alertMe()' /><input type='image' src='images/add.png' onclick='addChunk()' /></td></tr>");
}