const cateringData = {
    "businessName": "Cecilia - Pastelería y Comidas",
    "contact": {
        "phone": "098 481 748",
        "method": "Por encargo"
    },
    "menu": [
        {
            "category": "Dulce",
            "items": [
                {
                    "name": "Pasta Frola",
                    "price": 350,
                    "currency": "UYU",
                    "description": "Diámetro 28 cm",
                    "options": [
                        "Dulce de membrillo",
                        "Dulce de leche"
                    ]
                },
                {
                    "name": "Tarta Frutal",
                    "price": 900,
                    "currency": "UYU",
                    "description": "Diámetro 28 cm. Con crema pastelera.",
                    "ingredients": [
                        "Frutilla",
                        "Kiwi",
                        "Duraznos"
                    ]
                },
                {
                    "name": "Budines",
                    "price": 250,
                    "currency": "UYU",
                    "flavors": [
                        "Limón",
                        "Arándanos",
                        "Naranja",
                        "Marmolado",
                        "Vainilla y chispas de chocolate",
                        "Frutos secos",
                        "Fruta abrillantada"
                    ]
                },
                {
                    "name": "Caja Dulcera",
                    "price": 900,
                    "currency": "UYU",
                    "contents": [
                        "4 Pasta Frolas",
                        "4 Alfajores de maicena",
                        "4 Salchichones de chocolate",
                        "1 Mini budín (gusto a elección)"
                    ]
                },
                {
                    "name": "Alfajores de Maicena",
                    "price": 120,
                    "currency": "UYU",
                    "quantity": "6 unidades"
                },
                {
                    "name": "Salchichón de Chocolate",
                    "price": 650,
                    "currency": "UYU",
                    "quantity": "1 kg"
                }
            ]
        },
        {
            "category": "Salado",
            "items": [
                {
                    "name": "Tortas Saladas",
                    "price": 800,
                    "currency": "UYU",
                    "description": "Diámetro 35 cm",
                    "varieties": [
                        {
                            "name": "Jamón, queso y huevo"
                        },
                        {
                            "name": "Napolitana",
                            "ingredients": ["Jamón", "Queso", "Huevo", "Tomate", "Aceituna"]
                        },
                        {
                            "name": "Capresse"
                        },
                        {
                            "name": "Zapallito"
                        },
                        {
                            "name": "Puerro"
                        },
                        {
                            "name": "Cebolla y queso"
                        }
                    ],
                    "upgrades": [
                        {
                            "description": "Con masa de harina integral",
                            "price": 900
                        }
                    ]
                },
                {
                    "name": "Pizzetas con Muzzarella",
                    "price": 350,
                    "currency": "UYU",
                    "description": "Diámetro 35 cm"
                },
                {
                    "name": "Pizzetas con gusto a elección",
                    "price": 400,
                    "currency": "UYU",
                    "toppings": [
                        "Jamón",
                        "Panceta",
                        "Huevo",
                        "Albahaca",
                        "Aceituna"
                    ]
                },
                {
                    "name": "Calzone Napolitano",
                    "price": 450,
                    "currency": "UYU"
                }
            ]
        }
    ]
};

export default cateringData;
