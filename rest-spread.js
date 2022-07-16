//Refactor ES5 code into ES2015

const filterOutOdds = (...Args) => 
        (v => v % 2 === 0);
    
//findMin, using the rest and spread operator.

const findMin = (...Args) => Math.min(...Args);

//mergeObjects using spread/rest

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, num) => (
    [num, ...arr.map(v => v *2)]
)

//slice and dice!
//removeRandom(items)

const removeRandom = items => {
    const idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

//function extend(array1, array2)

const extend = (array1, array2) => [...array1, ...array2];

//function addKeyVal(obj, key, val)
const addKeyVal = (obj, key, val) => {
    return ({...obj})[key] = val;

}
//function removeKey(obj, key)
const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

//function combine(obj1, obj2)
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

//return a new object with a modified key and value

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key]= val;
    return newObj;
}