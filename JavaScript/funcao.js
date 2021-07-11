function detectar_mobile(){

    if(navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iphone/i)
    || navigator.userAgent.match(/ipod/i)
    || navigator.userAgent.match(/ipad/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    )
        //mobile
        var desktopCss = document.getElementsByTagName("link").item(0);

        var mobileCss = document.createElement("link");
        mobileCss.setAttribute("rel", "stylesheet");
        mobileCss.setAttribute("type", "text/css");
        mobileCss.setAttribute("href", "Styles/mobStyle.css");

        document.getElementsByTagName("head").item(0).replaceChild(mobileCss, desktopCss);
    }

    function exibeMsm(){
        Swal.fire({
            title: '<p id="alerTit">Logo responderemos!</p>',
            text: 'Obrigado por enviar sua mensagem!', //não aceita html no texto
            icon:'success',
            footer: '<a href="" style="color:black;">Caso prefira, temos também whatsapp</a>',
            confirmButtonColor: '#008bd2',
            backdrop: `rgba(0,0,123,0.4)`, //cor de fundo
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
                },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
                }
    })}

    function input(){
        Swal.fire({
            width:'600px',
            icon:'question',
            title:'Faça sua pre-reserva',
            html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeTrIbOHivfcuMqr5v0iyrxpr-efpBjM-Grwz2m6E06lCAqUA/viewform?embedded=true" width="500" height="500" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>'
        })
    }

    function sizeOfThings(){
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        
        var screenWidth = screen.width;
        var screenHeight = screen.height;
        
        document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
        document.querySelector('.screen-size').innerHTML = screenWidth + 'x' + screenHeight;
      
      };
      window.addEventListener('resize', function(){
        sizeOfThings();
    });