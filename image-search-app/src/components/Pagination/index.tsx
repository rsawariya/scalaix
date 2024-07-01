import React from 'react';
import { Pagination as MuiPagination, PaginationProps, Box } from '@mui/material';

const Pagination: React.FC<PaginationProps> = (props) => {
    return (
        <Box display="flex" justifyContent="center" mt={4}>
            <MuiPagination {...props} />
        </Box>
    );
};

export default Pagination;