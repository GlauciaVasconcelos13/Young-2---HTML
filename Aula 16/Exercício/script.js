document.querySelectorAll(".drag&drop").forEach(inputElement => {
    const dropZoneElement = inputElement.closest(".conteiner");

    dropZoneElement.addEventListener('dragover', e => {
        dropZoneElement.classList.add('conteiner-mover')
    })
})