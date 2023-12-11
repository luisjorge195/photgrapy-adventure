import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import UploadImage from '../UploadImage';
import { identificator } from '../../types/types';
interface CustomizedDialogsProps {
  name?: string | React.ReactNode;
  open?: boolean;
  id?: identificator;
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width: '100%',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    width: '100%',
  },
}));

export const ModalContent:React.FC<CustomizedDialogsProps> = ({id, name}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="overflow-y-hidden max-w-full">
      <Button variant="outlined" onClick={handleClickOpen} className='text-black border-none'>
        <div className='capitalize uppercase text-base'>{name}</div>
        
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      
        
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <h1 className='text-xl font-semibold text-center px-24'>{`${id ? 'Comparte esta aventura digital' : 'Publica tu aventura'}`}</h1>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers className='text-center grid place-items-center'>
          {/**@ts-expect-error is necesary */}
          <UploadImage id={id} setOpen = {setOpen} />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}