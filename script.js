let addfrm=document.addfrm;

let text= addfrm.add;

let ul=document.querySelector(".todos");

let addItem=(item)=>{
    let str=`<li>
        <span>${item}</span>
        <i class="fa-solid fa-trash delete"></i>
    </li>`;
    ul.innerHTML+=str;
}
addfrm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let item=text.value;
    if(item.length>0){
        addItem(item);
    }
    text.value="";
})
ul.addEventListener("click",(e)=>{
    // Check whether click item is I tag
    if(e.target.nodeName==="I"){
        // remove parent of I tag i.e entire <li>
            e.target.parentElement.remove();
    }
})
let searchItem=(text)=>{
    let listItems=ul.children;
    for(let li of listItems){
        if(li.innerText.toLowerCase().indexOf(text)===-1){
            li.classList.add("filtered");
        }else{
            li.classList.remove("filtered");
        }
    }
}
let secrchText=document.querySelector(".search input");
secrchText.addEventListener("keyup",(e)=>{
    searchItem(secrchText.value.toLowerCase());
})