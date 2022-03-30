const elForm=document.querySelector(".form");
const elInput= document.querySelector(".form__input");
const elLIst= document.querySelector(".list");
const elError=document.querySelector("#error");
const all=[];
const complated=[];
const unComplated=[];

function addMore(){
    elError.innerHTML="";
    let elInputValue= elInput.value.trim();
    if(elInputValue==""){
        elError.textContent= "Iltimos malumot kiriting "
    }
    else{
        let newItem=document.createElement("li");
        let newCheckbox= document.createElement("input");

        newItem.textContent=elInputValue;
        newCheckbox.type="checkbox";
        newCheckbox.classList.add("checkbox");

        newItem.appendChild(newCheckbox);

        all.push(newItem);
        const allResult= document.querySelector("#allResult");
        allResult.textContent=all.length;

        unComplated.push(newItem);
        const unComplatedResult= document.querySelector("#unComplatedResult");
        unComplatedResult.textContent=unComplated.length;
        

        elLIst.appendChild(newItem);
        

    }

    elInput.value="";
}

let btn= document.querySelector("ul");

btn.addEventListener("click", function(evt){
    let  box= document.querySelector(".list");
    let  li=evt.target.parentNode;
    box.removeChild(li);

    complated.push(li);
    const complatedResult= document.querySelector("#complatedResult");
    complatedResult.textContent=complated.length;

    let checkedList=document.querySelector(".checked-list");
    checkedList.appendChild(li);
    checkedList.classList.add("checked-list");
    
})
