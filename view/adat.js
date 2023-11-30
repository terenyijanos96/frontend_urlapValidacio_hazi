export const adatLeiras = {
    vezetekNev: {
        megjelenes : "Vezetéknév",
        tipus : "text",
        placeholder : "pl.: Gipsz",
        pattern : "^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]{3,}$",
        szoveg : "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required : true,
        value: ""
    },

    keresztNev: {
        megjelenes : "Keresztnév",
        tipus : "text",
        placeholder : "pl.: Jakab",
        pattern : "^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]{3,}$",
        szoveg : "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie!",
        required : true,
        value: ""
    },

    szul: {
        megjelenes : "Születési év",
        tipus : "number",
        value : "2000",
        pattern : {min : "1000", max: "2500"},
        szoveg : "1000 és 2500 közötti számot adhat meg",
    },

    submit: {
        tipus: "submit",
        value: "Küld"
    }
}
