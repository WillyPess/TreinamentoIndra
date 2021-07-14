var novaOrdem = require("InsereNovaOrdem");
var pgInicial = require("PaginaInicial")

function PrimeiraOrdem(){
  
  pgInicial.clickNovaOrdem();
  aqObject.CheckProperty(Aliases.Orders.OrderForm.Group.label14, "WndCaption", cmpEqual, "Expiration Date:");
  novaOrdem.fillcampoQuantidade();
  novaOrdem.fillcampoPrecoUnidade();
  novaOrdem.fillcampoDesconto();
  novaOrdem.fillcampoTotal();
  novaOrdem.fillcampoNome(Project.Variables.NomeUser);
  novaOrdem.fillcampoData();
  novaOrdem.fillCampoCartao();
  novaOrdem.clickBotaoOk();
  pgInicial.checkUsuario();  
  
  }