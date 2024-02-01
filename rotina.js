
  const blogin =document.querySelector('.descricao');

const btn =document.querySelector('.detalhes');

const fecha =document.querySelector('.fexa');

btn.addEventListener('click', ()=> {
  blogin.classList.add('active');
});

fecha.addEventListener('click', ()=> {
  blogin.classList.remove('active');
});

const selecaobotao= document.querySelectorAll('.botao');
const sect =document.getElementById('projeto');
const person =document.getElementById('personagens');
const image =document.querySelector('div.image');
const fot = document.querySelectorAll('#foto');
sect.addEventListener('click', ()=>{
  person.classList.add('active');
  
});

selecaobotao.forEach((botao,indice)=>{
  botao.addEventListener('click', ()=>{
    console.log(indice);

    ativaBotao(botao);
    destivaBotaoAtivo();

    mostraFoto(indice);
    esconderFotoAtiva();





  })
})

 function mostraFoto(indice){
  fot[indice].classList.add('ativa');
 }

function esconderFotoAtiva() {
  const fotoAtiva = document.querySelector('.ativa');
}


//////
 function ativaBotao(botao){
  botao.classList.add('ativo');

 }



function destivaBotaoAtivo() {
  const botaoAtivo = document.querySelector('.ativo');
  botaoAtivo.classList.remove('ativo');
  
}