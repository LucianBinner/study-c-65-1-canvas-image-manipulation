const photoFile = document.getElementById('photo-file')

document
    .getElementById('select-image')
    .onclick = () => {
        photoFile.click()
    }

window.addEventListener('DOMContentLoaded', () => { // Executar depois que a DOM é carregada
    photoFile.addEventListener('change', () => {
        let file = photoFile.files.item(0) // Pegando a foto carregada 
        let reader = new FileReader()  // Leito de arquivo no HTML
        reader.readAsDataURL(file)
        reader.onload = (event) => {
            let image = document.getElementById('photo-preview')
            image.src = event.target.result
        }
    })
})