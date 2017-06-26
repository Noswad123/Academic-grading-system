function generateA(){
	let inputGrades=document.getElementById("myText").value;
	let myGrades=new Array();
	let start=0;
	for(var i=0;i<inputGrades.length+1;i++)
	{

		if (inputGrades[i]!=" "){
			if(i!=0){

					if(!isNaN(inputGrades[i])){

							if(!isNaN(inputGrades[i-1])){


					}else
					{
							start=i;
					}
				}
			}
		}else{
			start++;}
			if (inputGrades[i]==","){

	    		myGrades.push(inputGrades.slice(start,i));
					start=i+1;
				}
				if (i==inputGrades.length)
				{
					myGrades.push(inputGrades.slice(start,i));
				}
	}
	return myGrades;

}
function getGrade(){
	let test=true;
	let tally=0;

	let myGrades=generateA();

for(let i=0;i<myGrades.length;i++)
{
	if (isNaN(myGrades[i])&&parseInt(myGrades[i])<=100){
		test=false;
	}
}
if (test)
{
	for(let i=0;i<myGrades.length;i++)
	{
		tally=tally +parseInt(myGrades[i]);

		console.log(tally);
		console.log(tally/myGrades.length);

	}
	document.getElementById("final").value='Your Grade: '+ letterGrade(tally/myGrades.length);

}else{

  document.getElementById("final").value="one of your grades is not a number please try again";
}
}
function singleGrade()
{
	let myGrades=generateA();
	let single=new Array();
	let allGrades=" ";
	console.log(myGrades.length);
	for(let i=0;i<myGrades.length;i++)
	{
		console.log(i);
		single.push(letterGrade(myGrades[i]));
		allGrades=allGrades + myGrades[i]+ " = "+single[i]+ ", ";
	}
	document.getElementById('single').value=allGrades;

}
function letterGrade(a)
{
	var Letter;
	console.log(a);
	if (a>89)
  {
  Letter="A";}else if(a>79){
  Letter="B";}else if(a>69){
		Letter="C";}else if(a>59){
  Letter="D";}else {
  Letter="F";}


	return Letter;
}
