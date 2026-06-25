function plus(){
  let i1 = document.querySelector('input[name="left"]');
  let i2 = document.querySelector('input[name="right"]');

  let left_x = parseInt(i1.value);
  let right_x = parseInt(i2.value);

  let result = left_x + right_x;

  let n = document.querySelector('span#answer');
  n.textContent = result;
}; 

b = document.querySelector('button#calc'); 
b.addEventListener('click', plus); 