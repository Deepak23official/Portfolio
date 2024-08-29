let fromName =  document.getElementById("from_name")
let Email = document.getElementById("email_id")
let message  = document.getElementById("message")

function sendMail() {
    if(fromName.value.length > 0){
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let email = document.getElementById('email_id').value
        if(email) {
            let isValidatEmail = emailPattern.test(email);

            if(isValidatEmail == true && message.value.length > 0) {
                document.getElementById('email_id').style="border-bottom: 2px solid green;"
                document.getElementById('message').style="border-bottom: 2px solid green;"
                let parms ={
                    from_name: fromName.value,
                    email_id : Email.value,
                    message : message.value,
                    }
                    emailjs.send("service_qylc919","template_ezvasa7",parms).then(alert("Email send successfully.!!"))
                    fromName.value = ""
                    email_id.value = ""
                    message.value = ""
            } else{
                document.getElementById('email_id').style="border-bottom: 2px solid red;"
                 document.getElementById('message').style="border-bottom: 2px solid red;"
                alert("Enter valid Email & fill the message box")
            }
        } else {
            alert("Please Enter all details")
        }
        
    }
    else alert("Fill all filed  & Note: Without Internet your message not send...!")
    
}