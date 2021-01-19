(() => {
    const $ul = document.getElementById("ul");
    const xhttp = new XMLHttpRequest();
    $fragment = document.createDocumentFragment();

    xhttp.onreadystatechange = function() {
        // console.log(this)
        if(this.readyState !== 4){
            // console.log(this)
            return;
        }
        if(this.status >= 200 && this.status <= 300){
            // console.log(this.responseText)
            let json = JSON.parse(this.responseText);
            console.log(json);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.textContent = `Nombre: ${el.name} \n 
                Email: ${el.email} \n
                Direccion: ${el.address["street"]}`;
                $fragment.appendChild($li);
            });
            $ul.appendChild($fragment);
        }else {
            return console.log("Ha ocurrido un error");
        }
        
        
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users");
    xhttp.send();
    // console.log(xhttp.readyState);

})();
    