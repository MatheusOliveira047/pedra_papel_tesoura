let elementos = document.querySelectorAll(".player-options  div > img")
let playerOpt = ''
let inimigoOpt = ''
let res =document.querySelector(".res")

function validarVitoria(){
    if(playerOpt == 'papel'){
        if(inimigoOpt == 'papel'){
            res.innerHTML = 'EMPATE'
        }else if(inimigoOpt == 'tesoura'){
            res.innerHTML = 'VOCÊ PERDEU'
        }else{
            res.innerHTML = 'VOCÊ GANHOU'
        }
    }
    if(playerOpt == 'pedra'){
        if(inimigoOpt == 'papel'){
            res.innerHTML = 'VOCÊ PERDEU'
        }else if(inimigoOpt == 'tesoura'){
            res.innerHTML = 'VOCÊ GANHOU'
        }else{
            res.innerHTML = 'EMPATE'
        }
    }
    if(playerOpt == 'tesoura'){
        if(inimigoOpt == 'papel'){
            res.innerHTML = 'VOCÊ GANHOU'
        }else if(inimigoOpt == 'tesoura'){
            res.innerHTML = 'EMPATE'
        }else{
            res.innerHTML = 'VOCÊ PERDEU'
        }
    }

}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3)

    const enemyOptions = document.querySelectorAll('.enemy-options div > img')
    resetEnemy()
    for(let i = 0; i< enemyOptions.length;i++){
        if(i == rand){
            enemyOptions[i].style.opacity = 1;
            inimigoOpt =enemyOptions[i].getAttribute('opt')
        }
    }
    function resetEnemy(){
        for(let i = 0; i <enemyOptions.length;i++){
            enemyOptions[i].style.opacity = 0.1;
             
        }
    }


    validarVitoria()
    
    
}


function resetOpacity(){
    for(let i = 0; i <elementos.length;i++){
        elementos[i].style.opacity = 0.1;  
    }
}

for(let i = 0; i <elementos.length;i++){
    elementos[i].addEventListener('click',function(){
        resetOpacity();
        elementos[i].style.opacity = 1;
        playerOpt = elementos[i].getAttribute('opt')

        inimigoJogar()
        
    })
}