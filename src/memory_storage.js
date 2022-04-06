// Datoteka: src/memory_storage.js

let storage = {

    osobni_podaci: [
        {
            id_korisnika: 10001,
            ime_korisnika: "Marko",
            prezime_korisnika: "Marulić",
            br_telefona: "098966405",
            
        },

        {
            id_korisnika: 10002,
            ime_korisnika: "Pero",
            prezime_korisnika: "Perinja",
            br_telefona: "09897803",
            
        },
        
    ],

    
    
    podaci_vozila: [
        {
            id_vozila: 20002,
            id_vlasnika: 10002,
            naziv_vozila: "Fiat Punto",
            boja_vozila: "Crvena",
            registracija: "ZD159FA",
            
        },

        {
            id_vozila: 20001,
            id_vlasnika: 10001,
            naziv_vozila: "Golf VII",
            boja_vozila: "Siva",
            registracija: "PU336HF",
            
        },
        
    ],

    podaci_rezervacije: [
        {
            id_vozila: 20002,
            datum_rezervacije: "28.4.2021",
            parking: "Rojc",
            vrijeme_boravka: "3 sata",
            
        },

        {
            id_vozila: 20001,
            datum_rezervacije: "30.4.2021",
            parking: "Karolina",
            vrijeme_boravka: "1 sat",
            
        },
        
    ],

    kalkulator_cijene_parkinga: [
        {
            ime_parkinga: "Rojc",
            vrijeme_boravka: "3 sata",
            cijena_po_satu: "6kn",
            
        },

        {
            ime_parkinga: "Karolina",
            vrijeme_boravka: "1 sat",
            cijena_po_satu: "4kn",
            
        },
        
    ],

};

export default storage;