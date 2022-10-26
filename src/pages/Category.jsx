import { Grid,
    Box
} from '@mui/material';
import React from 'react'

function Category() {
    return (
    <Box sx={{paddingX:{xs:3, xl: 5}, paddingY:{xs:3, xl:5}}}>
        {/* phase 1 */}
        <Grid container spacing={5} sx={{marginBottom:8}} >
            <Grid item xs={12}>
                Category
            </Grid>
        </Grid>
    </Box>
    )
}

export default Category;