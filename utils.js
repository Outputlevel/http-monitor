// Recursive function to remove functions from an object
export function removeFunctions(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const sanitizedObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (typeof obj[key] !== 'function') {
            sanitizedObj[key] = removeFunctions(obj[key]);
        }
    }

    return sanitizedObj;
}
