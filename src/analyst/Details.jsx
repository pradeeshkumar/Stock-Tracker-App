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
    },
    {
        "exchangeCode": "NMS",
        "symbol": "AAPL",
        "companyName": "Apple Inc.",
        "industryOrCategory": "Technology"
    },
    {
        "exchangeCode": "NMS",
        "symbol": "AAWW",
        "companyName": "Atlas Air Worldwide Holdings",
        "industryOrCategory": "Industrials"
    },
    {
        "exchangeCode": "NMS",
        "symbol": "AAXN",
        "companyName": "Axon Enterprise, Inc.",
        "industryOrCategory": "Industrials"
    },
    {
        "exchangeCode": "NMS",
        "symbol": "ABCB",
        "companyName": "Ameris Bancorp",
        "industryOrCategory": "Financial Services"
    },
    {
        "exchangeCode": "NMS",
        "symbol": "ABMD",
        "companyName": "ABIOMED, Inc.",
        "industryOrCategory": "Healthcare"
    },
    {
        "exchangeCode": "NMS",
        "symbol": "ABUS",
        "companyName": "Arbutus Biopharma Corporation",
        "industryOrCategory": "Healthcare"
    },
    {
        "exchangeCode": "NMS",
        "symbol": "ACAD",
        "companyName": "ACADIA Pharmaceuticals Inc.",
        "industryOrCategory": "Healthcare"
    },
    {
        "exchangeCode": "NMS",
        "symbol": "ACBI",
        "companyName": "Atlantic Capital Bancshares, In",
        "industryOrCategory": "Financial Services"
    }
];

export default function DataTable() {
    const removeRow = () => alert("Added to Fav list");
    return (
        <div className="analyst-panel" style={{ height: 400, width: '100%' }}>
            <Button variant="outlined" onClick={removeRow}>
                Add to Favorites
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
