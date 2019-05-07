const comp = ['steen', 'papier', 'schaar']

function steen(){
    
    // console.log(Math.floor(Math.random() * 3));
    // console.log(comp[Math.floor(Math.random()*3)]);

    switch(comp[Math.floor(Math.random()*3)]){
        case "steen":
            result.innerHTML = "Jij koos steen, de computer koos steen, het is gelijkspel!"; 
            break;
        case "papier":
            result.innerHTML = "Jij koos steen, de  computer koos papier, jij verliest. :("    
            break;
        case "schaar":
            result.innerHTML = "Jij koos steen, de computer koos schaar, jij wint! :)"
            break;
        default:
            result.innerHTML = "Er is iets fout gegaan, kies opnieuw"
            break;
    }
}

function papier(){
    switch(comp[Math.floor(Math.random()*3)]){
        case "papier":
            result.innerHTML = "Jij koos papier, de computer koos steen, jij wint! :)"; 
            break;
        case "papier":
            result.innerHTML = "Jij koos papier, de  computer koos papier, het is gelijkspel!"    
            break;
        case "papier":
            result.innerHTML = "Jij koos papier, de computer koos schaar, jij verliest :("
            break;
        default:
            result.innerHTML = "Er is iets fout gegaan, kies opnieuw"
            break;
    }
}

function schaar(){
    switch(comp[Math.floor(Math.random()*3)]){
        case "schaar":
            result.innerHTML = "Jij koos schaar, de computer koos steen, jij verliest"; 
            break;
        case "schaar":
            result.innerHTML = "Jij koos schaar, de  computer koos papier, ij wint! :)"    
            break;
        case "schaar":
            result.innerHTML = "Jij koos schaar, de computer koos schaar, het is gelijkspel!"
            break;
        default:
            result.innerHTML = "Er is iets fout gegaan, kies opnieuw"
            break;
    }
}