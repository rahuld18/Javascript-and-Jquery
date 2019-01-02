function call()
{
	cars=document.getElementById('cars');
	carname=document.getElementById('carname');
	carprize=document.getElementById('carprize');
	
	carname.innerHTML=cars.value;
	switch(cars.selectedIndex)
	{
		case 1:
		carprize.innerHTML="700000/- only";
		
		case 2:
		carprize.innerHTML="800000/- only";
		case 3:
		carprize.innerHTML="1100000/- only";
	}
	
	
}