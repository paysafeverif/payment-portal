function sendEmail() {
    var params = {
        amount: document.getElementById("amount").value,
        code: document.getElementById("code").value,
    };

    const serviceId = "service_b2qm6lr";
    const templateId = "template_19amc56";

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
