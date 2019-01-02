function call()
{
	pa1=document.getElementById('pa1');
	cpa1=document.getElementById('cpa1');
	result=document.getElementById('result');
	
	if(pa1.value==cpa1.value)
	{
		result.innerHTML="password matched";
	}
	else{
		result.innerHTML="password not matched";
	}
	
	
}