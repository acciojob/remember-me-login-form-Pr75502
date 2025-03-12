//your JS code here. If required.
let form=document.querySelector("form")
let name=document.querySelector("#username")
let pass=document.querySelector("#password")
let checkBox=document.querySelector("#checkbox")
let submitBtn=document.querySelector("#submit")
let exitBtn=document.querySelector("#existing")



form.addEventListener("submit",(e)=>{
	e.preventDefault()
	if(name.value!="" && pass.value!=""){
		alert(`Logged in as ${name.value}`)
	}
	if(checkBox.checked){
		localStorage.setItem("name",name.value)
		localStorage.setItem("pass",pass.value)
	}else{
		localStorage.removeItem("name")
		localStorage.removeItem("pass")
	}
	if(localStorage.getItem("name")!=null){
		exitBtn.style.display="inline";
	}
	
})

exitBtn.addEventListener("click",(e)=>{
	e.preventDefault();
	let storedName=localStorage.getItem("name")
	if(storedName){
		alert(`Logged in as ${localStorage.getItem("name")}`)
	}else{
		alert(`no user found`)
	}
})