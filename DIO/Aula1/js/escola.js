

    const alunos = [
        {
            aluno: 'John',
            nota: 8,


        }, 
        {
            aluno: 'Emerson',
            nota: 9,        

        },     
        {
            aluno: 'Txutxucao',
            nota: 6,

        }, 
        {
            aluno: 'Txutxucao2',
            nota: 10,

        }, 
    ];

    function alunosAprovados(alunos, media){

        let alunosAprovados = [];
     
         for(let i = 0; i < alunos.length; i++){
             let {nota, aluno} = alunos[i];

             if( nota >= media){
                 alunosAprovados.push(aluno);
             }

         }
         return alunosAprovados;
     }
     
console.log(alunosAprovados(alunos, 7));

