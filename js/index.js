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

function minus(menu,count,price){
  $('.minus'+menu).off('click').on('click',function(){
    $('.'+menu).remove();
    $('.합계').remove();   

    for(i=0;i<MENU_DATA.length;i++){
      if(MENU_DATA[i].name==menu){
        MENU_DATA[i].count--
      }
    }
    count--;    
    addRow(menu,count--,price);

  })
}

function getMenuDataFromButton(event) {

  $('.'+event.data.name).remove();
  $('.합계').remove();
  event.data.count++    
  addRow(event.data.name,event.data.count,event.data.price) 
 
  // 계산할 내용을 menusToCalculate에 추가해보면 어떨까요?
}

function renderMenu(renderTo) {
  MENU_DATA.forEach(function(menu) {
    generateMenuButton(menu).appendTo(renderTo); 
  });
}

// 아래 함수들은 힌트로 주어진 함수들입니다. console에서 실행해 보세요
function addRow(menu,count,price) {
  var elementQueue = $('#queue');
  generateRow(menu,count,price).appendTo(elementQueue);
  generateRow2(menu,count,price).appendTo(elementQueue);
  minus(menu,count,price);
}

function generateRow(menu,count,price) {
  var elementTr = $('<tr class='+menu+'>');
 
  if(count!==0){
  $('<td>').text(menu).appendTo(elementTr);
  $('<td>'+count+' <button class=minus'+menu+'>  -  </button></td>').appendTo(elementTr);
  $('<td>').text(count*price).appendTo(elementTr);
  }
  return elementTr;
  
}
function generateRow2(menu,b,price) {
  var elementTr2 = $('<tr class=합계>');
   
  var countSum=0;
  var priceSum=0;
  
  for(i=0;i<MENU_DATA.length;i++){
    countSum+=MENU_DATA[i].count;  
    priceSum+=MENU_DATA[i].price*MENU_DATA[i].count
  }    

  $('<td>').text('합계').appendTo(elementTr2);
  $('<td>').text(countSum).appendTo(elementTr2);
  $('<td>').text(priceSum).appendTo(elementTr2);
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
