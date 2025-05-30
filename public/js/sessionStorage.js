    let boolean = false;
    let logado = sessionStorage.CONECTADO;
    console.log(logado)
    function exibirSessao() {
        if (boolean != true) {
            if (logado == "conectado") {
                console.log("está logado");
                sessao.innerHTML = `
            <div class="block">
                <ul>
                    <li><a href="dashboard.html">Dashboard</a></li>
                    <li><a href="quiz.html">Quiz</a></li>
                    <li><a onclick="sair()" style="cursor: pointer;">Logout</a></li>
                </ul>
            </div>`
            }
            else {
                console.log(" n está logado");
                sessao.innerHTML = `
            <div class="block">
                <ul>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="cadastro.html">Cadastre-se</a></li>
                </ul>
            </div>`
            }
            
            boolean = true;
        }
        else {
            sessao.innerHTML = ``
            boolean = false;
        }
    }
    function sair(){
        sessionStorage.CONECTADO = "desconectado";
        window.location = "/login.html";
    }