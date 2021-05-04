// chaves API

const apiKeyBg = "AIzaSyA_o09CgY0vrI1KvIxg0de8IRtNq3CS0Yg";

// mensagem de erro

const erro = "<div class=\"alert alert-danger alert-dismissible\"><i class=\"fas fa-exclamation-circle\"></i><button class=\"close\" data-dismiss=\"alert\" type=\"button\"><span aria-hidden=\"true\">&times;</span></button><span>";

// subcomponente

let conteudo;

// locais

let localInput1;
let localInput2;
let localButton1;
let localButton2;
let localButtonInfo;
let localConteudo; 
let localErro;
let localLoad;
let localInfo;

// valores

let valor1;
let valor2;

// logo

let logo;

// novo: adiciona elemento (Sites)

let nsTitulo = "sites-titulo", nsNumberTitulo = 1;
let nsDescricao = "sites-descricao", nsNumberDescricao = 1;
let nsUrl = "sites-url", nsNumberUrl = 1;

$("#novo-sites").click(function () {    
    if ($("[name=\"sites-titulo"+nsNumberTitulo+"\"]").length) { 
        nsNumberTitulo++; 
        nsNumberDescricao++; 
        nsNumberUrl++; 
    }
    let sites = "<div class=\"box it\"><div class=\"box\"><input class=\"form-control truncate\" name="+nsTitulo.concat(nsNumberTitulo)+" placeholder=\"Título\" type=\"text\"></div><div class=\"box\"><textarea class=\"form-control\" name="+nsDescricao.concat(nsNumberDescricao)+" placeholder=\"Descrição\" rows=\"7\"></textarea></div><div class=\"box\"><input class=\"form-control truncate\" name="+nsUrl.concat(nsNumberUrl)+" placeholder=\"https://\" type=\"text\"></div><div class=\"box btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#sites .content").append(sites);
});

// novo: adiciona elemento (Sites: Blogger) 

let infoBg = "info-bg", infoNumberBg = 1;

$("#novo-sites-bg").click(function () {
    if ($(("#info-bg").concat(infoNumberBg)).length) { 
        infoNumberBg++;
    }
    let sitesBg = "<div class=\"box it\"><div class=\"erro\"></div><div class=\"box\"><input class=\"form-control truncate\" placeholder=\"Blog: URL\" type=\"text\"></div><div class=\"box\" style=\"display:none;\"><input class=\"form-control truncate\" placeholder=\"Post: Path\" type=\"text\"></div><div class=\"btn-toolbar box\"><div class=\"btn-group\"><button class=\"btn btn-default active blog-id\" type=\"button\">Blog</button><button class=\"btn btn-default post-id\" type=\"button\">Post</button></div><div class=\"btn-group\"><button aria-controls="+infoBg.concat(infoNumberBg)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoBg.concat(infoNumberBg)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default search-bg\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoBg.concat(infoNumberBg)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.blogger.com/</p><p class=\"info-title\"><strong>Exemplo &#62; Blog URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://blogger.googleblog.com/</p><p class=\"info-title\"><strong>Exemplo &#62; Blog URL e Post Path</strong></p><p class=\"info-item\"><span>&bull;</span>https://blogger.googleblog.com/ e /2020/05/a-better-blogger-experience-on-web.html</p></div></div><div class=\"box content-elemento\"></div><div class=\"box btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#sites .content").append(sitesBg);
});

// selecionar (Sites: Blogger): blog URL

$(document).on("click", ".blog-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");
    $(this).closest(".btn-toolbar").prev().css("display","none"); 
    $(this).closest(".btn-toolbar").siblings(".erro").next().find("input").focus();
});

// selecionar (Sites: Blogger): post Path

$(document).on("click", ".post-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active"); 
    $(this).closest(".btn-toolbar").prev().css("display","block");
    $(this).closest(".btn-toolbar").siblings(".erro").next().find("input").focus();
}); 

// procurar (Sites: Blogger): blog e post

$(document).on("click", ".search-bg", function () {
    valor1 = $.trim($(this).closest(".btn-toolbar").prev().prev().find("input").val());
    valor2 = $.trim($(this).closest(".btn-toolbar").prev().find("input").val());    
    localInput1 = $(this).closest(".btn-toolbar").prev().prev().find("input");    
    localInput2 = $(this).closest(".btn-toolbar").prev().find("input");
    localButton1 = $(this).closest(".btn-toolbar").find(".blog-id");
    localButtonInfo = $(this).closest(".btn-toolbar").find(".info");
    localConteudo = $(this).closest(".btn-toolbar").siblings(".content-elemento");
    localErro = $(this).closest(".btn-toolbar").siblings(".erro");
    localLoad = $(this).closest(".it");
    localInfo = $(this).closest(".btn-toolbar").next();    
    localErro.html("");    
    localInfo.collapse("hide");
    if(localButton1.hasClass("active")){
        if(valor1 === ""){
            localErro.html(erro.concat("É necessário fornecer a URL do blog para que a pesquisa seja realizada.</span></div>"));            
            localInput1.focus();
        } else {            
            localLoad.addClass("loading");
            getBloggerBlog(valor1, localConteudo, localErro, localLoad, localButtonInfo);
        }
        localButtonInfo.removeClass("active");
    } else {
        if(valor1 === "" && valor2 === ""){
            localErro.html(erro.concat("É necessário fornecer a URL do blog e o Path do post para que a pesquisa seja realizada.</span></div>"));
            localInput1.focus();
        } else if(valor1 === ""){
            localErro.html(erro.concat("É necessário fornecer a URL do blog para que a pesquisa seja realizada.</span></div>"));
            localInput1.focus();
        } else if(valor2 === ""){
            localErro.html(erro.concat("É necessário fornecer o Path do post para que a pesquisa seja realizada.</span></div>"));
            localInput2.focus();            
        } else {
            localLoad.addClass("loading");
            getBloggerPost(valor1, valor2, localConteudo, localErro, localLoad, localButtonInfo);            
        }
        localButtonInfo.removeClass("active");
    }    
});

// info: exibe/oculta info do elemento

$(document).on("click", ".info", function () {    
    if(!$(this).hasClass("collapsed")){        
        $(this).addClass("active");
    } else {        
        $(this).removeClass("active");
    }    
});

// excluir: remove elemento

$(document).on("click", ".excluir", function () {
    $(this).closest(".it").remove();
});

// gravar: valida elemento(s) e submete o form

$("#gravar").click(function(){
   // alguma coisa
});

// cancelar: retorna home

$("#cancelar").click(function(){
   // alguma coisa //
});

// funções (Blogger: retorna blog)

let nbgLogo = "sites-bg-logo", nbgNumberLogo = 1;
let nbgTitulo = "sites-bg-titulo", nbgNumberTitulo = 1;
let nbgDescricao = "sites-bg-descricao", nbgNumberDescricao = 1;
let nbgUrl = "sites-bg-url", nbgNumberUrl = 1;
let nbgDatahora = "sites-bg-datahora", nbgNumberDatahora = 1;

function getBloggerBlog(valor1, localConteudo, localErro, localLoad, localButtonInfo){
    $.getJSON("https://www.googleapis.com/blogger/v3/blogs/byurl?url="+valor1+"&key="+apiKeyBg+"&fields=name,description,url,published", function(){})
    .done(function(data){        
        if ($("[name=\"sites-bg-logo"+nbgNumberLogo+"\"]").length) { 
            nbgNumberLogo++; 
            nbgNumberTitulo++; 
            nbgNumberDescricao++; 
            nbgNumberUrl++; 
            nbgNumberDatahora++; 
        }
        logo = "<img alt=\"\" src=\"assets/img/blogger.png\">";       
        conteudo = "<div class=\"box\"><div class=\"box\"><input type=\"hidden\" name="+nbgLogo.concat(nbgNumberLogo)+" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box\"><input class=\"form-control truncate\" name="+nbgTitulo.concat(nbgNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.name.replace(/\s/g,"&#160;")+"></div><div class=\"box\"><textarea class=\"form-control\" name="+nbgDescricao.concat(nbgNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgUrl.concat(nbgNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.url+"></div><div class=\"box col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgDatahora.concat(nbgNumberDatahora)+" placeholder=\"Data\" type=\"text\" value="+data.published+"></div></div></div>";           
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {            
            case 404:                
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Blog não encontrado.</span></div>"));
                break;
            default:                
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Contate o Administrador do Sistema.</span></div>"));
                break;
        }
    })
    .always(function() {
        localButtonInfo.removeClass("active");
        localLoad.removeClass("loading");  
    });     
}

// funções (Blogger: retorna post)

function getBloggerPost(valor1, valor2, localConteudo, localErro, localLoad, localButtonInfo){
    $.getJSON("https://www.googleapis.com/blogger/v3/blogs/byurl?url="+valor1+"&key="+apiKeyBg+"&fields=id", function(){})
    .done(function(data){
        $.getJSON("https://www.googleapis.com/blogger/v3/blogs/"+data.id+"/posts/bypath?path="+valor2+"&key="+apiKeyBg+"&fields=title,content,url,published", function(){})
        .done(function(data){
            if ($("[name=\"sites-bg-logo"+nbgNumberLogo+"\"]").length) { 
                nbgNumberLogo++; 
                nbgNumberTitulo++; 
                nbgNumberDescricao++; 
                nbgNumberUrl++; 
                nbgNumberDatahora++; 
            }            
            logo = "<img alt=\"\" src=\"assets/img/blogger.png\">";
            conteudo = "<div class=\"box\"><div class=\"box\"><input type=\"hidden\" name="+nbgLogo.concat(nbgNumberLogo)+" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box\"><input class=\"form-control truncate\" name="+nbgTitulo.concat(nbgNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.title.replace(/\s/g,"&#160;")+"></div><div class=\"box\"><textarea class=\"form-control\" name="+nbgDescricao.concat(nbgNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.content+"</textarea></div><div class=\"row\"><div class=\"box col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgUrl.concat(nbgNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.url+"></div><div class=\"box col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgDatahora.concat(nbgNumberDatahora)+" placeholder=\"Data\" type=\"text\" value="+data.published+"></div></div></div>";           
            localConteudo.html(conteudo);
            localConteudo.css("display","block");
        })
        .fail(function(jqXHR){
            localConteudo.css("display","none");
            switch (jqXHR.status) {
                case 404:                    
                    localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Post não encontrado.</span></div>"));
                    break;
                default:                    
                    localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Contate o Administrador do Sistema.</span></div>"));
                    break;
            }
        })
        .always(function() {
            localButtonInfo.removeClass("active");
            localLoad.removeClass("loading");  
        });        
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        localButtonInfo.removeClass("active");
        switch (jqXHR.status) {
            case 404:                
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Blog não encontrado.</span></div>"));                
                break;
            default:                
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Contate o Administrador do Sistema.</span></div>"));                
                break;
        }
        localLoad.removeClass("loading");
    });             
}