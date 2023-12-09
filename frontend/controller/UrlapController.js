import UrlapView from "../view/Urlap/UrlapView.js"
import UrlapModel from "../model/UrlapModel.js"
import TablazatView from "../view/Tablazat/TablazatView.js"


export default class UrlapController {
    constructor(){
        const dataService = new UrlapModel()
        new UrlapView($(".urlap"))

        dataService.getData("people", this.megjelenit)

        $(window).on("ujAdatHozzaadasa", (event)=>{
            dataService.postData("people", event.detail)
        })

        $(window).on("sorTorlese", (event)=>{
            dataService.deleteData("people", event.detail.id)
        })

        
        $(window).on("sorModositasa", (event)=>{
            dataService.putData("people", event.detail.id)
        })
    }

    megjelenit(lista){
        new TablazatView(lista, $(".lista"))

    }

}