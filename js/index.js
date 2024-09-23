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
                        <a href="">read more</a>
                    </div>
                    
                    `)
                    const about_flex = document.querySelector('.about-flex');
                    about_flex.append(flexbox)
            }
        }
        function randomData(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    });
}

getData()