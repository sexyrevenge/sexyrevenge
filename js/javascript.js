function getSession (){
    $.ajax({
        type: "POST",
        url: "https://ws.pagseguro.uol.com.br/v2/sessions?email=lucasvas100@gmail.com&token=F03D0DAF06454DD8BA32580EB2201F84",
        dataType: "xml",
        success: function (response) {
            console.log(response);
        }
    });
}

PagSeguroDirectPayment.setSessionId()