import { Box } from '@material-ui/core'
import React from 'react'
import Basket from './Basket'
import Product from './Product'

export const Home = () => {
    return (
        <div>
            <Box mt={5} mb={5} >
                <Product />
            </Box>
            <Box mt={5} mb={5} >
                <Basket />
            </Box>
        </div>
    )
}

export default Home;
