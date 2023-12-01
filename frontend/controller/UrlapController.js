import UrlapView from "../view/UrlapView.js"
import UrlapModel from "../model/UrlapModel.js"


export default class UrlapController {
    constructor(){
        const dataService = new UrlapModel()
        new UrlapView($(".urlap"))

        $(window).on("ujAdatHozzaadasa", (event)=>{
            dataService.post("people", event.detail)
        })
    }

}