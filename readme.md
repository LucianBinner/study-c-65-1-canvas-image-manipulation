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