import {useEffect, useState} from "react";

import CarActions from "./carActions";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CarEditDialog from "./carEditDialog";

const CarComponent = () => {
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(undefined);

    const refreshTable = () => {
        CarActions.getAllCars().then((res) => {
            setCars(res.data);
        });
    }

    useEffect(() => {
        refreshTable();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
        setSelectedItemId(undefined);
    };

    const handleEdit = (id) => {
        setSelectedItemId(id);
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
        refreshTable();
    };

    return (
        <>
            <CarEditDialog
                selectedItemId={selectedItemId}
                open={open}
                handleClose={handleClickClose}
            />
            <Button variant="outlined" onClick={handleClickOpen}>
                Add A New Car
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Brand</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Color</TableCell>
                            <TableCell align="right">Year</TableCell>
                            <TableCell align="right">KM</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="right">{row.brand}</TableCell>
                                <TableCell align="right">{row.model}</TableCell>
                                <TableCell align="right">{row.color}</TableCell>
                                <TableCell align="right">{row.year}</TableCell>
                                <TableCell align="right">{row.km}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            CarActions.deleteCar(row.id).then(() => {
                                                refreshTable();
                                            });
                                        }}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleEdit(row.id)}
                                    >
                                        Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default CarComponent;