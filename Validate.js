function validate()
{	var name = document.getElementById("txtName").value;
	if (name.length == 0)
	{	alert("Please enter your name");
		return false;}
	var email = document.getElementById("txtEmail").value;
	if (email.length == 0)
	{	alert("Please enter an email address");
		return false;}
	else if (email.indexOf("@") == -1 || email.indexOf(".") == -1)
	{	alert("Please enter a valid email address");
		return false;
	}
	alert("Thank you," + name);
}