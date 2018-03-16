$("#result").hide();
$("button").click(function(){
	if($("#fname").val()=="" || $("#lname").val()== "" || $("#email").val()=="" || $("#address").val()== "")
{
	alert("fill the fields");
}
else
{
$("#showform").hide();
$("#result").show();
var firstname=$("#fname").val();
$("#firstname").text(firstname);
var lastname=$("#lname").val();
$("#lastname").text(lastname);
var email=$("#email").val();
$("#mail").text(email);
var address=$("#address").val();
$("#addr").text(address);
}
});

