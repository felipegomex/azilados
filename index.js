class Jogador {

    constructor() {
        this.id = 1;
        this.arrayJogador = [];
        this.editID = null;
    }
//salvar
//pegar dados do produto e salvar
    salvar() {
        let jogador = this.lerDados();

        if(this.validaCampos(jogador)){
            if(this.editID == null) {
                this.adicionar(jogador);
            } else {
                this.atualizar(this.editID, jogador);
            }
            
        }

        this.listarTabela();
        this.cancelar();

    }

    atualizar(id, jogador){
        for(let i = 0; i < this.arrayJogador.length; i++) {
            if(this.arrayJogador[i].id == id){
                this.arrayJogador[i].nomeJogador = jogador.nomeJogador;
                this.arrayJogador[i].pos = jogador.pos;
            }
        }
    
    }

//listaTabela

    listarTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayJogador.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_jogador = tr.insertCell();
            let td_pos = tr.insertCell(); 
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayJogador[i].id;
            td_jogador.innerText = this.arrayJogador[i].nomeJogador;
            td_pos.innerText = this.arrayJogador[i].pos;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.svg';
            imgEdit.setAttribute("onclick", "jogador.editar("+ JSON.stringify(this.arrayJogador[i]) +")");

            let imgRemover = document.createElement('img');
            imgRemover.src = 'img/delete.svg';
            imgRemover.setAttribute("onclick", "jogador.remover("+ this.arrayJogador[i].id +")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgRemover);
           
        }

        var times = ["Time 1","Time 2","Time 3"];
        var sorteio = Math.floor(Math.random()*times.length);
        console.log(times[sorteio]);

        var sorte = times[sorteio];

        //console.log("O último valor é:", this.arrayJogador[this.arrayJogador.length - 1]);

        for(let i = 0; i < this.arrayJogador.length; i++){
            console.log(this.arrayJogador[i]);   
            console.log("O último valor é:",this.arrayJogador[this.arrayJogador.length - 1]);

            if(sorte == "Time 1"){
                if(this.arrayJogador[i] === this.arrayJogador[this.arrayJogador.length - 1]){

                    let t1 = time1.insertRow();

                    let t1_jogador = t1.insertCell();
                    let t1_pos = t1.insertCell(); 
                 
                    t1_jogador.innerText = this.arrayJogador[i].nomeJogador;
                    t1_pos.innerText = this.arrayJogador[i].pos;
                }
            } else if(sorte == "Time 2"){
                if(this.arrayJogador[i] === this.arrayJogador[this.arrayJogador.length - 1]){

                    let t2 = time2.insertRow();
                    let t2_jogador = t2.insertCell();
                    let t2_pos = t2.insertCell(); 
                 
                    t2_jogador.innerText = this.arrayJogador[i].nomeJogador;
                    t2_pos.innerText = this.arrayJogador[i].pos;
                }            
            } else if (sorte == "Time 3"){
                if(this.arrayJogador[i] === this.arrayJogador[this.arrayJogador.length - 1]){

                    let t3 = time3.insertRow();
                    let t3_jogador = t3.insertCell();
                    let t3_pos = t3.insertCell(); 
                 
                    t3_jogador.innerText = this.arrayJogador[i].nomeJogador;
                    t3_pos.innerText = this.arrayJogador[i].pos;
                } 
            } else {
                alert("ERROR DE SORTEIO");
            }
                
        }
    }

   

//sortear 
/*

let t1 = time1.insertRow();  
                let t1_jogador = t1.insertCell();
                let t1_pos = t1.insertCell(); 
                 
                t1_jogador.innerText = this.arrayJogador[i].nomeJogador;
                t1_pos.innerText = this.arrayJogador[i].pos;      


 if(sorte == "Time 1"){
if(arrayJogador[i] === arrayJogador[arrayJogador.length - 1]){

    sortear(jogador,pos){
        let times = ["Time1","Time2","Time3"];
        let sorteio = Math.floor(Math.random()*times.length);
        console.log(times[sorteio]);

        if(sorteio == Time1){
            let t1 = time1.insertRow();

            let t1_jogador = t1.insertCell();
            let t1_pos = t1.insertCell(); 

            t1_jogador.innerText = this.arrayJogador[i].nomeJogador;
            t1_pos.innerText = this.arrayJogador[i].pos;
        } else if (sorteio == Time2){
            let t2 = time2.insertRow();

            let t2_jogador = t2.insertCell();
            let t2_pos = t2.insertCell(); 

            t2_jogador.innerText = this.arrayJogador[i].nomeJogador;
            t2_pos.innerText = this.arrayJogador[i].pos;
        } else if (sorteio == Time3){
            let t3 = time3.insertRow();

            let t3_jogador = t3.insertCell();
            let t3_pos = t3.insertCell(); 

            t3_jogador.innerText = this.arrayJogador[i].nomeJogador;
            t3_pos.innerText = this.arrayJogador[i].pos;
        } else {
            alert("ERROR DE SORTEIO");
        }
    }
    */

//adicionar
    adicionar(jogador){
        this.arrayJogador.push(jogador);
        this.id++;

    }
//lerDados da ARRAY
    lerDados(){
        let jogador = {}

        jogador.id = this.id;
        jogador.nomeJogador = document.getElementById('jogador').value;
        jogador.pos = document.getElementById('pos').value;

        return jogador;

    }

    validaCampos(jogador){
        let msg = '';
        if(jogador.nomeJogador == ''){
            msg += msg + 'Informe o nome do Jogador! \n';
        }
        if(jogador.pos == '' ){
            msg += msg + 'Vazio! Informe a Posição! \n';
        } else if(jogador.pos == 'LD'){
            return true;
         } else if(jogador.pos == 'ZAG'){
            return true;
         }else if(jogador.pos == 'LE'){
            return true;
         }else if(jogador.pos == 'MEI'){
            return true;
         }else if(jogador.pos == 'ATA'){
            return true;
         }else{
            msg += msg + 'Vazio! Informe a Posição VALIDA! \n';

         }

        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }

    cancelar() {
        document.getElementById('jogador').value = '';
        document.getElementById('pos').value = '';

        document.getElementById('btn1').innerText = 'Adicionar';
        this.editID = null;
    }

    editar(dados) {

        this.editID = dados.id;

        alert("TESTE");
        document.getElementById('jogador').value = dados.jogador;
        document.getElementById('pos').value = dados.pos;

        document.getElementById('btn1').innerText = 'Atualizar';

    }

    remover(id){
        //validação
        if(confirm('Deseja realmente deletar o produto do ID' + id)){
            let tbody = document.getElementById('tbody');

            alert('deletar o ID' + id);
            for (let i = 0; i < this.arrayJogador.length; i++){
                if(this.arrayJogador[i].id == id){
                    this.arrayJogador.splice(i, 1);
                    tbody.deleteRow(i);

                }
            }
        
        }
    }

}
var jogador = new Jogador();

/*
function sorteando(){
    let palavras = ["escola","casa","inverno","macaco","estudantes"]; 
    let sorteio = Math.floor(Math.random()*palavras.length);
     
    console.log(palavras[sorteio]); 
 }
 
 var botao = document.getElementById("sortear");
 botao.addEventListener("click",sorteando);
*/