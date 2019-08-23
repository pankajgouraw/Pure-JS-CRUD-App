//add data function
    var product = document.getElementById("insProduct");
  var prodItemList = document.getElementById("prodItemList");
  var counter = 0;

function addprod(){
  var proval = product.value;
  var values = '"'+proval+'"';

  if(values=='""'){
    alert("please enter the data!");
  }
  else
  {
    // for(i = 0; i < 35; i++) {
// $(document).ready(function(){
//     $('body').append('<div id="div'+ (i++) +'" />');
// });


  var html = '<div class="data'+counter+'">'+
  	'<div class="col-md-6" style="overflow:auto;">'+
    '<input type="text" disabled class="form-control list-prod" value='+values+' class="prodName" placeholder="write product name">'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-success list-prod" onclick="edit(this.id);" id="edit'+counter+'">EDIT</button>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-success list-prod" id="update'+counter+'" onclick="update(this.id);">UPDATE</button>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-danger list-prod" id="delete'+counter+'" onclick="deleteProd(this.id);" >DELETE</button>'+
    '</div>'+
    '</div>';

 counter++;
  prodItemList.insertAdjacentHTML('beforeend', html);
  }
}
//update data function
function update(updateDate){
var parent = document.getElementById(updateDate).parentNode;
var nextParent = parent.parentNode;
var inputNode = nextParent.firstChild.firstChild;
inputNode.setAttribute("disabled","disabled");

}
//edit data function
function edit(prodName){
  // console.log(prodName);
  var parent = document.getElementById(prodName).parentNode;
  var nextParent = parent.parentNode;
  var inputNode = nextParent.firstChild.firstChild;
  inputNode.removeAttribute("disabled");
}
// delete the data
function deleteProd(deletedata){
var parent = document.getElementById(deletedata).parentNode;
var nextParent = parent.parentNode;
nextParent.remove();
}
