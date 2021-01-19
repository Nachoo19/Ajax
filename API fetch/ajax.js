const $ul = document.getElementById("ul");
const $ul2 = document.getElementById("ul2");

(() => {
    const $fragment = document.createDocumentFragment();
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then(json => {

        json.forEach(el => {
            // console.log(el);
            let $li = document.createElement("li");
            $li.textContent = `Nombre: ${el.name} \n 
                Email: ${el.email} \n
                Direccion: ${el.address["street"]}`;
            $fragment.appendChild($li);
        });
        $ul.appendChild($fragment)
    })
    .catch(err => {
        console.log(err["status"]);
        console.log("Estamos en el catch")

    })
    .finally(() => {
        console.log("Hola papasito")
    });
})();

// Fetch + Peticiones asincronas............

(() => {
    const $fragment = document.createDocumentFragment();

    async function getData() {
        try{ 
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
             json = await res.json();
            
             if(!res.ok) {
                throw {
                    status: res.status, 
                    statusText: res.statusText
                };
            }
             json.forEach(el => {
                let $li = document.createElement("li");
                $li.textContent = `Nombre: ${el.name} \n 
                    Email: ${el.email} \n
                    Direccion: ${el.address["street"]}`;
                $fragment.appendChild($li);
             })
             $ul2.appendChild($fragment);

        }catch(err){
            console.log("Estamos en el erorrrrrrrrr...");
            console.log(err);

        }finally {
            // Se ejecuta independientemente de su resultado
            console.log("Esto siempre se va a ejecutar.");
            const body = document.getElementsByTagName("body");
        }
        

    }
    getData()
})();
