import UrlapView from "../view/Urlap/UrlapView.js"
import UrlapModel from "../model/UrlapModel.js"
import TablazatView from "../view/Tablazat/TablazatView.js"


export default class UrlapController {
    constructor(){
        const dataService = new UrlapModel()
        new UrlapView($(".urlap"))

        dataService.getData("products", this.megjelenit)

        $(window).on("ujAdatHozzaadasa", (event)=>{
            dataService.postData("products", event.detail)
        })

        $(window).on("sorTorlese", (event)=>{
            dataService.deleteData("products", event.detail.id)
        })

        $(window).on("sorModositasa", (event)=>{
            dataService.putData("products", event.detail.id, event.detail.adat)
        })
    }

    megjelenit(lista){
        new TablazatView(lista, $(".tablazat"))

    }

}