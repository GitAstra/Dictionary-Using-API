console.log('Js Linked');


let form = document.querySelector('form').addEventListener("submit", function(e){

    let lists = document.getElementsByClassName('list-group-item');
    let domMeanings = document.querySelector('.list-group');

    if(lists.length != 0){
    domMeanings.innerHTML = '';
    }
    
        let word = document.querySelector('.word').value;

        let result1 = document.querySelector('.result-1');

    fetchWord(word).then(function(data){
        result1.innerHTML = 'You searched for ' + `"${data[0].word}"` + '.';
        // console.log(this.status);
        let result2 = document.querySelector('.result-2'); 
        result2.innerHTML = 'Some meanings for ' + `"${data[0].word}" ` + 'are -' 
        
        let arr = data[0].meanings;
        console.log(arr);
        arr.forEach(function(element, index){
            let meaning = element.definitions[0];
            console.log(meaning.definition);
           
            let domMeanings = document.querySelector('.list-group');
            

            let ui = ``;

            ui = `
            <li class="list-group-item d-flex align-items-center">${index + 1 + '.'}  ${meaning.definition}</li>
            `  
            domMeanings.innerHTML += ui;

        })

    }).catch(()=>{let result1 = document.querySelector('.result-1');
            result1.innerHTML = "Unable to find the word you entered"
    });



    e.preventDefault();
    this.reset();
})


async function fetchWord(word){
    
    let words = word;

    console.log(status);

    let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`);

    let meaning = await response.json();


    return meaning;

}

