//FUNÇÃO SIMPLES

function calculaIRPF(salario){
    
    let resultado = (salario/2) * salario;
    return resultado
}

console.log('calculo IRPF:', calculaIRPF(1000));
console.log('calculo IRPF:', calculaIRPF(1500));