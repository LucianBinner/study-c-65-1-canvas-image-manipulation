let photoFile = document.getElementById('photo-file')
let photoPreview = document.getElementById('photo-preview')
let image
let photoName

// Select and preview image
document
  .getElementById('select-image')
  .onclick = () => {
    photoFile.click()
  }

window.addEventListener('DOMContentLoaded', () => { // Executar depois que a DOM é carregada
  photoFile.addEventListener('change', () => {
    let file = photoFile.files.item(0) // Pegando a foto carregada 
    photoName = file.name
    let reader = new FileReader()  // Leito de arquivo no HTML
    reader.readAsDataURL(file)
    reader.onload = (event) => {
      image = new Image()
      image.src = event.target.result // Atribui o target da imagem carregada ao elemento image
      image.onload = onLoadImage
    }
  })
})

// Selection tool
let selection = document.getElementById('selection-tool')
let startX, startY, relativeStartX, relativeStartY, endX, endY, relativeEndX, relativeEndY
let startSelection = false
let events = {
  mouseover() {
    // this neste contexto é quem esta disparando o evento ou seja o image
    this.style.cursor = 'crosshair'
  },
  mousedown() {
    let { clientX, clientY, offsetX, offsetY } = event // Pega os eventos ocorridos
    startX = clientX
    startY = clientY
    relativeStartX = offsetX
    relativeStartY = offsetY
    startSelection = true
  },
  mousemove() {
    let { clientX, clientY } = event
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
    let { layerX, layerY } = event
    startSelection = false
    relativeEndX = layerX
    relativeEndY = layerY

    // Mostrar botão de corte
    cropButton.style.display = 'initial'
  }
}

Object.keys(events).forEach(eventName => {
  photoPreview.addEventListener(eventName, events[eventName]) // Passa cada um dos eventos de mouse para o elemento image 'photo-preview', forma simplificada para não ficar passando um por um
})

Object.keys(events).forEach(eventName => {
  selection.addEventListener(eventName, events[eventName]) // Passa cada um dos eventos de mouse para o elemento image 'photo-preview', forma simplificada para não ficar passando um por um
})

// Canvas
let canvas = document.createElement('canvas') // Criando o elemento do canvas
let ctx = canvas.getContext('2d') // Contexto do canvas

function onLoadImage() {
  let { width, height } = image
  canvas.width = width
  canvas.height = height

  // Limpar o contexto
  ctx.clearRect(0, 0, width, height)

  // Desenar a imagem no contexto do canvas
  ctx.drawImage(image, 0, 0)

  // Atualizar o preview da imagem
  photoPreview.src = canvas.toDataURL()
}

// Crop Image
let cropButton = document.getElementById('crop-image')
cropButton.onclick = () => {
  let { width: imgW, height: imgH } = image
  let { width: previewW, height: previewH } = photoPreview
  // Pegando o fator de largura e altura de imagem em relação ao preview com a selação
  let [widthFactor, heightFactor] = [
    +(imgW / previewW),
    +(imgH / previewH)
  ]
  // Pegando o tamanho do quadro de seção
  let [selectionWidth, selectionHeight] = [
    +selection.style.width.replace('px', ''),
    +selection.style.height.replace('px', ''),
  ]
  // Pegando o tamanho do corte da imagem
  let [croppedWidth, croppedHeight] = [
    +(selectionWidth * widthFactor),
    +(selectionHeight * heightFactor)
  ]
  let [actualX, actualY] = [
    +(relativeStartX * widthFactor),
    +(relativeStartY * heightFactor)
  ]
  // Pegar do contexto do canvas as regiões de corte da imagem
  let croppedImage = ctx.getImageData(actualX, actualY, croppedWidth, croppedHeight)
  // Limpar o contexto do canvas
  ctx.clearRect(0, 0, ctx.width, ctx.height)
  // Ajustar de proporções do canvas
  image.width = canvas.width = croppedWidth
  image.height = canvas.height = croppedHeight
  // Adicionar imagem cortada ao contexto do canvas
  ctx.putImageData(croppedImage, 0, 0)
  // Esconder a ferramenta de seleção
  selection.style.display = 'none'
  // Atualizar o preview da imagem
  photoPreview.src = canvas.toDataURL()
  // Mostrar botão de dowload
  dowloadButton.style.display = 'initial'
}

// Botão de dowload
let dowloadButton = document.getElementById('dowload')
dowloadButton.onclick = () => {
  const a = document.createElement('a')
  a.download = photoName + '-cropped.png'
  a.href = canvas.toDataURL()
  a.click()
}