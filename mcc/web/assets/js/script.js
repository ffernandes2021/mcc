// chaves API

const apiKeyBg = "AIzaSyA_o09CgY0vrI1KvIxg0de8IRtNq3CS0Yg";
const apiKeyYt = "AIzaSyBMLlrpMVcBIz4KDcVx45x2SZW3zKL9opA";

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
    let sites = "<div class=\"box1 it\"><div class=\"box1\"><input class=\"form-control truncate\" name="+nsTitulo.concat(nsNumberTitulo)+" placeholder=\"Título\" type=\"text\"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nsDescricao.concat(nsNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\"></textarea></div><div class=\"box1\"><input class=\"form-control truncate\" name="+nsUrl.concat(nsNumberUrl)+" placeholder=\"https://\" type=\"text\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#sites .content").append(sites);
});

// novo: adiciona elemento (Sites: Blogger) 

let infoBg = "info-bg", infoNumberBg = 1;

$("#novo-sites-bg").click(function () {
    if ($(("#info-bg").concat(infoNumberBg)).length) { 
        infoNumberBg++;
    }
    let sitesBg = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Blog: URL\" type=\"text\"></div><div class=\"box1\" style=\"display:none;\"><input class=\"form-control truncate\" placeholder=\"Post: Path\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button class=\"btn btn-default active blog-id\" type=\"button\">Blog</button><button class=\"btn btn-default post-id\" type=\"button\">Post</button></div><div class=\"btn-group\"><button aria-controls="+infoBg.concat(infoNumberBg)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoBg.concat(infoNumberBg)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default search-bg\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoBg.concat(infoNumberBg)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.blogger.com/</p><p class=\"info-title\"><strong>Exemplo &#62; Blog URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://blogger.googleblog.com/</p><p class=\"info-title\"><strong>Exemplo &#62; Blog URL e Post Path</strong></p><p class=\"info-item\"><span>&bull;</span>https://blogger.googleblog.com/ e /2020/05/a-better-blogger-experience-on-web.html</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#sites .content").append(sitesBg);
});

// novo: adiciona elemento (Vídeos: YouTube)

let infoYt = "info-yt", infoNumberYt = 1;

$("#novo-videos-yt").click(function () {
    if ($(("#info-yt").concat(infoNumberYt)).length) { 
        infoNumberYt++;
    }    
    let videosYt = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Vídeo: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button class=\"btn btn-default active video-id\" type=\"button\">Vídeo</button><button class=\"btn btn-default playlist-id\" type=\"button\">Playlist</button></div><div class=\"btn-group\"><button aria-controls="+infoYt.concat(infoNumberYt)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoYt.concat(infoNumberYt)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default search-yt\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoYt.concat(infoNumberYt)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.youtube.com/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.youtube.com/watch?v=[videoID]<br><span>&bull;</span>https://www.youtube.com/playlist?list=[playlistID]</p><p class=\"info-title\"><strong>Exemplo > Vídeo ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>AyN73O2MVfg</p><p class=\"info-title\"><strong>Exemplo > Playlist ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#videos .content").append(videosYt);
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

// selecionar (Vídeos: YouTube): vídeo ID

$(document).on("click", ".video-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");    
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Vídeo: ID");    
    $(this).closest(".btn-toolbar").prev().find("input").focus();
});

// selecionar (Vídeos: YouTube): playlist ID

$(document).on("click", ".playlist-id", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");      
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Playlist: ID");
    $(this).closest(".btn-toolbar").prev().find("input").focus();
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
    localButtonInfo.removeClass("active");
    if(localButton1.hasClass("active")){
        if(valor1 === ""){
            localErro.html(erro.concat("É necessário fornecer a URL do blog para que a pesquisa seja realizada.</span></div>"));            
            localInput1.focus();
        } else {            
            localLoad.addClass("loading");
            getBloggerBlog(valor1, localConteudo, localErro, localLoad);
        }        
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
            getBloggerPost(valor1, valor2, localConteudo, localErro, localLoad);            
        }
    }    
});

// procurar (Vídeos: YouTube): vídeo e playlist

$(document).on("click", ".search-yt", function () {    
    valor1 = $.trim($(this).closest(".btn-toolbar").prev().find("input").val());
    localInput1 = $(this).closest(".btn-toolbar").prev().find("input");
    localButton1 = $(this).closest(".btn-toolbar").find(".video-id");
    localButtonInfo = $(this).closest(".btn-toolbar").find(".info");
    localConteudo = $(this).closest(".btn-toolbar").siblings(".content-elemento");
    localErro = $(this).closest(".btn-toolbar").siblings(".erro");
    localLoad = $(this).closest(".it");
    localInfo = $(this).closest(".btn-toolbar").next();    
    localErro.html("");
    localInfo.collapse("hide");
    localButtonInfo.removeClass("active");
    if(valor1 === ""){
        if(localButton1.hasClass("active")){
            localErro.html(erro.concat("É necessário fornecer o ID do vídeo para que a pesquisa seja realizada.</span></div>"));
        } else {
            localErro.html(erro.concat("É necessário fornecer o ID da playlist para que a pesquisa seja realizada.</span></div>"));
        }
        localInput1.focus();
    } else {
        localLoad.addClass("loading");        
        if(localButton1.hasClass("active")){
            getYoutubeVideo(valor1, localConteudo, localErro, localLoad);
        } else {
            getYoutubePlaylist(valor1, localConteudo, localErro, localLoad);
        }       
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

function getBloggerBlog(valor1, localConteudo, localErro, localLoad){
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
        conteudo = "<div class=\"box1\"><div class=\"box1\"><input type=\"hidden\" name="+nbgLogo.concat(nbgNumberLogo)+" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nbgTitulo.concat(nbgNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.name.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nbgDescricao.concat(nbgNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgUrl.concat(nbgNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.url+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgDatahora.concat(nbgNumberDatahora)+" placeholder=\"Data\" type=\"text\" value="+data.published+"></div></div></div>";           
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
        localLoad.removeClass("loading");  
    });     
}

// funções (Blogger: retorna post)

function getBloggerPost(valor1, valor2, localConteudo, localErro, localLoad){
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
            conteudo = "<div class=\"box1\"><div class=\"box1\"><input type=\"hidden\" name="+nbgLogo.concat(nbgNumberLogo)+" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nbgTitulo.concat(nbgNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nbgDescricao.concat(nbgNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.content+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgUrl.concat(nbgNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.url+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgDatahora.concat(nbgNumberDatahora)+" placeholder=\"Data\" type=\"text\" value="+data.published+"></div></div></div>";           
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
            localLoad.removeClass("loading");  
        });        
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
        localLoad.removeClass("loading");
    });             
}

// funções (YouTube: retorna vídeo)

let nytEmbed = "videos-yt-embed", nytNumberEmbed = 1;
let nytLogo = "videos-yt-logo", nytNumberLogo = 1;
let nytTitulo = "videos-yt-titulo", nytNumberTitulo = 1;
let nytDescricao = "videos-yt-descricao", nytNumberDescricao = 1;
let nytUrl = "videos-yt-url", nytNumberUrl = 1;
let nytCanal = "videos-yt-canal", nytNumberCanal = 1;

function getYoutubeVideo(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://www.googleapis.com/youtube/v3/videos?id="+valor1+"&key="+apiKeyYt+"&fields=items(player(embedHtml),snippet(title,description,channelTitle))&part=player,snippet", function(){})
    .done(function(data){
        if ($("[name=\"videos-yt-embed"+nytNumberEmbed+"\"]").length) { 
            nytNumberEmbed++;
            nytNumberLogo++; 
            nytNumberTitulo++; 
            nytNumberDescricao++; 
            nytNumberUrl++; 
            nytNumberCanal++; 
        }
        if(data["items"].length){
            logo = "<img alt=\"\" src=\"assets/img/youtube.png\">";
            conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input type=\"hidden\" name="+nytEmbed.concat(nytNumberEmbed)+" value="+data["items"][0].player.embedHtml.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+data["items"][0].player.embedHtml+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input type=\"hidden\" name="+nytLogo.concat(nytNumberLogo)+" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nytTitulo.concat(nytNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data["items"][0].snippet.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nytDescricao.concat(nytNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data["items"][0].snippet.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nytUrl.concat(nytNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://www.youtube.com/watch?v="+valor1+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nytCanal.concat(nytNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data["items"][0].snippet.channelTitle.replace(/\s/g,"&#160;")+"></div></div></div></div>";           
            localConteudo.html(conteudo);
            localConteudo.css("display","block");
        } else {
            localErro.html(erro.concat("HTTP 404: Vídeo não encontrado.</span></div>"));
        }
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {                
            case 403:
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Vídeo não pode ser incorporado.</span></div>"));
                break;
            case 404:
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Vídeo não encontrado.</span></div>"));
                break;
            default:                    
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Contate o Administrador do Sistema.</span></div>"));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

/* funções (YouTube: retorna playlist) */ 

function getYoutubePlaylist(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://www.googleapis.com/youtube/v3/playlists?id="+valor1+"&key="+apiKeyYt+"&fields=items(player(embedHtml),snippet(title,description,channelTitle))&part=player,snippet", function(){})
    .done(function(data){        
        if ($("[name=\"videos-yt-embed"+nytNumberEmbed+"\"]").length) { 
            nytNumberEmbed++;
            nytNumberLogo++; 
            nytNumberTitulo++; 
            nytNumberDescricao++; 
            nytNumberUrl++; 
            nytNumberCanal++; 
        }
        if(data["items"].length){
            logo = "<img alt=\"\" src=\"assets/img/youtube.png\">";
            conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input type=\"hidden\" name="+nytEmbed.concat(nytNumberEmbed)+" value="+data["items"][0].player.embedHtml.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+data["items"][0].player.embedHtml+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input type=\"hidden\" name="+nytLogo.concat(nytNumberLogo)+" value="+logo.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nytTitulo.concat(nytNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data["items"][0].snippet.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nytDescricao.concat(nytNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data["items"][0].snippet.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nytUrl.concat(nytNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://www.youtube.com/playlist?list="+valor1+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nytCanal.concat(nytNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data["items"][0].snippet.channelTitle.replace(/\s/g,"&#160;")+"></div></div></div></div>"; 
            localConteudo.html(conteudo);
            localConteudo.css("display","block");
        } else {
            localErro.html(erro.concat("HTTP 404: Playlist não encontrada.</span></div>"));                
        }
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {                
            case 403:
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Playlist não pode ser incorporada.</span></div>"));
                break;
            case 404:
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Playlist não encontrada.</span></div>"));
                break;
            default:                    
                localErro.html(erro.concat("HTTP ").concat(jqXHR.status).concat(": Contate o Administrador do Sistema.</span></div>"));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}