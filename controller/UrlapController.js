import UrlapView from "../view/UrlapView.js"


export default class UrlapController {
    constructor(){
        new UrlapView($(".urlap"))

        $(window).on("ujAdatHozzaadasa", (event)=>{
            console.log(event.detail)
        })
    }

}