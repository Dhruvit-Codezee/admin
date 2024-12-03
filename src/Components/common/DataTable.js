'use client';

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Box, Button } from '@mui/material';


export default function DataTable({ rows, columns }) {
    const [open, setOpen] = useState(false);

    const [newData, setNewData] = React.useState({
        firstName: '',
        lastName: '',
        age: '',
        fullName: '',
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        // setNewData((prevData) => ({
        //     ...prevData,
        //     [name]: value,
        // }));
    };

    const handleAddRow = () => {
        // const newRow = {
        //     id: rows.length + 1, // Simple id assignment, in a real app use a unique ID generator
        //     ...newData,
        // };
        // setRows((prevRows) => [...prevRows, newRow]);
        // setOpen(false); // Close dialog after adding
        // setNewData({ firstName: '', lastName: '', age: '', fullName: '' }); // Clear form
    };

    return (
        <>
            <Paper sx={{ height: 500, width: '100%', boxShadow: 3, borderRadius: 2 }}>

                <Box sx={{ padding: '10px' }}>
                    <Button variant="contained" color="primary" onClick={handleClickOpen}>
                        Add New Row
                    </Button>
                </Box>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 15]}
                    pageSizeOptions={[5, 10]}
                    sx={{
                        '& .MuiDataGrid-columnHeader': {
                            backgroundColor: '#d3d3d3',  // Light grey color for header
                            color: '#000',  // Black text for better readability
                            fontWeight: '600',  // Bold text
                            fontSize: '1.1rem',
                            borderBottom: '2px solid #ccc',  // Light border for separation
                            borderRadius: '0',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            textTransform: 'uppercase',  // Uppercase text for headers
                        },
                        '& .MuiDataGrid-cell': {
                            padding: '12px 16px',  // Padding for cells
                        },
                        '& .MuiDataGrid-row:hover': {
                            backgroundColor: '#ecf0f1',  // Hover effect for rows
                        },
                        '& .MuiDataGrid-columnSeparator': {
                            display: 'none',  // Removing column separator
                        },
                    }}
                />
            </Paper>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Row</DialogTitle>
                <DialogContent>
                    <TextField
                        name="firstName"
                        label="First Name"
                        value={newData.firstName}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        name="lastName"
                        label="Last Name"
                        value={newData.lastName}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        name="age"
                        label="Age"
                        type="number"
                        value={newData.age}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        name="fullName"
                        label="Full Name"
                        value={newData.fullName}
                        onChange={handleInputChange}
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddRow} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
