// let compras = ['salgadinho', 'coca-cola', 'bolo', 'macarrao', 'peixe']; {

//     alert(compras);
// }

// // Adiionar cebola

// compras.push('cebola'); {

//     alert(compras);
// }

// // Remover cebola

// compras.pop('cebola'); {

//     alert(compras);
// }


// function somar(num1 , num2) {
//    alert(num1 + num2)

// }

// somar(3,5);
// somar(10,4);
// somar(1,4);

// let corpo = document.querySelector("body");
// let botao = document.querySelector('button');
// window.confirm('esta pagina foi atualizada');
// function cor() {
//     corpo.style.backgroundColor = "blue";
//     window.alert("A cor foi trocada para azul");
// }
// botao.onclick = cor


let inputEmail = document.querySelector("#inputEmail");
let inputSenha = document.querySelector("#inputSenha");
let resposta = document.querySelector("p");
let botao = document.querySelector("button");

function validarLogin() {
    if (inputEmail.value == "critianpedroso@gmail.com" && inputSenha.value == "123") {
        resposta.innerHTML = "Login Aprovado";
        resposta.style.color = "green";
        resposta.style.border = "2px green solid";
        resposta.style.backgroundColor = "white";
    }
    else if(inputEmail.value == 'heitorbc3@gmail.com' && inputSenha.value == '456'){
            resposta.innerHTML = "Login Aprovado";
            resposta.style.color = "green";
            resposta.style.border = "2px green solid";
            resposta.style.backgroundColor = "white";
    }
    else if(inputEmail.value == 'jooj@gmail.com' && inputSenha.value == '123456'){
        resposta.innerHTML = "Login Aprovado";
        resposta.style.color = "green";
        resposta.style.border = "2px green solid";
        resposta.style.backgroundColor = "white";
    }
    else if(inputEmail.value == '@gmail.com' && inputSenha.value == '1234567a'){
        resposta.innerHTML = "Login Aprovado";
        resposta.style.color = "green";
        resposta.style.border = "2px green solid";
        resposta.style.backgroundColor = "white";
    }
    else if(inputEmail.value == 'pedro@gmail.com' && inputSenha.value == '12344'){
        resposta.innerHTML = "Login Aprovado";
        resposta.style.color = "green";
        resposta.style.border = "2px green solid";
        resposta.style.backgroundColor = "white";
    }
    else if(inputEmail.value == 'lucas@gmail.com' && inputSenha.value == '12344'){
        resposta.innerHTML = "Login Aprovado";
        resposta.style.color = "green";
        resposta.style.border = "2px green solid";
        resposta.style.backgroundColor = "white";
    }
    else if(inputEmail.value == 'a@gmail.com' && inputSenha.value == '123j'){
        resposta.innerHTML = "Login Aprovado";
        resposta.style.color = "green";
        resposta.style.border = "2px green solid";
        resposta.style.backgroundColor = "white";
    }
    else {
        resposta.innerHTML = "Login Inválido";
        resposta.style.color = "red";
        resposta.style.border = "4px red dotted";
    }

}
botao.onclick = validarLogin;