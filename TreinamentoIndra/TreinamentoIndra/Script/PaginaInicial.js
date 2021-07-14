var PaginaInicial = function() {
  
  this.clickNovaOrdem = async() => {
    var insereOrdem = Aliases.Orders.MainForm;
    insereOrdem.MainMenu.Click("Orders|New order...");
  }  
  
  this.checkUsuario = async() => {
    var tabelaOrdemRecognize = Sys.Process("Orders").WinFormsObject("MainForm").WinFormsObject("OrdersView");
    var nomeUsuario = OCR.Recognize(tabelaOrdemRecognize).AsTable(true);  
    var textowilly = nomeUsuario.Cell(0, "Customer Name").Text;
  
     if (textowilly = "Willy Costa Lima"){
    Log.Message("Usuario "+ textowilly+ " Encontrado");
       }else{
    Log.Message(("Usuario não Encontrado"))
  }
  }
  
  }
  module.exports = new PaginaInicial;