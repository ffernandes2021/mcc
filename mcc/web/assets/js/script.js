// chaves API

const apiKeyBg = "AIzaSyA_o09CgY0vrI1KvIxg0de8IRtNq3CS0Yg";
const apiKeyYt = "AIzaSyBMLlrpMVcBIz4KDcVx45x2SZW3zKL9opA";

// mensagem de erro
const returnError = (errorMessage) => `<div class=\"alert alert-danger alert-dismissible\">
                                            <i class=\"fas fa-exclamation-circle\"></i>
                                            <button class=\"close\" data-dismiss=\"alert\" type=\"button\">
                                                <span aria-hidden=\"true\">&times;</span>
                                            </button>
                                            <span>${errorMessage}</span>
                                        </div> `;

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

// outros

let embed;
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
    let videosYt = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Vídeo: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button class=\"btn btn-default active video-id\" type=\"button\">Vídeo</button><button class=\"btn btn-default playlist-id\" type=\"button\">Playlist</button></div><div class=\"btn-group\"><button aria-controls="+infoYt.concat(infoNumberYt)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoYt.concat(infoNumberYt)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoYt.concat(infoNumberYt)+0+" onclick=\"search('#"+infoYt.concat(infoNumberYt)+0+"','yt','.video-id')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoYt.concat(infoNumberYt)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.youtube.com/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.youtube.com/watch?v=[videoID]<br><span>&bull;</span>https://www.youtube.com/playlist?list=[playlistID]</p><p class=\"info-title\"><strong>Exemplo &#62; Vídeo ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>AyN73O2MVfg</p><p class=\"info-title\"><strong>Exemplo &#62; Playlist ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#videos .content").append(videosYt);
});

// novo: adiciona elemento (Vídeos: Vimeo)

let infoVm = "info-vm", infoNumberVm = 1;

$("#novo-videos-vm").click(function () {
    if ($(("#info-vm").concat(infoNumberVm)).length) { 
        infoNumberVm++;
    }
    let videosVm = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Vídeo: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button class=\"btn btn-default active video-id\" type=\"button\">Vídeo</button><button class=\"btn btn-default playlist-id\" type=\"button\">Playlist</button></div><div class=\"btn-group\"><button aria-controls="+infoVm.concat(infoNumberVm)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoVm.concat(infoNumberVm)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoVm.concat(infoNumberVm)+0+" onclick=\"search('#"+infoVm.concat(infoNumberVm)+0+"','vm','.video-id')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoVm.concat(infoNumberVm)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://vimeo.com/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://vimeo.com/[videoID]<br><span>&bull;</span>https://vimeo.com/showcase/[playlistID]</p><p class=\"info-title\"><strong>Exemplo &#62; Vídeo ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>288344114</p><p class=\"info-title\"><strong>Exemplo &#62; Playlist ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>5671290</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#videos .content").append(videosVm);    
});

// novo: adiciona elemento (Vídeos: Dailymotion)

let infoDm = "info-dm", infoNumberDm = 1;

$("#novo-videos-dm").click(function () {
    if ($(("#info-dm").concat(infoNumberDm)).length) { 
        infoNumberDm++;
    }
    let videosDm = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Vídeo: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button class=\"btn btn-default active video-id\" type=\"button\">Vídeo</button><button class=\"btn btn-default playlist-id\" type=\"button\">Playlist</button></div><div class=\"btn-group\"><button aria-controls="+infoDm.concat(infoNumberDm)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoDm.concat(infoNumberDm)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoDm.concat(infoNumberDm)+0+" onclick=\"search('#"+infoDm.concat(infoNumberDm)+0+"','dm','.video-id')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoDm.concat(infoNumberDm)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.dailymotion.com/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.dailymotion.com/video/[videoID]<br><span>&bull;</span>https://www.dailymotion.com/playlist/[playlistID]</p><p class=\"info-title\"><strong>Exemplo &#62; Vídeo ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>x5jjmaj</p><p class=\"info-title\"><strong>Exemplo &#62; Playlist ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>x3qd9s</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#videos .content").append(videosDm);    
});

// novo: adiciona elemento (Leitura: ERIC)

let infoEi = "info-ei", infoNumberEi = 1;

$("#novo-leitura-ei").click(function () {
    if ($(("#info-ei").concat(infoNumberEi)).length) { 
        infoNumberEi++; 
    }
    let leituraEi = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Recurso: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button aria-controls="+infoEi.concat(infoNumberEi)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoEi.concat(infoNumberEi)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoEi.concat(infoNumberEi)+0+" onclick=\"search('#"+infoEi.concat(infoNumberEi)+0+"','ei')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoEi.concat(infoNumberEi)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://eric.ed.gov/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://eric.ed.gov/?id=[resourceID]<sup>[1]</sup></p><p class=\"info-title\"><strong>Exemplo > Recurso ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>EJ742086<br><span>&bull;</span>EJ979670</p><hr><p class=\"info-note\">1. Também é possível obter o ID do recurso na URL, este, por meio do ERIC number.</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#leitura .content").append(leituraEi);
});

// novo: adiciona elemento (Leitura: Semantic Scholar)

let infoSc = "info-sc", infoNumberSc = 1;

$("#novo-leitura-sc").click(function () {
    if ($(("#info-sc").concat(infoNumberSc)).length) { 
        infoNumberSc++;
    }
    let leituraSc = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Recurso: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button aria-controls="+infoSc.concat(infoNumberSc)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoSc.concat(infoNumberSc)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoSc.concat(infoNumberSc)+0+" onclick=\"search('#"+infoSc.concat(infoNumberSc)+0+"','sc')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoSc.concat(infoNumberSc)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.semanticscholar.org/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.semanticscholar.org/paper/resourceName/[resourceID]<sup>[1]</sup></p><p class=\"info-title\"><strong>Exemplo > Recurso ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span><strong>S2 ID:</strong> 0796f6cd7f0403a854d67d525e9b32af3b277331</p><hr><p class=\"info-note\">1. O ID do recurso é também conhecido como S2 ID. Ainda no Semantic Scholar, outro formato é aceito, este nomeado como <strong>Corpus ID</strong>, mais conhecido como S2ORC (Semantic Scholar Open Research Corpus). Um exemplo deste, é CorpusID:37220927. Além destes, outros formatos podem ser utilizados como ID, tais como, DOI, ArXiv ID, MAG ID, ACL ID e PubMed ID. Veja exemplos:</p><ul class=\"info-note\"><li><strong>DOI:</strong> 10.1038/nrn3241</li><li><strong>ArXiv ID:</strong> arXiv:1705.10311</li><li><strong>MAG ID:</strong> MAG:112218234</li><li><strong>ACL ID:</strong> ACL:W12-3903</li><li><strong>PubMed ID:</strong> PMID:19872477</li></ul><p class=\"info-note\">Veja também os websites relacionados:</p><ul class=\"info-note\"><li><strong>Digital Object Identifier (DOI):</strong> https://www.doi.org/</li><li><strong>ArXiv:</strong> https://arxiv.org/</li><li><strong>Microsoft Academic Graph:</strong> https://academic.microsoft.com/</li><li><strong>Association for Computational Linguistics (ACL):</strong> https://www.aclweb.org/</li><li><strong>PubMed:</strong> https://pubmed.ncbi.nlm.nih.gov/</li><ul></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#leitura .content").append(leituraSc);
});

// novo: adiciona elemento (Leitura: DOAJ)

let infoDj = "info-dj", infoNumberDj = 1;

$("#novo-leitura-dj").click(function () { 
    if ($(("#info-dj").concat(infoNumberDj)).length) { 
        infoNumberDj++;
    }    
    let leituraDj = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Artigo: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button class=\"btn btn-default active artigo-id\" type=\"button\">Artigo</button><button class=\"btn btn-default periodico-id\" type=\"button\">Periódico</button></div><div class=\"btn-group\"><button aria-controls="+infoDj.concat(infoNumberDj)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoDj.concat(infoNumberDj)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoDj.concat(infoNumberDj)+0+" onclick=\"search('#"+infoDj.concat(infoNumberDj)+0+"','dj','.artigo-id')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoDj.concat(infoNumberDj)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://doaj.org/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://doaj.org/article/[articleID]<br><span>&bull;</span>https://doaj.org/toc/ISSN?rss<sup>[1]</sup></p><p class=\"info-title\"><strong>Exemplo > Artigo ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>0007d9a6157049488b3215a03eec160d</p><p class=\"info-title\"><strong>Exemplo > Periódico ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>91e7cecae9a74bc0888a7b4209aef7ba</p><hr><p class=\"info-note\">1. Para obter o ID do períodico, deves acessar a URL https://doaj.org/feed, e nesta, por meio da URL, localizar o atributo UUID, representado pelo elemento &#60;id&#62;urn:uuid:[journalID]&#60;/id&#62;.</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#leitura .content").append(leituraDj);
});

// novo: adiciona elemento (Leitura: PLOS)

let infoPs = "info-ps", infoNumberPs = 1;

$("#novo-leitura-ps").click(function () {
    if ($(("#info-ps").concat(infoNumberPs)).length) { 
        infoNumberPs++; 
    }
    let leituraPs = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Artigo: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button aria-controls="+infoPs.concat(infoNumberPs)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoPs.concat(infoNumberPs)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoPs.concat(infoNumberPs)+0+" onclick=\"search('#"+infoPs.concat(infoNumberPs)+0+"','ps')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoPs.concat(infoNumberPs)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://plos.org/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://journals.plos.org/plosone/article?id=[articleID]<br><span>&bull;</span>https://journals.plos.org/plosbiology/article?id=[articleID]<br><span>&bull;</span>https://journals.plos.org/ploscompbiol/article?id=[articleID]<br><span>&bull;</span>https://journals.plos.org/plosgenetics/article?id=[articleID]<br><span>&bull;</span>https://journals.plos.org/plosmedicine/article?id=[articleID]<br><span>&bull;</span>https://journals.plos.org/plosntds/article?id=[articleID]<br><span>&bull;</span>https://journals.plos.org/plospathogens/article?id=[articleID]</p><p class=\"info-title\"><strong>Exemplo &#62; Artigo ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>10.1371/journal.pone.0239612<br><span>&bull;</span>10.1371/journal.pbio.3000859<br><span>&bull;</span>10.1371/journal.pcbi.1007406<br><span>&bull;</span>10.1371/journal.pgen.1008928<br><span>&bull;</span>10.1371/journal.pmed.1003212<br><span>&bull;</span>10.1371/journal.pntd.0008428<br><span>&bull;</span>10.1371/journal.ppat.1008882</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#leitura .content").append(leituraPs);
});

// novo: adiciona elemento (Leitura: bioRxiv)

let infoBr = "info-br", infoNumberBr = 1;

$("#novo-leitura-br").click(function () {
    if ($(("#info-br").concat(infoNumberBr)).length) { 
        infoNumberBr++; 
    }
    let leituraBr = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Artigo: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button aria-controls="+infoBr.concat(infoNumberBr)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoBr.concat(infoNumberBr)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoBr.concat(infoNumberBr)+0+" onclick=\"search('#"+infoBr.concat(infoNumberBr)+0+"','br')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoBr.concat(infoNumberBr)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.biorxiv.org/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.biorxiv.org/content/[articleID]<sup>[1]</sup>[versionNumber]</p><p class=\"info-title\"><strong>Exemplo &#62; Artigo ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>10.1101/2020.10.09.333211</p><hr><p class=\"info-note\">1. Também é possível obter o ID do artigo na URL, este, por meio do DOI number. Exemplo: https://doi.org/[articleID].</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#leitura .content").append(leituraBr);
});

// novo: adiciona elemento (Leitura: GBIF)

let infoGf = "info-gf", infoNumberGf = 1;

$("#novo-leitura-gf").click(function () {
    if ($(("#info-gf").concat(infoNumberGf)).length) { 
        infoNumberGf++;
    }    
    let leituraGf = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Dado: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button class=\"btn btn-default active dado-id\" type=\"button\">Dado</button><button class=\"btn btn-default ocorrencia-id\" type=\"button\">Ocorrência</button><button class=\"btn btn-default especie-id\" type=\"button\">Espécie</button></div><div class=\"btn-group\"><button aria-controls="+infoGf.concat(infoNumberGf)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoGf.concat(infoNumberGf)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoGf.concat(infoNumberGf)+0+" onclick=\"search('#"+infoGf.concat(infoNumberGf)+0+"','gf','.dado-id')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoGf.concat(infoNumberGf)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.gbif.org/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://www.gbif.org/dataset/[datasetID]<br><span>&bull;</span>https://www.gbif.org/occurrence/[occurrenceID]<br><span>&bull;</span>https://www.gbif.org/species/[speciesID]</p><p class=\"info-title\"><strong>Exemplo > Dado ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>4fa7b334-ce0d-4e88-aaae-2e0c138d049e</p><p class=\"info-title\"><strong>Exemplo > Ocorrência ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>1095554046</p><p class=\"info-title\"><strong>Exemplo > Espécie ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>5219426</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#leitura .content").append(leituraGf);
});

// novo: adiciona elemento (Tecnologias: Sketchfab)

let infoSf = "info-sf", infoNumberSf = 1;

$("#novo-tecnologias-sf").click(function () {
    if ($(("#info-sf").concat(infoNumberSf)).length) { 
        infoNumberSf++;
    }    
    let tecnologiasSf = "<div class=\"box1 it\"><div class=\"erro\"></div><div class=\"box1\"><input class=\"form-control truncate\" placeholder=\"Modelo: ID\" type=\"text\"></div><div class=\"btn-toolbar box1\"><div class=\"btn-group\"><button class=\"btn btn-default active modelo-id\" type=\"button\">Modelo</button><button class=\"btn btn-default colecao-id\" type=\"button\">Coleção</button></div><div class=\"btn-group\"><button aria-controls="+infoSf.concat(infoNumberSf)+" aria-expanded=\"false\" class=\"btn btn-default info\" data-target=\"#"+infoSf.concat(infoNumberSf)+"\" data-toggle=\"collapse\" type=\"button\"><i class=\"fas fa-info-circle\"></i></button></div><div class=\"btn-group\"><button class=\"btn btn-default\" id="+infoSf.concat(infoNumberSf)+0+" onclick=\"search('#"+infoSf.concat(infoNumberSf)+0+"','sf','.modelo-id')\" type=\"button\"><i class=\"fas fa-search\"></i></button></div></div><div class=\"collapse\" id="+infoSf.concat(infoNumberSf)+"><div class=\"info-content\"><p class=\"info-title\"><strong>Website</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://sketchfab.com/</p><p class=\"info-title\"><strong>URL</strong></p><p class=\"info-item truncate\"><span>&bull;</span>https://sketchfab.com/3d-models/modelName-[modelID]<br><span>&bull;</span>https://sketchfab.com/userName/collections/collectionName<sup>[1]</sup></p><p class=\"info-title\"><strong>Exemplo &#62; Modelo ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>689199c40bb44602b8c44ac9a059f613</p><p><strong>Exemplo &#62; Coleção ID</strong></p><p class=\"info-item truncate\"><span>&bull;</span>84c476a3367a418ca31de3e15113d6b3</p><hr><p class=\"info-note\">1. Necessário clicar em EMBED para obter o ID da coleção, este, por meio do SRC https://sketchfab.com/playlists/embed?collection=[collectionID].</p></div></div><div class=\"box1 content-elemento\"></div><div class=\"box1 btn-right\"><button class=\"btn btn-danger excluir\" type=\"button\"><i class=\"fas fa-trash-alt\"></i>Excluir</button></div></div>";
    $("#tecnologias .content").append(tecnologiasSf);
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

// selecionar (Vídeos: YouTube, Vimeo e Dailymotion): vídeo ID

$(document).on("click", ".video-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");    
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Vídeo: ID");    
    $(this).closest(".btn-toolbar").prev().find("input").focus();
});

// selecionar (Vídeos: YouTube, Vimeo e Dailymotion): playlist ID

$(document).on("click", ".playlist-id", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");      
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Playlist: ID");
    $(this).closest(".btn-toolbar").prev().find("input").focus();
});

// selecionar (Leitura: DOAJ): artigo ID

$(document).on("click", ".artigo-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");    
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Artigo: ID");    
    $(this).closest(".btn-toolbar").prev().find("input").focus();
});

// selecionar (Leitura: DOAJ): periódico ID

$(document).on("click", ".periodico-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");    
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Periódico: ID");    
    $(this).closest(".btn-toolbar").prev().find("input").focus();
});

// selecionar (Leitura: GBIF): dado ID

$(document).on("click", ".dado-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Dado: ID");    
    $(this).closest(".btn-toolbar").prev().find("input").focus();
});

// selecionar (Leitura: GBIF): ocorrência ID

$(document).on("click", ".ocorrencia-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");    
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Ocorrência: ID");    
    $(this).closest(".btn-toolbar").prev().find("input").focus();
});

// selecionar (Leitura: GBIF): espécie ID

$(document).on("click", ".especie-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");    
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Espécie: ID");    
    $(this).closest(".btn-toolbar").prev().find("input").focus();
});

// selecionar (Tecnologias: Sketchfab): modelo ID

$(document).on("click", ".modelo-id", function () {
    $(this).addClass("active");    
    $(this).siblings().removeClass("active");    
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Modelo: ID");    
    $(this).closest(".btn-toolbar").prev().find("input").focus();
});

// selecionar (Tecnologias: Sketchfab): coleção ID

$(document).on("click", ".colecao-id", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");      
    $(this).closest(".btn-toolbar").prev().find("input").attr("placeholder","Coleção: ID");
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
        if (valor1 === "") {
            localErro.html(returnError("É necessário fornecer a URL do blog para que a pesquisa seja realizada."));         
            localInput1.focus();
        } else {            
            localLoad.addClass("loading");
            getBloggerBlog(valor1, localConteudo, localErro, localLoad);
        }        
    } else {
        if(valor1 === "" && valor2 === ""){
            localErro.html(returnError("É necessário fornecer a URL do blog e o Path do post para que a pesquisa seja realizada."));
            localInput1.focus();
        } else if(valor1 === ""){
            localErro.html(returnError("É necessário fornecer a URL do blog para que a pesquisa seja realizada."));
            localInput1.focus();
        } else if(valor2 === ""){
            localErro.html(returnError("É necessário fornecer o Path do post para que a pesquisa seja realizada."));
            localInput2.focus();            
        } else {
            localLoad.addClass("loading");
            getBloggerPost(valor1, valor2, localConteudo, localErro, localLoad);            
        }
    }    
});

// procurar: procura elemento

function search(id, elemento, tipo){    
    valor1 = $.trim($(id).closest(".btn-toolbar").prev().find("input").val());
    localInput1 = $(id).closest(".btn-toolbar").prev().find("input");
    localButton1 = $(id).closest(".btn-toolbar").find(tipo);
    localButtonInfo = $(id).closest(".btn-toolbar").find(".info");
    localConteudo = $(id).closest(".btn-toolbar").siblings(".content-elemento");
    localErro = $(id).closest(".btn-toolbar").siblings(".erro");
    localLoad = $(id).closest(".it");
    localInfo = $(id).closest(".btn-toolbar").next();    
    localErro.html("");
    localInfo.collapse("hide");
    localButtonInfo.removeClass("active");    
    if(valor1 === ""){
        switch(elemento){ 
            case "yt":
            case "vm":
            case "dm":
                if(localButton1.hasClass("active")){
                    localErro.html(returnError("É necessário fornecer o ID do vídeo para que a pesquisa seja realizada."));
                } else {
                    localErro.html(returnError("É necessário fornecer o ID da playlist para que a pesquisa seja realizada."));
                }                        
                break;
            case "ei":
            case "sc":
                localErro.html(returnError("É necessário fornecer o ID do recurso para que a pesquisa seja realizada."));
                break;
            case "dj":
                if(localButton1.hasClass("active")){
                    localErro.html(returnError("É necessário fornecer o ID do artigo para que a pesquisa seja realizada."));
                } else {
                    localErro.html(returnError("É necessário fornecer o ID do periódico para que a pesquisa seja realizada."));
                }                        
                break;
            case "ps":
            case "br":
                localErro.html(returnError("É necessário fornecer o ID do artigo para que a pesquisa seja realizada.")); 
                break;
            case "gf":
                if(localButton1.hasClass("active")){
                    localErro.html(returnError("É necessário fornecer o ID do dado para que a pesquisa seja realizada."));
                } else if(localButton1.next().hasClass("active")) {
                    localErro.html(returnError("É necessário fornecer o ID da ocorrência para que a pesquisa seja realizada."));
                } else {
                    localErro.html(returnError("É necessário fornecer o ID da espécie para que a pesquisa seja realizada."));
                }
                break;
            case "sf":
                if(localButton1.hasClass("active")){
                    localErro.html(returnError("É necessário fornecer o ID do modelo para que a pesquisa seja realizada."));
                } else {
                    localErro.html(returnError("É necessário fornecer o ID da coleção para que a pesquisa seja realizada."));
                }
        }        
        localInput1.focus();   
    } else {          
        localLoad.addClass("loading");
        switch(elemento){
            case "yt":
                if(localButton1.hasClass("active")){
                    getYoutubeVideo(valor1, localConteudo, localErro, localLoad);
                } else {
                    getYoutubePlaylist(valor1, localConteudo, localErro, localLoad);
                }
                break;
            case "vm":
                if(localButton1.hasClass("active")){
                    getVimeoVideo(valor1, localConteudo, localErro, localLoad);
                } else {
                    getVimeoPlaylist(valor1, localConteudo, localErro, localLoad);
                }
                break;
            case "dm":
                if(localButton1.hasClass("active")){
                    getDailymotionVideo(valor1, localConteudo, localErro, localLoad);
                } else {
                    getDailymotionPlaylist(valor1, localConteudo, localErro, localLoad);
                }
                break;
            case "ei":                                
                getEricRecurso(valor1, localConteudo, localErro, localLoad);
                break;
            case "sc":                                
                getSemanticScholarRecurso(valor1, localConteudo, localErro, localLoad);
                break;
            case "dj":
                if(localButton1.hasClass("active")){
                    getDoajArtigo(valor1, localConteudo, localErro, localLoad);
                } else {
                    getDoajPeriodico(valor1, localConteudo, localErro, localLoad);
                }
                break;
            case "ps":
                getPlosArtigo(valor1); 
                break;
            case "br":
                getBiorxivArtigo(valor1, localConteudo, localErro, localLoad);
                break;            
            case "gf":
                if(localButton1.hasClass("active")){
                    getGbifDado(valor1, localConteudo, localErro, localLoad);
                } else if(localButton1.next().hasClass("active")) {
                    getGbifOcorrencia(valor1, localConteudo, localErro, localLoad);
                } else {
                    getGbifEspecie(valor1, localConteudo, localErro, localLoad);
                }
                break;
            case "sf":
                if(localButton1.hasClass("active")){
                    getSketchfabModelo(valor1, localConteudo, localErro, localLoad);
                } else {
                    getSketchfabColecao(valor1, localConteudo, localErro, localLoad);
                }
                break;
        }                
    }        
}

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
        conteudo = "<div class=\"box1\"><div class=\"box1\"><input name="+nbgLogo.concat(nbgNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nbgTitulo.concat(nbgNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.name.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nbgDescricao.concat(nbgNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgUrl.concat(nbgNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.url+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgDatahora.concat(nbgNumberDatahora)+" placeholder=\"Data\" type=\"text\" value="+data.published+"></div></div></div>";           
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {            
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Blog não encontrado.`));
                break;
            default:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
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
            conteudo = "<div class=\"box1\"><div class=\"box1\"><input name="+nbgLogo.concat(nbgNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nbgTitulo.concat(nbgNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nbgDescricao.concat(nbgNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.content+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgUrl.concat(nbgNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.url+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbgDatahora.concat(nbgNumberDatahora)+" placeholder=\"Data\" type=\"text\" value="+data.published+"></div></div></div>";           
            localConteudo.html(conteudo);
            localConteudo.css("display","block");
        })
        .fail(function(jqXHR){
            localConteudo.css("display","none");
            switch (jqXHR.status) {
                case 404:
                    localErro.html(returnError(`HTTP ${jqXHR.status}: Post não encontrado.`));
                    break;
                default:                    
                    localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
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
                localErro.html(returnError(`HTTP ${jqXHR.status}: Blog não encontrado.`));                
                break;
            default:                
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));                
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
            conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input name="+nytEmbed.concat(nytNumberEmbed)+" type=\"hidden\" value="+data["items"][0].player.embedHtml.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+data["items"][0].player.embedHtml+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input name="+nytLogo.concat(nytNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nytTitulo.concat(nytNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data["items"][0].snippet.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nytDescricao.concat(nytNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data["items"][0].snippet.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nytUrl.concat(nytNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://www.youtube.com/watch?v="+valor1+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nytCanal.concat(nytNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data["items"][0].snippet.channelTitle.replace(/\s/g,"&#160;")+"></div></div></div></div>";           
            localConteudo.html(conteudo);
            localConteudo.css("display","block");
        } else {
            localConteudo.css("display","none");
            localErro.html(returnError("HTTP 404: Vídeo não encontrado."));
        }
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {                
            case 403:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Vídeo não pode ser incorporado.`));
                break;
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Vídeo não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (YouTube: retorna playlist) 

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
            conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input name="+nytEmbed.concat(nytNumberEmbed)+" type=\"hidden\" value="+data["items"][0].player.embedHtml.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+data["items"][0].player.embedHtml+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input name="+nytLogo.concat(nytNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nytTitulo.concat(nytNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data["items"][0].snippet.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nytDescricao.concat(nytNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data["items"][0].snippet.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nytUrl.concat(nytNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://www.youtube.com/playlist?list="+valor1+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nytCanal.concat(nytNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data["items"][0].snippet.channelTitle.replace(/\s/g,"&#160;")+"></div></div></div></div>"; 
            localConteudo.html(conteudo);
            localConteudo.css("display","block");
        } else {
            localConteudo.css("display","none");
            localErro.html(returnError("HTTP 404: Playlist não encontrada."));                
        }
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {                
            case 403:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Playlist não pode ser incorporada.`));
                break;
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Playlist não encontrada.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (Vimeo: retorna vídeo)

let nvmEmbed = "videos-vm-embed", nvmNumberEmbed = 1;
let nvmLogo = "videos-vm-logo", nvmNumberLogo = 1;
let nvmTitulo = "videos-vm-titulo", nvmNumberTitulo = 1;
let nvmDescricao = "videos-vm-descricao", nvmNumberDescricao = 1;
let nvmUrl = "videos-vm-url", nvmNumberUrl = 1;
let nvmCanal = "videos-vm-canal", nvmNumberCanal = 1;

function getVimeoVideo(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://vimeo.com/api/oembed.json?url=https://vimeo.com/"+valor1+"&width=640&height=360", function(){})
    .done(function(data){        
        if ($("[name=\"videos-vm-embed"+nvmNumberEmbed+"\"]").length) { 
            nvmNumberEmbed++;
            nvmNumberLogo++; 
            nvmNumberTitulo++; 
            nvmNumberDescricao++; 
            nvmNumberUrl++; 
            nvmNumberCanal++; 
        }        
        logo = "<img alt=\"\" src=\"assets/img/vimeo.png\">";
        conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input name="+nvmEmbed.concat(nvmNumberEmbed)+" type=\"hidden\" value="+data.html.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+data.html+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input name="+nvmLogo.concat(nvmNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nvmTitulo.concat(nvmNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nvmDescricao.concat(nvmNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nvmUrl.concat(nvmNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.provider_url.concat(valor1)+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nvmCanal.concat(nvmNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data.author_name.replace(/\s/g,"&#160;")+"></div></div></div></div>"; 
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {                
            case 403:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Vídeo não pode ser incorporado.`));
                break;
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Vídeo não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (Vimeo: retorna playlist)

function getVimeoPlaylist(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://vimeo.com/api/oembed.json?url=https://vimeo.com/showcase/"+valor1+"&width=640&height=360", function(){})
    .done(function(data){
        if ($("[name=\"videos-vm-embed"+nvmNumberEmbed+"\"]").length) { 
            nvmNumberEmbed++;
            nvmNumberLogo++; 
            nvmNumberTitulo++; 
            nvmNumberDescricao++; 
            nvmNumberUrl++; 
            nvmNumberCanal++; 
        }
        logo = "<img alt=\"\" src=\"assets/img/vimeo.png\">";
        conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input name="+nvmEmbed.concat(nvmNumberEmbed)+" type=\"hidden\" value="+data.html.replace("640","\"640\"").replace("360","\"360\"").replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+data.html.replace("640","\"640\"").replace("360","\"360\"")+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input name="+nvmLogo.concat(nvmNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nvmTitulo.concat(nvmNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nvmDescricao.concat(nvmNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nvmUrl.concat(nvmNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://vimeo.com/showcase/"+valor1+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nvmCanal.concat(nvmNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data.author_name.replace(/\s/g,"&#160;")+"></div></div></div></div>"; 
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {                
            case 403:
                localErro.html(returnError(`HTTP ${jqXHR.status}:  Playlist não pode ser incorporada.`));
                break;
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Playlist não encontrada.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (Dailymotion: retorna vídeo)

let ndmEmbed = "videos-dm-embed", ndmNumberEmbed = 1;
let ndmLogo = "videos-dm-logo", ndmNumberLogo = 1;
let ndmTitulo = "videos-dm-titulo", ndmNumberTitulo = 1;
let ndmDescricao = "videos-dm-descricao", ndmNumberDescricao = 1;
let ndmUrl = "videos-dm-url", ndmNumberUrl = 1;
let ndmCanal = "videos-dm-canal", ndmNumberCanal = 1;

function getDailymotionVideo(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.dailymotion.com/video/"+valor1+"?fields=embed_html,title,description,url,owner.screenname", function(){})
    .done(function(data){
        if ($("[name=\"videos-dm-embed"+ndmNumberEmbed+"\"]").length) { 
            ndmNumberEmbed++;
            ndmNumberLogo++; 
            ndmNumberTitulo++; 
            ndmNumberDescricao++; 
            ndmNumberUrl++; 
            ndmNumberCanal++; 
        }
        logo = "<img alt=\"\" src=\"assets/img/dailymotion.png\">";
        conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input name="+ndmEmbed.concat(ndmNumberEmbed)+" type=\"hidden\" value="+data.embed_html.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+data.embed_html+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input type=\"hidden\" name="+ndmLogo.concat(ndmNumberLogo)+" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+ndmTitulo.concat(ndmNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+ndmDescricao.concat(ndmNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndmUrl.concat(ndmNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.url+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndmCanal.concat(ndmNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data["owner.screenname"].replace(/\s/g,"&#160;")+"></div></div></div></div>";       
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {                
            case 403:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Vídeo não pode ser incorporado.`));
                break;
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Vídeo não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (Dailymotion: retorna playlist)

function getDailymotionPlaylist(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.dailymotion.com/playlist/"+valor1+"?fields=name,description,owner.screenname", function(){})
    .done(function(data){
        if ($("[name=\"videos-dm-embed"+ndmNumberEmbed+"\"]").length) { 
            ndmNumberEmbed++;
            ndmNumberLogo++; 
            ndmNumberTitulo++; 
            ndmNumberDescricao++; 
            ndmNumberUrl++; 
            ndmNumberCanal++; 
        }
        embed = "<iframe allowfullscreen height=\"360\" src=\"https://www.dailymotion.com/embed/playlist/"+valor1+"\" width=\"640\"></iframe>";
        logo = "<img alt=\"\" src=\"assets/img/dailymotion.png\">";
        conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input name="+ndmEmbed.concat(ndmNumberEmbed)+" type=\"hidden\" value="+embed.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+embed+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input name="+ndmLogo.concat(ndmNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+ndmTitulo.concat(ndmNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.name.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+ndmDescricao.concat(ndmNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndmUrl.concat(ndmNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://www.dailymotion.com/playlist/"+valor1+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndmCanal.concat(ndmNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data["owner.screenname"].replace(/\s/g,"&#160;")+"></div></div></div></div>";       
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {                
            case 403:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Playlist não pode ser incorporada.`));
                break;
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Playlist não encontrada.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (ERIC: retorna recurso)

let neiEmbed = "leitura-ei-embed", neiNumberEmbed = 1;
let neiLogo = "leitura-ei-logo", neiNumberLogo = 1;
let neiTitulo = "leitura-ei-titulo", neiNumberTitulo = 1;
let neiDescricao = "leitura-ei-descricao", neiNumberDescricao = 1;
let neiUrl = "leitura-ei-url", neiNumberUrl = 1;
let neiAutor = "leitura-ei-autor", neiNumberAutor = 1;
let neiTipoPublicacao = "leitura-ei-tipo-publicacao", neiNumberTipoPublicacao = 1;
let neiDescritor = "leitura-ei-descritor", neiNumberDescritor = 1;
let neiNomePeriodico = "leitura-ei-nome-periodico", neiNumberNomePeriodico = 1;
let neiInfoPeriodico = "leitura-ei-info-periodico", neiNumberInfoPeriodico = 1;

function getEricRecurso(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.ies.ed.gov/eric/?search=id:"+valor1+"&format=json&fields=title,author,description,id,publicationtype,subject,e_fulltextauth,source,sourceid", function(){})
    .done(function(data){
        try{  
            let conteudoTipo;
            if(data.response.docs[0].e_fulltextauth === 1){
                embed = "<iframe allowfullscreen height=\"360\" src=\"https://files.eric.ed.gov/fulltext/"+data.response.docs[0].id+".pdf\" width=\"640\"></iframe>";
                conteudoTipo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><div class=\"box1 responsive-iframe1\">"+embed+"</div></div><div class=\"box2 col-md-6 col-sm-12\">";
            } else {
                embed = "";
                conteudoTipo = "<div class=\"box1\">";
            }
            if ($("[name=\"leitura-ei-embed"+neiNumberEmbed+"\"]").length) { 
                neiNumberEmbed++;
                neiNumberLogo++;
                neiNumberTitulo++;
                neiNumberDescricao++;
                neiNumberUrl++;
                neiNumberAutor++; 
                neiNumberTipoPublicacao++;
                neiNumberDescritor++;
                neiNumberNomePeriodico++;
                neiNumberInfoPeriodico++; 
            }
            logo = "<img alt=\"\" src=\"assets/img/eric.png\">";
            conteudo = conteudoTipo+"<input name="+neiEmbed.concat(neiNumberEmbed)+" type=\"hidden\" value="+embed.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1\"><input name="+neiLogo.concat(neiNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+neiTitulo.concat(neiNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.response.docs[0].title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+neiDescricao.concat(neiNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.response.docs[0].description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+neiUrl.concat(neiNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://eric.ed.gov/?id="+data.response.docs[0].id+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+neiAutor.concat(neiNumberAutor)+" placeholder=\"Autor(res)\" type=\"text\" value="+data.response.docs[0].author.join("; ").replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+neiTipoPublicacao.concat(neiNumberTipoPublicacao)+" placeholder=\"Tipo de publicação\" type=\"text\" value="+data.response.docs[0].publicationtype.join("; ").replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+neiDescritor.concat(neiNumberDescritor)+" placeholder=\"Descritores\" type=\"text\" value="+data.response.docs[0].subject.join(", ").replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+neiNomePeriodico.concat(neiNumberNomePeriodico)+" placeholder=\"Periódico | Organização\" type=\"text\" value="+data.response.docs[0].source.replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+neiInfoPeriodico.concat(neiNumberInfoPeriodico)+" placeholder=\"Periódico (informação) | Organização (informação)\" type=\"text\" value="+data.response.docs[0].sourceid.replace(/\s/g,"&#160;")+"></div></div></div></div>";
            localConteudo.html(conteudo);
            localConteudo.css("display","block"); 
        } catch(e){
            localConteudo.css("display","none");
            localErro.html(returnError("HTTP 404: Recurso não encontrado."));
        }
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {   
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Recurso não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");       
    });     
}

// funções (Semantic Scholar: retorna recurso)

let nscEmbed = "leitura-sc-embed", nscNumberEmbed = 1;
let nscLogo = "leitura-sc-logo", nscNumberLogo = 1;
let nscTitulo = "leitura-sc-titulo", nscNumberTitulo = 1;
let nscDescricao = "leitura-sc-descricao", nscNumberDescricao = 1;
let nscUrl = "leitura-sc-url", nscNumberUrl = 1;
let nscAutor = "leitura-sc-autor", nscNumberAutor = 1;
let nscAreaEstudo = "leitura-sc-area-estudo", nscNumberAreaEstudo = 1;
let nscDescritor = "leitura-sc-descritor", nscNumberDescritor = 1;
let nscNomePeriodico = "leitura-sc-nome-periodico", nscNumberNomePeriodico = 1;
let nscInfoPeriodico = "leitura-sc-info-periodico", nscNumberInfoPeriodico = 1;

function getSemanticScholarRecurso(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.semanticscholar.org/v1/paper/"+valor1, function(){})
    .done(function(data){        
        let autores = [], areasEstudo = [], descritores = [], conteudoTipo; 
        for(let i = 0; i < data.authors.length; i++){            
            autores.push(data.authors[i].name);
        }        
        try{
            for(let i = 0; i < data.fieldsOfStudy.length; i++){            
                areasEstudo.push(data.fieldsOfStudy[i]);
            }            
        } catch(e){
            areasEstudo.push("none");
        }
        for(let i = 0; i < data.topics.length; i++){            
            descritores.push(data.topics[i].topic);
        }
        if(data.arxivId !== null){
            embed = "<iframe allowfullscreen height=\"360\" src=\"https://arxiv.org/pdf/"+data.arxivId+"\" width=\"640\"></iframe>";
            conteudoTipo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><div class=\"box1 responsive-iframe1\">"+embed+"</div></div><div class=\"box2 col-md-6 col-sm-12\">";
        } else {
            embed = "";
            conteudoTipo = "<div class=\"box1\">";                      
        }
        if ($("[name=\"leitura-sc-embed"+nscNumberEmbed+"\"]").length) { 
            nscNumberEmbed++; 
            nscNumberLogo++;
            nscNumberTitulo++;
            nscNumberDescricao++;
            nscNumberUrl++;
            nscNumberAutor++;
            nscNumberAreaEstudo++;
            nscNumberDescritor++;
            nscNumberNomePeriodico++;
            nscNumberInfoPeriodico++;
        }
        logo = "<img alt=\"\" src=\"assets/img/semantic-scholar.png\">";
        conteudo = conteudoTipo+"<input name="+nscEmbed.concat(nscNumberEmbed)+" type=\"hidden\" value="+embed.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1\"><input name="+nscLogo.concat(nscNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nscTitulo.concat(nscNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nscDescricao.concat(nscNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.abstract+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nscUrl.concat(nscNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.url+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nscAutor.concat(nscNumberAutor)+" placeholder=\"Autor(res)\" type=\"text\" value="+autores.join("; ").replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nscAreaEstudo.concat(nscNumberAreaEstudo)+" placeholder=\"Área de Estudo\" type=\"text\" value="+areasEstudo.join(", ").replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nscDescritor.concat(nscNumberDescritor)+" placeholder=\"Descritores\" type=\"text\" value="+descritores.join(", ").replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nscNomePeriodico.concat(nscNumberNomePeriodico)+" placeholder=\"Periódico | Organização\" type=\"text\" value="+data.venue.replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nscInfoPeriodico.concat(nscNumberInfoPeriodico)+" placeholder=\"Periódico (informação) | Organização (informação)\" type=\"text\" value="+data.year+"></div></div></div></div>";
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {   
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Recurso não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (DOAJ: retorna artigo)

let ndjLogo = "leitura-dj-logo", ndjNumberLogo = 1;
let ndjTitulo = "leitura-dj-titulo", ndjNumberTitulo = 1;
let ndjDescricao = "leitura-dj-descricao", ndjNumberDescricao = 1;
let ndjUrl = "leitura-dj-url", ndjNumberUrl = 1;
let ndjAutor = "leitura-dj-autor", ndjNumberAutor = 1;
let ndjPalavraChave = "leitura-dj-palavra-chave", ndjNumberPalavraChave = 1;
let ndjDescritor = "leitura-dj-descritor", ndjNumberDescritor = 1;
let ndjNomePeriodico = "leitura-dj-nome-periodico", ndjNumberNomePeriodico = 1;
let ndjInfoPeriodico = "leitura-dj-info-periodico", ndjNumberInfoPeriodico = 1;

function getDoajArtigo(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://doaj.org/api/v2/articles/"+valor1, function(){})    
    .done(function(data){    
        let autores = [], palavrasChave = [], descritores = [];
        for(let i = 0; i < data.bibjson.author.length; i++){            
            autores.push(data.bibjson.author[i].name);
        }            
        for(let i = 0; i < data.bibjson.keywords.length; i++){            
            palavrasChave.push(data.bibjson.keywords[i]);
        }
        for(let i = 0; i < data.bibjson.subject.length; i++){            
            descritores.push(data.bibjson.subject[i].term);
        }   
        if ($("[name=\"leitura-dj-logo"+ndjNumberLogo+"\"]").length) { 
            ndjNumberLogo++; 
            ndjNumberTitulo++;
            ndjNumberDescricao++;
            ndjNumberUrl++;
            ndjNumberAutor++;
            ndjNumberPalavraChave++;
            ndjNumberDescritor++;
            ndjNumberNomePeriodico++;
            ndjNumberInfoPeriodico++;
        }  
        logo = "<img alt=\"\" src=\"assets/img/doaj.png\">";
        conteudo = "<div class=\"box1\"><div class=\"box1\"><input name="+ndjLogo.concat(ndjNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+ndjTitulo.concat(ndjNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.bibjson.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+ndjDescricao.concat(ndjNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.bibjson.abstract.replace("<p>","").replace("</p>","")+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjUrl.concat(ndjNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://doaj.org/article/"+valor1+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjAutor.concat(ndjNumberAutor)+" placeholder=\"Autor(res)\" type=\"text\" value="+autores.join("; ").replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjPalavraChave.concat(ndjNumberPalavraChave)+" placeholder=\"Palavras-chave\" type=\"text\" value="+palavrasChave.join(", ").replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjDescritor.concat(ndjNumberDescritor)+" placeholder=\"Descritores\" type=\"text\" value="+descritores.join(", ").replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjNomePeriodico.concat(ndjNumberNomePeriodico)+" placeholder=\"Periódico | Organização\" type=\"text\" value="+data.bibjson.journal.publisher.replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjInfoPeriodico.concat(ndjNumberInfoPeriodico)+" placeholder=\"Periódico (informação) | Organização (informação)\" type=\"text\" value=\"v"+data.bibjson.journal.volume.concat("&#160;n").concat(data.bibjson.journal.number).concat("&#160;p").concat(data.bibjson.journal.start_page).concat("-").concat(data.bibjson.journal.end_page).concat("&#160;").concat(data.bibjson.month).concat("/").concat(data.bibjson.year)+"\"></div></div></div></div>";           
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {   
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Artigo não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (DOAJ: retorna periódico)

function getDoajPeriodico(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://doaj.org/api/v2/journals/"+valor1, function(){})    
    .done(function(data){  
        let palavrasChave = [], descritores = [];
        for(let i = 0; i < data.bibjson.keywords.length; i++){            
            palavrasChave.push(data.bibjson.keywords[i]);
        }
        for(let i = 0; i < data.bibjson.subject.length; i++){            
            descritores.push(data.bibjson.subject[i].term);
        }        
        if ($("[name=\"leitura-dj-logo"+ndjNumberLogo+"\"]").length) { 
            ndjNumberLogo++; 
            ndjNumberTitulo++;
            ndjNumberDescricao++;
            ndjNumberUrl++;
            ndjNumberAutor++;
            ndjNumberPalavraChave++;
            ndjNumberDescritor++; 
        }        
        logo = "<img alt=\"\" src=\"assets/img/doaj.png\">";
        conteudo = "<div class=\"box1\"><div class=\"box1\"><input name="+ndjLogo.concat(ndjNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+ndjTitulo.concat(ndjNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.bibjson.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+ndjDescricao.concat(ndjNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\"></textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjUrl.concat(ndjNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://doaj.org/toc/"+data.bibjson.eissn+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjAutor.concat(ndjNumberAutor)+" placeholder=\"Autor(res)\" type=\"text\" value="+data.bibjson.publisher.name.replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjPalavraChave.concat(ndjNumberPalavraChave)+" placeholder=\"Palavras-chave\" type=\"text\" value="+palavrasChave.join(", ").replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ndjDescritor.concat(ndjNumberDescritor)+" placeholder=\"Descritores\" type=\"text\" value="+descritores.join(", ").replace(/\s/g,"&#160;")+"></div></div></div></div>";           
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {   
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Periódico não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (PLOS: retorna artigo)

let npsLogo = "leitura-ps-logo", npsNumberLogo = 1;
let npsTitulo = "leitura-ps-titulo", npsNumberTitulo = 1;
let npsDescricao = "leitura-ps-descricao", npsNumberDescricao = 1;
let npsUrl = "leitura-ps-url", npsNumberUrl = 1;
let npsAutor = "leitura-ps-autor", npsNumberAutor = 1;
let npsNomePeriodico = "leitura-ps-nome-periodico", npsNumberNomePeriodico = 1;

function getPlosArtigo(valor1){
    $.ajax({
        dataType: "jsonp",        
        url: "http://api.plos.org/search?q=id:"+valor1+"&fl=id,title,author,abstract,journal&wt=json&api_key=qKpye1hapVdZuXshd-tt&json.wrf=callbackPlos",
        type: "GET"
    });
}

function callbackPlos(data){
    if(data.response.numFound > 0){
        let autores = [], url;
        for(let i = 0; i < data.response.docs[0].author.length; i++){            
            autores.push(data.response.docs[0].author[i]);
        }
        switch(data.response.docs[0].journal){                            
            case "PLOS ONE":                                
                url = "https://journals.plos.org/plosone/article?id="+data.response.docs[0].id;
                break;
            case "PLOS Biology":
                url = "https://journals.plos.org/plosbiology/article?id="+data.response.docs[0].id;
                break;
            case "PLOS Computational Biology":
                url = "https://journals.plos.org/ploscompbiol/article?id="+data.response.docs[0].id;
                break;
            case "PLOS Genetics":
                url = "https://journals.plos.org/plosgenetics/article?id="+data.response.docs[0].id;
                break;
            case "PLOS Medicine":
                url = "https://journals.plos.org/plosmedicine/article?id="+data.response.docs[0].id;
                break;
            case "PLOS Neglected Tropical Diseases":
                url = "https://journals.plos.org/plosntds/article?id="+data.response.docs[0].id;
                break;
            case "PLOS Pathogens":
                url = "https://journals.plos.org/plospathogens/article?id="+data.response.docs[0].id;
                break;
        }        
        if ($("[name=\"leitura-ps-logo"+npsNumberLogo+"\"]").length) { 
            npsNumberLogo++; 
            npsNumberTitulo++; 
            npsNumberDescricao++; 
            npsNumberUrl++; 
            npsNumberAutor++; 
            npsNumberNomePeriodico++; 
        }        
        logo = "<img alt=\"\" src=\"assets/img/plos.png\">";
        conteudo = "<div class=\"box1\"><div class=\"box1\"><input name="+npsLogo.concat(npsNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+npsTitulo.concat(npsNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.response.docs[0].title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+npsDescricao.concat(npsNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.response.docs[0].abstract+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+npsUrl.concat(npsNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+url+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+npsAutor.concat(npsNumberAutor)+" placeholder=\"Autor(res)\" type=\"text\" value="+autores.join("; ").replace(/\s/g,"&#160;")+"></div></div><div class=\"box1\"><input class=\"form-control truncate\" name="+npsNomePeriodico.concat(npsNumberNomePeriodico)+" placeholder=\"Periódico\" type=\"text\" value="+data.response.docs[0].journal.replace(/\s/g,"&#160;")+"></div></div>";
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
        localLoad.removeClass("loading");         
    } else {
        localConteudo.css("display","none");
        localErro.html(returnError("HTTP 404: Artigo não encontrado."));
        localLoad.removeClass("loading");
    }    
}

// funções (BioRxiv: retorna artigo)

let nbrEmbed = "leitura-br-embed", nbrNumberEmbed = 1;
let nbrLogo = "leitura-br-logo", nbrNumberLogo = 1;
let nbrTitulo = "leitura-br-titulo", nbrNumberTitulo = 1;
let nbrDescricao = "leitura-br-descricao", nbrNumberDescricao = 1;
let nbrUrl = "leitura-br-url", nbrNumberUrl = 1;
let nbrAutor = "leitura-br-autor", nbrNumberAutor = 1;
let nbrTipoPublicacao = "leitura-br-tipo-publicacao", nbrNumberTipoPublicacao = 1; 
let nbrNomeInfoPeriodico = "leitura-br-nome-info-periodico", nbrNumberNomeInfoPeriodico = 1;

function getBiorxivArtigo(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.biorxiv.org/details/biorxiv/"+valor1, function(){})
    .done(function(data){         
        try {            
            if ($("[name=\"leitura-br-embed"+nbrNumberEmbed+"\"]").length) {
                nbrNumberEmbed++;
                nbrNumberLogo++;
                nbrNumberTitulo++; 
                nbrNumberDescricao++;
                nbrNumberUrl++;
                nbrNumberAutor++;
                nbrNumberTipoPublicacao++;
                nbrNumberNomeInfoPeriodico++;  
            }            
            embed = "<iframe allowfullscreen height=\"360\" src=\"https://www.biorxiv.org/content/"+data.collection[0].doi+"v"+data.collection[0].version+".full.pdf\" width=\"640\"></iframe>";
            logo = "<img alt=\"\" src=\"assets/img/biorxiv.png\">";
            conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input name="+nbrEmbed.concat(nbrNumberEmbed)+" type=\"hidden\" value="+embed.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+embed+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input name="+nbrLogo.concat(nbrNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nbrTitulo.concat(nbrNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.collection[0].title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nbrDescricao.concat(nbrNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.collection[0].abstract+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbrUrl.concat(nbrNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://www.biorxiv.org/content/"+data.collection[0].doi+"v"+data.collection[0].version+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbrAutor.concat(nbrNumberAutor)+" placeholder=\"Autor(res)\" type=\"text\" value="+data.collection[0].authors.replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbrTipoPublicacao.concat(nbrNumberTipoPublicacao)+" placeholder=\"Tipo de publicação\" type=\"text\" value="+data.collection[0].category.replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nbrNomeInfoPeriodico.concat(nbrNumberNomeInfoPeriodico)+" placeholder=\"Periódico e Data\" type=\"text\" value="+data.collection[0].published.replace(/\s/g,"&#160;")+",&#160;"+data.collection[0].date+"></div></div></div></div>";   
            localConteudo.html(conteudo);
            localConteudo.css("display","block");
        } catch(e){
            localConteudo.css("display","none");
            localErro.html(returnError("HTTP 404: Artigo não encontrado."));
        }
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {   
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Artigo não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");          
    });     
}

// funções (GBIF: retorna dado)

let ngfLogo = "leitura-gf-logo", ngfNumberLogo = 1;
let ngfTitulo = "leitura-gf-titulo", ngfNumberTitulo = 1;
let ngfDescricao = "leitura-gf-descricao", ngfNumberDescricao = 1;
let ngfUrl = "leitura-gf-url", ngfNumberUrl = 1;
let ngfTipo = "leitura-gf-tipo", ngfNumberTipo = 1;
let ngfAutor = "leitura-gf-autor", ngfNumberAutor = 1;
let ngfData = "leitura-gf-data", ngfNumberData = 1;
let ngfLocalidade = "leitura-gf-localidade", ngfNumberLocalidade = 1;
let ngfBasionimo = "leitura-gf-basionimo", ngfNumberBasionimo = 1;
let ngfInfoPublicacao = "leitura-gf-info-publicacao", ngfNumberInfoPublicacao = 1;
let ngfReino = "leitura-gf-reino", ngfNumberReino = 1;
let ngfFilo = "leitura-gf-filo", ngfNumberFilo = 1;
let ngfClasse = "leitura-gf-classe", ngfNumberClasse = 1;
let ngfOrdem = "leitura-gf-ordem", ngfNumberOrdem = 1;
let ngfFamilia = "leitura-gf-familia", ngfNumberFamilia = 1;
let ngfGenero = "leitura-gf-genero", ngfNumberGenero = 1;
let ngfEspecie = "leitura-gf-especie", ngfNumberEspecie = 1;

function getGbifDado(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.gbif.org/v1/dataset/"+valor1, function(){})
    .done(function(data){
        if ($("[name=\"leitura-gf-logo"+ngfNumberLogo+"\"]").length) { 
            ngfNumberLogo++; 
            ngfNumberTitulo++;
            ngfNumberDescricao++;
            ngfNumberUrl++;
            ngfNumberTipo++; 
        }
        logo = "<img alt=\"\" src=\"assets/img/gbif.png\">";
        conteudo = "<div class=\"box1\"><div class=\"box1\"><input name="+ngfLogo.concat(ngfNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+ngfTitulo.concat(ngfNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.title.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+ngfDescricao.concat(ngfNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfUrl.concat(ngfNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://www.gbif.org/dataset/"+valor1+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfTipo.concat(ngfNumberTipo)+" placeholder=\"Tipo de dado\" type=\"text\" value="+data.type.replace(/\s/g,"&#160;")+"></div></div></div></div>"; 
        localConteudo.html(conteudo);
        localConteudo.css("display","block"); 
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {
            case 400:
                localErro.html(returnError("HTTP 404: Dado não encontrado."));
                break;
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Dado não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");          
    });     
}

// funções (GBIF: retorna ocorrência)

function getGbifOcorrencia(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.gbif.org/v1/occurrence/"+valor1, function(){})
    .done(function(data){
        let mes;
        switch(data.month){
            case 1:
                mes = "janeiro";
                break;
            case 2:
                mes = "fevereiro";
                break;
            case 3:
                mes = "março";
                break;
            case 4:
                mes = "abril";
                break;
            case 5:
                mes = "maio";
                break;
            case 6:
                mes = "junho";
                break;
            case 7:
                mes = "julho";
                break;
            case 8:
                mes = "agosto";
                break;
            case 9:
                mes = "setembro";
                break;
            case 10:
                mes = "outubro";
                break;
            case 11:
                mes = "novembro";
                break;
            case 12:
                mes = "dezembro";
                break;            
        }
        if ($("[name=\"leitura-gf-logo"+ngfNumberLogo+"\"]").length) { 
            ngfNumberLogo++; 
            ngfNumberTitulo++;
            ngfNumberDescricao++;
            ngfNumberUrl++;
            ngfNumberAutor++;
            ngfNumberData++;
            ngfNumberLocalidade;  
        }
        logo = "<img alt=\"\" src=\"assets/img/gbif.png\">";
        conteudo = "<div class=\"box1\"><div class=\"box1\"><input name="+ngfLogo.concat(ngfNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+ngfTitulo.concat(ngfNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.scientificName.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+ngfDescricao.concat(ngfNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.kingdom+" &#62; "+data.phylum+" &#62; "+data.class+" &#62; "+data.order+" &#62; "+data.family+" &#62; "+data.genus+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfUrl.concat(ngfNumberUrl)+" placeholder=\"https://\" type=\"text\" value=\"https://www.gbif.org/occurrence/"+valor1+"\"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfAutor.concat(ngfNumberAutor)+" placeholder=\"Autor\" type=\"text\" value="+data.identifiedBy.replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfData.concat(ngfNumberData)+" placeholder=\"https://\" type=\"text\" value="+data.day+"&#160;de&#160;"+mes+"&#160;de&#160;"+data.year+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfLocalidade.concat(ngfNumberLocalidade)+" placeholder=\"Localidade\" type=\"text\" value="+data.country.replace(/\s/g,"&#160;")+"></div></div></div></div>";           
        localConteudo.html(conteudo);  
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {
            case 400:
                localErro.html(returnError("HTTP 404: Ocorrência não encontrada."));
                break;
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Ocorrência não encontrada.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");          
    });     
}

// funções (GBIF: retorna espécie)

function getGbifEspecie(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.gbif.org/v1/species/"+valor1, function(){})
    .done(function(data){
        if ($("[name=\"leitura-gf-logo"+ngfNumberLogo+"\"]").length) { 
            ngfNumberLogo++; 
            ngfNumberTitulo++;
            ngfNumberBasionimo++;
            ngfNumberInfoPublicacao++;
            ngfNumberReino++;
            ngfNumberFilo++;
            ngfNumberClasse++;
            ngfNumberOrdem++;
            ngfNumberFamilia++;
            ngfNumberGenero++;
            ngfNumberEspecie++;
            ngfNumberUrl++; 
        }
        logo = "<img alt=\"\" src=\"assets/img/gbif.png\">"; 
        conteudo = "<div class=\"box1\"><div class=\"box1\"><input name="+ngfLogo.concat(ngfNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+ngfTitulo.concat(ngfNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.scientificName.replace(/\s/g,"&#160;")+"></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfBasionimo.concat(ngfNumberBasionimo)+" placeholder=\"Basiônimo\" type=\"text\" value="+data.basionym.replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfInfoPublicacao.concat(ngfNumberInfoPublicacao)+" placeholder=\"Publicação\" type=\"text\" value="+data.publishedIn.replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfReino.concat(ngfNumberReino)+" placeholder=\"https://\" type=\"text\" value="+data.kingdom.replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfFilo.concat(ngfNumberFilo)+" placeholder=\"Filo\" type=\"text\" value="+data.phylum.replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfClasse.concat(ngfNumberClasse)+" placeholder=\"Classe\" type=\"text\" value="+data.class.replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfOrdem.concat(ngfNumberOrdem)+" placeholder=\"Ordem\" type=\"text\" value="+data.order.replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfFamilia.concat(ngfNumberFamilia)+" placeholder=\"Família\" type=\"text\" value="+data.family.replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfGenero.concat(ngfNumberGenero)+" placeholder=\"Gênero\" type=\"text\" value="+data.genus.replace(/\s/g,"&#160;")+"></div></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfEspecie.concat(ngfNumberEspecie)+" placeholder=\"https://\" type=\"text\" value="+data.species.replace(/\s/g,"&#160;")+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+ngfUrl.concat(ngfNumberUrl)+" placeholder=\"http://\" type=\"text\" value=\"https://www.gbif.org/species/"+valor1+"\"></div></div></div></div>";           
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {
            case 400:
                localErro.html(returnError("HTTP 404: Espécie não encontrada."));
                break;
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Espécie não encontrada.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");          
    }); 
}

// funções (Sketchfab: retorna modelo)

let nsfEmbed = "tecnologias-sf-embed", nsfNumberEmbed = 1;
let nsfLogo = "tecnologias-sf-logo", nsfNumberLogo = 1;
let nsfTitulo = "tecnologias-sf-titulo", nsfNumberTitulo = 1;
let nsfDescricao = "tecnologias-sf-descricao", nsfNumberDescricao = 1;
let nsfUrl = "tecnologias-sf-url", nsfNumberUrl = 1;
let nsfCanal = "tecnologias-sf-canal", nsfNumberCanal = 1;

function getSketchfabModelo(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.sketchfab.com/v3/models/"+valor1, function(){})
    .done(function(data){        
        if ($("[name=\"videos-sf-embed"+nsfNumberEmbed+"\"]").length) { 
            nsfNumberEmbed++;
            nsfNumberLogo++; 
            nsfNumberTitulo++; 
            nsfNumberDescricao++; 
            nsfNumberUrl++; 
            nsfNumberCanal++; 
        }        
        embed = "<iframe allow=\"autoplay; vr\" allowfullscreen height=\"480\" src=\""+data.embedUrl+"\" width=\"640\"></iframe>";
        logo = "<img alt=\"\" src=\"assets/img/sketchfab.png\">";
        conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input name="+nsfEmbed.concat(nsfNumberEmbed)+" type=\"hidden\" value="+embed.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+embed+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input name="+nsfLogo.concat(nsfNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nsfTitulo.concat(nsfNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.name.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nsfDescricao.concat(nsfNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nsfUrl.concat(nsfNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.viewerUrl+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nsfCanal.concat(nsfNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data.user.displayName.replace(/\s/g,"&#160;")+"></div></div></div></div>";       
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Modelo não encontrado.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}

// funções (Sketchfab: retorna coleção)

function getSketchfabColecao(valor1, localConteudo, localErro, localLoad){
    $.getJSON("https://api.sketchfab.com/v3/collections/"+valor1, function(){})
    .done(function(data){        
        if ($("[name=\"videos-sf-embed"+nsfNumberEmbed+"\"]").length) { 
            nsfNumberEmbed++;
            nsfNumberLogo++; 
            nsfNumberTitulo++; 
            nsfNumberDescricao++; 
            nsfNumberUrl++; 
            nsfNumberCanal++; 
        }        
        embed = "<iframe allow=\"autoplay; vr\" allowfullscreen height=\"480\" src=\""+data.embedUrl+"\" width=\"640\"></iframe>";
        logo = "<img alt=\"\" src=\"assets/img/sketchfab.png\">";
        conteudo = "<div class=\"box1 row\"><div class=\"box1 col-md-6 col-sm-12\"><input name="+nsfEmbed.concat(nsfNumberEmbed)+" type=\"hidden\" value="+embed.replace(/\s/g,"&#160;").replaceAll(">","&#62;")+"><div class=\"box1 responsive-iframe1\">"+embed+"</div></div><div class=\"box2 col-md-6 col-sm-12\"><div class=\"box1\"><input name="+nsfLogo.concat(nsfNumberLogo)+" type=\"hidden\" value="+logo.replace(/\s/g,"&#160;").replace(">","&#62;")+">"+logo+"</div><div class=\"box1\"><input class=\"form-control truncate\" name="+nsfTitulo.concat(nsfNumberTitulo)+" placeholder=\"Título\" type=\"text\" value="+data.name.replace(/\s/g,"&#160;")+"></div><div class=\"box1\"><textarea class=\"form-control\" name="+nsfDescricao.concat(nsfNumberDescricao)+" placeholder=\"Descrição\" rows=\"8\">"+data.description+"</textarea></div><div class=\"row\"><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nsfUrl.concat(nsfNumberUrl)+" placeholder=\"https://\" type=\"text\" value="+data.user.profileUrl.concat("/collections/").concat(data.slug)+"></div><div class=\"box1 col-md-6 col-sm-12\"><input class=\"form-control truncate\" name="+nsfCanal.concat(nsfNumberCanal)+" placeholder=\"Canal\" type=\"text\" value="+data.user.displayName.replace(/\s/g,"&#160;")+"></div></div></div></div>";       
        localConteudo.html(conteudo);
        localConteudo.css("display","block");
    })
    .fail(function(jqXHR){
        localConteudo.css("display","none");
        switch (jqXHR.status) {
            case 404:
                localErro.html(returnError(`HTTP ${jqXHR.status}: Coleção não encontrada.`));
                break;
            default:                    
                localErro.html(returnError(`HTTP ${jqXHR.status}: Contate o Administrador do Sistema.`));
                break;
        }
    })
    .always(function() {
        localLoad.removeClass("loading");  
    });     
}