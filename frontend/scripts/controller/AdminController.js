import Model from "../model/Model.js"
import UrlapView from "../view/admin/Urlap/UrlapView.js"
import TablazatView from "../view/admin/Tablazat/TablazatView.js"

export default class UrlapController {
    constructor(){
        const dataService = new Model()
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