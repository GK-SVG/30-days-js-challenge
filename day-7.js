let book = {
    title: "it",
    author: "Bell johnson",
    year: "2017"
}


console.log(book)
console.log('title--',book.title)

console.log('author--',book.author)


function bookMethod(data) {
    return `${data.title} by ${data.author}`
}

console.log(bookMethod(book))

let nestedObj = [
    {
        title: "it",
        author: "Bell johnson",
        year: "2017"
    },
    {
        title: "it chapter two",
        author: "Bell johnson",
        year: "2019"
    },
    {
        title: "erong man",
        author: "Thomas",
        year: "2007"
    }
]

// console.log(nestedObj)

// nestedObj.forEach(element => {
//     console.log(element.title)
//     console.log(element.author)
// });


let thisObj = {
    title: "3 idiots",
    author: "Chetan bhagat",
    year: "2011",
    consoleLog: function(){
        console.log(this.title)
        console.log(this.author)
        console.log(this.year)

    }
}

// thisObj.consoleLog()

// for (let index in nestedObj) {
//     console.log(nestedObj[index])
// }

for (let element in thisObj) {
    console.log(thisObj[element])
    
}

const keys = Object.keys(thisObj);
const values = Object.values(thisObj);

console.log(keys)
console.log(values)
