function dataNavbar () {
    const navData = [["#mainheader","home"], ["#about","about"], ["#faq","faq"], ["#contact","contact"]];
    //const link = ["#mainheader", "#about", "#faq", "#contact"];
    //const liName = ["home", "about", "faq", "contact"]
    for(i = 0; i < navData.length; i++){
        for(j = 0; j < navData[i][j].length; i++){
            const li = document.createRange().createContextualFragment(`
                
                  <li><a href="${navData[i][0]}">${navData[i][1]}</a></li>
                
                `)
                const lista = document.querySelector('.lista');
                lista.append(li)
        }
    }
}

function dataFaq() {
    const dataMessages = ["what is the day of the dead?", "what is an ofrenda", "why in mexico", "what time is?", "there are zombies?"]
    for(i = 0; i < dataMessages.length; i++){
        const faqA = document.createRange().createContextualFragment(`
            
             <div class="div">
                    <a href="madre.html">${dataMessages[i]}</a>
                    <a href="madre.html"></a>
                </div>
            
            `)
            const faq_container = document.querySelector('.faq-container');
            faq_container.append(faqA)
            //const mensaje = dataMessages[i]
        }
        return console.log("gonorrea")
}



async function getData() {
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const character = await result.json();
    const jsonArr = character.results.map(elemento => Object.entries(elemento));
    const jsonSlice = character.results.slice(0, 4);
    console.log(character)
    console.log(jsonArr)
    character.results.forEach(element => {
        const randInt = randomData(1, jsonArr.length);
        const randIndex = randInt;
        for(i = 0; i < jsonSlice.length; i++){
            if(element.id == i){
                const flexbox = document.createRange().createContextualFragment(`
                    
                     <div class="flexbox">
                        <div class="border-card">
                            <img src="${jsonArr[randIndex][8][1]}" alt="">
                        </div>
                        <h2 class="title-card">${jsonArr[randIndex][1][1]}</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis distinctio repellendus totam id porro mollitia nihil natus aliquam praesentium dolores ipsum repellat ducimus excepturi, sit, officiis iure deleniti voluptas eligendi. Illum officia est voluptas? Mollitia distinctio, dignissimos et voluptatem dicta nisi rem cum obcaecati ab corporis autem quod. In, esse!</p>
                        <a href="madre.html" class="lok">read more</a>
                    </div>
                    
                    `)
                    const about_flex = document.querySelector('.about-flex');
                    about_flex.append(flexbox)
            }
        }
        function randomData(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        //const data = jsonArr[randIndex][8][1];
        //return data;
    });
}

getData()
dataFaq()
const btn_validar = document.getElementById('btn-validar');
const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const fecha = document.getElementById('fecha');
    const hora = document.getElementById('hora');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const messageArr = ["Nombre", "Email", "Fecha", "Hora", "Mensaje"];
    arr.push(nombre, email, fecha, hora, mensaje);
    for(i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            swal({
                title: `El campo ${messageArr[i]} no puede estar vacío`,
                icon: "error",
                 })
                 return false;
        }
    }
    if(!emailValido(email.value)){
        swal({
            title: `El campo ${messageArr[1]} no tiene el formato adecuado`,
            icon: "error",
             })
             return false;
    }
    swal({
        title: `Los datos fueron enviados satisfactoriamente`,
        icon: "success",
         })
    nombre.value = "";
    email.value = "";
    fecha.value = "";
    hora.value = "";
    mensaje.value = "";
    return true;
} 

const emailValido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function mensaje(){
    const mensaje = console.log("madre")
    const element = document.createRange().createContextualFragment(`
        
        <p>madre</p>
        
        `)
        const faq_container = document.querySelector('.faq-container');
        faq_container.append(element)
    return faq_container;
}

const link = document.querySelector('.lok');
link.addEventListener("click", getData)


//mensaje()
btn_validar.addEventListener("click", validar)
//getData()
dataNavbar()

