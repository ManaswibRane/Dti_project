let frm=document.getElementById("frm")
frm.addEventListener("submit",(e)=>{
    e.preventDefault();
})
function isValid(){
   let valid = true;
    let ip1=document.getElementById("ip1");
    let err1=document.getElementById("errorq1");
    if(ip1.value!="Mars"){
        err1.innerText="Incorrect Answer";
        valid=false;
    }
    let check1=document.getElementById("check1")
    let check2=document.getElementById("check2")
    let check3=document.getElementById("check3")
    let check4=document.getElementById("check4")
    let err2=document.getElementById("errorq2");
   if(!check1.checked || check2.checked || !check3.checked || check4.checked){
    err2.innerText="Not all correct";
   
    valid=false;
   }
   let ip3=document.getElementById("ip3");
   let err3=document.getElementById("errorq3");
   if(ip3.value!="8"){

    valid=false;
    err3.innerText="Incorrect Answer";
      
   } 
   let selec=document.getElementById("selec");
   let err4=document.getElementById("errorq4");
   if(selec.value.trim()!="Saturn"){
    err4.innerText="Incorrect Answer";
    valid=false;
      
   } 
let txtbox=document.getElementById("txt")
let err5=document.getElementById("errorq5");
if(txtbox.value=="" || txtbox.value==null){
     err5.innerText="Enter your Experiences";

    valid=false;
}
   if(valid){
    alert("You won!!")
   }
   return valid;
}