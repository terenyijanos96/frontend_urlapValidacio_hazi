import UrlapView from "../view/UrlapView.js"


export default class UrlapController {
    constructor(){
        console.log("controller")
        new UrlapView($(".urlap"))

        $(window).on("ujAdatHozzaadasa", (event)=>{
            console.log(event.detail)
        })
    }

}