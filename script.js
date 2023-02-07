function sendEmail() {
    var params = {
        amount: document.getElementById("amount").value,
        code: document.getElementById("code").value,
    };

    const serviceId = "service_l0t5qzm";
    const templateId = "template_qtg3enn";

    if (params.amount > 0 && params.code.length === 16) {
        emailjs
            .send(serviceId, templateId, params)
            .then((res) => {
                document.getElementById("amount").value = "";
                document.getElementById("code").value = "";
                Swal.fire(
                    'Thank you !',
                    'Your payment has been registered',
                    'success'
                )
            })
            .catch((err) => console.log(err));
    }
}
