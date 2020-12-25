const userData = [
    {
        "name": "toan le",
        "email": "leduc12taoan16@gmail.com",
        "userName": "leduccctoans",
        "password": "toan123",
        "score": 100,
        "scoreUsed": 50,
        "sex": "female",
        "birthday": "1997-3-16",
        "address": [
            {
                "location": "1312 toa cca",
                "locationType": "home"
            }
        ]
    },
    {
        "name": "toan le",
        "email": "ledvzvuctaoan16@gmail.com",
        "userName": "leductoansvvs",
        "password": "toan123",
        "score": 100,
        "scoreUsed": 50,
        "sex": "female",
        "birthday": "1997-3-16",
        "address": [
            {
                "location": "1312 toa cca",
                "locationType": "home"
            }
        ]
    },
    {
        "name": "toan le",
        "email": "ledu161ctaoan16@gmail.com",
        "userName": "leductbbboans",
        "password": "toan123",
        "score": 100,
        "scoreUsed": 50,
        "sex": "female",
        "birthday": "1997-3-16",
        "address": [
            {
                "location": "1312 toa cca",
                "locationType": "home"
            }
        ]
    },
    {
        "name": "toan le",
        "email": "le1111ductaoan16@gmail.com",
        "userName": "leduccvcvtoans",
        "password": "toan123",
        "score": 100,
        "scoreUsed": 50,
        "sex": "female",
        "birthday": "1997-3-16",
        "address": [
            {
                "location": "1312 toa cca",
                "locationType": "home"
            }
        ]
    }
]

const categoryData = [
    {
        "name": "mobile"
    },
    {
        "name": "laptop"
    },
    {
        "name": "air machine"
    }
]

const rankData = [
    {
        "name": "iron",
        "score": {
            "min": 0,
            "max": 100
        },
        "discount": 10
    },
    {
        "name": "copper",
        "score": {
            "min": 101,
            "max": 500
        },
        "discount": 15
    },
    {
        "name": "silver",
        "score": {
            "min": 501,
            "max": 1100
        },
        "discount": 20
    },
    {
        "name": "gold",
        "score": {
            "min": 1101,
            "max": 2000
        },
        "discount": 25
    }
]

const producerData = [
    {
        "name": "dell"
    },
    {
        "name": "apple"
    },
    {
        "name": "samsung"
    },
    {
        "name": "sony"
    },
    {
        "name": "asus"
    },
    {
        "name": "hp"
    },
    {
        "name": "daikin"
    },
    {
        "name": "toshiba"
    },
    {
        "name": "lg"
    },
    {
        "name": "vinmart"
    }
]

const productData = [
    {
        "name": "xps",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "ip",
        "description": "hang hin",
        "inventory": 1000,
        "sold": 30,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 14000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "sp2",
        "description": "hang hin",
        "inventory": 1020,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 3",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 4",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro5",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 6",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 7",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 8",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 9",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 10",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 11",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 12",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 13",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 14",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "xps",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "ip",
        "description": "hang hin",
        "inventory": 1000,
        "sold": 30,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 14000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "sp2",
        "description": "hang hin",
        "inventory": 1020,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 3",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 4",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro5",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 6",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 7",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 8",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 9",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 10",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 11",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 12",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 13",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 14",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "xps",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "ip",
        "description": "hang hin",
        "inventory": 1000,
        "sold": 30,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 14000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "sp2",
        "description": "hang hin",
        "inventory": 1020,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 3",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 4",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro5",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 6",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 7",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 8",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 9",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 10",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 11",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 12",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 13",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    },
    {
        "name": "pro 14",
        "description": "hang hin",
        "inventory": 100,
        "sold": 3,
        "price": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-5-1",
                "price": 20000000
            },
            {
                "startDate": "2020-5-2",
                "endData": "2020-12-1",
                "price": 19000000
            }
        ],
        "discount": [
            {
                "startDate": "2020-1-1",
                "endData": "2020-3-1",
                "discount": 5
            },
            {
                "startDate": "2020-3-2",
                "endData": "2020-6-1",
                "discount": 10
            }
        ]
    }
]

import mongoose from 'mongoose'
import UserModel from '../src/models/user.model'
import RankModel from '../src/models/rank.model'
import CategoryModel from '../src/models/category.model'
import ProducerModel from '../src/models/producer.model'
import ProductModel from '../src/models/product.model'
import dotenv from 'dotenv'
dotenv.config()


const mongoDbUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
    option = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        retryWrites: false,
        // user: 'myUserName',
        // pass: 'myPassword',
    }

const installDatabase = async (userDatas, categoryDatas, rankDatas, producerDatas, productDatas) => {

    console.log(`connecting to ${mongoDbUrl}`);
    mongoose.Promise = global.Promise

    await mongoose.connect(mongoDbUrl, option)
        .then(() => {
            console.log('Successfully connected to the database');
        })
        .catch((err) => {
            console.log(`could not connect to the database. Exitin now...\n${err}`);
        })

    try {
        console.log("installDatabase");
        const arrPromise = []

        arrPromise.push(userDatas.forEach(element => {
            const newUser = new UserModel(element)
            return newUser.save()
        }))

        arrPromise.push((rankDatas.forEach(element => {
            const newRank = new RankModel(element)
            return newRank.save()
        })))

        await Promise.all(arrPromise)

        const arrAddCategory = [], category_id = []
        arrAddCategory.push((categoryDatas.forEach(async element => {
            const newCategory = new CategoryModel(element)
            category_id.push(newCategory._id)
            return newCategory.save()
        })))

        await Promise.all(arrAddCategory)

        const arrAddProducer = [], producer_id = []
        arrAddProducer.push((producerDatas.forEach(element => {
            const newProducer = new ProducerModel(element)
            producer_id.push(newProducer._id)
            return newProducer.save()
        })))

        await Promise.all(arrAddProducer)



        const arrAddProduct = []
        arrAddProduct.push((productDatas.forEach(element => {

            element.category = new mongoose.Types.ObjectId(category_id[Math.floor(Math.random() * category_id.length)])
            element.producer = new mongoose.Types.ObjectId(producer_id[Math.floor(Math.random() * producer_id.length)])

            const newProduct = new ProductModel(element)
            return newProduct.save()
        })))

        await Promise.all(arrAddProducer)
        console.log('add demo data uccessfully');
    } catch (error) {
        console.log('cannot add demo data');
        console.log('err: ' + err);
    }
}

installDatabase(userData, categoryData, rankData, producerData, productData)