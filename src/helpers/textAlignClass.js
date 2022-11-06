const getTextClass = (index, array) => {
    if (index === array.length - 1) {
        return 'text-end';
    }
    if (index === 0) {
        return 'text-start';
    }

    return 'text-center';
}

export default getTextClass;