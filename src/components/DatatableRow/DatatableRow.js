import React from 'react';
import {Row, Cell, Text} from './DatatableRow.css';

function DatatableRow({label, value}) {
    return (
        <Row style={{width: '100%'}}>
            <Cell><Text>{label}</Text></Cell>
            <Cell><Text>{value}</Text></Cell>
        </Row>
    );
}

export default DatatableRow;