// src/pages/ImageDetails/ImageDetails.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getImageDetails } from '../../services/api';
import { Container, Typography, IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const ImageDetails: React.FC = () => {
    const { id } = useParams();
    const [image, setImage] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getImageDetails(id).then((response) => {
                setImage(response.data);
            });
        }
    }, [id]);

    return (
        <Container >
            {
                !image ? <Typography>Loading</Typography> :
                    <>
                        <IconButton aria-label="back" size="large" onClick={() => navigate('/')}>
                            <ArrowBack />
                        </IconButton>
                        <Typography variant="h1" className="Text-headline">{image.alt_description}</Typography>
                        <img src={image.urls.regular} alt={image.alt_description} width='600px' />
                        <Typography variant="h3" className="Text-Semibold">
                            $ {image.likes * 10}.00
                        </Typography>
                        <Typography variant="h2" className="Text-Semibold">Description</Typography>
                        <Typography variant="body1" className="Text-Normal">{image.description || 'No description available.'}</Typography>
                    </>
            }
        </Container>);
};

export default ImageDetails;
