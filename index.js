
        

getandupdate =()=>{
    tit=document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemsJson')==null){
        itemsJsonArray =[];
        itemsJsonArray.push([tit,desc]);
        localStorage.setItem( 'itemsJson', JSON.stringify(itemsJsonArray));
    }
    else{
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
        itemsJsonArray.push([tit,desc]);
        localStorage.setItem( 'itemsJson', JSON.stringify(itemsJsonArray));
    }
    update();
}
update = ()=>{
    tit=document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemsJson')==null){
        itemsJsonArray =[];
        localStorage.setItem( 'itemsJson', JSON.stringify(itemsJsonArray));
    }
    else{
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
       
    }
    let tablebody= document.getElementById('table_body');
    let str ="";
    itemsJsonArray.forEach((element,index) => {
    str += 
    `<tr> <th scope="row">${index+1}</th><td>${element[0]}</td><td>${element[1]}</td><td><button class="btn btn-sm btn-primary" onclick="deleted(${index})"> Delete</button></td></tr>`;

    });
    tablebody.innerHTML= str;
}
add = document.getElementById("add");
add.addEventListener("click",getandupdate);
update();
function deleted(index){
    itemsJsonArrayStr = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    itemsJsonArray.splice(index,1);
    localStorage.setItem( 'itemsJson', JSON.stringify(itemsJsonArray));
    update();
}
