//STANDARD MODULE PATTERN

const uiCtrl = (function() {
   let text = 'THIS IS MODULE PATTERN';

   const changeText = () => {
       const element = document.querySelector('h1');
       element.textContent = text;
   }
    
   return {
       callChangeText : () => {
        changeText();
       }       
   }
})();

uiCtrl.callChangeText();

//REVEALING MODULE PATTERN
const itemCtrl = (function(){
    let _data = [];

    function add(item) {
        _data.push(item);
        console.log('Item Added....')
    }

    function get(id) {
        return _data.find(item => item.id === id);
    }


    return {
        add: add,
        get: get
    }
})();

itemCtrl.add({id: 1, name: 'Dawid'});
itemCtrl.add({id: 2, name: 'Monika'});
console.log(itemCtrl.get(1));
console.log(itemCtrl.get(2));

