import Model from "../model/Model.js"
import KartyakView from "../view/publikus/KartyakView.js";

export default class IndexController{
    constructor(){
        const dataService = new Model()

        dataService.getData("products", this.megjelenit)
    }

    megjelenit(lista){
        new KartyakView(lista, $("article"));

    }
}