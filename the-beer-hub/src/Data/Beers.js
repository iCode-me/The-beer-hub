const Beers = [ 
    {
        "id": 1,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "first_brewed": "09/2007",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.5,
        "ibu": 60,
        "target_fg": 1010,
        "target_og": 1044,
        "ebc": 20,
        "srm": 10,
        "ph": 4.4,
        "attenuation_level": 75,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 64,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 3.3,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.2,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.4,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Spicy chicken tikka masala",
            "Grilled chicken quesadilla",
            "Caramel toffee cake"
        ],
        "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 2,
        "name": "Trashy Blonde",
        "tagline": "You Know You Shouldn't",
        "first_brewed": "04/2008",
        "description": "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
        "image_url": "https://images.punkapi.com/v2/2.png",
        "abv": 4.1,
        "ibu": 41.5,
        "target_fg": 1010,
        "target_og": 1041.7,
        "ebc": 15,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 76,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 69,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 18,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 3.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.2,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.4,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 13.8,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 13.8,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 26.3,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 18.8,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Fresh crab with lemon",
            "Garlic butter dipping sauce",
            "Goats cheese salad",
            "Creamy lemon bar doused in powdered sugar"
        ],
        "brewers_tips": "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 3,
        "name": "Berliner Weisse With Yuzu - B-Sides",
        "tagline": "Japanese Citrus Berliner Weisse.",
        "first_brewed": "11/2015",
        "description": "Japanese citrus fruit intensifies the sour nature of this German classic.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.2,
        "ibu": 8,
        "target_fg": 1007,
        "target_og": 1040,
        "ebc": 8,
        "srm": 4,
        "ph": 3.2,
        "attenuation_level": 83,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 60,
                        "unit": "celsius"
                    },
                    "duration": 10
                },
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 30
                },
                {
                    "temp": {
                        "value": 72,
                        "unit": "celsius"
                    },
                    "duration": 10
                },
                {
                    "temp": {
                        "value": 78,
                        "unit": "celsius"
                    },
                    "duration": 5
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Soured naturally using the kettle souring technique, Yuzu fruit: 50g at middle, Yuzu juice: 200ml at FV"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Propino Pale Malt",
                    "amount": {
                        "value": 1.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat Malt",
                    "amount": {
                        "value": 1.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Propino Pale Malt for kettle souring",
                    "amount": {
                        "value": 0.03,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Acidulated Malt for kettle souring",
                    "amount": {
                        "value": 0.03,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Bramling Cross",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "bitter"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Smoked chicken wings",
            "Miso ramen",
            "Yuzu cheesecake"
        ],
        "brewers_tips": "Clean everything twice. All you want is the clean sourness of lactobacillus.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 4,
        "name": "Pilsen Lager",
        "tagline": "Unleash the Yeast Series.",
        "first_brewed": "09/2013",
        "description": "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
        "image_url": "https://images.punkapi.com/v2/4.png",
        "abv": 6.3,
        "ibu": 55,
        "target_fg": 1012,
        "target_og": 1060,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 80,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 9,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 4.58,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Spicy crab cakes",
            "Spicy cucumber and carrot Thai salad",
            "Sweet filled dumplings"
        ],
        "brewers_tips": "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 5,
        "name": "Avery Brown Dredge",
        "tagline": "Bloggers' Imperial Pilsner.",
        "first_brewed": "02/2011",
        "description": "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.",
        "image_url": "https://images.punkapi.com/v2/5.png",
        "abv": 7.2,
        "ibu": 59,
        "target_fg": 1027,
        "target_og": 1069,
        "ebc": 10,
        "srm": 5,
        "ph": 4.4,
        "attenuation_level": 67,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 66,
                        "unit": "celsius"
                    },
                    "duration": 70
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 10,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Lager Malt",
                    "amount": {
                        "value": 6.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 60,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 60,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 60,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Vietnamese squid salad",
            "Chargrilled corn on the cob with paprika butter",
            "Strawberry and rhubarb pie"
        ],
        "brewers_tips": "Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 6,
        "name": "Electric India",
        "tagline": "Vibrant Hoppy Saison.",
        "first_brewed": "05/2013",
        "description": "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
        "image_url": "https://images.punkapi.com/v2/6.png",
        "abv": 5.2,
        "ibu": 38,
        "target_fg": 1005,
        "target_og": 1045,
        "ebc": 15,
        "srm": 7.5,
        "ph": 4.4,
        "attenuation_level": 88.9,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 22,
                    "unit": "celsius"
                }
            },
            "twist": "Honey: 62.5g at End (WP), Coriander Seeds: 8.5g at 45mins"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 3.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Peppercorns",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3711 - French Saison™"
        },
        "food_pairing": [
            "Mussels with a garlic and herb sauce",
            "Crab melt sandwich",
            "Shortbread cookies"
        ],
        "brewers_tips": "Source some really good heather honey to get the right spicy esters in the beer.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 7,
        "name": "AB:12",
        "tagline": "Imperial Black Belgian Ale.",
        "first_brewed": "07/2012",
        "description": "An Imperial Black Belgian Ale aged in old Invergordon Scotch whisky barrels with mountains of raspberries, tayberries and blackberries in each cask. Decadent but light and dry, this beer would make a fantastic base for ageing on pretty much any dark fruit - we used raspberries, tayberries and blackberries beause they were local.",
        "image_url": "https://images.punkapi.com/v2/7.png",
        "abv": 11.2,
        "ibu": 35,
        "target_fg": 1017,
        "target_og": 1108,
        "ebc": 80,
        "srm": 40,
        "ph": 5.3,
        "attenuation_level": 84,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 69,
                        "unit": "celsius"
                    },
                    "duration": 105
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Aged in whisky barrels with raspberries, tayberries and blackberries"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 9.69,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.19,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 3",
                    "amount": {
                        "value": 0.44,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Tomahawk",
                    "amount": {
                        "value": 31.25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Tomahawk",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Tomahawk",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 3522 - Belgian Ardennes™"
        },
        "food_pairing": [
            "Tandoori lamb with pomegranate",
            "Beef Wellington with a red wine jus",
            "Raspberry chocolate torte"
        ],
        "brewers_tips": "Don't worry too much about controlling the temperature with the Belgian yeast strain - just make sure it doesn't rise above 30°C!",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 8,
        "name": "Fake Lager",
        "tagline": "Bohemian Pilsner.",
        "first_brewed": "03/2013",
        "description": "Fake is the new black. Fake is where it is at. Fake Art, fake brands, fake breasts, and fake lager. We want to play our part in the ugly fallout from the Lager Dream. Say hello to Fake Lager – a zesty, floral 21st century faux masterpiece with added BrewDog bitterness.",
        "image_url": "https://images.punkapi.com/v2/8.png",
        "abv": 4.7,
        "ibu": 40,
        "target_fg": 1010,
        "target_og": 1046,
        "ebc": 12,
        "srm": 6,
        "ph": 4.4,
        "attenuation_level": 78,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 10,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 3.33,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.42,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.28,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Acidulated Malt",
                    "amount": {
                        "value": 0.07,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 7.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Hersbrucker",
                    "amount": {
                        "value": 6.25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 6.25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Hersbrucker",
                    "amount": {
                        "value": 18.75,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 18.75,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Fried crab cakes with avocado salsa",
            "Spicy shredded pork roll with hot dipping sauce",
            "Key lime pie"
        ],
        "brewers_tips": "Once the primary fermentation is complete get this beer as cold as you can and let it mature for as long as you've got.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 9,
        "name": "AB:07",
        "tagline": "Whisky Cask-Aged Scotch Ale.",
        "first_brewed": "03/2010",
        "description": "Whisky cask-aged imperial scotch ale. Beer perfect for when the rain is coming sideways. Liquorice, plum and raisin temper the warming alcohol, producing a beer capable of holding back the Scottish chill.",
        "image_url": "https://images.punkapi.com/v2/9.png",
        "abv": 12.5,
        "ibu": 30,
        "target_fg": 1020,
        "target_og": 1106,
        "ebc": 84,
        "srm": 42,
        "ph": 5.6,
        "attenuation_level": 83,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 105
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 11,
                    "unit": "celsius"
                }
            },
            "twist": "Scottish Heather Honey: 62.5g at middle, Add honey during the boil. After fermentation, age in a Scottish whisky cask"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Munich",
                    "amount": {
                        "value": 5.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 1.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 1.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Peated Malt",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Brown",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 31.3,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                }
            ],
            "yeast": "Saflager S189"
        },
        "food_pairing": [
            "Kedgeree",
            "Scotch broth with sourdough bread",
            "Clootie dumpling"
        ],
        "brewers_tips": "Authentic heather honey adds a beautiful floral top note that is unachievable any other way.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 10,
        "name": "Bramling X",
        "tagline": "Single Hop IPA Series - 2011.",
        "first_brewed": "01/2011",
        "description": "Good old Bramling Cross is elegant, refined, assured, (boring) and understated. Understated that is unless you hop the living daylights out of a beer with it. This is Bramling Cross re-invented and re-imagined, and shows just what can be done with English hops if you use enough of them. Poor Bramling Cross normally gets lost in a woeful stream of conformist brown ales made by sleepy cask ale brewers. But not anymore. This beer shows that British hops do have some soul, and is a fruity riot of blackberries, pears, and plums. Reminds me of the bramble, apple and ginger jam my grandmother used to make.",
        "image_url": "https://images.punkapi.com/v2/10.png",
        "abv": 7.5,
        "ibu": 75,
        "target_fg": 1013,
        "target_og": 1068,
        "ebc": 22,
        "srm": 11,
        "ph": 4.4,
        "attenuation_level": 80.9,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 6.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Bramling Cross",
                    "amount": {
                        "value": 60,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Bramling Cross",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Warm blackberry pie",
            "Vinegar doused fish and chips",
            "Aromatic korma curry with lemon and garlic naan"
        ],
        "brewers_tips": "Getting good Bramling Cross is key. Most English hops are in leaf form (not pelletised), so getting fresh hops close to harvest (September) will give this beer the right amount of dark berry intensity.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 11,
        "name": "Misspent Youth",
        "tagline": "Milk & Honey Scotch Ale.",
        "first_brewed": "04/2013",
        "description": "The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 7.3,
        "ibu": 30,
        "target_fg": 1020,
        "target_og": 1079,
        "ebc": 120,
        "srm": 60,
        "ph": 4.4,
        "attenuation_level": 74.7,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 67,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "See honey and lactose additions"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 2.18,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.3,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.3,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Smoked Weyermann",
                    "amount": {
                        "value": 1.8,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 0.6,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Brown",
                    "amount": {
                        "value": 0.6,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.1,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.05,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.6,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.2,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Honey",
                    "amount": {
                        "value": 250,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "Flavour"
                },
                {
                    "name": "Lactose",
                    "amount": {
                        "value": 375,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "Flavour"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "aroma"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Roasted garlic and chilli infused camembert cheese",
            "Korean style chicken wings",
            "Chocolate milk shake"
        ],
        "brewers_tips": "Lots of malt in this one. Mash-in in stages, and spread the pale ale malt throughout the mash to provide stability. If the mash starts to sink, stop, wait a few minutes while mixing, then start again.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 12,
        "name": "Arcade Nation",
        "tagline": "Seasonal Black IPA.",
        "first_brewed": "12/2015",
        "description": "Running the knife-edge between an India Pale Ale and a Stout, this particular style is one we truly love. Black IPAs are a great showcase for the skill of our brew team, balancing so many complex and twisting flavours in the same moment. The citrus, mango and pine from the hops – three of our all-time favourites – play off against the roasty dryness from the malt bill at each and every turn.",
        "image_url": "https://images.punkapi.com/v2/12.png",
        "abv": 5.3,
        "ibu": 60,
        "target_fg": 1012,
        "target_og": 1052,
        "ebc": 200,
        "srm": 100,
        "ph": 4.2,
        "attenuation_level": 77,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 3.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.18,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 1",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 19,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "King prawn kebabs",
            "Halibut with a mango and tomato salad",
            "Mint chocloate ice cream"
        ],
        "brewers_tips": "Be as accurate as possible when weighing out your malts to ensure you strike the right balance.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 13,
        "name": "Movember",
        "tagline": "Moustache-Worthy Beer.",
        "first_brewed": "11/2009",
        "description": "A deliciously robust, black malted beer with a decadent dark, dry cocoa flavour that provides an enticing backdrop to the Cascade hops.",
        "image_url": "https://images.punkapi.com/v2/13.png",
        "abv": 4.5,
        "ibu": 50,
        "target_fg": 1012,
        "target_og": 1047,
        "ebc": 140,
        "srm": 70,
        "ph": 5.2,
        "attenuation_level": 74.5,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 68,
                        "unit": "celsius"
                    },
                    "duration": 50
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 3.44,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 1",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 3",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 43.8,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 81.3,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 250,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Vegetable egg scramble",
            "Margherita pizza",
            "Fresh berry crisp tart"
        ],
        "brewers_tips": "If you can't find really fresh cascade, substitute it for Amarillo or Ahtanum.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 14,
        "name": "Alpha Dog",
        "tagline": "Existential Red Ale.",
        "first_brewed": "02/2010",
        "description": "A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.",
        "image_url": "https://images.punkapi.com/v2/14.png",
        "abv": 4.5,
        "ibu": 42,
        "target_fg": 1025,
        "target_og": 1046,
        "ebc": 62,
        "srm": 31,
        "ph": 4.4,
        "attenuation_level": 72.8,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 25
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 22,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 2.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.61,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.28,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal 350-400",
                    "amount": {
                        "value": 0.2,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 30,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Pastrami",
            "Swiss and horseradish sandwich",
            "Sharp cheddar cheese and onion/ raisin chutney",
            "Peanut brittle"
        ],
        "brewers_tips": "Crush the malt as close to brewing time as possible. The fresher the malt, the more intense caramel flavours will be released in the wort.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 15,
        "name": "Mixtape 8",
        "tagline": "An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.",
        "first_brewed": "01/2012",
        "description": "This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.",
        "image_url": "https://images.punkapi.com/v2/15.png",
        "abv": 14.5,
        "ibu": 50,
        "target_fg": 1014,
        "target_og": 1093,
        "ebc": 40,
        "srm": 20,
        "ph": 4.4,
        "attenuation_level": 85,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 40
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Barrel aged and blended with Anarchist Alchemist"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale - Tipple",
                    "amount": {
                        "value": 11.1,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal",
                    "amount": {
                        "value": 0.44,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Columbus Extract",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3522 - Belgian Ardennes™"
        },
        "food_pairing": [
            "Coriander & chilli crab cakes",
            "Goats cheese salad with walnuts, radish and blood orange",
            "Pistachio cake"
        ],
        "brewers_tips": "Brew twice as much Belgian Tripel as you were planning on ageing - it's awesome on its own too!",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 16,
        "name": "Libertine Porter",
        "tagline": "Dry-Hopped Aggressive Porter.",
        "first_brewed": "01/2012",
        "description": "An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke.",
        "image_url": "https://images.punkapi.com/v2/16.png",
        "abv": 6.1,
        "ibu": 45,
        "target_fg": 1020,
        "target_og": 1067,
        "ebc": 219,
        "srm": 109.5,
        "ph": 4.4,
        "attenuation_level": 70.1,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 68,
                        "unit": "celsius"
                    },
                    "duration": 35
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 18,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale - Spring Blend",
                    "amount": {
                        "value": 5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Roasted Barley",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Smoked Malt",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 31.25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "bitter"
                },
                {
                    "name": "Willamette",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Galena",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Galena",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 100,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Blue cheese beef burger",
            "Glazed short ribs",
            "Chocolate cake"
        ],
        "brewers_tips": "Mash in at a higher temperature to leave more unfermentable sugars in the wort. This gives the beer a sweeter porter profile.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 17,
        "name": "AB:06",
        "tagline": "Imperial Black IPA.",
        "first_brewed": "04/2011",
        "description": "Our sixth Abstrakt, this imperial black IPA combined dark malts with a monumental triple dry-hop, using an all-star team of some of our favourite American hops. Roasty and resinous.",
        "image_url": "https://images.punkapi.com/v2/17.png",
        "abv": 11.2,
        "ibu": 150,
        "target_fg": 1013,
        "target_og": 1098,
        "ebc": 70,
        "srm": 35,
        "ph": null,
        "attenuation_level": 87,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 17,
                    "unit": "celsius"
                }
            },
            "twist": "White cane sugar: 150g at middle"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 6.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 1",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 3",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Hop Extract",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Coffee dusted venison loin",
            "Memphis-style beef short ribs",
            "Chocolate orange brownies"
        ],
        "brewers_tips": "Boil down to desired OG (about 17 litres).",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 18,
        "name": "Russian Doll – India Pale Ale",
        "tagline": "Nesting Hop Bomb.",
        "first_brewed": "08/2014",
        "description": "The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each",
        "image_url": "https://images.punkapi.com/v2/18.png",
        "abv": 6,
        "ibu": 70,
        "target_fg": 1012,
        "target_og": 1058,
        "ebc": 25,
        "srm": 12.5,
        "ph": 5.2,
        "attenuation_level": 79.3,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Spicy chicken skewers",
            "Fish tacos with hot sauce",
            "Lemon pound cake with a ice sugar glaze"
        ],
        "brewers_tips": "Create balance through experimentation with the hop amounts and malt backbone.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 19,
        "name": "Hello My Name Is Mette-Marit",
        "tagline": "Lingonberry Double IPA.",
        "first_brewed": "06/2013",
        "description": "We sent this beer to Norway where it was known as 'Hello, my name is Censored'. You can make up your own mind as to why. This brew was a red berry explosion, with a reisnous bitter edge layered with dry berry tartness.",
        "image_url": "https://images.punkapi.com/v2/19.png",
        "abv": 8.2,
        "ibu": 70,
        "target_fg": 1013,
        "target_og": 1076,
        "ebc": null,
        "srm": null,
        "ph": 4.4,
        "attenuation_level": 83,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 66,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "Infusion of lingonberries alongside the dry hops, Cranberry Juice: 5.5g at 30mins, Lingonberries: 10g Twist"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 6.12,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.8,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Tomahawk",
                    "amount": {
                        "value": 7,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 5.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Galena",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Mt.Hood",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Challenger",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Galena",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Fårikål (mutton stew) with a spicy twist",
            "Fenalår (salted cured lamb)",
            "Krumkake with lingonberry jam"
        ],
        "brewers_tips": "Using crushed cranberries will dry out the beer further, drawing out their natural astringent character.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 20,
        "name": "Rabiator",
        "tagline": "Imperial Wheat Beer",
        "first_brewed": "03/2011",
        "description": "Imperial Wheat beer / Weizenbock brewed by a homesick German in leather trousers. Think banana bread, bubble gum and David Hasselhoff.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 10.27,
        "ibu": 26,
        "target_fg": 1014,
        "target_og": 1092,
        "ebc": 24,
        "srm": 12,
        "ph": 4.4,
        "attenuation_level": 85,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 64,
                        "unit": "celsius"
                    },
                    "duration": 60
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.69,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Hersbrucker",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3333 - German Wheat™"
        },
        "food_pairing": [
            "Grilled portabello mushroom burger",
            "Chicken sausages with creamy mash",
            "Caramel and banana meringue pie"
        ],
        "brewers_tips": "If you are struggling to get that authentic head retention increase your mash temperature to about 70°C.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 21,
        "name": "Vice Bier",
        "tagline": "Hoppy Wheat Bier.",
        "first_brewed": "04/2013",
        "description": "Our take on the classic German Kristallweizen. A clear German wheat beer, layers of bubblegum and vanilla perfectly balanced with the American and New Zealand hops.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.3,
        "ibu": 25,
        "target_fg": 1010,
        "target_og": 1043,
        "ebc": 30,
        "srm": 15,
        "ph": 4,
        "attenuation_level": 81.8,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 22,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 2.69,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Waimea",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 6,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 6,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Waimea",
                    "amount": {
                        "value": 6,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3638 - Bavarian Wheat™"
        },
        "food_pairing": [
            "Citrus salad with balsamic dressing",
            "Lobster",
            "Ginger and orange cookies"
        ],
        "brewers_tips": "Ferment at higher or lower temperatures to select the esters that will create clove- like or banana-like flavours.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 22,
        "name": "Devine Rebel (w/ Mikkeller)",
        "tagline": "Oak-aged Barley Wine.",
        "first_brewed": "12/2008",
        "description": "Two of Europe's most experimental, boundary-pushing brewers, BrewDog and Mikkeller, combined forces to produce a rebellious beer that combined their respective talents and brewing skills. The 12.5% Barley Wine fermented well, and the champagne yeast drew it ever closer to 12.5%. The beer was brewed with a single hop variety and was going to be partially aged in oak casks.",
        "image_url": "https://images.punkapi.com/v2/22.png",
        "abv": 12.5,
        "ibu": 100,
        "target_fg": 1030,
        "target_og": 1093,
        "ebc": 36,
        "srm": 18,
        "ph": 4.4,
        "attenuation_level": 68,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "Part-aged in oak barrels, finished with champagne yeast"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 10,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 1.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 100,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 100,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Stilton on gingerbread biscuits",
            "Pot roasted artichokes",
            "Lamb chops with caramelised figs"
        ],
        "brewers_tips": "Rack off to a secondary fermenter before pitching in some champagne.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 23,
        "name": "Storm",
        "tagline": "Islay Whisky Aged IPA.",
        "first_brewed": "12/2007",
        "description": "Dark and powerful Islay magic infuses this tropical sensation of an IPA. Using the original Punk IPA as a base, we boosted the ABV to 8% giving it some extra backbone to stand up to the peated smoke imported directly from Islay.",
        "image_url": "https://images.punkapi.com/v2/23.png",
        "abv": 8,
        "ibu": 60,
        "target_fg": 1010,
        "target_og": 1082,
        "ebc": 12,
        "srm": 6,
        "ph": 4.4,
        "attenuation_level": 86,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "Oak chips soaked in Islay whisky 50g"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5.8,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Crystal",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 27.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Crystal",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Oysters",
            "Hickory smoked ham",
            "Rocky Road"
        ],
        "brewers_tips": "After primary fermentation is complete, rack off into a secondary fermeter and add the oak chips to replicate the authentic Islay barrel experience.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 24,
        "name": "The End Of History",
        "tagline": "The World's Strongest Beer.",
        "first_brewed": "06/2011",
        "description": "The End of History: The name derives from the famous work of philosopher Francis Fukuyama, this is to beer what democracy is to history. Complexity defined. Floral, grapefruit, caramel and cloves are intensified by boozy heat.",
        "image_url": "https://images.punkapi.com/v2/24.png",
        "abv": 55,
        "ibu": null,
        "target_fg": 1000,
        "target_og": 1112,
        "ebc": null,
        "srm": null,
        "ph": 4.4,
        "attenuation_level": 100,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 20,
                    "unit": "celsius"
                }
            },
            "twist": "Nettles: 25g at end, Juniper: 25g at end"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 12.5,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 6.25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3522 - Belgian Ardennes™"
        },
        "food_pairing": [
            "Roasted wood pigeon with black pudding",
            "Pan seared venison fillet with juniper sauce",
            "Apricot coconut cake"
        ],
        "brewers_tips": "You'll have to get this one all the way down to -70°C. Taxidermy is not optional.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 25,
        "name": "Bad Pixie",
        "tagline": "Spiced Wheat Beer.",
        "first_brewed": "10/2008",
        "description": "2008 Prototype beer, a 4.7% wheat ale with crushed juniper berries and citrus peel.",
        "image_url": "https://images.punkapi.com/v2/25.png",
        "abv": 4.7,
        "ibu": 45,
        "target_fg": 1010,
        "target_og": 1047,
        "ebc": 8,
        "srm": 4,
        "ph": 4.4,
        "attenuation_level": 79,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 67,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "Crushed juniper berries: 12.5g, Lemon peel: 18.8g"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 2.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 2.06,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 18.75,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Sorachi Ace",
                    "amount": {
                        "value": 16.25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Poached sole fillet with capers",
            "Summer fruit salad",
            "Banana split"
        ],
        "brewers_tips": "Make sure you have plenty of room in the fermenter. Beers containing wheat can often foam aggressively during fermentation.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 26,
        "name": "Skull Candy",
        "tagline": "Pacific Hopped Amber Bitter.",
        "first_brewed": "02/2010",
        "description": "The first beer that we brewed on our newly commissioned 5000 litre brewhouse in Fraserburgh 2009. A beer with the malt and body of an English bitter, but the heart and soul of vibrant citrus US hops.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 3.5,
        "ibu": 33,
        "target_fg": 1012,
        "target_og": 1038,
        "ebc": 50,
        "srm": 25,
        "ph": 4.4,
        "attenuation_level": 68.4,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 2.81,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 120",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 18.8,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 18.8,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 31.3,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Haggis bon bons",
            "Rosemary and lemon roast chicken",
            "Oatmeal and cranberry cookies"
        ],
        "brewers_tips": "Make sure your hops are well broken up and mixed in when added to the kettle for aroma additions. The wort is not boiling so is not agitating the hops to allow mixing. If the hops aren't steeped properly in the wort you won't get the maximum flavour impact.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 27,
        "name": "Dog B",
        "tagline": "Cacao, Coffee Chili Anniversary Stout.",
        "first_brewed": "05/2013",
        "description": "Our anniversary stout was based on AB:04, one of our most sought after beers ever. This beer is slightly different each year, with subtle variations coming into play purely down to environmental and fermentation factors. What doesn't change is the rich dark chocolate, bitter coffee and chilli warmth of this monumental Stout.",
        "image_url": "https://images.punkapi.com/v2/27.png",
        "abv": 15,
        "ibu": 90,
        "target_fg": 1003,
        "target_og": 1120,
        "ebc": 100,
        "srm": 50,
        "ph": 4.4,
        "attenuation_level": 98,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "Based on AB:04, but with added vanilla and 3.5 times the chilli."
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 8,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 1.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 1",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 3",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Honey",
                    "amount": {
                        "value": 0.7,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "15",
                    "attribute": "bitter"
                },
                {
                    "name": "Coffee",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "15",
                    "attribute": "twist"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "0",
                    "attribute": " aroma"
                },
                {
                    "name": "Coffee",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "0",
                    "attribute": "twist"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Blackened cajun beef",
            "Blue cheese",
            "Flourless chocolate cheesecake"
        ],
        "brewers_tips": "Be really careful when mashing, as this amount of malts can get tough to sparge! Add honey into the boil, and naga chili and vanilla in maturation (soak them in some neutral spirit to sanitise).",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 28,
        "name": "HBC 369",
        "tagline": "Single Hop India Pale Ale – 2012.",
        "first_brewed": "02/2012",
        "description": "HBC 369 brings rich fruity flavours with the tiniest layer of candy coating on top. HBC 369 (the hop) can bring notes of blueberries, pear, and possibly even sweet potato. HBC 369 (the beer) was balanced, with just one hop providing a complex aroma, and a dry bitterness.",
        "image_url": "https://images.punkapi.com/v2/28.png",
        "abv": 6.7,
        "ibu": 67,
        "target_fg": 1064,
        "target_og": 1013,
        "ebc": 19,
        "srm": 9.5,
        "ph": 4.4,
        "attenuation_level": 79.7,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 68,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale - Spring Blend",
                    "amount": {
                        "value": 5.87,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.37,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.19,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "HBC 369",
                    "amount": {
                        "value": 40,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "HBC 369",
                    "amount": {
                        "value": 100,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "HBC 369",
                    "amount": {
                        "value": 250,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Spicy jalapeño & seared steak fajitas",
            "Grilled spicy corn with feta crumbles",
            "Blueberry pie"
        ],
        "brewers_tips": "HBC 369 is now known as Mosaic!",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 29,
        "name": "10 Heads High",
        "tagline": "Imperial Red Ale.",
        "first_brewed": "04/2013",
        "description": "10 Heads High is loosely based on our awesome 2011 Prototype beer Hops Kill Nazis. This is an uncompromising 7.8% Imperial Red Ale loaded high with American Hops. Think of this as an Imperial India Red Ale, or a super-charged version of 5am Saint. Either way this is a seriously good beer!",
        "image_url": "https://images.punkapi.com/v2/29.png",
        "abv": 7.8,
        "ibu": 70,
        "target_fg": 1015,
        "target_og": 1074,
        "ebc": 90,
        "srm": 45,
        "ph": 4.4,
        "attenuation_level": 79.7,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 18,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 4.75,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 100,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Arrabiata pasta",
            "Mulled cheddar",
            "Toasted almond cake"
        ],
        "brewers_tips": "Achieve the red colour by using the ratio of Caramalt, Crystal and Dark Crystal malts. The trick is to get the colour, without too much dried fruit character.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 30,
        "name": "Dana - IPA Is Dead",
        "tagline": "Single Hop India Pale Ale.",
        "first_brewed": "02/2013",
        "description": "Hailing from Slovenia, Dana was originally cross bred from the German Hallertau Magnum and native Slovenian varieties. Like any good faux noble hop should, it infuses a rustic, musty spiciness into a toasty beast of a malt base.",
        "image_url": "https://images.punkapi.com/v2/30.png",
        "abv": 6.7,
        "ibu": 70,
        "target_fg": 1015,
        "target_og": 1066,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 77.3,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Dana",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Dana",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Dana",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Dana",
                    "amount": {
                        "value": 125,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Spicy Asian-style noodles",
            "Smokey chipotle beef brisket tostada",
            "Sweet potato pie"
        ],
        "brewers_tips": "Noble hops (and their offspring) have a fundamentally different profile to many other hops, down to their different oil fractions. Chill your hops to retain all of the spicy, delicate volatile hop oils!",
        "contributed_by": "Matt Ball <GeordieMatt>"
    },
    {
        "id": 31,
        "name": "Nanny State",
        "tagline": "Alcohol Free Hoppy Ale.",
        "first_brewed": "08/2009",
        "description": "Brewing a full flavoured craft beer at 0.5% is no easy task. Packed with loads of Centennial, Amarillo, Columbus, Cascade and Simcoe hops, dry hopped to the brink and back and sitting at 55 IBUs, Nanny State is a force to be reckoned with. With a backbone of 8 different specialty malts, Nanny State will tantalise your taste buds and leave you yearning for more.",
        "image_url": "https://images.punkapi.com/v2/31.png",
        "abv": 0.5,
        "ibu": 55,
        "target_fg": 1005,
        "target_og": 1007,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 28.6,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 30
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.19,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.03,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Rye",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 6.3,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 6.3,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 6.3,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 6.3,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Earthy mushroom pasta"
        ],
        "brewers_tips": "Get hops in every stage of the brewing process - mash, run off boil and flame off. There's not too much malt body, so the more hops the better.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 32,
        "name": "AB:05",
        "tagline": "Belgian Imperial Stout.",
        "first_brewed": "12/2010",
        "description": "Belgian Imperial Stout aged on toasted coconut and cacao. The Belgian yeast strain introduces a whole new dimension to the Imperial Stout style resulting in a beer that resembles a marshmallow toasted on a smouldering barbeque then smothered in dark chocolate. Massively seductive and encapsulating this blacker than midnight beer pours with coffee brown head so thick you could almost stand on it, and with an epic lacing on your glass.",
        "image_url": "https://images.punkapi.com/v2/32.png",
        "abv": 12.5,
        "ibu": 40,
        "target_fg": 1030,
        "target_og": 1126,
        "ebc": 180,
        "srm": 90,
        "ph": 4.4,
        "attenuation_level": 76,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "Toasted coconut flakes: 75g, Cacao Nibs: 25g"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 10,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 1",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 3",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 1.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Pale Crystal",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3522 - Belgian Ardennes™"
        },
        "food_pairing": [
            "Venison with cacao nibs",
            "Apple upside-down cake",
            "Toffee marshmallow pie"
        ],
        "brewers_tips": "Add the coconut and cacao nibs after primary fermentation and let infuse for at least 6 months at a low temperature.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 33,
        "name": "Sorachi Ace",
        "tagline": "Single Hop IPA Series - 2011.",
        "first_brewed": "01/2011",
        "description": "A hop that tastes of bubble gum? Seriously? No, we did not believe it either. But it does! This is one unique, son of a bitch of a hop. Lemony, deep, musty with a smoothness that belies its power. This hop is lemony like a lemon who was angry earlier but is now tired because of all the rage. This hop of Japanese origin is best enjoyed trying to make sushi from your gold fish, or trying to persuade your girlfriend (or boyfriend maybe) to dress up as a Geisha for Valentine's Day.",
        "image_url": "https://images.punkapi.com/v2/33.png",
        "abv": 7.5,
        "ibu": 75,
        "target_fg": 1013,
        "target_og": 1068,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 82.1,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 6.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Sorachi Ace",
                    "amount": {
                        "value": 14.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Sorachi Ace",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Sashimi",
            "Grilled salmon with a herb and citrus infused butter",
            "Basil, lemon and pine nut angel hair pasta with grilled chicken"
        ],
        "brewers_tips": "Sorachi Ace is hop best handled with care. Too much and your beer may taste like dill pickle and lemons.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 34,
        "name": "Bourbon Baby",
        "tagline": "Barrel-Aged Scotch Ale.",
        "first_brewed": "01/2014",
        "description": "Santa Paws Scotch ale aged in bourbon barrels - light, dry and toasty, with vanilla, hints of chocolate and ginger biscuit, and a faint spicy hoppiness.",
        "image_url": "https://images.punkapi.com/v2/34.png",
        "abv": 5.8,
        "ibu": 35,
        "target_fg": 1005,
        "target_og": 1049,
        "ebc": 44,
        "srm": 22,
        "ph": 4.4,
        "attenuation_level": 90,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 1.75,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.44,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.56,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 0.56,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 3",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Weyermann Beech Smoked",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 18.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Willamette",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Hallertauer Mittelfrüh",
                    "amount": {
                        "value": 6,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Blackened cajun beef",
            "Pulled pork",
            "Millionaire's shortbread"
        ],
        "brewers_tips": "Use bourbon-soaked oak chips in secondary to achieve barrel character.",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 35,
        "name": "Berliner Weisse With Raspberries And Rhubarb - B-Sides",
        "tagline": "Fruity Berliner Weisse.",
        "first_brewed": "11/2015",
        "description": "Tart, dry and acidic with a punch of summer berry as rhubarb crumble.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 3.6,
        "ibu": 8,
        "target_fg": 1007,
        "target_og": 1040,
        "ebc": null,
        "srm": null,
        "ph": 3.2,
        "attenuation_level": 83,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 60,
                        "unit": "celsius"
                    },
                    "duration": 10
                },
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 30
                },
                {
                    "temp": {
                        "value": 72,
                        "unit": "celsius"
                    },
                    "duration": 10
                },
                {
                    "temp": {
                        "value": 78,
                        "unit": "celsius"
                    },
                    "duration": 5
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Raspberries in the boil, rhubarb at maturation. Soured naturally using the kettle souring technique, Raspberries at middle"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Propino Pale Malt",
                    "amount": {
                        "value": 1.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat Malt",
                    "amount": {
                        "value": 1.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Propino Pale Malt for kettle souring",
                    "amount": {
                        "value": 0.03,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Acidulated Malt for kettle souring",
                    "amount": {
                        "value": 0.03,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Bramling Cross",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "bitter"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Grilled salmon",
            "Mac and cheese fries",
            "Cheesecake with raspberry coulis"
        ],
        "brewers_tips": "Fruits added at the end of the boil for 10 mins and additional added in maturation. Boil for no more than 15 mins.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 36,
        "name": "Shipwrecker Circus (w/ Oskar Blues)",
        "tagline": "American Barley Wine - Oskar Blues Collab.",
        "first_brewed": "09/2013",
        "description": "In collaboration with the awesome Oskar Blues from Colorado, we created this big, twisted 10.5% American style barley wine. Big boozy aromas and a sweet viscosity, packed in with some heavy-hitting C-hops, for an intense bitterness to balance this full-bodied malt monster.",
        "image_url": "https://images.punkapi.com/v2/36.png",
        "abv": 10.5,
        "ibu": 85,
        "target_fg": 1022,
        "target_og": 1102,
        "ebc": 64,
        "srm": 32,
        "ph": 4.4,
        "attenuation_level": 102,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 9.35,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 1,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 125,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 125,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 125,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Stilton",
            "Pan seared steak",
            "Dark Chocolate Fondant"
        ],
        "brewers_tips": "Age this beer in the cellar for a few months to allow the warm alcohol flavours to reduce.",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 37,
        "name": "Zephyr",
        "tagline": "There's A Storm Brewing.",
        "first_brewed": "10/2008",
        "description": "A 9.2% Double IPA aged for 21 months in a 1965 Invergordon cask with 30 kg of fresh highland strawberries. This beer is a riot of whisky, caramel and strawberry, all tempered by a toe curling bitterness enducing rapture in all who taste it. Who needs champagne?",
        "image_url": "https://images.punkapi.com/v2/37.png",
        "abv": 12.5,
        "ibu": 125,
        "target_fg": 1016,
        "target_og": 1087,
        "ebc": 40,
        "srm": 20,
        "ph": 4.4,
        "attenuation_level": 81.2,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Oak chips: 15g, Fresh strawberries: 3kg"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 6.3,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.29,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Columbus Extract",
                    "amount": {
                        "value": 31,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 19.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 19.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 19.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 19.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 19.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 19.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 115.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 96,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 96,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 77,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Poached eggs and smoked salmon",
            "Salt and pepper squid",
            "Key Lime Pie"
        ],
        "brewers_tips": "Rack into a secondary fermenter and add your strawberries. Use a blow-off rather than an airlock as the fermentation can get pretty wild as the yeast starts using the sugar from the strawberries.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 38,
        "name": "Belgian Trappist",
        "tagline": "Unleash the Yeast Series.",
        "first_brewed": "09/2013",
        "description": "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Abbey style yeasts add distinctive spicy and fruity notes, and dry out the finished beer.",
        "image_url": "https://images.punkapi.com/v2/38.png",
        "abv": 6.3,
        "ibu": 55,
        "target_fg": 1012,
        "target_og": 1060,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 80,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 25,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 4.58,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "WLP500 - Monastery Ale"
        },
        "food_pairing": [
            "Roast beef with spicy jus",
            "Ginger bread cookies",
            "Orange tart"
        ],
        "brewers_tips": "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 39,
        "name": "Kohatu - IPA Is Dead",
        "tagline": "Single Hop India Pale Ale.",
        "first_brewed": "02/2014",
        "description": "As you'd expect from a New Zealand hop variety, Kohatu contributes bags of tropical fruit, but with loads of lime notes, & pineapple hits. Seriously fruity, with sweet, juicy melon and stonefruit notes.",
        "image_url": "https://images.punkapi.com/v2/39.png",
        "abv": 7.2,
        "ibu": 70,
        "target_fg": 1012,
        "target_og": 1067,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 82.1,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5.65,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Kohatu",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Kohatu",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Kohatu",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Kohatu",
                    "amount": {
                        "value": 250,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Tuna sushi roll with spicy mayonnaise sauce",
            "Thai green curry",
            "Pineapple upside down cake"
        ],
        "brewers_tips": "New Zealand hops are in short supply - club together with other brewers to try and get hold of some, or ask your local brewery if you can buy small amounts from them.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 40,
        "name": "Hello My Name is Vladimir",
        "tagline": "Limonnik Infused Imperial IPA (Not for Gays).",
        "first_brewed": "01/2014",
        "description": "A Limonnik-infused, triple dry- hopped double IPA. Dry berry tartness and intense citrus hop character meld with a dry bready malt base, boosted by a hint of alcohol warmth. This beer was brewed as a protest against the anti-LGBT legislation in Russia surrounding the Sochi Olympics.",
        "image_url": "https://images.punkapi.com/v2/40.png",
        "abv": 8.2,
        "ibu": 70,
        "target_fg": 1013,
        "target_og": 1076,
        "ebc": 16,
        "srm": 8,
        "ph": 4.4,
        "attenuation_level": 83,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Fruit in the boil, berries in the fermenter. Limonnik Berries: 2.5, Twist."
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5.77,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Citra",
                    "amount": {
                        "value": 4,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Blackberry Concentrate",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Sour Cherry Puree",
                    "amount": {
                        "value": 250,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 112.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Mosaic",
                    "amount": {
                        "value": 200,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 187.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Russian mini pork pies",
            "Beef Stroganoff",
            "Chocolate and fruit cake"
        ],
        "brewers_tips": "If you can't get hold of Limonnik berries, rose hips make an accessible alternative!",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 41,
        "name": "AB:17",
        "tagline": "Three Coffee Rye Imperial Porter.",
        "first_brewed": "10/2014",
        "description": "A triple whammy of coffee from HasBean gives our 17th Abstrakt concept beer an intense and roasty, dark mocha character. We brewed with espresso in the mash, cafetiere in the boil, and whole roast beans in the whirlpool and the fermenter.",
        "image_url": "https://images.punkapi.com/v2/41.png",
        "abv": 10.7,
        "ibu": 100,
        "target_fg": 1025,
        "target_og": 1105,
        "ebc": 300,
        "srm": 150,
        "ph": 4.3,
        "attenuation_level": 76.2,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Coffee: 25g at end, Coffee: 25g at end, Dark Muscavado Sugar: 250g at end"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 9,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Rye",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Roasted Barley",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 1",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "CO2 Extract",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Willamette",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "12hr smoked brisket",
            "Chocolate pistachio cakes",
            "Dulche de leche"
        ],
        "brewers_tips": "Use freshly ground coffee for the best aromatic hit.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 42,
        "name": "Hardcore IPA",
        "tagline": "Explicit Imperial Ale. Citrusy. Resinous. Intense.",
        "first_brewed": "12/2009",
        "description": "Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There's nothing inscrutable going on; no mystery in the backstory. It doesn't seek to be understood. A beer incapable of empathy; only hop overload.",
        "image_url": "https://images.punkapi.com/v2/42.png",
        "abv": 9.2,
        "ibu": 125,
        "target_fg": 1016,
        "target_og": 1085,
        "ebc": 40,
        "srm": 20,
        "ph": 4.4,
        "attenuation_level": 81.2,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 7.4,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.29,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Columbus Extract",
                    "amount": {
                        "value": 30.8,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 19.2,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 19.2,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 19.2,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 19.2,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 19.2,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 19.2,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 19.2,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 115.4,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 96.2,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 96.2,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 76.9,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Spicy wings with blue cheese dip",
            "Pan seared scallops with a chilli sauce",
            "Creamy chocolate and caramel cheesecake"
        ],
        "brewers_tips": "There are so much hops in this beer it may break your gear! Watch out for the end of casting (or knockout for our American brethern), you don't want to pull too much trub into the fermenter.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 43,
        "name": "American Wheat",
        "tagline": "Hoppy American Wheat.",
        "first_brewed": "07/2014",
        "description": "A luscious blend of peach, blood orange and banana to make a suitably refreshing beverage that happily straddles the Atlantic.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.5,
        "ibu": 17,
        "target_fg": 1013,
        "target_og": 1047,
        "ebc": 10,
        "srm": 5,
        "ph": 5.3,
        "attenuation_level": 72,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 64,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 2.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 2.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Pale Crystal",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1010 - American Wheat™"
        },
        "food_pairing": [
            "Strawberry and citrus salad",
            "Fish corn tacos with pomegranate salsa",
            "Summer berry fruit parfait"
        ],
        "brewers_tips": "Using a starter to get your yeast as vibrant and healthy as possible will make all the difference here.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 44,
        "name": "Dog Wired (w/8 Wired)",
        "tagline": "New Zealand Imperial Pilsner.",
        "first_brewed": "06/2013",
        "description": "Brewed in collaboration with Soren from New Zealand's stellar 8-Wired brewery, this is an Imperial Pilsner featuring two of our favourite New Zealand hops: Nelson Sauvin and Motueka. Sitting at a dangerously drinkable 7.1% ABV there's a touch of Munich malt which gives this beer that little extra caramel biscuit bite to compliment the lip smackingly tropical hops. Expect an all out NZ hoppy riot.",
        "image_url": "https://images.punkapi.com/v2/44.png",
        "abv": 7.1,
        "ibu": 65,
        "target_fg": 1010,
        "target_og": 1065,
        "ebc": 13,
        "srm": 6.5,
        "ph": 4.4,
        "attenuation_level": 85,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 64,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 9,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 4.7,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Acidulated Malt",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 100,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 87.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Spiced and blackened cajun chicken",
            "Pork belly vindaloo",
            "Rhubarb pie"
        ],
        "brewers_tips": "Hold the mash for longer at 63-64°C to get more fermentability from the wort.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 45,
        "name": "The Physics",
        "tagline": "Laid Back Amber Beer.",
        "first_brewed": "04/2007",
        "description": "A hoppy Amber Ale that won World's Best Amber Beer in the World Beer Awards 2007. Malt and hops are in perfect harmony in this incredibly balanced beer. Biscuity, bitter and packing a surprisingly hoppy punch, this beer ultimately morphed into 5AM Saint.",
        "image_url": "https://images.punkapi.com/v2/45.png",
        "abv": 5,
        "ibu": 47,
        "target_fg": 1010,
        "target_og": 1048.5,
        "ebc": 65,
        "srm": 32.5,
        "ph": 4.4,
        "attenuation_level": 79.4,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 4.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 120",
                    "amount": {
                        "value": 0.23,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Bramling Cross",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Barbecue pulled pork on sourdough bread",
            "Roast turkey with a honey and herb marinade and roasted vegetables",
            "Banana walnut loaf with chocolate chips"
        ],
        "brewers_tips": "Keep the fermentation temperature as close to 19°C as possible. This will ensure the yeast creates a more neutral flavour profile, allowing the hops to really shine through.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 46,
        "name": "Anarchist Alchemist",
        "tagline": "Triple Hopped Triple Ipa.",
        "first_brewed": "03/2012",
        "description": "About as far as you can push an IPA; Anarchist Alchemist packs in three times the malt and three of our favourite hops. Nelson Sauvin, Amarillo and Centennial bring a range of flavours, touching on tropical fruit, white grape, tangerine, grapefruit, pine, spiced orange... the list goes on!",
        "image_url": "https://images.punkapi.com/v2/46.png",
        "abv": 16.5,
        "ibu": 20.5,
        "target_fg": 1000,
        "target_og": 1112,
        "ebc": 20,
        "srm": 10,
        "ph": 4.4,
        "attenuation_level": 100,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 20,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 12.5,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 6.25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Blue cheese & onion tart",
            "Goan goat curry",
            "Sugar-poached kumquat rice pudding"
        ],
        "brewers_tips": "The biggest challenge with this beer is getting it to ferment out entirely. Hold mash temp at 65°C for 90 mins to ensure maximum fermentability. Use super high gravity yeast or champagne yeast to achieve the last few gravity points.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 47,
        "name": "AB:15",
        "tagline": "Salted Caramel Popcorn Strong Ale.",
        "first_brewed": "03/2013",
        "description": "A salted caramel popcorn Imperial Ale. Bourbon and Rum barrel aged, this 12.8% ale has complex and twisting flavours. Bitter caramel, wood, smoke, spice, treacle and vanilla are all present and intertwine against a smooth and lightly chewy mouthfeel. The salted caramel popcorn lends subtle hints of a smoky brininess.",
        "image_url": "https://images.punkapi.com/v2/47.png",
        "abv": 12.8,
        "ibu": 50,
        "target_fg": 1020,
        "target_og": 1096,
        "ebc": 111,
        "srm": 55.5,
        "ph": 4.4,
        "attenuation_level": 79.17,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 68,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Adding popped popcorn into the mash, then barrel ageing in fresh bourbon barrels"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 6.5625,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.3125,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.3125,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Popcorn",
                    "amount": {
                        "value": 0.00625,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Sorachi Ace",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Willamette",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Crispy bacon on flat bread",
            "Glazed ham with crackling coating",
            "Popcorn caramel and chocolate cake"
        ],
        "brewers_tips": "By soaking some oak chips in bourbon, then steeping in the beer you not only get an authentic Bourbon taste - the beer will also gain ABV! Add salt to taste, too much will totally ruin the balance of the beer.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 48,
        "name": "Goldings - IPA Is Dead",
        "tagline": "Single Hop India Pale Ale.",
        "first_brewed": "02/2013",
        "description": "This is East Kent Goldings re- invented and re-imagined and shows just what can be done with English hops if you use enough of them. In this amped up Goldings reincarnation expect to be slammed with floral lavender, a fruity riot of blackberries and spiced pears, bubblegum, plums and the illusion of thyme.",
        "image_url": "https://images.punkapi.com/v2/48.png",
        "abv": 6.7,
        "ibu": 70,
        "target_fg": 1015,
        "target_og": 1066,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 77.3,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Goldings",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Goldings",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Goldings",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Goldings",
                    "amount": {
                        "value": 125,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Rosemary and thyme marinated venison",
            "Fish and chips",
            "Lavender chocolate chip cookies"
        ],
        "brewers_tips": "Take a read through each year's hop harvest that is available. Some years are better than others.",
        "contributed_by": "Matt Ball <GeordieMatt>"
    },
    {
        "id": 49,
        "name": "AB:14",
        "tagline": "Oak-Aged Imperial Weizenbock.",
        "first_brewed": "02/2013",
        "description": "Think banoffee pie; loads of creamy sweet banana, and sticky warm toffee. This beer is super complex, and one for the sweet-toothed!",
        "image_url": "https://images.punkapi.com/v2/49.png",
        "abv": 10,
        "ibu": 30,
        "target_fg": 1016,
        "target_og": 1094,
        "ebc": 20,
        "srm": 10,
        "ph": 4.4,
        "attenuation_level": 83,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 120
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 23,
                    "unit": "celsius"
                }
            },
            "twist": "Oak chips: 25g at end"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 2,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 2,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 1.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Bramling Cross",
                    "amount": {
                        "value": 30,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3638 - Bavarian Wheat™"
        },
        "food_pairing": [
            "Sweet pork Chinese dumplings",
            "Caramelised onion venison burger",
            "Banoffee pie"
        ],
        "brewers_tips": "Boil for even longer to get more caramelised flavours in the beer.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 50,
        "name": "Lost Dog (w/Lost Abbey)",
        "tagline": "Rum-Aged Imperial Porter - Lost Abbey Collab.",
        "first_brewed": "11/2011",
        "description": "Our first beer aged in rum casks, Lost Dog saw us brew a collaboration imperial porter with our friends at Lost Abbey. The base beer was packed with toffee, chocolate and roasty notes, balanced with a subtle spicy hop character. The rum casks add a warming, spiced vanilla edge.",
        "image_url": "https://images.punkapi.com/v2/50.png",
        "abv": 10,
        "ibu": 35,
        "target_fg": 1012,
        "target_og": 1080,
        "ebc": 80,
        "srm": 40,
        "ph": 4.4,
        "attenuation_level": 85,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "Aged in rum casks for 12 months"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 4.69,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Pale Chocolate",
                    "amount": {
                        "value": 0.23,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.7,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.35,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 0.47,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.35,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 35,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Beef satay skewers",
            "Venison & cranberry pie",
            "Blackberry mocha gateaux"
        ],
        "brewers_tips": "Ageing in barrels brings the ABV up. Recreate rum cask ageing by soaking oak chips in rum then adding to the maturing beer.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 51,
        "name": "TM10",
        "tagline": "Liquid Art.",
        "first_brewed": "04/2010",
        "description": "Brewed for the Tate Modern's 10th Anniversary. A saison style beer brewed with ginger and orange peel. Very limited batch of 4000 cork and caged bottles with a silk screened label designed by Johanna Basford. Only available at the Tate Modern.",
        "image_url": "https://images.punkapi.com/v2/51.png",
        "abv": 5.5,
        "ibu": 20,
        "target_fg": 1005,
        "target_og": 1048,
        "ebc": 14,
        "srm": 7,
        "ph": 4.2,
        "attenuation_level": 89.6,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 63,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 22,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 5.3,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Bobek",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Bobek",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Bobek",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Ginger",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Orange Peel",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3711 - French Saison™"
        },
        "food_pairing": [
            "Tom yum soup",
            "Andhra chicken pickle curry",
            "Butterscotch tart"
        ],
        "brewers_tips": "For a fresh and fiery hit, put some ginger into the cold conditioning phase as well.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 52,
        "name": "Paradox Islay",
        "tagline": "Ubiquitous Imperial Stout.",
        "first_brewed": "04/2007",
        "description": "In 2006 James and Martin hijacked a beer dinner run by Michael Jackson, the acclaimed beer and whisky writer, and convinced him to taste one of their home brews. This was a defining moment in BrewDog prehistory, and that beer was the first incarnation of the ubiquitous Paradox. Aged in a variety of casks over the years, Paradox is dark, decadent and encapsulating. Can be enjoyed fresh; phenomenal when aged.",
        "image_url": "https://images.punkapi.com/v2/52.png",
        "abv": 10,
        "ibu": 55,
        "target_fg": 1014,
        "target_og": 1090,
        "ebc": 300,
        "srm": 152,
        "ph": 4.4,
        "attenuation_level": 84.4,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Try ageing on oak chips, infusing with rum raisins, or vanilla pods"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 4.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.55,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.33,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 1.35,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.55,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 1",
                    "amount": {
                        "value": 0.18,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 3",
                    "amount": {
                        "value": 0.33,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Ancho chilli beef taco",
            "Chocolate gateaux",
            "Rum poached pears with dark chocolate sauce"
        ],
        "brewers_tips": "The beauty of this beer is in how brilliantly it lends itself to infusing or ageing. Experiment with different additions when the beer is ageing, taste it regularly to gauge its progress, and make sure you package it at its peak.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 53,
        "name": "Baby Dogma",
        "tagline": "Session Scotch Ale.",
        "first_brewed": "09/2013",
        "description": "A baby Scotch ale with dry and toasty malt flavours and hints of smoke. Toffee, biscuit and fudge abound with a spicy bitterness from the pan-global hops.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.5,
        "ibu": 35,
        "target_fg": 1013,
        "target_og": 1048,
        "ebc": 40,
        "srm": 20,
        "ph": 4.4,
        "attenuation_level": 72.9,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 66,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 1.75,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.48,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.56,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 0.56,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 3",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Weyermann Beech Smoked",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 18.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Willamette",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Hallertauer Mittelfrüh",
                    "amount": {
                        "value": 6,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "French onion soup",
            "Braised pheasant",
            "Caramel sauce and hot fudge"
        ],
        "brewers_tips": "The addition of Weyermann Beech Smoked malt creates a beer with a delicate smoke character.",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 54,
        "name": "Albino Squid Assasin",
        "tagline": "Red Rye IPA",
        "first_brewed": "11/2015",
        "description": "This tentacled terminator packs a punch - ten punches to be precise. Each hop addition adds to the intense layers of depth in this red rye IPA. Toasty caramel & cinder toffee from crystal malts, cacao richness from intensely roasted malt and the spiciness of rye. Zesty pithiness from Citra and the robust resin of Chinook. This small batch exclusive brew is up-front intensity matched with twisted complexity. The can features awesome custom art from Joe Wilson.",
        "image_url": "https://images.punkapi.com/v2/54.png",
        "abv": 7.4,
        "ibu": 65,
        "target_fg": 1012,
        "target_og": 1069,
        "ebc": 60,
        "srm": 30,
        "ph": 4.2,
        "attenuation_level": 82.6,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 18,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 1",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Rye",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 6.25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 18.75,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 100,
                        "unit": "grams"
                    },
                    "add": "fv",
                    "attribute": "aroma"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "fv",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Rocket and mozzarella salad with a cracked pepper dressing",
            "Fried halibut with sweet potato fritters",
            "Grapefruit and blood orange tart"
        ],
        "brewers_tips": "20% specialty malts in this grist can create problems in the run off. Be careful not to pull the bed down onto the plates.",
        "contributed_by": "Matt Ball <GeordieMatt>"
    },
    {
        "id": 55,
        "name": "Amarillo - IPA Is Dead",
        "tagline": "Single Hop India Pale Ale.",
        "first_brewed": "01/2013",
        "description": "Citrus fruit. Lots of citrus fruit. Think blood orange, orange zest and grapefruit, tangerine and lemon; the fruit is balanced by floral notes in the most classic of new wave IPA hops. Amarillo adds a zesty, pithy character that sits beautifully alongside hints of toffee and honeycomb.",
        "image_url": "https://images.punkapi.com/v2/55.png",
        "abv": 7.2,
        "ibu": 70,
        "target_fg": 1012,
        "target_og": 1067,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 82.1,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 4.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 250,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Bratwurst sausage with spicy mustard",
            "Fried American bacon with chilli flakes added to the top",
            "Dark chocolate chip cookies"
        ],
        "brewers_tips": "Use the freshest hops for the most impact. It seems obvious but in a single hop beer, you want the hops to be at their best.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 56,
        "name": "Black Eyed King Imp",
        "tagline": "Barrel-Aged Prototype Cocoa Psycho.",
        "first_brewed": "11/2012",
        "description": "An early Cocoa Psycho recipe that we loved, but didn't fit what we were looking for. We locked this chocolate coffee stout away in barrels for two years, imparting toasted marshmallow, spicy vanilla, molasses and boozy warmth.",
        "image_url": "https://images.punkapi.com/v2/56.png",
        "abv": 9.5,
        "ibu": 85,
        "target_fg": 1022,
        "target_og": 1095,
        "ebc": 250,
        "srm": 125,
        "ph": 4.4,
        "attenuation_level": 76.8,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 50
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 18,
                    "unit": "celsius"
                }
            },
            "twist": "Coffee Beans: 12.5g at end, Lactose: 125g"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale - Spring Blend",
                    "amount": {
                        "value": 6.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal",
                    "amount": {
                        "value": 1.56,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Brown",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Roasted Barley",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Willamette",
                    "amount": {
                        "value": 31.25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 31.25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Beef chilli made with cocoa powder",
            "Dark chocolate covered bacon",
            "Rich espresso tiramisu"
        ],
        "brewers_tips": "There is a huge amount of roasted malts in this grist. Be careful not to pulverise the malt into powder during the milling process.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 57,
        "name": "Prototype 27",
        "tagline": "Vibrant Smoky Pink IPA.",
        "first_brewed": "04/2010",
        "description": "Hardcore IPA with raspberries aged in Caol Ila casks. Full-bodied and compelling, the robust malt base provides an initial layer of honey, cinnamon and biscuity malt sweetness. Soon the Scottish berries are in on the act, a dominating tug of war between sweet and tart with an overbearing zest. As the beer slips back across your tongue the hops demand and definitely get your attention. At 100 IBUs the bitterness smashes into the back of your throat as the resinous, spiced orange peel flavours add depth to the berry fruitiness.",
        "image_url": "https://images.punkapi.com/v2/57.png",
        "abv": 9.2,
        "ibu": 149,
        "target_fg": 1014,
        "target_og": 1083,
        "ebc": 19.5,
        "srm": 9.8,
        "ph": 4.4,
        "attenuation_level": 83,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 8.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.28,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.56,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Columbus",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Strong blue cheese",
            "Cranachan",
            "Chicago style hot links"
        ],
        "brewers_tips": "Soak some oak chips in Caol Ila whisky to get barrel character. Freeze raspberries before adding them to secondary.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 58,
        "name": "Coffee Imperial Stout",
        "tagline": "Beats a Cup of Joe.",
        "first_brewed": "11/2008",
        "description": "This beer was released as both as \"Danish Beerhouse Coffee Imperial Stout\" and \"BrewDog Coffee Imperial Stout\". Deep, dark, roasted flavours make this a perfect Sunday brunch beer.",
        "image_url": "https://images.punkapi.com/v2/58.png",
        "abv": 9,
        "ibu": 65,
        "target_fg": 1019,
        "target_og": 1080,
        "ebc": 97,
        "srm": 49,
        "ph": 4.4,
        "attenuation_level": 76,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 64,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "Coffee added after boil. Aged on French oak chips., Dark muscovado sugar: 312.5g for 20mins"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 7.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Roasted Barley",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Galena",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Galena",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Coffee",
                    "amount": {
                        "value": 9.4,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Coffee",
                    "amount": {
                        "value": 9.4,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Gooey chocolate brownies",
            "Chicken fried steak with cheesy mash",
            "Spicy chicken empanadas"
        ],
        "brewers_tips": "Grind the coffee as if making an espresso to really get the most out of it.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 59,
        "name": "Mandarina Bavaria - IPA Is Dead",
        "tagline": "Single Hop India Pale Ale.",
        "first_brewed": "03/2015",
        "description": "From the central European plains of Germany, comes something very different. A blast of tangerine and orange, Mandarina Bavaria brings a highly distinctive backbone of flavour. This is down to its parent – Cascade – and a frankly enormous 70% myrcene oil content. If equate Germany solely with earthy, spicy Noble hops, Mandarina Bavaria will make you think again.",
        "image_url": "https://images.punkapi.com/v2/59.png",
        "abv": 7.2,
        "ibu": 100,
        "target_fg": 1010,
        "target_og": 1064,
        "ebc": 12,
        "srm": 6,
        "ph": 4.4,
        "attenuation_level": 84,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 6.39,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Mandarina Bavaria",
                    "amount": {
                        "value": 41.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Mandarina Bavaria",
                    "amount": {
                        "value": 41.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Mandarina Bavaria",
                    "amount": {
                        "value": 41.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Lavender and thyme roast beef",
            "Spicy kung po chicken",
            "Caramel and rose essence cheesecake"
        ],
        "brewers_tips": "We've mentioned the importance of fresh hops previously but this one really demands that your hops are the absolute freshest.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 60,
        "name": "Dogma",
        "tagline": "Revamped Wee Heavy. Luscious. Malty. Fruity.",
        "first_brewed": "07/2013",
        "description": "Brewed with over ten different types of malt, and blended together with Scottish heather honey, it is a pantheon to the gods of intricacy and nuance; a beer that celebratesa confluence of ideas. Complex, indulgent and encapsulating, Dogma gives more than a cursory nod to history, to make you ponder the very nature of beer itself.",
        "image_url": "https://images.punkapi.com/v2/60.png",
        "abv": 7.5,
        "ibu": 30,
        "target_fg": 1023,
        "target_og": 1080,
        "ebc": 46,
        "srm": 23,
        "ph": 4.5,
        "attenuation_level": 70,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 12,
                    "unit": "celsius"
                }
            },
            "twist": "Heather Honey: 125g"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 3.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.75,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 1,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 1,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Smoked Malt",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Brown",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Mature cheddar with red onion chutney",
            "Honey glazed ham",
            "Chocolate caramel drizzled sponge cake"
        ],
        "brewers_tips": "There's a lot of specialty malt in the mash. Make sure you take the run off nice and steady – increase the flow too much and pull in the bed at your peril.",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 61,
        "name": "Magic Stone Dog (w/Magic Rock & Stone Brewing Co.)",
        "tagline": "Session Farmhouse IPA - Stone / Magic Rock Collab.",
        "first_brewed": "06/2014",
        "description": "A session IPA brewed with a diverse grain bill, hopped with Simcoe and Amarillo and fermented with saison yeast, for an incredible level of depth in a low ABV beer. Spicy, fruity, complex, refreshing and dry.",
        "image_url": "https://images.punkapi.com/v2/61.png",
        "abv": 4.6,
        "ibu": 30,
        "target_fg": 1008,
        "target_og": 1043,
        "ebc": 15,
        "srm": 7.5,
        "ph": 4.4,
        "attenuation_level": 81.4,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 23,
                    "unit": "celsius"
                }
            },
            "twist": "Cumin: 0.5g at end, Caraway: 1g at end, Peppercorns (Pink): 5g at end, Grains of Paradise: 5g at end"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 2.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.44,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Torrified Wheat",
                    "amount": {
                        "value": 0.44,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Rye",
                    "amount": {
                        "value": 0.19,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 0.44,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.19,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3711 - French Saison™"
        },
        "food_pairing": [
            "Halibut with caper brown butter",
            "Creamy gorgonzola and satsuma salad",
            "Spicy Daal with garlic naan bread"
        ],
        "brewers_tips": "Start the fermentation off at 20 ̊C and allow it to rise as high as 25 ̊C. This will increase the fruity character of the yeast.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 62,
        "name": "AB:08",
        "tagline": "Deconstructed Blonde Imperial Stout.",
        "first_brewed": "11/2011",
        "description": "Flavours and aromas you'd expect from a Stout, but brewed without dark malts. The full mouthfeel comes courtesy of wheat and oats, while smoked malt and the twist additions add the complex flavours normally provided by highly kilned malts.",
        "image_url": "https://images.punkapi.com/v2/62.png",
        "abv": 10.43,
        "ibu": 65,
        "target_fg": 1016,
        "target_og": 1095,
        "ebc": 23,
        "srm": 11.5,
        "ph": 4.4,
        "attenuation_level": 83.2,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Cacao: 25g at FV, Coffee Beans: 37.5g at FV, Oak Chips: 5g at FV, Vanilla Pods: 10 split pods, Liquorice: 5g at FV"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 9.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 1.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 1.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Smoked Peaty",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 81.25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Coffee Beans",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Caramelised scallops with burnt apple puree",
            "Blackened Cajun chicken",
            "Blondies with chocolate fudge sauce"
        ],
        "brewers_tips": "Add all twist ingredients to Fermentation Vessel once fermentation is complete. Don't be afraid to add a little at a time and taste as you go. During mashing in first start with pale malt. Afterwards mix all malts evenly. Go with flaked oats during second half of mashing in process.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 63,
        "name": "Sunk Punk",
        "tagline": "Ocean Fermented Lager.",
        "first_brewed": "09/2011",
        "description": "It's rumoured just a drop can calm the fiercest of storms. A balance of sweet, salt and savoury, citrus, spruce and caramel. Fermented at the bottom of the North Sea, which just so happens to be the perfect temperature for lagers to ferment.",
        "image_url": "https://images.punkapi.com/v2/63.png",
        "abv": 7.1,
        "ibu": 68,
        "target_fg": 1010,
        "target_og": 1056,
        "ebc": 14,
        "srm": 7,
        "ph": 4.4,
        "attenuation_level": 82.1,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 10,
                    "unit": "celsius"
                }
            },
            "twist": "Seabuckthorn: 25g at end, Sea Salt: 20g at middle, Rum: 25ml at end"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5.21,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 30,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Ahtanum",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 140,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Salt baked cod with lemon and dill butter",
            "Beef, oyster and ale pie",
            "Apple and rosemary tart"
        ],
        "brewers_tips": "Keep the fermentation temperature as steady as possible to allow the lager yeast to do its thing.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 64,
        "name": "Sub Hop",
        "tagline": "Hopped-Up Imperial Pilsner.",
        "first_brewed": "06/2014",
        "description": "Brewed for the opening of our first bar in Italy, BrewDog Firenze. A mega-hoppy Imperial Pilsner, with toasty malt complexity and tropical New World hops.",
        "image_url": "https://images.punkapi.com/v2/64.png",
        "abv": 8,
        "ibu": 35,
        "target_fg": 1016,
        "target_og": 1077,
        "ebc": 15,
        "srm": 7.5,
        "ph": 4.4,
        "attenuation_level": 79.2,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 9,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 6.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dextrose",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Hallertauer Mittelfrüh",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Pacifica",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Pacific Jade",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Pacifica",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Pacific Jade",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Pacifica",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Seared lemon and herb salmon",
            "Crab linguine",
            "Almond biscotti"
        ],
        "brewers_tips": "Sit this beer aside for a month to allow it to mellow.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 65,
        "name": "Bracken's Porter",
        "tagline": "A Tribute To Our Favourite 4 Pawed Friend.",
        "first_brewed": "03/2013",
        "description": "The beer was named Bracken's Porter as a tribute to our favourite four pawed friend who sadly passed in 2013. Chocolately, robust, warming, laid back and lots of fun - there are plenty of similarities between the two. Bracken we miss you and we hope you like your beer. Long live the original BrewDog.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 5,
        "ibu": 50,
        "target_fg": 1010,
        "target_og": 1049,
        "ebc": 110,
        "srm": 55,
        "ph": 4.4,
        "attenuation_level": 79,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 3.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.19,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Roasted Barley",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Black Malt",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Vic Secret",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Bramling Cross",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "aroma"
                },
                {
                    "name": "Challenger",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Grilled vegetable and chicken teriyaki skewers",
            "Chilli covered burger (Sloppy Joe)",
            "Candied bacon topped chocolate cheesecake"
        ],
        "brewers_tips": "Try to replicate London's highly carbonated water to really emphasise the dark malt profile.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 66,
        "name": "Tokyo Rising Sun - Lowland",
        "tagline": "A Beautiful Accident.",
        "first_brewed": "06/2009",
        "description": "A forgotten gem in the deepest, darkest corner of the warehouse. Aged in a Lowland whisky cask resulting in decadent chocolate, toasted vanilla, indulgent spiced fruit, a mesmerizingly hypnotic mouthfeel and new layers that emerge on every sip.",
        "image_url": "https://images.punkapi.com/v2/66.png",
        "abv": 13.2,
        "ibu": 85,
        "target_fg": 1023,
        "target_og": 1125,
        "ebc": 140,
        "srm": 71,
        "ph": 4.4,
        "attenuation_level": 82.17,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Cranberry: 25g at end, Jasmine: 25g at end, Muscovado sugar: 300g at start, Oak chips soaked in lowland whisky: 15g at dry hop"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 7.6,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 1.75,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Roasted Barley",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Galena",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Galena",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Galena",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "WLP099 - Super High Gravity Ale"
        },
        "food_pairing": [
            "Duck liver paté",
            "Mutton stew",
            "Kirsch chocolate truffles"
        ],
        "brewers_tips": "Leave on wood for as long as you dare. If possible forget about it for four years.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 67,
        "name": "Hunter Foundation Pale Ale",
        "tagline": "American Pale Ale.",
        "first_brewed": "05/2012",
        "description": "This straight-up US style pale ale uses some of our favourite hops against a toasty malt base. We brewed this with Sir Tom Hunter at our Fraserburgh brewery - to add a charitable element to your own version, feel free to share this citrusy pale ale with your friends. Or don't, it's your choice.",
        "image_url": "https://images.punkapi.com/v2/67.png",
        "abv": 5.4,
        "ibu": 35,
        "target_fg": 1008,
        "target_og": 1050,
        "ebc": 11.5,
        "srm": 5.75,
        "ph": 4.4,
        "attenuation_level": 84,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 63,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 4.3,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.8,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Monterey Jack stuffed grilled jalepenos",
            "Barbecue corn and steak fajita seasoned wrap",
            "Cinnamon & white chocolate churro"
        ],
        "brewers_tips": "To dry the beer out, mash at a slightly lower temp (62° - 63°C), this will increase the ratio of fermentable sugars in the beer.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 68,
        "name": "Hype",
        "tagline": "New Zealand Pale Ale.",
        "first_brewed": "08/2007",
        "description": "A perfect pale ale showcase for the tropical profile of New Zealand hops and the intense citrus of US hops.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.1,
        "ibu": 65,
        "target_fg": 1010,
        "target_og": 1042,
        "ebc": 17,
        "srm": 8.5,
        "ph": 4.4,
        "attenuation_level": 76.2,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 4.02,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 2,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Quince cheese",
            "Shredded chicken and mango salsa taquitos",
            "Poached pear"
        ],
        "brewers_tips": "After the beer has fermented, leave it to rest for 2 – 3 days at the lowest temperature possible (ideally 0 – 2'C). This will allow the flavours to marry together, and will transform it into a balanced and amazing beer.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 69,
        "name": "AB:16",
        "tagline": "Coffee-Infused Belgian Quad.",
        "first_brewed": "02/2014",
        "description": "On the nose, clove and nutmeg, cafe au lait, subtle dark fruit notes, and hints of candied lemon peel. On the palate, smooth & fruity espresso, milk chocolate, and warm brandy-soaked currants are in the middle of a high-class dance-off against the spicy and peppery Belgian character. The overall impression evokes malt loaf or ginger cake.",
        "image_url": "https://images.punkapi.com/v2/69.png",
        "abv": 10.6,
        "ibu": 55,
        "target_fg": 1012,
        "target_og": 1090,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 86.7,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Coffee Beans: 250g FV. Raisins: 90g at end. Dark Sugar:140g at end."
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 7.75,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Waimea",
                    "amount": {
                        "value": 15,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3787 - Trappist High Gravity™"
        },
        "food_pairing": [
            "Roasted duck",
            "Gorgonzola and rye nut bread with smoked honey ham",
            "Raspberry coffee cheesecake"
        ],
        "brewers_tips": "For the traditional cellering, age this beer in vessel or bottle for 2 - 3 months at cellar temperature.",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 70,
        "name": "Sunmaid Stout",
        "tagline": "Rum & Raisin Imperial Stout.",
        "first_brewed": "12/2011",
        "description": "Brewed by Chris Sartori from Stone Brewing Company in 2010. A dark chocolate stout with dried dark fruit finish. Simcoe provides bitterness with subtle fruity supporting notes, contrasting the chocolate and coffee-laden malt profile. The finish is warming with vanilla and rich dark fruit depth.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 10.2,
        "ibu": 50,
        "target_fg": 1102,
        "target_og": 1026,
        "ebc": 197,
        "srm": 100,
        "ph": 4.4,
        "attenuation_level": 74.5,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 55
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Age in whisky casks with rum soaked raisins"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale - Tipple",
                    "amount": {
                        "value": 10,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 3",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 1.56,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Challenger",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Lapin aux pruneaux (braised rabbit with prunes)",
            "Gouda cheese",
            "Dark chocolate truffles"
        ],
        "brewers_tips": "Take small volume of wort out of the run off and steep the raisins in it, then crush them up. This will help to release the dark fruit aromas into the wort.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 71,
        "name": "Pale - Russian Doll",
        "tagline": "Nesting Hop Bomb.",
        "first_brewed": "08/2014",
        "description": "The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each.",
        "image_url": "https://images.punkapi.com/v2/71.png",
        "abv": 4,
        "ibu": 35,
        "target_fg": 1010,
        "target_og": 1041,
        "ebc": 45,
        "srm": 22.5,
        "ph": 5.2,
        "attenuation_level": 75.6,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 3.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 7.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Roast chicken with vegetables and wild rice",
            "Fresh pico de gallo with corn tortilla",
            "Carrot cake"
        ],
        "brewers_tips": "Create balance through experimentation with the hop amounts and malt backbone.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 72,
        "name": "Whisky Sour - B-Sides",
        "tagline": "Pilot Brew - Deconstructed Whisky Sour.",
        "first_brewed": "03/2015",
        "description": "Deconstructed whisky sour, reconstructed as a beer.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 7,
        "ibu": 20,
        "target_fg": 1021,
        "target_og": 1081,
        "ebc": 12,
        "srm": 6,
        "ph": 3.2,
        "attenuation_level": 74,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 60,
                        "unit": "celsius"
                    },
                    "duration": 10
                },
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 30
                },
                {
                    "temp": {
                        "value": 72,
                        "unit": "celsius"
                    },
                    "duration": 10
                },
                {
                    "temp": {
                        "value": 78,
                        "unit": "celsius"
                    },
                    "duration": 5
                }
            ],
            "fermentation": {
                "temp": {
                    "value": null,
                    "unit": "celsius"
                }
            },
            "twist": "Kettle Soured"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 6.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Acidulated Malt",
                    "amount": {
                        "value": 1.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat Malt",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Rye",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Special W",
                    "amount": {
                        "value": 0.05,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 8.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 8.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 8.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 1.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Citra",
                    "amount": {
                        "value": 1.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 1.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Potted fresh & smoked salmon",
            "Spiced nut loaf",
            "Lemon poppyseed donuts"
        ],
        "brewers_tips": "Lemon poppyseed donuts.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 73,
        "name": "Black Eyed King Imp - Vietnamese Coffee Edition",
        "tagline": "Vietnamese Coffee Edition.",
        "first_brewed": "12/2014",
        "description": "This is the Vietnamese Coffee Edition. At 12.7% ABV, Black Eyed King Imp is a super intense and twistedly complex brew, with intense notes of sweet vanilla, rich espresso, smooth molasses and bitter chocolate barely contained by the whatever container it's in.",
        "image_url": "https://images.punkapi.com/v2/73.png",
        "abv": 12.7,
        "ibu": 85,
        "target_fg": 1038,
        "target_og": 1113.5,
        "ebc": 250,
        "srm": 125,
        "ph": 5.2,
        "attenuation_level": 76.8,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 50
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 18,
                    "unit": "celsius"
                }
            },
            "twist": "Coffee Beans: 12.5g at end, Lactose: 125g at FV, Bourbon barrel aged"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 6.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal",
                    "amount": {
                        "value": 1.5625,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.625,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.625,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Brown",
                    "amount": {
                        "value": 0.625,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.625,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Roasted Barley",
                    "amount": {
                        "value": 0.3125,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Willamette",
                    "amount": {
                        "value": 31.25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 31.25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "aroma / bitter"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Bacon sandwich with brown sauce",
            "20hr smoked brisket",
            "Chocolate fudge ice cream"
        ],
        "brewers_tips": "Buying top notch coffee beans make a huge difference here. Give them a very course grind to get the most out of them.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 74,
        "name": "Eurotrash",
        "tagline": "Belgian Blonde.",
        "first_brewed": "10/2009",
        "description": "Trashy Blonde with a Belgian Twist. Clove oil, red apples and a drier mouthfeel set this beer apart from its older sister.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.1,
        "ibu": 52,
        "target_fg": 1010,
        "target_og": 1041,
        "ebc": 17,
        "srm": 8.5,
        "ph": 5.2,
        "attenuation_level": 76,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 66,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": "Fermented with Belgian yeast for signature character"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 3.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 6.3,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 3522 - Belgian Ardennes™"
        },
        "food_pairing": [
            "Grilled fish salad",
            "Angelfood cake",
            "Pad Thai"
        ],
        "brewers_tips": "Don't be scared to let the fermentation temperature climb up another couple of degrees to really emphasize the Belgian character.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 75,
        "name": "Never Mind The Anabolics",
        "tagline": "Performance-Enhancing India Pale Ale.",
        "first_brewed": "06/2012",
        "description": "Never Mind the Anabolics, a 6.5% India Pale Ale brewed with copious amounts of performance-enhancing natural ingredients. Brewed to commemorate the 2012 Olympics and its merry marketing bandwagon.",
        "image_url": "https://images.punkapi.com/v2/75.png",
        "abv": 6.5,
        "ibu": 35,
        "target_fg": 1012,
        "target_og": 1050,
        "ebc": 23,
        "srm": 11.5,
        "ph": 4.4,
        "attenuation_level": 76,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 68,
                        "unit": "celsius"
                    },
                    "duration": 30
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 18,
                    "unit": "celsius"
                }
            },
            "twist": "Lycii Berries: 7.5g at end, Ginseng: 5.625g at end, Guarana: 25g at end, Kolabu: 25g at end, Gingko: 6.25g at end, Matcha Tea: 12.5g at end, Maca Powder: 16.25g at end"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale - Spring Blend",
                    "amount": {
                        "value": 4.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.31,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 18.75,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Grilled chicken salad with bacon and avocado",
            "Red pepper houmous and flat bread",
            "Matcha green tea cake"
        ],
        "brewers_tips": "Mix the powders into a paste before adding to the wort kettle. This will prevent the powders from balling up and not bringing the full flavour effect.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 76,
        "name": "#Mashtag 2013",
        "tagline": "Democratic American Brown Ale.",
        "first_brewed": "05/2013",
        "description": "A rich, nutty Brown Ale with a deep, rich malt profile, hopped with a range of citrusy and spicy US varieties. Mellow yet endlessly complex, with enough chocolate and fruit character to balance the bitterness, and a soft oaky roundness.",
        "image_url": "https://images.punkapi.com/v2/76.png",
        "abv": 7.5,
        "ibu": 50,
        "target_fg": 1013,
        "target_og": 1070,
        "ebc": 40,
        "srm": 20,
        "ph": 4.4,
        "attenuation_level": 81.4,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Roasted Hazelnuts: 25g in Tank (FV), Almonds: 12.5g in Tank (FV), Oak Chips: 25g in Tank (FV)"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.44,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Amber",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.19,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Magnum",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 6,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 6,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Willamette",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Roast beef",
            "Roasted butternut squash",
            "Hazelnut brittle"
        ],
        "brewers_tips": "Add the hazelnuts and oak chips during the cold conditioning phase.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 77,
        "name": "Hobo Pop",
        "tagline": "2013 Prototype Rye Pale Ale.",
        "first_brewed": "11/2013",
        "description": "Brewed with mountains of Wheat, Rye, Cara and Crystal malts, fermented with an American ale yeast and bittered with Amarillo & Centennial, this 4.2% beer is what happens if something classy like a European wheat beer goes to live in Vegas. Zingy citrus hops and a punchy bitterness bolster this low ABV pale.",
        "image_url": "https://images.punkapi.com/v2/77.png",
        "abv": 4.2,
        "ibu": 50,
        "target_fg": 1010,
        "target_og": 1042,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 76.2,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 2.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Rye",
                    "amount": {
                        "value": 0.19,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 150,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 125,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Mozzarella and tomato baked chicken",
            "Spiced shrimp salad",
            "Strawberry cheescake"
        ],
        "brewers_tips": "Add the rye and wheat malt evenly through the mash.",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 78,
        "name": "AB:18",
        "tagline": "Imperial Brown Ale Aged In Rum Casks.",
        "first_brewed": "10/2011",
        "description": "AB:18 began life as an Imperial Brown Ale before we bombarded it with Scottish tayberries and Purple raspberries and locked it away in rum barrels for two years, infusing rich dark fruit flavours and oaky warmth into the mix.",
        "image_url": "https://images.punkapi.com/v2/78.png",
        "abv": 11.8,
        "ibu": 80,
        "target_fg": 1020,
        "target_og": 1096,
        "ebc": 115,
        "srm": 57.5,
        "ph": 5.2,
        "attenuation_level": 79.2,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 69,
                        "unit": "celsius"
                    },
                    "duration": 45
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 20,
                    "unit": "celsius"
                }
            },
            "twist": "Age in rum barrels, Tayberries: 500g, Purple Raspberries: 500g"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale - Spring Blend",
                    "amount": {
                        "value": 8.75,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.93,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.44,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Carafa Special Malt Type 1",
                    "amount": {
                        "value": 0.11,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.11,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Brown",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Galena",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Willamette",
                    "amount": {
                        "value": 50,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Kippers and poached eggs",
            "Slow cooked lamb shoulder with mint sauce",
            "Apple and blackcurrant cobbler"
        ],
        "brewers_tips": "Blend aged beer with a fresh brewed black ale in a 70-30 ratio to add bursts of blackcurrant and citrus.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 79,
        "name": "Hops Kill Nazis",
        "tagline": "Imperial Red Ale.",
        "first_brewed": "08/2011",
        "description": "5AM Saint's big brother. Dry- hopping with Chinook gave Hops Kill Nazis a full-on, instantly recognisable US hop character - huge resinous aromas (think giant redwood) with a bitter grapefruit edge. The caramel malts bring flavours of toffee and burnt sugar, which gave Hops Kill Nazis a big, complex malt base supporting the intense hopping.",
        "image_url": "https://images.punkapi.com/v2/79.png",
        "abv": 7.6,
        "ibu": 70,
        "target_fg": 1015,
        "target_og": 1073,
        "ebc": 59,
        "srm": 29.5,
        "ph": 4.4,
        "attenuation_level": 79.5,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 68,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 20,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 4.82,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 2.5,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Crystal 150",
                    "amount": {
                        "value": 0.96,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 40,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Chinook",
                    "amount": {
                        "value": 178,
                        "unit": "grams"
                    },
                    "add": "dry hop",
                    "attribute": "aroma"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Candied almond and blue cheese rocket salad",
            "Chicken Tikka Madras",
            "Pecan pie"
        ],
        "brewers_tips": "A red colour is a difficult hue to achieve in beer. Experiment with different amounts of Crystal malt to fine tune the colour.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 80,
        "name": "AB:04",
        "tagline": "Imperial Stout With Coffee, Loads Of Cocoa And Chilli.",
        "first_brewed": "08/2010",
        "description": "Imperial Stout brewed with coffee, cocoa, Naga chillies (the hottest in the world), and champagne yeast. Possibly our most acclaimed Abstrakt yet.",
        "image_url": "https://images.punkapi.com/v2/80.png",
        "abv": 15,
        "ibu": 80,
        "target_fg": 1018,
        "target_og": 1113,
        "ebc": 400,
        "srm": 200,
        "ph": 4,
        "attenuation_level": 84.1,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 63,
                        "unit": "celsius"
                    },
                    "duration": 90
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Add chillies, cacoa and naga chillies to the cold conditioning"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Pale Ale",
                    "amount": {
                        "value": 10,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat Malt",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Flaked Oats",
                    "amount": {
                        "value": 1.88,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal 350",
                    "amount": {
                        "value": 1.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Chocolate",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Black Patent",
                    "amount": {
                        "value": 0.94,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 75,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 62.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Coffee Beans",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1272 - American Ale II™"
        },
        "food_pairing": [
            "Beef mahaca on corn tortillas",
            "Chilli and dark chocolate tart",
            "Epoisses cheese"
        ],
        "brewers_tips": "Make sure you can get the coffee, cocoa and chillies out of the beer when the flavours are right.",
        "contributed_by": "Sam Mason <samjbmason>"
    }
]

export default Beers;