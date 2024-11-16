const BASE_URL = "https://api.frankfurter.app/latest?amount";
const dropdown = document.querySelectorAll(".dropdown select"); 
const btn =document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr =document.querySelector(".to select");
const msg=document.querySelector(".msg");

window.addEventListener("load",()=>{
   updateExchangeRate();
  
  })
  for(let select of dropdown){
    for(currCode in countryList )
     { 
     let newOption = document.createElement("option");
     newOption.innerText = currCode;
     newOption.value = currCode;
     select.append(newOption);
     if(select.name === "from" && currCode === "USD"){
        newOption.selected="selected";
     }else if(select.name === "to" && currCode === "INR"){
        newOption.selected="selected";
      }
 }
    select.addEventListener("change",(evt) =>{
        updateFlag(evt.target);
 });
   const updateFlag = (element)=> {
   let currCode =element.value;
   let countryCode =countryList[currCode];
   let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
   let img =element.parentElement.querySelector("img");
   img.src=newSrc;

   }
   btn.addEventListener("click",(evt)=>{
      evt.preventDefault();
      updateExchangeRate();
      
   });    
     
   }
   const updateExchangeRate = async ()=>{
      const amount = document.querySelector(".amount input");
      let amtVal = amount.value;
      if( amtVal === "" || amtVal <1);
      {
         amtVal =1;
         amount.value="1";
      }
   
      let url=`${BASE_URL}=${amtVal}&from=${fromCurr.value}&to=${toCurr.value}`;
      let response = await fetch(url);
      let data = await response.json();
      msg.innerText= `${amtVal} ${fromCurr.value} = ${data.rates[toCurr.value]} ${toCurr.value}`;
   }
    
  
