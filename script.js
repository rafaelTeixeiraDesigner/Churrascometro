function calcular () {

            console.log("Calculando")

            let inputAdultos = document.getElementById("adultos");
            let inputCriancas = document.getElementById("criancas");
            let inputDuracao = document.getElementById("duracao");
            let resultContent = document.getElementById("resultContent");

            let duracao = inputDuracao.value
            let carnePP = ""

            if (duracao < 6)
            carnePP = 500
            else
            carnePP = 700

            let refriPP = ""
            if (duracao < 6)
            refriPP = 500
            else
            refriPP = 600

            let carneTotal = ((inputAdultos.value * carnePP) + (inputCriancas.value * carnePP / 2)) /1000;
            let cervejaTotal = (Math.ceil((inputAdultos.value * 1700)/473)); 
            let refriTotal = (Math.ceil(((inputAdultos.value * refriPP)/2000) + ((inputCriancas.value *refriPP)/1000))) ;

            resultContent.innerHTML = `<p id=resultFunction>Para fazer um <span id=colorRed>Churrasco Perfeito!</span> com <span id=colorWhite>${inputDuracao.value} hora(s)</span> de duração, para <span id=colorWhite>${inputAdultos.value} adulto(s)</span> e <span id=colorWhite> ${inputCriancas.value} criança(s)</span>...
            <br><br> Você vai precisar de: <br><br> <span id=colorWhite2>${carneTotal}</span> kg(s) de <span id=colorBlack>Carne</span>
            <br> <span id=colorWhite2>${cervejaTotal}</span> lata(s) de <span id=colorBlack>Cerveja</span>
            <br> <span id=colorWhite2>${refriTotal}</span> <span id=colorBlack>refrigerante(s)</span> 2Lt.</span></p>`

            console.log("Carne total " + carneTotal + "(kg)")
            console.log("Cerveja total " + cervejaTotal + " (latões)")
            console.log("Refri total " + refriTotal + " Garrafas (2Lt)")
            console.log ("Carne por Pessoa " + carnePP + " gr")

            redContainer.setAttribute ('style', 'display: none')
            brownContainer.setAttribute ('style', 'display: inline-block')

            }

function reload () {

    redContainer.setAttribute ('style', 'display: inline-flex')
    brownContainer.setAttribute ('style', 'display: none')

}