const d = document,
    $main = d.querySelector("main");

const getHTML = (options) => {
    let {url,succes,error} = options;
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status <300){
            let html = xhr.responseText;
            succes(html);
        }else {
            let message = xhr.statusText || "Ocurrio un error";
            error(`Error ${xhr.status}: ${message}`)
        }
    });
    xhr.open("GET",url);
    xhr.setRequestHeader("Content-type", "text/html;charset=utf-8")
    xhr.send();
}

d.addEventListener("DOMContentLoaded", e => {
    getHTML({
        url:"assets/home.html",
        succes: (html) => {
            $main.innerHTML = html;
        },
        error: (err) => {
            $main.innerHTML = `<h1>${err}</h1>`;
        }
    })
})
d.addEventListener("click", e => {
    e.preventDefault();

    if(e.target.matches(".menu a")){
        console.log();
        getHTML({
            url: e.target.href,
            succes: (html) => {
                $main.innerHTML = html;
            },
            error: (err) => {
                $main.innerHTML = `<h1>${err}</h1>`;
            }
        })
    }
})