import GeraCpf from './modules/GeraCpf';

import './assets/css/style.css';

(function(){
    const cp = new GeraCpf()
const cpf = document.querySelector('.cpf-gerado');
cpf.innerHTML = cp.geraNovocpf()
})();




