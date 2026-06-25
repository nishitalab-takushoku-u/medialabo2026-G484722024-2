// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
  kaisu++;
  let s = document.querySelector('span#kaisu');
  s.textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新

  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name=num]');
  let yoso_num = parseInt(yoso.value);
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  // 　　　　  正解/不正解のときのメッセージを表示する
  if(yoso_num == kotae && kaisu <= 3){
    let ans = document.querySelector('p#result');
    ans.textContent = "正解！"
    let i = document.querySelector('span#yoso');
    i.textContent = (yoso_num);
  }else if(yoso_num < kotae && kaisu < 3){
    let ans = document.querySelector('p#result');
    ans.textContent = "まちがい. 答えはもっと大きいですよ."
    let i = document.querySelector('span#yoso');
    i.textContent = (yoso_num);
  }else if(yoso_num > kotae && kaisu < 3){
    let ans = document.querySelector('p#result');
    ans.textContent = "まちがい. 答えはもっと小さいですよ."
    let i = document.querySelector('span#yoso');
    i.textContent = (yoso_num);
  }else if (yoso_num != kotae && kaisu == 3){
    let ans = document.querySelector('p#result');
    ans.textContent = "終了！ 正解は " + kotae + " です！"
    let i = document.querySelector('span#yoso');
    i.textContent = (yoso_num);
  }else if (kaisu > 3){
    let ans = document.querySelector('p#result');
    ans.textContent = "ゲームは終了しています. やり直してください."
  }
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
b = document.querySelector('button#btn'); 
b.addEventListener('click', hantei); 
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
