const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const counter = document.getElementById("count");

let countStore = 0;

plusBtn.addEventListener("click", () => {
  countStore += 1;
  counter.innerText = countStore;
  if(countStore >= 10){
    plusBtn.setAttribute("disabled" ,true);
   
  }else{
    plusBtn.removeAttribute("disabled" ,false);
  }

  if(countStore <= 0){
    minusBtn.setAttribute("disabled" ,true);
  }else{
    minusBtn.removeAttribute("disabled", false)
  }
});


minusBtn.addEventListener("click", () => {
  countStore -= 1;
  counter.innerText = countStore;
  if(countStore <= 0){
    minusBtn.setAttribute("disabled" ,true);
  }else{
    minusBtn.removeAttribute("disabled", false)
  }


  if(countStore >= 10){
    plusBtn.setAttribute("disabled" ,true);
   
  }else{
    plusBtn.removeAttribute("disabled" ,false);
  }
});
