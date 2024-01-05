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
        pattern : "^[A-ZÁÉÍÓÖŐÚÜŰ]?[a-záéíóöőúüű]+$",
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
}
