

function cadastrarCliente() {
    const cliente = {
         nome: document.getElementById("nome-cliente").value,
        email: document.getElementById("email").value,
        celular: document.getElementById("celular").value,
        cpf: document.getElementById("cpf").value,
        endereco: document.getElementById("end-rua").value,
        numero: document.getElementById("end-numero").value,
        complemento: document.getElementById("end-comp").value,
        bairro: document.getElementById("end-bairro").value,
        cep: document.getElementById("end-cep").value,
        cidade: document.getElementById("end-cidade").value,
        estado: document.getElementById("end-estado").value,

    }

    $("#modalCliente").modal("hide");
    $("#formCliente").trigger("reset");
    localStorage.setItem("cliente", JSON.stringify(cliente))
}



function consultarCliente() {
    const pesquisaCliente = {
      
    $("#modalPesquisa").modal("hide");
    $("#formPesquisa").trigger("reset");
    localStorage.setItem("pesquisaCliente", JSON.stringify(pesquisaCliente))
    }



function cadastrarProduto() {
    const produto = {
        nome: document.getElementById("nome-prod").value,
        custoUnitario: document.getElementById("custounitario").value,
        precoVenda: document.getElementById("precovenda").value,
        fornecedor: document.getElementById("fornecedor").value,
        quantidade: document.getElementById("quantidade").value,
    }

    $("#modalProduto").modal("hide");
    $("#formProduto").trigger("reset");
    localStorage.setItem("produto", JSON.stringify(produto))
}
