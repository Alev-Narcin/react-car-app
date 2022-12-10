import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import CarActions from "./carActions";
import {useEffect, useState} from "react";

const CarEditDialog = (props) => {
    const {selectedItemId, open, handleClose} = props;

    const [formValue, setFormValue] = useState({});

    useEffect(() => {
        if (open && selectedItemId) {
            CarActions.getCar(selectedItemId).then((res) => {
                setFormValue(res.data);
            });
        } else {
            setFormValue({});
        }
    }, [open, selectedItemId]);

    const handleSave = () => {
        CarActions.saveCar(formValue).then(() => {
            handleClose();
        });
    }

    const handleChange = (e) => {
        setFormValue(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }));
    }

    return <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD CAR PANEL</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Please add a new car.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="brand"
                name="brand"
                label="Brand"
                type="text"
                fullWidth
                variant="standard"
                value={formValue.brand || ""}
                onChange={handleChange}
            />
            <TextField
                autoFocus
                margin="dense"
                id="model"
                name="model"
                label="Model"
                type="text"
                fullWidth
                variant="standard"
                value={formValue.model || ""}
                onChange={handleChange}
            />
            <TextField
                autoFocus
                margin="dense"
                id="color"
                name="color"
                label="Color"
                type="text"
                fullWidth
                variant="standard"
                value={formValue.color || ""}
                onChange={handleChange}
            />
            <TextField
                autoFocus
                margin="dense"
                id="year"
                name="year"
                label="Year"
                type="text"
                fullWidth
                variant="standard"
                value={formValue.year || ""}
                onChange={handleChange}
            />
            <TextField
                autoFocus
                margin="dense"
                id="km"
                name="km"
                label="KM"
                type="text"
                fullWidth
                variant="standard"
                value={formValue.km || ""}
                onChange={handleChange}
            />
            <TextField
                autoFocus
                margin="dense"
                id="price"
                name="price"
                label="Price"
                type="text"
                fullWidth
                variant="standard"
                value={formValue.price || ""}
                onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleSave}>Save</Button>
        </DialogActions>
    </Dialog>
}

export default CarEditDialog;