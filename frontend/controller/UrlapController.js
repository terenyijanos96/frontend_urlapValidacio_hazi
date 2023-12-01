import UrlapView from "../view/UrlapView.js"
import UrlapModel from "../model/UrlapModel.js"
import ListaView from "../view/ListaView.js"


export default class UrlapController {
    constructor(){
        const dataService = new UrlapModel()
        new UrlapView($(".urlap"))

        dataService.getData("people", this.megjelenit)

        $(window).on("ujAdatHozzaadasa", (event)=>{
            dataService.postData("people", event.detail)
        })
    }

    megjelenit(lista){
        new ListaView(lista, $(".lista"))
    }

}