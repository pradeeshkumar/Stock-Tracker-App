import * as React from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'symbol', headerName: 'SYMBOL', width: 150 },
    { field: 'companyName', headerName: 'Company Name', width: 400 },
    { field: 'industryOrCategory', headerName: 'industry / Category', width: 300 },
    { field: 'exchangeCode', headerName: 'Exchange Code', width: 200 }
];

const rows = [
    {
        "exchangeCode": "NMS",
        "symbol": "AAL",
        "companyName": "American Airlines Group, Inc.",
        "industryOrCategory": "Industrials"
    },
    {
        "exchangeCode": "NMS",
        "symbol": "AAON",
        "companyName": "AAON, Inc.",
        "industryOrCategory": "Industrials"
    }
];

export default function DataTable() {
    const removeRow = () => alert("Added to Fav list");
    const addRow = () => alert("Removed From Fav list");
    return (
        <div className="analyst-panel" style={{ height: 400, width: '100%' }}>
            <Button variant="outlined" onClick={removeRow}>
                Remove From Favorites
            </Button>
            <DataGrid
                getRowId={(row) => row.symbol}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
