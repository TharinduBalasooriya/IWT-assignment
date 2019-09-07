//password function
function checkpassword()
{
	var a = document.getElementById("pw1").value;
	var b = document.getElementById("pw2").value;
	
	if(a == b)
	{
		 alert("Matched");
		 return true;
	}
	else
	{
		 alert("Mismatched");
		 return false;
	}
}