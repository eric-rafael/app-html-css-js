function cadastrar() {
    var inputNome = document.getElementById("exampleFormControlInput1");
    var inputEmail = document.getElementById("exampleInputEmail1");
    var InputSenha = document.getElementById("exampleInputPassword1");

    var nome = inputNome.value;
    var email = inputEmail.value;
    var senha = InputSenha.value;

    var testObject = { nome, senha };

    // Put the object into storage
    localStorage.setItem(email, JSON.stringify(testObject));

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
}

// function cadastrar(){

// }