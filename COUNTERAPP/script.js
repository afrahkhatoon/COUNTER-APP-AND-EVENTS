const dec=document.getElementsByClassName("dec")[0];
const inc=document.getElementsByClassName("inc")[0];
const reset=document.getElementsByClassName("reset")[0];
const value=document.getElementsByClassName("value")[0];

dec.addEventListener("click", () => {
    const count = Number(value.innerText);
    value.innerText = (count - 1)
  });
inc.addEventListener("click",()=>{
    const count=Number(value.innerText);
    value.innerText= count + 1
;})
  
reset.addEventListener("click",()=>{
    const count=Number(value.innerText);
    value.innerText= 0
})