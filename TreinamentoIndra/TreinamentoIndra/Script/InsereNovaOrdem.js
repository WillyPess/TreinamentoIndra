﻿var InsereNovaOrdem = function() {
  
  this.fillcampoQuantidade = async () => {
   var campoQuantidade = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Quantity").WinFormsObject("UpDownEdit", "");
   campoQuantidade.Keys("3");  
  }
  
  this.fillcampoPrecoUnidade = async() => {
  var campoPrecoUnidade = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Price");
  campoPrecoUnidade.Keys("$200");  
  }
  
  this.fillcampoDesconto = async() => {
  var campoDesconto = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Discount");
  campoDesconto.Keys("10%");
  }
  
  this.fillcampoTotal = async() => {
   var campoTotal = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("groupBox1").WinFormsObject("Total");
  campoTotal.Keys("300");
  }
  
  this.fillcampoNome = async(nomewilly) => {
   var campoNome = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Customer");
  campoNome.SetText(nomewilly);
  }
  
  this.fillcampoData = async() => {
    var campoData = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Date");
  campoData.wDate = "2020-10-05";
  }
  
  this.fillCampoCartao = async() => {
    var campoCartao = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("CardNo");
    campoCartao.Keys("0123456789");
  }
  
  this.clickBotaoOk = async() => {
    var botaoOK = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("ButtonOK");
  botaoOK.Click();
  }
  
  
  
  
  

}
module.exports = new InsereNovaOrdem;