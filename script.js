function gerar(){
    var txtn1 = document.querySelector('input#VPA')
    var txtn2 = document.querySelector('input#LPA')
    var txtn3 = document.querySelector('input#VA')
    var res = document.querySelector('div#res')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var n3 = Number(txtn3.value)
    if(n1==0 || n2 == 0 || n3== 0){
        alert("[ERRO] Por favor digite um número!")
    }
    else {
        var cp = (n1*n2)*22.5
            if(cp<0){
            cpn = Math.abs(cp)
            var vi = Math.sqrt(cpn)
            var s = (vi-n3)/vi
        }else {
            var vi = Math.sqrt(cp)
            var s = ((vi/n3)-1) *100
        }
        
        }
        if(s<= 0){
            
            resneg.innerHTML = `O valor intrínseco é ${vi.toFixed(0)}, e a margem de segurança calculada em porcentagem é %${s.toFixed(0)}`
            
        }else{
            respos.innerHTML = `O valor intrínseco é ${vi.toFixed(0)}, e a margem de segurança calculada em porcentagem é ${s.toFixed(0)}%`
        }
    }
