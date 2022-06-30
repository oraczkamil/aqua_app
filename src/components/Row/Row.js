import React from 'react';
import {DataTable} from "react-native-paper";

function Row({label, value}) {
    return (
        <DataTable.Row style={{width: '100%'}}>
            <DataTable.Cell>{label}</DataTable.Cell>
            <DataTable.Cell string>{value}</DataTable.Cell>
        </DataTable.Row>
    );
}

export default Row;