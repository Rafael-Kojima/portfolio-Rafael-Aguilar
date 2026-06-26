// Função de alternar entre os temas claro e escuro utilizando localStorage para salvar a preferência do usuário

var btn = document.getElementById("btn-tema");

if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
}

if (btn) {
  atualizarIcone();

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("tema", "dark");
    } else {
      localStorage.setItem("tema", "light");
    }

    atualizarIcone();
  });
}

function atualizarIcone() {
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}


// Formulário de contato

var form = document.getElementById("form-contato");

// Validação do formulário de contato, exibindo uma mensagem de sucesso em um modal se todos os campos forem preenchidos corretamente
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nome = document.getElementById("nome").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos.");
      return;
    }

    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      alert("Digite um e-mail válido.");
      return;
    }

    document
      .getElementById("modal-sucesso")
      .classList.add("visivel");

    form.reset();
  });
}

