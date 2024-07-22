// 配列の宣言
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

//while文で配列から0番目の要素から15番目まで出力
while(holidays.length > 0){
  const holiday = holidays.shift();
  console.log(holiday);
}

// for文で配列から0番目の要素から15番目まで出力
for(let i = 0; i <= holidays.length; i++){
 console.log(holidays[i]);
 }


