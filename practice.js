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

console.log(
    "時刻は" +
        today.getHours() + "時" +
        today.getMinutes() + "分" +
        today.getSeconds() + "秒" +
        today.getMilliseconds() + "ミリ秒です。"
)

const someDay = new Date(2020, 1,13)

/*
const dayNames = ["日","月","火","水","木","金","土"]
*/

const youbi = dayNames[someDay.getDay()]

console.log(
    someDay.getFullYear() + "年" +
    (someDay.getMonth() + 1) + "月" +
    someDay.getDate() + "日は" +
    youbi + "曜日です。"
)

console.log("今日は" + today.getDate() + "日です")

let futureDay = new Date()
futureDay.setTime(today.getTime())
futureDay.setDate(today.getDate() + 100) //今日の日付に100を足してsetDate

console.log(
    "100日後の日付は" +
    futureDay.getFullYear() + "年" +
    (futureDay.getMonth() + 1) + "月" +
    futureDay.getDate() + "日です。"
)

let pastDay = new Date()
pastDay.setTime(today.getTime())
pastDay.setDate(today.getDate() - 7)

console.log(
    "7日前の日付は" +
    pastDay.getFullYear() + "年" +
    (pastDay.getMonth() + 1) + "月" +
    pastDay.getDate() + "日です。"
)

let myThings = {
    sports:"サッカー",
    hobby:"テーブルトークRPG",
    food:"カレーライス",
}

console.log(myThings.food)
console.log(myThings["food"])

let foods = {
    japanese_food:"寿司",
    italian_food:"ピザ"
}

let suffix = "_food"
console.log(foods["japanese" + suffix])
console.log(foods["italian" + suffix])
