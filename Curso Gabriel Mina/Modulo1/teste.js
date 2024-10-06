const personagens = ["naruto", "sasuke", "sakura", "kakashi"]

console.log(personagens)
let teste = personagens.pop()
console.log(teste)
console.log(personagens)
teste = personagens.shift()
console.log(teste)
console.log(personagens)
personagens.push("naruto", "kakashi")
console.log(personagens)
teste = personagens.splice(0, 2)
console.log(teste)