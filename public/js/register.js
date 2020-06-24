function cadastrar() {
    if (confi_password.value == password.value) {
        var formulario = new URLSearchParams(new FormData(form_cadastro));
        fetch("/usuarios/cadastrar", {
            method: "POST",
            body: formulario
        }).then(function (response) {

            if (response.ok) {

                window.location.href = '../login.html';

            } else {

                console.log('Erro de cadastro!');
                response.text().then(function (resposta) {
                    div_erro.innerHTML = resposta;
                });
            }
        });


    } else {
        alert('Erro: Senhas incorretas')
    }
    return false;
}