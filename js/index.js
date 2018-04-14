function addClickEvent(element, handler) {
  element.addEventListener('click', handler);
}

function addRow() {
  var tr = document.createElement('tr');
  for(var i=0; i<arguments.length; i++) {
    var td = document.createElement('td');
    var content = document.createTextNode(arguments[i]);
    td.appendChild(content);
    tr.appendChild(td);
  }
  document.querySelector('table').appendChild(tr)
}

function getButtonInfo(e, data) {
  console.log(e.target.dataset);
  console.log(e.target.innerHTML)
}

/* hint */

// var buttons = document.querySelectorAll('button');
// addClickEvent(document.querySelector('#thisIsID'), getButtonInfo);