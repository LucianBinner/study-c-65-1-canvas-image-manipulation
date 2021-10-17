const photoFile = document.getElementById('photo-file')
const image = document.getElementById('photo-preview')

// Select and preview image
document
  .getElementById('select-image')
  .onclick = () => {
    photoFile.click()
  }

window.addEventListener('DOMContentLoaded', () => { // Executar depois que a DOM é carregada
  photoFile.addEventListener('change', () => {
    const file = photoFile.files.item(0) // Pegando a foto carregada 
    const reader = new FileReader()  // Leito de arquivo no HTML
    reader.readAsDataURL(file)
    reader.onload = (event) => {
      image.src = event.target.result // Atribui o target da imagem carregada ao elemento image
    }
  })
})

// Selection tool
const selection = document.getElementById('selection-tool')
let startX, startY, relativeStartX, relativeStartY, endX, endY, relativeEndX, relativeEndY
let startSelection = false
const events = {
  mouseover() {
    // this neste contexto é quem esta disparando o evento ou seja o image
    this.style.cursor = 'crosshair'
  },
  mousedown() {
    const { clientX, clientY, offsetX, offsetY } = event // Pega os eventos ocorridos
    startX = clientX
    startY = clientY
    relativeStartX = offsetX
    relativeStartY = offsetY
    startSelection = true
  },
  mousemove() {
    const { clientX, clientY } = event
    endX = clientX
    endY = clientY
    if (startSelection) {
      selection.style.display = 'initial'
      selection.style.top = startY + 'px'
      selection.style.left = startX + 'px'
      selection.style.width = (endX - startX) + 'px'
      selection.style.height = (endY - startY) + 'px'
    }
  },
  mouseup() {
    const { layerX, layerY } = event
    startSelection = false
    relativeEndX = layerX
    relativeEndY = layerY
  }
}

Object.keys(events).forEach(eventName => {
  image.addEventListener(eventName, events[eventName]) // Passa cada um dos eventos de mouse para o elemento image 'photo-preview', forma simplificada para não ficar passando um por um
})