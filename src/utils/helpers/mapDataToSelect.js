const mapDataToSelect = (data, columns) => {
    if(data.length){
        let dataTemp = [];

        data.map(item => {
            let label = '';
            columns.map((column, index) => {
                label += `${item[columns[index]]} `
            })

            dataTemp.push({
                value: `${item.id}`,
                label: label,
            });
        })

        return dataTemp;
    }
}

export default mapDataToSelect;