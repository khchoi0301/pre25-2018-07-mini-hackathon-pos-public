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
var count=[0,0,0,0]
var cost=[2000,2500,0,0]

function minus(event){
  $('.minus').off('click').on('click',function(){
    count[1]--
    $('.까페라떼').remove();
    $('.합계').remove();
    console.log(count[1],cost[0])
    addRow('까페라떼',count[1],cost[1]);

    console.log('hi');
  })
}

function getMenuDataFromButton(event) {
  console.log(event.data)
    
  if(event.data.name==="아메리카노"){
    $('.아메리카노').remove();
    $('.합계').remove();
    count[0]++
    cost[0]=count*event.data.price
    addRow(event.data.name,count[0],event.data.price)
    minus();
  } 

  if(event.data.name==="까페라떼"){
    $('.까페라떼').remove();
    $('.합계').remove();

    count[1]++
    cost[1]=count*event.data.price
    addRow(event.data.name,count[1],event.data.price)
    minus();
  } 
 
  // 계산할 내용을 menusToCalculate에 추가해보면 어떨까요?
}

function renderMenu(renderTo) {
  MENU_DATA.forEach(function(menu) {
    generateMenuButton(menu).appendTo(renderTo);
  });
}

// 아래 함수들은 힌트로 주어진 함수들입니다. console에서 실행해 보세요
function addRow(a,b,c) {
  var elementQueue = $('#queue');
  generateRow(a,b,c).appendTo(elementQueue);
  generateRow2(a,b,c).appendTo(elementQueue);
}

function generateRow(a,b,c) {
  var elementTr = $('<tr class='+a+'>');

 
  $('<td>').text(a).appendTo(elementTr);
  $('<td>').text(b).appendTo(elementTr);
  $('<td><button class=minus>-</button></td>').appendTo(elementTr);
  $('<td>').text(b*c).appendTo(elementTr);
  return elementTr;
}
function generateRow2(a,b,c) {
  var elementTr2 = $('<tr class=합계>');
  /*
  $('<td>').text(a).prependTo(elementTr);
  $('<td>').text(b).prependTo(elementTr);
  $('<td>').text(b*2500).prependTo(elementTr);
  */
 
  $('<td>').text('합계').appendTo(elementTr2);
  $('<td>').text(count[0]+count[1]).appendTo(elementTr2);
  $('<td>').text('').appendTo(elementTr2);
  $('<td>').text(count[0]*2000+count[1]*2500).appendTo(elementTr2);
  return elementTr2;
}
// 힌트 끝


function initialize() {
  var elementMenu = $('#menu-container');
  
  renderMenu(elementMenu);
}

initialize();


//td와 버튼의 통합    <td><button></button></td>
//event와 data.name ??
//minus 펑션의 반복 실행   on off로 해결??
