import { IProduct } from './../types/models/IProduct';
export function sortByName  (prodArr: IProduct []) {
    prodArr.sort((a, b) => {
        const nameA = a?.name?.toUpperCase(); // ignore upper and lowercase
        const nameB = b?.name?.toUpperCase(); // ignore upper and lowercase
        if(nameA && nameB) {
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        }
        return 0;
    })
 return prodArr
}
export function sortByCount  (prodArr: IProduct []) {
    prodArr.sort((a, b) => {
        if (a.count && b.count) {
            return b.count - a.count
        } else {
            return 0
        }
    })
 return prodArr
}