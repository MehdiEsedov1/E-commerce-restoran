import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Mysnackbar(props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (props.status !== null) {
            setOpen(true);
        }
    }, [props.status]);

    const handleClose = (_event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={props.status ? "success" : "error"} sx={{ width: '100%' }}>
                    {props.status ? <p>This item is added</p> : <p>This item has aleready added!</p>}
                </Alert>
            </Snackbar>
        </Stack>
    );
}
