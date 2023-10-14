

const inputs = document.querySelectorAll("input:not([type=submit])")
inputs.forEach((input)=>{
    input.addEventListener("invalid", addErrorMessage)

    input.addEventListener("blur", (event)=>{
        input.checkValidity()
    })
    input.addEventListener("focus", addRemoveMessage)
})


function addErrorMessage(e){
   let name = e.target.getAttribute("name");
   const error_icon = document.createElement("span");
   error_icon.setAttribute("error-data", name)
   error_icon.classList.add("error-icon");
   error_icon.innerHTML = "<img src='./images/icon-error.svg' alt='error-icon'>";


   const error_message = document.createElement("span");
    error_message.setAttribute("error-data", name)
    error_message.classList.add("error-message")
    
    if(e.target.value == "" || e.target.value == null){
        error_message.innerHTML = "" + e.target.getAttribute("placeholder")+ " " + "cannot be blank";
    }else{
        error_message.innerHTML = "" + "not like this" + e.target.getAttribute("placeholder")
    }

    e.target.after(error_message);
    e.target.after(error_icon)
    e.target.classList.add("error");

}




function addRemoveMessage(e){
    const error_elements = document.querySelectorAll("[error-data='"+e.target.getAttribute("name")+"']")

    error_elements.forEach((element)=>{
        element.remove()
    })

    e.target.classList.remove("error")
}


