export const adatLeiras = {
    producer: {
        megjelenes : "Gyártónév",
        tipus : "text",
        placeholder : "pl.: Coca Cola",
        pattern : "^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]{3,}$",
        required : true,
        value: ""
    },

    productName: {
        megjelenes : "Terméknév",
        tipus : "text",
        placeholder : "pl.: Kóla üdítő",
        pattern : "^([A-ZÁÉÍÓÖŐÚÜŰ]?[a-záéíóöőúüű]+\s?)+",
        required : true,
        value: ""
    },

    productPrice: {
        megjelenes : "Ár (Ft)",
        tipus : "number",
        value : "2000",
        pattern : {min : "0", max: "250000"},
    },

    stock: {
        megjelenes : "Készlet (db)",
        tipus : "number",
        value : "0",
        pattern : {min : "0", max: "500"},
    },

    productPhoto: {
        megjelenes : "Fotó (elérési útvonal)",
        tipus : "text",
        value: "",
        placeholder: "pl.: images/cola.jpg",
        pattern : "^.+\.(jpg|png|jpeg|bmp)$",
        required : true,
    },

    submit: {
        tipus: "submit",
        value: "Küld"
    }
}


export const fejlec = {
    id: "Azonosító",
    producer: "Gyártónév",
    productName: "Terméknév",
    productPrice: "Ár (Ft)",
    stock: "Készlet (db)",
    productPhoto: "Fotó (elérési útvonal)",
}
