const person = {
  name: 'Sam',
  age: 29,
  location: {
    city: 'London',
    temp: 22
  }
}

const { name: firstName = 'Anonymous', age } = person
console.log(`${firstName} is ${age}.`)

const { city, temp: temperature } = person.location
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`)
}

const book = {
  title: 'Inverting the Pyramind',
  author: 'Jonathan Wilson',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self-Published' } = book.publisher
console.log(publisherName)