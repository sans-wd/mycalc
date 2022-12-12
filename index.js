function calc() {
  var addOne = parseInt(document.form.addta1.value);
  var addTwo = parseInt(document.form.addta2.value);
  var subOne = parseInt(document.form.subta1.value);
  var subTwo = parseInt(document.form.subta2.value);
  var mulOne = parseInt(document.form.multa1.value);
  var mulTwo = parseInt(document.form.multa2.value);
  var divOne = parseInt(document.form.divta1.value);
  var divTwo = parseInt(document.form.divta2.value);

  var addResult = addOne + addTwo;
  var subResult = subOne - subTwo;
  var mulResult = mulOne * mulTwo;
  var divResult = divOne / divTwo;
  document.getElementById("addresult").innerHTML = addResult;
  document.getElementById("subresult").innerHTML = subResult;
  document.getElementById("mulresult").innerHTML = mulResult;
  document.getElementById("divresult").innerHTML = divResult;
}
