import { Button, Container, TextField } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { placeOrder } from '../../store/orderSlice';
import { Data, OrderObjType, ProductItem } from '../types';
import { useSelector } from 'react-redux';
import store from '../../store';
import ModalComponent from './OrderModal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const schema = Yup.object().shape({
    username: Yup
    .string()
    .required('Username is a required field')
    .min(5)
    .max(16, 'Username cannot be longer than 16 characters')
    .matches(/^([^0-9]*)$/, 'User name should not contain numbers'),
    address: Yup
    .string()
    .required('Address is a required field'),
    email: Yup
    .string()
    .required('Email is a required field')
    .email('Please provide a valid email address (abc@test.com)'),
});

const useStyles = makeStyles((theme: Theme) => ({
    containerCls: {
        marginTop: 60
    }
}))
const PlaceOrder = () => {
    const [open, setIsOn] = useState(false)
    const classes = useStyles();
    const products = useSelector((state: any) => state.cart.cartItems);
    const totalPrice = (
                        products
                        .filter((product: ProductItem) => product)
                        .reduce((acc: any, current: any) => (acc += current.price), 0) /100)
                        .toFixed(2)

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const submitForm = ({ username, email, address }: Data) => {

        const orderObj: OrderObjType = {
            username,
            email,
            address,
            total: +totalPrice,
            cartItems: products,
            id: `${'_' + Math.random().toString(36).substr(2, 9)}`,
            createdAt: dayjs().format('MMM, ddd D. h:mm A'),
            updatedAt: dayjs().format('MMM, ddd D. h:mm A'),
        }

        store.dispatch(placeOrder(orderObj));
        setIsOn(true)
    }
    const handleClose = () => {
        return setIsOn(false);
    }
    return (
        <>
        <Container className={classes.containerCls} maxWidth="md">
            <form onSubmit={handleSubmit(submitForm)}>
                    <div className="inputWrapper">
                        <TextField 
                            {...register('username')}
                            fullWidth
                            label="Username"
                            variant="outlined"
                            type="text" name="username"
                            error={!!errors.username}
                            helperText={errors.username?.message}
                            margin="dense"
                        />
                    </div>

                        <div className="inputWrapper">
                            <TextField 
                                {...register('address')}
                                fullWidth
                                label="Address"
                                variant="outlined"
                                type="text" name="address"
                                error={!!errors.address}
                                helperText={errors.address?.message}
                                margin="dense"
                            />
                        </div>

                            <div className="inputWrapper">
                                <TextField 
                                    {...register('email')}
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    type="email" name="email"
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                    margin="dense"
                                />
                            </div>
                            
                        <div className="inputWrapper">
                            <Button 
                                type="submit"
                                color="primary"
                                variant="contained">
                                    Place Order
                            </Button>
                            <Link to="/" 
                            style={{ textDecoration: 'none', margin: 20 }}>
                                <Button color="primary" 
                                variant="contained">Home</Button>
                                </Link>
                        </div>
            </form>
            
        </Container>
            <ModalComponent handleClose={handleClose} open={open}/>
            </>
    )
}

export default PlaceOrder