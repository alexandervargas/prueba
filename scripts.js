document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

const all = document.getElementById('all');

all.addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const portfolio = JSON.parse( this.responseText);

            let htmlTemplate = '';
            portfolio.forEach( function(imagen) {
            htmlTemplate += `
            
            <div class="contenedor-img  ">  
            <img src="${imagen.url}"  alt="${imagen.url}" />  
        
        </div>
                
                `;
            
            });
            
        
            document.getElementById('portafolio').innerHTML = htmlTemplate;
        }
    }

    xhr.send();
    
});