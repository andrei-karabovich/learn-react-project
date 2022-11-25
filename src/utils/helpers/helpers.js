export const inverseObjectPropertyInArray = (items, propToCompare, valueToCompare, propToUpdate) => {
    return items.map( item => {
        if (item[propToCompare] === valueToCompare) {
            item[propToUpdate] = !item[propToUpdate];
        }
        return item;
    });
}