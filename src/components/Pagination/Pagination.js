import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

export default function BasicPagination({ count, page, onChange }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 6 }}>
      <Stack spacing={2}>
        <Pagination count={count} page={page} onChange={onChange} />
      </Stack>
    </Box>
  );
}
