/////////////////////////////////////
// forEach
/////////////////////////////////////

function doubleValues(arr) {
    let doubledArray = []
    arr.forEach(function(value) {
        doubledArray.push(value * 2)
    })
    return doubledArray
}

doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

function onlyEvenValues(arr) {
    let onlyEvens = []
    arr.forEach(function(value) {
        if (value % 2 === 0)
            onlyEvens.push(value)
    });
    return onlyEvens
}

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]

function showFirstAndLast(arr) {
    let abbreviated = []
    arr.forEach(function(value) {
        abbreviated.push(value.charAt(0) + value.charAt(value.length - 1))
    })
    return abbreviated
}

showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

function addKeyAndValue(arr, key, val) {
    arr.forEach(function(v, index) {
        arr[index][key] = val
    })
    return arr
}

addKeyAndValue([
    { name: 'Elie' },
    { name: 'Tim' },
    { name: 'Matt' },
    { name: 'Colt' }
], 'title', 'instructor' )
/*[
    { "name": "Elie", "title": "instructor" },
    { "name": "Tim", "title": "instructor" },
    { "name": "Matt", "title": "instructor" },
    { "name": "Colt", "title": "instructor" }
]*/

function vowelCount(str) {
    let obj = {a: 0, e: 0, i: 0, o: 0, u: 0}
    let strArr = str.toLowerCase().split('')
    Object.keys(obj).forEach(function(vowel){
        strArr.forEach(function(char) {
            if (char == vowel)
                obj[vowel]++
        });
        if (0 === obj[vowel])
            delete obj[vowel]
    });
    return obj
}

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}


/////////////////////////////////////
// map
/////////////////////////////////////

function doubleValuesWithMap(arr) {
    return arr.map(value => value * 2)
    //return arr.map(function(value) { return value * 2 } )
}
  
doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]

function valTimesIndex(arr) {
    return arr.map((value, index) => value * index)
   //return arr.map(function(value, index) { return value * index } )
}

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]

function extractKey(arr, keyname) {
    return arr.map(value => value[keyname])
}

extractKey([
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
], 'name')
// ['Elie', 'Tim', Matt', 'Colt']

function extractFullName(arr) {
    return arr.map(value => value.first +' '+ value.last)
}
extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
])
 // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']


/////////////////////////////////////
// filter
/////////////////////////////////////

function filterByValue(arr, key) {
    return arr.filter(obj => obj.hasOwnProperty(key))
}

filterByValue([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
], 'isCatOwner')
// {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]


/////////////////////////////////////
// find
/////////////////////////////////////

function find(array, value) {
    return array.find(num => num === value)
}

find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined

function findInObj(arr, key, value) {
    return arr.filter(obj => obj[key] === value)[0];
}

findInObj([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'att', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
], 'isCatOwner', true)
// {first: 'Tim', last:"Garcia", isCatOwner: true}

function removeVowels(str) {
    let vowels = 'aeiou'
    return str.toLowerCase()
        .split('')
            .filter(char => !vowels.includes(char))
                .join('');
}

removeVowels('Elie') // ('l')
removeVowels('TIM') // ('tm')
removeVowels('ZZZZZZ') // ('zzzzzz')

function doubleOddNumbers(arr) {
    return arr
        .filter(num => num % 2 !== 0)
            .map(oddNum => oddNum * 2);
}

doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []
