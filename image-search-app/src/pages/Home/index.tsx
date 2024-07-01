import React, { useState, useEffect } from 'react';
import { searchImages } from '../../services/api';
import { ImageCard, TextField, Pagination } from '../../components';
import { Grid, Container, Box, InputAdornment, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';

interface Image {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
  };
  price: string;
}

const Home: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('sample');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      searchImages(query, page).then((response) => {
        setImages(response.data.results);
        setTotalPages(response.data.total_pages);
      });
    }
  }, [query, page]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleImageClick = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
      <Container>
        <Box display="flex" height='10vh' justifyContent="flex-end" mb={4}>
          <Box width="300px">
            <TextField
              label="Search Images"
              value={query}
              onChange={handleSearch}
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setPage(1)}
                      edge="end"
                    >
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box height='70vh' overflow='auto' >
          <Grid container spacing={2} minWidth="xl" className=''>
            {images.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <ImageCard image={image} onClick={() => handleImageClick(image.id)} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box height='10vh' >
          <Pagination count={totalPages} page={page} onChange={handlePageChange} />
        </Box>
      </Container>
  );
};

export default Home;