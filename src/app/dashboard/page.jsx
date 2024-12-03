'use client'

import DataTable from "@/Components/common/DataTable";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Dashboard() {
    const columns = [
        { field: 'id', headerName: 'ID', flex: 1, headerClassName: 'custom-header' },
        {
            field: 'firstName',
            headerName: 'First Name',
            flex: 1,
            headerClassName: 'custom-header',
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            flex: 1,
            headerClassName: 'custom-header',
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            flex: 1,
            headerClassName: 'custom-header',
        },
        {
            field: 'fullName',
            headerName: 'Full Name',
            flex: 1,
            sortable: false,
            headerClassName: 'custom-header',
        },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            headerClassName: 'table-header',
            renderCell: (params) => (
                <div>
                    <IconButton color="primary" onClick={() => console.log('Edit', params.id)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => console.log('Delete', params.id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            )
        },
    ];
    
    const rows = [
        { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35, fullName: 'Jon Snow' },
        { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42, fullName: 'Cersei Lannister' },
        { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45, fullName: 'Jaime Lannister' },
        { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16, fullName: 'Arya Stark' },
        { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: null, fullName: 'Daenerys Targaryen' },
        { id: 6, firstName: null, lastName: 'Melisandre', age: 150, fullName: 'Melisandre' },
        { id: 7, firstName: 'Ferrara', lastName: 'Clifford', age: 44, fullName: 'Ferrara Clifford' },
        { id: 8, firstName: 'Rossini', lastName: 'Frances', age: 36, fullName: 'Rossini Frances' },
        { id: 9, firstName: 'Harvey', lastName: 'Roxie', age: 65, fullName: 'Harvey Roxie' },
    ];
    return <div><DataTable rows={rows} columns={columns}/></div>;
}
