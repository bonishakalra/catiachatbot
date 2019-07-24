var click= "FALSE";
function openForm() {
document.getElementById("chaticon").style.display = "none";
if(click == "FALSE")
{
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myiframe").style.diplay= "block";
  click = "TRUE";
}
else if(click == "TRUE")
{
document.getElementById("myForm").style.display = "none";
  document.getElementById("myiframe").style.diplay= "none";
  click = "FALSE";
  
}
}

function closeForm() {
document.getElementById("chaticon").style.display = "block";
  document.getElementById("myForm").style.display = "none";
}