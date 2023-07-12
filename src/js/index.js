// 1 - Traz todos os personagens para o js para verificação do evento do mouse.
const characters = document.querySelectorAll('.character');

// 2 - adiciona a classe selecionado ao personagem que o cursor do mouse percorrer.
characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        // Adaptação para visualizar por celular
        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'})
        }
        
        // 3 - verificar se já há um personagem selecionado e remover a seleção para substitui-lo. 
        removeSelection();

        character.classList.add('selected');


        //objetivo 2 - Formatar visualização individual do personagem

        // 1 - Alterar imagem 
        changeImage(character);
        
        // 2 - Alterar nome
        changeName(character);

        // 3 - Alterar descrição
        changeDescription(character);


        
    })
})

function changeDescription(character) {
    const characterDescription = document.getElementById('character-description');
    characterDescription.innerText = character.getAttribute('data-description');
}

function changeName(character) {
    const characterName = document.getElementById('character-name');
    characterName.innerText = character.getAttribute('data-name');
}

function changeImage(character) {
    const imgCharacter = document.querySelector('.big-character');
    const idCharacter = character.attributes.id.value;
    imgCharacter.src = `./src/imagens/card-${idCharacter}.png`;
}

function removeSelection() {
    const selectedCharacter = document.querySelector('.selected');
    selectedCharacter.classList.remove('selected');
}
