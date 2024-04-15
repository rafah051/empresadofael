//const empresa = Fael 

let nomes = ['joão','Maria','Camila','Ana','Pedro','Laura','Tiago','Mariana','Matheus','Sofia'];
console.log(nomes)

nomes.push('Mateus');
nomes.push('Isabela');
nomes.push('Rafael');
nomes.push('Camila Fernandes');
console.log(nomes)

nomes.splice(2,1)

console.log(nomes)

nomes.splice(4,1)
console.log(nomes)

nomes.push('Vitória');
console.log(nomes)

nomes.push('Rafael');
console.log(nomes)

let nomes_sem_duplicidade = [...new Set(nomes)]
console.log(nomes_sem_duplicidade);



