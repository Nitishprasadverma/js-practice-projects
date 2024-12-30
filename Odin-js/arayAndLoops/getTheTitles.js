const book = [
    {
        title:'book1',
        anutor: 'nitish'

    },
    {
        title: 'book2',
        author: 'nai'
    }
]

const getTitle = function(arr){
    return arr.map(book => book.title)
   
}

console.log(getTitle(book));