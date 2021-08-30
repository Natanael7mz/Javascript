import geraSenhas from './geraSenhas';

const senhagerada = document.querySelector('.senha-gerada');
const qtdcaracteristica = document.querySelector('.qtd-caracteristica');
const maiuiscula = document.querySelector('.chk-maiuscula');
const minuscula = document.querySelector('.chk-minuscula');
const numeros = document.querySelector('.chk-numeros');
const simbulo = document.querySelector('.chk-simbulos');
const gerando = document.querySelector('.gera-senha');

export default function formsgeraSenha () {
  gerando.addEventListener('click', () =>{
  senhagerada.innerHTML= gera();
  })
}

function gera(){
  const senha = geraSenhas(
    qtdcaracteristica.value,
    maiuiscula.checked,
    minuscula.checked,
    numeros.checked,
    simbulo.checked,
  );
  return senha ||   'nada selecionado';
}