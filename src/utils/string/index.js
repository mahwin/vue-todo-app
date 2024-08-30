export function removeDuplicatesWithPattern(str, pattern) {
    const regex = new RegExp(`(${pattern})\\1+`, 'g');
    return str.replace(regex, '$1');
}

