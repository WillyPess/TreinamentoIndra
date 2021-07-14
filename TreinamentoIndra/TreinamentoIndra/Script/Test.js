function Test1()
{
  
  var campoQuantidade = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Quantity").WinFormsObject("UpDownEdit", "");
  campoQuantidade.Keys("3");
  
  var campoPrecoUnidade = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Price");
  campoPrecoUnidade.Keys("$200");
  
  var campoDesconto = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Discount");
  campoDesconto.Keys("10%");
  
  var campoTotal = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("groupBox1").WinFormsObject("Total");
  campoTotal.Keys("300");

  // Keys vs SetText vs Date
  
  var campoNome = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Customer");
  campoNome.SetText("willy costa lima pessoa");
  
  var campoData = Sys.Process("Orders").WinFormsObject("OrderForm").WinFormsObject("Group").WinFormsObject("Date");
  campoData.wDate = "2020-10-05";
  
  
  //TESTE
  
  
      
}

function Test2()
{
  Aliases.Orders.OrderForm.Group.Date.wDate = "2020-10-05";
}


function Test3()
{
  
  var tabelaOrdemRecognize = Sys.Process("Orders").WinFormsObject("MainForm").WinFormsObject("OrdersView");
  var nomeUsuario = OCR.Recognize(tabelaOrdemRecognize).AsTable(true);  
  var textowilly = nomeUsuario.Cell(0, "Customer Name").Text;
  
  if (textowilly = "Willy Costa Lima"){
    Log.Message("Usuario "+ textowilly+ " Encontrado");
  }else{
    Log.Message(("Usuario não Encontrado"))
  }
  
  
  
  
  

//  OCR.Recognize(tabelaOrdemRecognize).Block(0);


}