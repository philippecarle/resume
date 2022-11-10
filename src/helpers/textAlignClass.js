const getTextClass = (index, array) => {
	if (index === array.length - 1) {
		return 'text-lg-end text-start';
	}
	if (index === 0) {
		return 'text-start';
	}

	return 'text-lg-center text-start';
};

export default getTextClass;
