function bingBong(){
  let input=document.getElementById('input').value;

let x=0
let myList=new Array;
let output=" ";
while(x<input)
{
  if(x%3==0)
  {
    if(x%5==0)
    {
      myList.push("Bing Bong");
    }else {
      myList.push("Bing");
    }
  }else if(x%5==0){
      console.log("Bong");
  }else{myList.push(x);}

 x++;
}
for(let i=0;i<myList.length;i++)
{
    output=output+" "+ myList[i];

}
document.getElementById('output').value=output;
}
