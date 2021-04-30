import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

const products= [
    {
        id: 1,
        name: 'Strawberry',
        description: 'strawberry chung',
        price: '$15',
        image: 'https://www.seouldshop.com/data/item/1584080452/8507KCV7IKs6rCB7ZiV6r646646riw20200313_152515_2.jpg',
    },
    {
        id: 2,
        name: 'Pineapple',
        description: 'Pineapple chung',
        price: '$15',
        image: 'https://image.idus.com/image/files/ff03753066f846c0a5b4df6c057201f3_1440.jpg',
    },
]

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product  product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
    
}

export default Products;