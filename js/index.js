var menusToCalculate = [];

function generateMenuButton(menu) {
  return $('<button>').text(menu.name)
                      .addClass('menu')
                      .data('price', menu.price)
                      .on('click', menu, getMenuDataFromButton);
  /*
   * 이 내용을 알고 샆다면 여기를 참조하세요. 
   * $('<button>') : https://api.jquery.com/jQuery/#jQuery2
   * .data method : https://api.jquery.com/data/
   * .on method : https://api.jquery.com/on/
   */
}

function getMenuDataFromButton(event) {
  console.log(event.data);

  // 계산할 내용을 menusToCalculate에 추가해보면 어떨까요?
}

function renderMenu(renderTo) {
  MENU_DATA.forEach(function(menu) {
    generateMenuButton(menu).appendTo(renderTo);
  });
}

// 아래 함수들은 힌트로 주어진 함수들입니다. console에서 실행해 보세요
function addRow() {
  var elementQueue = $('#queue');
  generateRow().appendTo(elementQueue);
}

function generateRow() {
  var elementTr = $('<tr>');
  $('<td>').text('메뉴1').appendTo(elementTr);
  $('<td>').text('1').appendTo(elementTr);
  $('<td>').text('1000').appendTo(elementTr);
  return elementTr;
}
// 힌트 끝


function initialize() {
  var elementMenu = $('#menu-container');
  renderMenu(elementMenu);
}

initialize();