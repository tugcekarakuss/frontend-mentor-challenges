const form=document.querySelector(".form")
const card = document.querySelector(".card")
const success = document.querySelector(".success")
const emailInput = document.querySelector("#email")
const userEmail=document.querySelector("#user-email")
const submitBtn = document.querySelector(".btn")
const dismissBtn=document.querySelector("#dismiss-btn")
const regex = (
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(emailInput.value.match(regex)){
        console.log("email geçerli")
        card.classList.add("hidden")
        success.classList.remove("hidden")
        userEmail.textContent=emailInput.value

        dismissBtn.addEventListener("click",()=>{
        card.classList.remove("hidden")
        success.classList.add("hidden")
        emailInput.value=""
        })
    }

})