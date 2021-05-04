# mcc

##Sobre
   
   Este é um projeto acadêmico chamado **mCC**, cuja sigla é **Materiais Complementares Compartilhados**. Nele proponho o desenvolvimento de uma aplicação Java Web, na qual é possível cadastrar, excluir, listar e compartilhar mCC's, estes, por sua vez, formados por mídias como vídeos, imagens, artigos, livros, links, filmes, áudios, entre outros.

   Este é um projeto em andamento, e semanalmente é incrementado e compartilhado aqui no GitHub.

   É um projeto **open source**, sob a licença [**GNU GPLv3**](https://www.gnu.org/licenses/gpl-3.0.pt-br.html). Assim, pode ser baixado, modificado, mas distribuído apenas sob a mesma licença.
   
   É um projeto que envolve inúmeras tecnologias, e incluirá programação front-end, back-end, além de banco de dados NoSQL. Comentarei todos os commits aqui mesmo com vocês para um melhor entendimento do projeto.

##Commit

    Commit 1:
    - Texto inicial do README.md;
    - Desenvolvimento de interface (estática) inicial;
    - Desenvolvimento de componentes de interface (dinâmicos) com jQuery (JS);
    - GET de blogs & posts do Blogger, utilizando requisições AJAX/JSON com jQuery para REST API;

##Tecnologias

    **Front-end**:
        **Linguagem:** HTML 5, CSS 3 & JSP (Scriptlets e JSTL)
        **Fonte:** Font Awesome 5.15.3 & Google Fonts (Carrois Gothic)
        **Framework:** Twitter Bootstrap 3.4.1
        **Biblioteca JS:** jQuery 3.4.1
        **API & relacionados:** XMLHttpRequest, AJAX, JSON, JSONP, Blogger API 3.0
    **Back-end:**
        **Java Web:** JavaBeans, DAO e Servlet API 2.5 (MVC Pattern)
        **Descritor:** web.xml
    **Database:** MongoDB Server & Shell 4.4.3
    **Server:** Apache Tomcat 8.0.27.0 (Port: 8084)
    **Builder:** Apache Ant 1.9.7
    **Platform:** Oracle Java EE 7 (OpenJDK 8)
    **IDE:** Apache NetBeans IDE 8.2
    **OS:** Canonical Linux Ubuntu 20.10
    **Browser:** Google Chrome 90.0.4430.93 (64 bits) & Mozilla Firefox 88.0 (64 bits)

##Implantação

    1. Instale o OpenJDK 8 (ou Java 8, se preferir);
    2. Defina as variáveis de ambiente do Java;
    3. Instale o NetBeans IDE 8.2. Inclua na instalação da IDE o servidor Apache Tomcat;
    4. Defina as variáveis de ambiente do Apache Tomcat;
    5. Instale o MongoDB 4.4.3. A instalação inclui o Server e o Shell. Lembre sempre de startar o database antes de executar a aplicação;
    6. Instale um browser de sua preferência;
    6. Baixe o zip do GitHub, descompacte e abra o projeto no NetBeans IDE.
    7. No NetBeans para construir (builder), clique sobre o projeto, em seguida F11. Para limpar e construir, Shift + F11. Para executar (run), F6. Para executar com depuração (debugger), pressione Ctrl + F5.
    8. Se tudo correr bem, a aplicação iniciará em um browser (personalizável), seguindo a notação: http://[IP]:[PORTA]/[CONTEXTO].

##API keys

    Ao fazer o download deste projeto, por favor, obtenha suas próprias API Keys nos links abaixo e substitua pelos valores correspondentes no arquivo script.js.
   
    1. Blogger ==> [Blogger API 3.0](https://developers.google.com/blogger)

##Contato

    e-mail: 