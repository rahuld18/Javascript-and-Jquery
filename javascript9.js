/*function fillcity(arrcity,dd)
{
	for(i=0;i<=arrcity.length;i++)
	{
	opt=document.createElement("option");
		opt.text=mpcity[i];
			opt.value=mpcity[i];
		dd.add(opt);
	}
}


function call()
{
	state=document.getElementByIndex('state');

	city=document.getElementByIndex('city');
	switch(state.selectedIndex)
	{
		case 1:
		mpcity=['-city-','Gwalior','Bina','Bhopal'];
		fillcity(mpcity,city);
		break;
		case 2:
		
		
	}
	
}
*/
function hi()
{
	
	fee.innerHTML="fees=8000";
}
function fillCity(arrcity,dd)
{ for(i=0;i<arrcity.length;i++)
	   {opt=document.createElement("option");
	    opt.text=arrcity[i];
	    opt.value=arrcity[i];
	    dd.add(opt);
		   }}
function removeCity(dd)
{ for(i=dd.options.length-1;i>=0;i--)
   {dd.remove(i);}
	}

function call()
{ state=document.getElementById('state');
  city=document.getElementById('city');
  
  fee=document.getElementById('fee');
  removeCity(city); 
   switch(state.selectedIndex)
   { case 1:
  mpcity=['-City-','Gwalior','Indore','Bhopal'];
  fillCity(mpcity,city);
  city.o
  switch(city.selectedIndex)
  {
	  case 1:
	  hi();
	  break;
	  
	  case 2:
	   x=2;
	   fee.innerHTML="Fees=6000";
	  break;
	  case 3:
	 x=3;
	 fee.innerHTML="Fees=6000";
	  break;
	  
  }
      break;
     case 2:
     gujcity=['-City-','Gandhi Nagar','Surat','Vadodra'];
      fillCity(gujcity,city);
      break;
	 case 3:
	   harcity=['-City-','Rohtak','Karnal','Gurugram'];
	       fillCity(harcity,city);
	       break;
default:
fee.innerHTML="Fees=6000";
break;

	 }
	 
	

	}




