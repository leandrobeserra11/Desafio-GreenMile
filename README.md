# Desafio-GreenMile
A proposta do desafio era criar um mini-projeto de automação de teste com cypress que execute o evento de long click, em um componente web e consiga validar se o tamanho em escala foi alterado para 225 x 225 pixels

# Etapas do desafio e dificuldades encontradas
+ Não conhecia o cypress então nada mais justo de começar estudando sobre assunto, meu primeiro passo foi pesquisar a documentação e buscar conteudos relacionados na internet.
+ Não tive dificuldades em preparar e configurar o ambiente, no site oficial tem todo o passo a passo 
  + (https://docs.cypress.io/guides/getting-started/installing-cypress.html#Switching-browsers)

+ Partindo para o desafio, tentei entender como o aplicação havia sido implementado e comecei a escrever meu teste.
  + Analizando a documentação encontrei o bloco de comandos [`"Simulate a “long press” event`](https://docs.cypress.io/api/commands/trigger.html#Simulate-a-%E2%80%9Clong-press%E2%80%9D-event) que na teoria executa o que precisava 
    ```
      cy.get('.target').trigger('mousedown')
      cy.wait(1000)
      cy.get('.target').trigger('mouseleave')
    ```
  + Supreendentemente o comando não funcionou. Após diversos teste acabei percebendo o código acima esta correto e o problema está na implementação da aplicação, já que ela utiliza o hammer.js como biblioteca de eventos. O que o código acima faz é disparar o respectivo evento do JS e o hammer dispara eventos diferentes. 
    + Após a descorbeta o proximo passa era identificar quais eventos o hammer dispara. Após pesquisas na internet e na documentação do hammer identifiquei o seguinte código:
    ```
       cy.get("element").trigger("pointerdown", { button: 0 })
    ```
    + Adaptando ao código temos o resultado final:
    ```
       cy.get('[data-cy=square]')
        .trigger('pointerdown', { button:0 })
        .wait(500)
        .trigger('pointerup', { button:0 })
    ```
  
# Para rodar o projeto

- Ao clonar o projeto abra a aplicação na sua IDE de preferência
- Rode o comando `$ npm install` para instalar as dependencias
- Adicionei o comando de inicialização do cypress no arquivo package.json. Para iniciar o Cypress basta digitar `$ npm run cypress:open`
