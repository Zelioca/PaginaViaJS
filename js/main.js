//Criação das variaveis
let form1 = document.createElement("form");
let fieldset1 = document.createElement("fieldset");
let legend1 = document.createElement("legend");
let label1 = document.createElement("label");
let input1 = document.createElement("input");
let br1 = document.createElement("br");
let br2 = document.createElement("br");
let label2 = document.createElement("label");
let input2 = document.createElement("input");
let br3 = document.createElement("br");
let br4 = document.createElement("br");
let label3 = document.createElement("label");
let input3 = document.createElement("input");
let br5 = document.createElement("br");
let br6 = document.createElement("br");
let label4 = document.createElement("label");
let input4 = document.createElement("input");
let br7 = document.createElement("br");
let br8 = document.createElement("br");
let label5 = document.createElement("label");
let input5 = document.createElement("input");
let br9 = document.createElement("br");
let br10 = document.createElement("br");
let label6 = document.createElement("label");
let br11 = document.createElement("br");
let textarea1 = document.createElement("textarea");
let br12 = document.createElement("br");
let br13 = document.createElement("br");
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let copyright = document.createElement("h1");

//atribuir atributos e colocar textos
//Legenda para o campo
legend1.textContent = "Dados pessoais";

//Nome Completo
label1.setAttribute("for","nome");
label1.textContent = "Nome Completo: ";
input1.setAttribute("id","nome");
input1.setAttribute("type","text");
input1.setAttribute("placeholder","Fulano da Silva");

//Data de Nascimento
label2.setAttribute("for","dataNasc");
label2.textContent = "Data de Nascimento: ";
input2.setAttribute("id","dataNasc");
input2.setAttribute("type","date");

//Email
label3.setAttribute("for","email");
label3.textContent = "Email: ";
input3.setAttribute("id","email");
input3.setAttribute("type","email");
input3.setAttribute("placeholder","fulanosilva@example.com");

//Endereço Residente
label4.setAttribute("for","local");
label4.textContent = "Endereço: ";
input4.setAttribute("id","local");
input4.setAttribute("type","text");
input4.setAttribute("placeholder","Rua Cliclano do Santos 014");

//Telefone de Contato
label5.setAttribute("for","fone");
label5.textContent = "Telefone: ";
input5.setAttribute("id","fone");
input5.setAttribute("type","tel");
input5.setAttribute("placeholder","00 00000-0000");

//Motivo da inscrição
label6.setAttribute("for","assunto");
label6.textContent = "Porque deseja se inscrever nesse programa?: ";
textarea1.setAttribute("id","assunto");
textarea1.setAttribute("rows","6");
textarea1.setAttribute("cols","100");
textarea1.setAttribute("placeholder","Estou me inscrevendo porque gostei muito de...");

//Botões de Envio e Apagar
button1.setAttribute("type","submit");
button1.textContent = "Enviar";
button2.setAttribute("type","reset");
button2.textContent = "Apagar";

//Creditos ao seu criador
copyright.textContent = "Todo codigo foi feito apartir dos conhecimentos de Hiran e pesquisas rapidas para tirar duvida.";


//Anexar valores dentro de valores
fieldset1.appendChild(legend1);
fieldset1.appendChild(label1);
fieldset1.appendChild(input1);
fieldset1.appendChild(br1);
fieldset1.appendChild(br2);
fieldset1.appendChild(label2);
fieldset1.appendChild(input2);
fieldset1.appendChild(br3);
fieldset1.appendChild(br4);
fieldset1.appendChild(label3);
fieldset1.appendChild(input3);
fieldset1.appendChild(br5);
fieldset1.appendChild(br6);
fieldset1.appendChild(label4);
fieldset1.appendChild(input4);
fieldset1.appendChild(br7);
fieldset1.appendChild(br8);
fieldset1.appendChild(label5);
fieldset1.appendChild(input5);
fieldset1.appendChild(br9);
fieldset1.appendChild(br10);
fieldset1.appendChild(label6);
fieldset1.appendChild(br11);
fieldset1.appendChild(textarea1);
fieldset1.appendChild(br12);
fieldset1.appendChild(br13);
fieldset1.appendChild(button1);
fieldset1.appendChild(button2);
form1.appendChild(fieldset1);

//Anexar formulario dentro de body
document.body.appendChild(form1);
document.body.appendChild(copyright);