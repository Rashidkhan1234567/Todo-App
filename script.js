const input = document.getElementById("text");
const ul = document.getElementById("list");
const btn = document.getElementById("add");

const time = new Date();
btn.addEventListener("click", function () {
  const min  = time.getMinutes()
  let date_and_time ;
  if(time.getHours() < 12){
    if(min < 10){
      date_and_time = `${time.getHours()} : 0${time.getMinutes()} PM`
    }else{
      date_and_time = `${time.getHours()} : ${time.getMinutes()} PM`
    }
    
  }else{
    if(min < 10){
      date_and_time = `${time.getHours()} : 0${time.getMinutes()} AM`
  
    }else{
      date_and_time = `${time.getHours()} : ${time.getMinutes()} AM`
    }    
  }
  ul.innerHTML += `<li id="li"><p id="change">${input.value}<span id ="time_date">${date_and_time}</span></p><button id="edit" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button><button type="button" title="Delete" id="Delete" ><i class="fa-regular fa-circle-xmark"></i></button></li>`;
  let edit0 = document.getElementById("edit")
  edit0.addEventListener("click",()=>{
    let edit = prompt("Enter to your task")
    if(edit){
    let p = document.getElementById("change");
    p.innerHTML =`${edit}<span id ="time_date">${date_and_time}</span>`
    }
  })

  document.getElementById("Delete").addEventListener("click" , (e)=>{
    ul.removeChild(e.target.parentElement.parentElement )
  })
  // console.dir(ul);
  


});

