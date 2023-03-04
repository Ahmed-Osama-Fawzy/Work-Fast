// to Open And Close The Board
let TheButton =  document.querySelector("#Opening")
let TheBoard =  document.querySelector("#Control_Board")
TheButton.onclick = ()=>{
    TheBoard.classList.toggle("Open")
    TheButton.classList.toggle("fa-spin")
}
// Set The Background at Span From Id Value
let BackGroundColors = document.querySelectorAll("#BackGround-Colors div span")
for(Index=0;Index<BackGroundColors.length;Index++){
    BackGroundColors[Index].style.backgroundColor = `${BackGroundColors[Index].getAttribute("id")}`
}
// Shifting main-color
let root = document.querySelector(":root")
BackGroundColors.forEach((el , index)=>{
    BackGroundColors[index].onclick = () => {
        root.style.setProperty("--MainColor" , `${BackGroundColors[index].getAttribute("id")}` )
    }
})
// To Shoe And Hide Client Details
let ButtonForShowClientDetails = document.querySelectorAll(".Showing")
let ClientDetails = document.querySelectorAll(".The_Details")
ButtonForShowClientDetails.forEach((el , index)=>{
    ButtonForShowClientDetails[index].onclick = () => {
        ClientDetails[index].classList.toggle("Show")
    }
})

console.log(ButtonForShowClientDetails)
console.log(ClientDetails)