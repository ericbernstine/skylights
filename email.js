function sendMail(){
    let parms = {
        name: document.getElementById('name').value, 
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    emailjs.send('service_72xc3jl', 'template_tr4waei', params).then(alert('email sent!'))
}