const user ={id: 1, name: 'Gorib Amir', job:'actor'};
//javaScript Object Notation (JSON)

const stringiFied = JSON.stringify(user);
// console.log(stringiFied)
/**
 * {"id":1,"name":"Gorib Amir","job":"actor"}
 */

const shop ={
     owner:'Alia',
     address:{
          street: 'KochuKhet voot er goli',
          city: 'ranbi',
          country: 'BD'
     },
     products: ['laptop', 'mic', 'monitor', 'keybord'],
     revenue: 45000,
     isOpen: true,
     isNew: false,
}
// console.log(shop)
const shopStingifid = JSON.stringify(shop);
// console.log(shopStingifid)
//parse and create javaScript object
const shopObject = JSON.parse(shopStingifid);
console.log(shopObject)