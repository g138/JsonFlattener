const jsonfile = require('./jsonFile.json');
// console.log(jsonfile);
function fnx(obj) {
    let res = {}; 
    for (const i in obj) { 
        if((typeof obj[i]) === 'object') {
            let nestedObj = fnx(obj[i]);
            for (j in nestedObj) {
                res[i + '.' + j] = nestedObj[j];
            }
        } else {
            res[i] = obj[i];
        }
    } 
    return res;
}
console.log(fnx(jsonfile));