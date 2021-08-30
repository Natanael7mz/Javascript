import validacpf from './ValidaCPF'

export default class GeraCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));

    }


formatado(cpf) {
    return (
        cpf.slice(0, 3) + ' . ' +
        cpf.slice(3, 6) + ' . ' +
        cpf.slice(6, 9) + ' - ' +
        cpf.slice(9, 11) 
    )
}
geraNovocpf(){
    const cpfsemDigitos = this.rand()
    const digito01 = validacpf .geraDigito(cpfsemDigitos);
    const digito02 = validacpf . geraDigito(cpfsemDigitos + digito01)
    const novoCPF = cpfsemDigitos + digito01 + digito02 ;
    return this.formatado(novoCPF);
}
}


