function printDate() {
    const date = new (Date)
    console.log(date.getFullYear(),date.getMonth()+1,date.getDate())
}

printDate()
setInterval(function (){
    console.log("myt")
},1000)