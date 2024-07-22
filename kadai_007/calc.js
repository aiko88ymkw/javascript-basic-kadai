// 変数numに１〜nまでのランダムな整数を代入する
num = Math.floor(Math.random()*1000)+1;

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が３の倍数であれば、「3の倍数です」という文字列を出力
if(num%3 === 0){
  console.log("3の倍数です");
}

// 変数numの値が5の倍数であれば、「5の倍数です」という文字列を出力
else if(num%5 === 0){
  console.log("3の倍数です");
}

// 変数numの値が3と5の倍数であれば、「３と5の倍数です」という文字列を出力
if(num%3 === 0 && num%5 ===0){
  console.log('３と５の倍数です')
}

// それ以外のとき変数（num）を出力
else {
  console.log (num);
}