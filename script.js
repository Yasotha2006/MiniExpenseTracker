let expenses=[];

const form=document.getElementById("expenseform");
const list=document.getElementById("list");
const total=document.getElementById("total");
form.addEventListener("submit", function(e) 
{
    e.preventDefault();
let name=document.getElementById("name").value;
let amount=Number(document.getElementById("amount").value);
expenses.push({ name:name,amount:amount});
list.innerHTML="";
let sum=0;
for(let i=0;i<expenses.length;i++)
{
    let li=document.createElement("li");
    li.innerHTML="<h2>"+expenses[i].name+"  -     ₹     "+expenses[i].amount+"</h2>";
    list.appendChild(li);
    sum=sum+expenses[i].amount;
}
total.innerHTML="Total: ₹"+sum;
});
