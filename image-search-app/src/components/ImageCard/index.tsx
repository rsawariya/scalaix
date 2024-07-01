import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

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
    likes?: number;
}

interface ImageCardProps {
    image: Image;
    onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {

    return (
        <Card onClick={onClick} style={{ cursor: 'pointer', height: '100%' }}>
            <CardMedia
                component="img"
                height="240"
                image={image.urls.regular}
                alt={image.alt_description}
            />
            <CardContent>
                <Typography gutterBottom variant="h1" className="Text-Semibold">
                    {image.user.name}
                </Typography>
                <Typography variant="h2" className="Text-Normal" color="text.secondary">
                    {image.description || 'No description available.'}
                </Typography>
                <Box mt={2}>
                    <Typography variant="h3" className="Text-Semibold">
                        $ {(image.likes??0)*10}.00
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ImageCard;
