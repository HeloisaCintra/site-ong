const app = document.getElementById("app");

const paginas = {

    inicio: `
        <h2>Bem-vindo à ONG Esperança</h2>

        <p>
            A ONG Esperança trabalha para promover mudanças positivas na comunidade por
            meio de projetos sociais, campanhas de doação e ações de voluntariado.
            Nosso objetivo é ajudar pessoas que precisam de apoio,
            criando oportunidades e fortalecendo a solidariedade.
            Aqui você pode conhecer nossos projetos, participar das campanhas,
            contribuir com doações ou se cadastrar como voluntário.
            Cada participação faz a diferença e ajuda a construir uma comunidade mais unida,
            acolhedora e cheia de esperança. 💚
        </p>

        <section id="apresentacao">

            <h2>Quem somos?</h2>

            <div class="galeria">
                <img src="../imagens/volutarios.png" width="260" alt="Voluntários da ONG Esperança">
                <img src="../imagens/volutarios2.png" width="260" alt="Ação social da ONG">
                <img src="../imagens/volutarios3.png" width="260" alt="Projeto da ONG">
            </div>

            <p>
                Nossa missão é promover ações sociais que contribuam para melhorar a qualidade de vida
                das pessoas e fortalecer a comunidade. Buscamos apoiar famílias em situação de vulnerabilidade,
                incentivar a solidariedade e criar oportunidades para que todos tenham acesso a uma vida mais digna.
                Por meio de projetos, campanhas e do trabalho de voluntários, buscamos fazer a diferença e construir
                uma sociedade mais justa, acolhedora e solidária.
            </p>

        </section>

        <section id="missao">

            <h2>Nossa missão</h2>

            <p>
                Nossa missão é promover ações sociais e contribuir
                para uma sociedade mais justa e solidária.
            </p>

        </section>

        <section id="contato">

            <h2>Contato</h2>

            <address>
                <p>Telefone: (11) 1234-5678</p>
                <p>E-mail: contato@ongesperanca.org.br</p>
                <p>Endereço: Rua tal, 100 - Centro</p>
            </address>

        </section>
    `,

    projetos: `
        <h2>Nossos Projetos</h2>

        <section id="doacoes">

            <h2>
                Campanhas de Doação
                <span class="badge">Doação</span>
            </h2>

            <p>
                Nossas campanhas de doação ajudam a arrecadar
                recursos e materiais para as pessoas atendidas
                pela ONG.
            </p>

            <h3>Como você pode ajudar</h3>

            <ul>
                <li>Doação de alimentos</li>
                <li>Doação de roupas</li>
                <li>Doação de materiais escolares</li>
                <li>Doação financeira</li>
            </ul>

            <div class="alerta">
                <strong>Informação:</strong>
                Esta campanha está aberta para receber novas doações.
            </div>

        </section>

        <section id="voluntariado">

            <h2>
                Voluntariado
                <span class="badge">Voluntariado</span>
            </h2>

            <p>
                Os voluntários podem participar de diferentes
                atividades e contribuir com seu tempo e suas
                habilidades.
            </p>

            <h3>Atividades voluntárias</h3>

            <ul>
                <li>Participação em campanhas</li>
                <li>Organização de eventos</li>
                <li>Distribuição de donativos</li>
                <li>Apoio às atividades da ONG</li>
            </ul>

            <h3>Como participar</h3>

            <p>
                Para participar, faça seu cadastro através
                da nossa página de inscrição.
            </p>

            <a href="#cadastro">Quero ser voluntário</a>

            <div class="toast">
                Inscrições para <a href="#cadastro">voluntariado</a> abertas! ✓
            </div>

        </section>
    `,

    doacoes: `
        <h2>Campanhas de Doação</h2>

        <p>
            Nossas campanhas arrecadam alimentos, roupas e outros itens
            para ajudar famílias que precisam de apoio.
        </p>
    `,

    voluntariado: `
        <h2>Voluntariado</h2>

        <p>
            Participe das ações da ONG Esperança como voluntário
            e ajude a transformar a comunidade.
        </p>
    `,

    cadastro: `
        <h2>Cadastre-se</h2>

        <form id="formCadastro">

            <label for="nome">Nome:</label>

            <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                required
            >

            <label for="cpf">CPF:</label>

            <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
                pattern="([0-9]{3}[.][0-9]{3}[.][0-9]{3}-[0-9]{2}|[0-9]{11})"
                required
            >

            <label for="email">E-mail:</label>

            <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                required
            >

            <label for="telefone">Telefone:</label>

            <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Digite seu telefone"
                pattern="(\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}|[0-9]{10,11})"
                required
            >

            <label for="cep">CEP:</label>

            <input
                type="text"
                id="cep"
                name="cep"
                placeholder="00000-000"
                pattern="[0-9]{5}-[0-9]{3}"
                required
            >

            <button type="submit">Cadastrar</button>

            <p id="mensagem"></p>

        </form>
    `,

    cadastros: `
        <h2>Cadastros realizados</h2>

        <p>
            Confira os cadastros que foram realizados na ONG Esperança.
        </p>

        <div id="listaCadastros"></div>
    `,

    login: `
        <h2>Área restrita</h2>

        <p>
            Esta área é destinada aos responsáveis pela ONG Esperança.
        </p>

        <form id="formLogin">

            <label for="usuario">Usuário:</label>

            <input
                type="text"
                id="usuario"
                placeholder="Digite o usuário"
                required
            >

            <label for="senha">Senha:</label>

            <input
                type="password"
                id="senha"
                placeholder="Digite a senha"
                required
            >

            <button type="submit">Entrar</button>

            <p id="mensagemLogin"></p>

        </form>
    `
};


function navegar() {

    const rota = window.location.hash.substring(1) || "inicio";

    if (paginas[rota]) {

        app.innerHTML = paginas[rota];

        if (rota === "cadastro") {
            configurarFormulario();
            carregarCadastro();
        }

        if (rota === "login") {
            configurarLogin();
        }

        if (rota === "cadastros") {
            mostrarCadastros();
        }

    } else {

        app.innerHTML = `
            <h2>Página não encontrada</h2>
            <p>A página solicitada não existe.</p>
        `;
    }
}


function configurarFormulario() {

    const formulario = document.getElementById("formCadastro");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        if (formulario.checkValidity()) {

            const nome = document.getElementById("nome").value;

            const cadastro = {
                nome: document.getElementById("nome").value,
                cpf: document.getElementById("cpf").value,
                email: document.getElementById("email").value,
                telefone: document.getElementById("telefone").value,
                cep: document.getElementById("cep").value
            };

            let cadastros =
                JSON.parse(localStorage.getItem("cadastros")) || [];

            cadastros.push(cadastro);

            localStorage.setItem(
                "cadastros",
                JSON.stringify(cadastros)
            );

            document.getElementById("mensagem").innerHTML = `
                <div class="mensagem-sucesso">

                    <div class="icone-sucesso">✓</div>

                    <h3>Cadastro realizado!</h3>

                    <p>
                        Olá, <strong>${nome}</strong>!
                    </p>

                    <p>
                        Seu cadastro foi realizado com sucesso.
                        Obrigado por fazer parte da ONG Esperança. 💚
                    </p>

                    <button type="button" id="novoCadastro">
                        Fazer outro cadastro
                    </button>

                </div>
            `;

            formulario.reset();

            const novoCadastro =
                document.getElementById("novoCadastro");

            novoCadastro.addEventListener("click", function() {

                document.getElementById("mensagem").innerHTML = "";

            });

        } else {

            document.getElementById("mensagem").textContent =
                "Verifique os campos preenchidos.";
        }

    });
}


function configurarLogin() {

    const formulario = document.getElementById("formLogin");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const usuario =
            document.getElementById("usuario").value;

        const senha =
            document.getElementById("senha").value;

        if (usuario === "admin" && senha === "ong123") {

            sessionStorage.setItem("logado", "true");

            window.location.hash = "cadastros";

        } else {

            document.getElementById("mensagemLogin").textContent =
                "Usuário ou senha incorretos.";
        }

    });
}


function carregarCadastro() {

    const dados = localStorage.getItem("cadastros");

    if (!dados) {
        return;
    }

    const cadastros = JSON.parse(dados);

    if (cadastros.length === 0) {
        return;
    }

    const cadastro =
        cadastros[cadastros.length - 1];

    document.getElementById("nome").value =
        cadastro.nome;

    document.getElementById("cpf").value =
        cadastro.cpf;

    document.getElementById("email").value =
        cadastro.email;

    document.getElementById("telefone").value =
        cadastro.telefone;

    document.getElementById("cep").value =
        cadastro.cep;

    document.getElementById("mensagem").innerHTML = `
        <div class="alerta">

            <strong>
                Você já possui um cadastro salvo.
            </strong>

            <p>
                Os dados do seu último cadastro foram carregados.
            </p>

        </div>
    `;

    const campos =
        document.querySelectorAll("#formCadastro input");

    campos.forEach(function(campo) {

        campo.addEventListener("input", function() {

            document.getElementById("mensagem").innerHTML = "";

        });

    });
}


function mostrarCadastros() {
    const lista = document.getElementById("listaCadastros");

    if (!lista) {
        return;
    }

    const dados = localStorage.getItem("cadastros");

    if (!dados) {
        lista.innerHTML = `
            <div class="alerta">
                <strong>Nenhum cadastro encontrado.</strong>
                <p>Ainda não existem cadastros salvos.</p>
            </div>
        `;
        return;
    }

    const cadastros = JSON.parse(dados);

    if (cadastros.length === 0) {
        lista.innerHTML = `
            <div class="alerta">
                <strong>Nenhum cadastro encontrado.</strong>
            </div>
        `;
        return;
    }

    lista.innerHTML =
        cadastros.map(function(cadastro, indice) {

            const status = cadastro.status || "Pendente";

            let classeStatus = "status-pendente";

            if (status === "Aceito") {
                classeStatus = "status-aceito";
            }

            if (status === "Rejeitado") {
                classeStatus = "status-rejeitado";
            }

            return `
                <div class="card-cadastro">

                    <div class="cabecalho-cadastro">

                        <h3>Cadastro ${indice + 1}</h3>

                        <span class="status-cadastro ${classeStatus}" id="status-${indice}">
    ${status}
</span>

                    </div>

                    <div class="dados-cadastro">

                        <p>
                            <strong>Nome:</strong>
                            ${cadastro.nome}
                        </p>

                        <p>
                            <strong>CPF:</strong>
                            ${cadastro.cpf}
                        </p>

                        <p>
                            <strong>E-mail:</strong>
                            ${cadastro.email}
                        </p>

                        <p>
                            <strong>Telefone:</strong>
                            ${cadastro.telefone}
                        </p>

                        <p>
                            <strong>CEP:</strong>
                            ${cadastro.cep}
                        </p>

                    </div>

                    <div class="acoes-cadastro">

                        <button
                            type="button"
                            onclick="alterarStatus(${indice}, 'Aceito')">
                            ✓ Aceitar
                        </button>

                        <button
                            type="button"
                            onclick="alterarStatus(${indice}, 'Rejeitado')">
                            ✕ Rejeitar
                        </button>

                        <button
                            type="button"
                            onclick="excluirCadastro(${indice})">
                            🗑 Excluir
                        </button>

                        <button
                            type="button"
                            onclick="entrarEmContato(${indice})">
                            📧 Entrar em contato
                        </button>

                    </div>

                </div>
            `;
        }).join("");
}
function alterarStatus(indice, status) {

    const cadastros =
        JSON.parse(localStorage.getItem("cadastros")) || [];


    if (!cadastros[indice]) {
        return;
    }


    cadastros[indice].status = status;


    localStorage.setItem(
        "cadastros",
        JSON.stringify(cadastros)
    );


    mostrarCadastros();


    const elementoStatus =
        document.getElementById("status-" + indice);


    if (elementoStatus) {

        elementoStatus.classList.add("status-animado");


        setTimeout(function() {

            elementoStatus.classList.remove("status-animado");

        }, 500);

    }

}

function excluirCadastro(indice) {

    const cadastros =
        JSON.parse(localStorage.getItem("cadastros")) || [];

    if (!cadastros[indice]) {
        return;
    }

    const confirmar =
        confirm("Tem certeza que deseja excluir este cadastro?");

    if (!confirmar) {
        return;
    }

    cadastros.splice(indice, 1);

    localStorage.setItem(
        "cadastros",
        JSON.stringify(cadastros)
    );

    mostrarCadastros();
}


function entrarEmContato(indice) {

    const cadastros =
        JSON.parse(localStorage.getItem("cadastros")) || [];

    if (!cadastros[indice]) {
        return;
    }

    const cadastro = cadastros[indice];

    window.location.href =
        "mailto:" + cadastro.email;
}

window.addEventListener("hashchange", navegar);

navegar();