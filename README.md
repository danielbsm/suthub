# Desafio front-end Suthub
 - Foi construído uma pequena aplicação Web com os requisitos solicitados.
 
 ## Requisitos:
 - Um formulário de cadastro que faça as seguintes validações e funcionalidades. Ao finalizar o preenchimento e clicar no botão “submit”, ele deve apresentar as informações cadastradas em uma nova página ou modal, devidamente organizadas:
 - Data de nascimento - campo em formato data brasileiro: máxima 65 anos, mínima 18 anos
 - Nome completo: ao menos 2 palavras
 - CPF: obrigatório e válido segundo a regra oficial
 - Espécie do pet - select obrigatório: opções “cão” ou “gato”
 - Raça do pet - select obrigatório: 5 raças quaisquer de “cão”, e mais 5 raças quaisquer de “gato”. O campo deve listar somente as raças adequadas dependendo do valor selecionado no campo anterior. Uma sexta opção em ambas as listas deve se chamar “outro”
 - Outro: caso selecionado no campo anterior, deverá aparecer um campo de texto obrigatório, do contrário ele não deverá aparecer e nem ser validado
 - Renda mensal - somente números e com um prepend de “R$”: valor mínimo de R$ 1000,00
 - CEP - obrigatório e formatado corretamente: implementar um buscador de CEP para trazer o endereço completo do CEP fornecido, para ser distribuído nos campos abaixo
 - Rua: obrigatório
 - Bairro: obrigatório
 - Cidade: obrigatório
 - Estado: obrigatório, somente 2 letras maiúsculas
 - Caso qualquer informação esteja incorreta ou incompleta, o formulário deverá mostrar para o usuário o que falta e onde.
 - Um botão que chama a API e traz dados sobre o Brasil, mostrando em tela todos os dados que ela disponibiliza
 - Consultando a API, uma lista de blocos regionais. Quando o usuário clicar em um dos itens dessa lista, a aplicação deve carregar os nomes dos países que pertencem ao bloco selecionado e suas respectivas coordenadas geográficas
 - Uma função de busca por país. O usuário deve poder digitar o nome de um país em um campo de texto, e a aplicação deve conseguir encontrar o país em questão ou qualquer país de nome similar, mostrando em tela seu nome correto e quais são seus idiomas oficiais
 - Ao clicar em um dos idiomas na tela, apresentado pela função anterior, a aplicação deve listar os nomes de todos os países que possuem o idioma em comum

## Demonstração
[Demo](https://suthub-alpha.vercel.app/)

## Instalação
- Baixe o repositório como arquivo zip ou faça um clone;
- Acesse o diretório suthub;
- Execute os comandos abaixo:
```
npm install
npm run serve
```
