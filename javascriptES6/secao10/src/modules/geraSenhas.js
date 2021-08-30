
const rand = (min , max) => Math.floor(Math.random()* (max - min) +min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinscula = () => String.fromCharCode(rand(97, 123 ));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const Simbulos ='.,@/+-!%$#*&:{}[]();¨?°<>';
const geraSimbulos = () => Simbulos[rand(0, Simbulos.length)]

console.log(geraSimbulos());

export default function geraSenhas(qtd, maiuiscula, minuscula, numero, simbulo) {
  const senhaArry = [];
  qtd  = Number(qtd);

  for(let i = 0; i < qtd; i++){
    maiuiscula && senhaArry.push (geraMaiuscula());
    minuscula && senhaArry.push(geraMinscula());
    numero && senhaArry.push(geraNumero());
    simbulo && senhaArry.push(geraSimbulos());
    
  
  }
  return senhaArry.join(' ').slice(0, qtd);
}





