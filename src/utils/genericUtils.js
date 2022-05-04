//Para poder filtrar corretamente o coluna status
export const FixFilter = (_data) => {
    const array = []
    _data._data.forEach(element => {
        element.status = element.status === "active" ? `${element.status} ` : element.status
        array.push(element);
    });
    return array;
}
