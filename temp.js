let button=document.getElementById("search");
button.addEventListener("click",()=>{
	let TR=parseInt(document.getElementById("rank").value);
	console.log(TR);
	if(TR<=1000){
		document.getElementById("list").innerHTML ="mlr cmr";
	}
	else if(TR<=5000){
		document.getElementById("list").innerHTML ="iare mlrs";
	}
	else if(TR>=5000)
	{
		document.getElementById("list").innerHTML ="mgit bvrit";
	}
})