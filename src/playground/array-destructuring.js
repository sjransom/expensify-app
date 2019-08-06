const address = ['Flat D, 67B Kelvin Road', 'Highbury', 'London', 'N5 2PQ' ]
const [, suburb, city = 'London'] = address

console.log(`You are in ${suburb}, ${city}.`)


const item = ['coffee (hot)', '£2.00', '£2.50', '£2.75']
const [coffee, , medium] = item

console.log(`A ${coffee} costs ${medium}`)