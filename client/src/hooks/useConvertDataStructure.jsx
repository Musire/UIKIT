import { useCallback } from "react";

const useConvertDataStructure = () => {
    
    const objToArray = useCallback((originalObject) => {
        const arrayOfObjects = [];

        for (const key in originalObject) {
            arrayOfObjects.push(originalObject[key]);
        }
        return arrayOfObjects
        
    }, [])
    
    
    return { objToArray };
}
 
export default useConvertDataStructure;