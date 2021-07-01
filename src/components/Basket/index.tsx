import { Theme, makeStyles } from '@material-ui/core/styles';
import { 
    List,
    ListItem,
    Divider, 
    ListItemText, 
    ListItemAvatar, 
    ListItemSecondaryAction, 
    IconButton, 
    Avatar, 
    Typography, 
    Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';
import { ProductItem } from '../types';
import { Fragment } from 'react';
import store from '../../store';


const useStyles = makeStyles((theme: Theme) => ({
    
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
        },
        listItem: {
            padding: theme.spacing(1, 0),
            justifyContent: 'flex-end',
        },
        total: {
            fontWeight: theme.typography.fontWeightBold,
            fontSize: theme.typography.fontSize * 2,
        }
    }));

const Basket = () => {
    const classes = useStyles({});
    const products = useSelector((state: any) => state.cart.cartItems);
    const totalPrice = (
                        products
                        .filter((product: ProductItem) => product)
                        .reduce((acc: any, current: any) => (acc += current.price), 0) /100)
                        .toFixed(2)


    return (
        <>
        <Typography component="h2"
        variant="h6" color="primary" gutterBottom
        >
            Shopping Basket
        </Typography>
        <Typography component="p"
        variant="body1">
            You have { products.length } item in your basket
        </Typography>
        <Link 
        style={{ textDecoration: 'none' }}
        to="/checkout">
            <Button 
        color="secondary"
        variant="outlined"
        >Checkout
        </Button>
            </Link>
        <ListItem className={classes.listItem}>
                <Typography variant="subtitle1" className={classes.total}>
                    &pound;
                    {totalPrice}
                </Typography>
            </ListItem>
        <List className={classes.root}>
            {products
            .map((product: ProductItem, idx: number) => (
                <Fragment key={idx}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt='Product' src={product.imageUrl} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary={product.title}
                            secondary={
                                <Fragment>
                                    <Typography 
                                    component="span" variant="body2"
                                    className={classes.inline} color="textPrimary"
                                    >
                                        &pound;{(product.price / 100).toFixed(2)}
                                    </Typography>
                                    {` -${product.description}`}
                                </Fragment>
                        } />
                        <ListItemSecondaryAction>
                            <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => store.dispatch(
                                removeFromCart(product.id)
                                )}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </Fragment>
            ))}
        </List>
        </>
    )
}

export default Basket;