console.log("practice-branchです");

console.log("Bさんが変更しました");

console.log("Aさんが変更しました");

new Date()
let myDate = new Date()

console.log(myDate.getFullYear())//今年の年（西暦を表示）
console.log(myDate.getMonth()+1)
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.getHours())
console.log(myDate.getMinutes())

let today = new Date()

console.log(
    "今日は" +
    today.getFullYear() + "年" +
    (today.getMonth() + 1) + "月" +
    today.getDate() + "日です。"
)


let  dayNames = ["日","月","火","水","木","金","土"]
let day = today.getDay()

console.log("今日は"+dayNames[day]+"曜日です。")