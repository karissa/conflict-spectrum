COUNTRIES_0 = [{country: 'germany'},
                     {country: 'ireland'},
                     {country: 'france'}]

COUNTRIES_1 = [{country: 'germany', capital: null},
                    {country: 'ireland', capital: 'dublin'},
                    {country: 'france', capital: 'paris'},
                    {country: 'spain', capital: 'madrid'}]

COUNTRIES_2 =  [{country: 'germany', code: 'de', capital: 'berlin'},
                     {country: 'ireland', code: 'ie', capital: 'dublin'},
                     {country: 'france', code: 'fr', capital: 'paris'},
                     {country: 'spain', code: 'es', capital: 'barcelona'},
                     {country: 'germany1', code: 'de', capital: 'berlin'},
                     {country: 'germany2', code: 'de', capital: 'berlin'},
                     {country: 'germany3', code: 'de', capital: 'berlin'},
                     {country: 'germany4', code: 'de', capital: 'berlin'},
                     {country: 'germany5', code: 'de', capital: 'berlin'},
                     {country: 'germany6', code: 'de', capital: 'berlin'},
                     {country: 'germany7', code: 'de', capital: 'berlin'}]


DATA = [
  {
    json: [COUNTRIES_0, COUNTRIES_1, COUNTRIES_2],
    name: 'progressive three-way conflict'
  }
]

module.exports = DATA
