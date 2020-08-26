
$("#subscribe").on ("click", () => {
    if(!$("#email")[0].checkValidity()) {
        alert('Please enter valid email');
    } else {
        console.log($("#email")[0].value);
        alert('Please check your email Inbox or Spam folder to confirm the subscription.');
        $('#myModal').modal('hide');
    }
});