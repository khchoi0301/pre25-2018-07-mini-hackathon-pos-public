/*
  mini Hackathon project
  CodeBucks POS

  in this project, you should have a group mate
  assign each member a specific role
  e.g.
    1. Project Manager: plan and design the requirement of the project
    2. coder (driver): sit and write codes
    3. navigator: help and navigate coder in order to meet the requirement
    4. UI designer(optional): responsible of how your product looks in the market (html, css and etc..)

  CodeBucks (client) ordered us to provide a simple POS machine for coffee shop.
  Currently CodeBucks is taking orders by hands.
  Their pain points are
  1. they have to do the math by hands (sum of the cost, tax added and etc)
  2. it is hard to remember and manage the order
  3. want to apply discount code (e.g. 5% off for those who provide specific code)

  You have 100 min to get the project done
  Next, for 20 minutes, each team will prsent a demo
  At the end, CodeBucks will select the supplier.

  p.s. since we have not mastered html & css, we can do this with pure javascript using alerts and promts
  */

  // example

$(document).ready(function() {
  // your code here
  console.log('hello world');
  $('.js-order').click(function() {
    var selectedMenu = prompt('반갑습니다. 고객님, 어떻게 도와드릴까요?');
    alert('네 주문하신 음료는 ' + selectedMenu  + '입니다.');
  })
});




