"use strict";
var item = {
    id: 42,
    name: 'Sample product'
};
item.name = 'Simple product';
// item.id=7
// item['id']='whatever';
console.log(item.id);
// ------------------------------------------------------------------------------------------------------------------ //
var ItemClass = /** @class */ (function () {
    function ItemClass(id, name) {
        this.id = id;
        this.name = name;
    }

    return ItemClass;
}());
var classyItem = new ItemClass(42, "Item");
classyItem.name = 'Simple product';
// classyItem.id=7
console.log(classyItem.id);
// ------------------------------------------------------------------------------------------------------------------ //
item = Object.assign(item, {id: 'whatever'});
classyItem = Object.assign(classyItem, {id: 'whatever'});
console.log(item);
console.log(classyItem);
