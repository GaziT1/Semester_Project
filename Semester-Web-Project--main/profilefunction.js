window.addEventListener("load", EventListener);
var view = "saved"
function EventListener() 
{

    document.getElementById("edit").addEventListener("click", editSave);
}

function editSave()
{
    document.getElementById("address").disabled = false;
    document.getElementById("specificaddress").disabled = false;
    document.getElementById("city").disabled = false;
    document.getElementById("state").disabled = false;
    document.getElementById("zip").disabled = false;

}