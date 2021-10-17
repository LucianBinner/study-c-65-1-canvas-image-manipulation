## Ajuste iniciais
* [x] Ajustar os arquivos base da aplicação 
* [x] Criar o elemento button#select-image>input#foto-file[type=file] para selecionar Imagem
* [x] Estilizar botão de upload para enconder o campo do arquivo

## Select & Preview image
* [x] Criar o arquivo script.js
* [x] Adicionar evento 'click' no elemento #select-image, que irá executar a funcionalidade de clicar no elemento #photo-file
* [x] Ao terminar o evento de carregar a DOM
* [x] Adicionar evento 'change' no elemento #photo-file
* [x] Criar im novo FileReader()
* [x] Usar a funcionalidade .readAsDataURL() para leitura do arquivo
* [x] Ao terminar de ler o arquivo, adicionar o src do elemento img#photo-preview

## Selection tool
* [x] Criar elmento #selection-tool no html
* [x] Estilizar o elemento
* [x] No JS, criar eventos do mouse
  * [x] mouseover, mousedown, mousemove, mouseup
* [x] Registrar eventos
* [x] Adicionar funcionalidade aos eventos
  * [x] mouseover: crosshair no cursor
  * [x] mousedown:
    * [x] Registrar posicionamentos iniciais de X e Y (absolutos e relativos)
    * [x] Adicionar flag de inicio de seleção
  * [x] mousemove:
    * [x] Registrar posicionamentos finais de X e Y
    * [x] Atualizar estilos visuais da seleção
  * [x] mouseup:
    * [x] Registrar posicionamento final (relativo) do X e Y
    * [x] Remover flag de inicio de seleção

## HTML5 Canvas API
* [x] Interface para desenhar via JS e HTML
* [x] Animações, gráficos e games, visualizador de dados, `manipulação de photos` e até processamento de vídeos em tempo real
* [x] Possui um foco em gráficos 2D
* [x] Para 3D poderíamos usar WebGL API, que também usará a tag `<canvas>`*
* [x] Para nós, será de extrema importância utilizar canvas, pois iremos manipular a imagem (crop), e só conseguimos fazer esse corte via canvas.

## Utilizar o canvas ao invés da imagem 
* [x] Criar o elemento canvas
* [x] Criar o contexto do elemento
* [x] Ao terminar de carregar a imagem:
  * [x] Ajustar a largura e altura do canvas
  * [x] Limpar o contexto
  * [x] Desenhar a imagem no contexto
  * [x] Atualizar o preview de imagem, agora, com o conteúdo do canvas ao invés da imagem

## Cortar a imagem
* [x] Adicionar element button#crop-image
* [x] Mostrar somente quando finalizar a seleção
* [x] Adicionar evento 'click' para quando clicar no botão
* [x] Calcular corte proporcional ao tamanho da imagem na tela 
  * [x] Calcular e armazenar o fator proporcional da imagem 
    * [x] fatorWidth: divida a largura da foto pela largura do preview 
    * [x] fatorHeight: divida a altura da foto pela altura do preview
  * [x] Multiplicar a largura da selação pela divisão do fator de largura
  * [x] Fazer o mesmo acima para altura
* [x] Pegar do contexto do canvas, a região selecionada
  * [x] Calcular e guardar a posição X e Y verdadeiras, para utilizar no ctx
    * [x] Para pegar o X: Multiplicar a posição relativa do X pelo fatorWidth
    * [x] Para pegar o Y: Multiplicar a posição relativa do Y pelo fatorHeight
* [x] Limpar canvas
* [x] Ajustar largura e altura do canvas e da imagem
* [x] Adicionar a imagem cropada ao contexto do canvas
* [x] Esconder a ferramenta de seleção
* [x] Atualizar o preview da imagem