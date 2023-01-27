function getAdmins (map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;

}
const getAdmins2 = new Map([['John', 'normal'], ['John2', 'Admin'], ['John3', 'normal'], ['John4', 'Admin']]);

console.log(getAdmins(getAdmins2));


