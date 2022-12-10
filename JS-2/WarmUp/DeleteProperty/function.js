const without = (pObj, ...pKeyList) => {
    const newObject = { ...pObj };
    pKeyList.forEach((key) => {
        delete newObject[key];
    });

    console.log(newObject);
};
export { without };