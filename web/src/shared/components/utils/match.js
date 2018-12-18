export default function match(obj, searchValue, {searchableProps, cb}) {
  searchValue = searchValue.toLocaleUpperCase();
  let propNames = searchableProps || Object.getOwnPropertyNames(obj);
  for (let i = 0; i < propNames.length; i++) {
    let targetValue = obj[propNames[i]];
    if (targetValue) {
      if(typeof cb === 'function'){
        let result = cb(targetValue, searchValue, propNames[i]);
        if(result === true){
          return result;
        }
      }

      if (targetValue.toString().toLocaleUpperCase().indexOf(searchValue) !== -1) {
        return true;
      }
    }
  }

  return false;
}