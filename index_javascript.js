function poster_change(input){
  var poster1 = document.getElementById('poster_1');
  var poster2 = document.getElementById('poster_2');

  if(input.value === 'first'){
    document.getElementById('poster_btn').innerHTML='포스터__#1';
    poster1.style.display='block';
    poster2.style.display='none';
    document.getElementById('poster_3').style.display='none';
    input.value = 'second';
  }
  else if(input.value === 'second'){
    document.getElementById('poster_btn').innerHTML='포스터__#2';
    poster1.style.display='none';
    poster2.style.display='block';
    document.getElementById('poster_3').style.display='none';
    input.value = 'third';
  }
  else if(input.value === 'third'){
    document.getElementById('poster_btn').innerHTML='포스터__#3';
    poster1.style.display='none';
    poster2.style.display='none';
    document.getElementById('poster_3').style.display='block';
    input.value = 'cls';
  }
  else{
    document.getElementById('poster_btn').innerHTML='포스터 보기';
    poster1.style.display='none';
    poster2.style.display='none';
    document.getElementById('poster_3').style.display='none';
    input.value = 'first';
  }
}

function trailer(input){
  var target = document.getElementById('예고편');
  var button_name = document.getElementById('btn_name');

  if(input.value === 'open'){
    button_name.innerHTML='예고편 닫기';
    target.style.display='block';
    input.value = 'close';
  }
  else{
    button_name.innerHTML='예고편 보기';
    target.style.display='none';
    input.value = 'open';
  }
}