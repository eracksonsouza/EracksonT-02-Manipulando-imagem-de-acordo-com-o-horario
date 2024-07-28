function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `São exatamente ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = './src/images/fotodia.png'
        window.document.body.style.background = '#FFE754'
        
    }else if (hora >= 12 && hora < 18){
        img.src = '/src/images/fototarde.png'
        window.document.body.style.background = '#7C5D55'
    }else {
        img.src = '/src/images/fotonoite.png'
        window.document.body.style.background = '#362942'
    }
}