const students = [{
    name: "Lucio",
    gradeOne: 8,
    gradeTwo: 7
  },
  {
    name: "Maria",
    gradeOne: 10,
    gradeTwo: 4
  },
  {
    name: "Fernando",
    gradeOne: 9,
    gradeTwo: 9
  },
  {
    name: "Pedro",
    gradeOne: 5,
    gradeTwo: 7
  },
  {
    name: "Juliana",
    gradeOne: 4,
    gradeTwo: 4
  },
]


for (let average of students) {
   if(((average.gradeOne + average.gradeTwo)/ 2) >=7){
    alert(`A média do(a) aluno(a) ${average.name} foi de: ${(average.gradeOne + average.gradeTwo)/ 2}.\n Parabéns você foi aprovado no concurso!`)
  }else if(((average.gradeOne + average.gradeTwo)/ 2)  < 7 && (((average.gradeOne + average.gradeTwo)/ 2) >= 5)){
    alert(`A média do(a) aluno(a) ${average.name} foi de: ${(average.gradeOne + average.gradeTwo)/ 2}.\n Não foi dessa vez ${average.name}. Tente Novamente.`)
  }  else{
    alert(`Sua média foi de: ${(average.gradeOne + average.gradeTwo)/ 2}.\nParafraseando o grande professor Clóvis de Barros:\n${average.name} você é burro(a) tem que ir comer alfafa!`)
  }
}
