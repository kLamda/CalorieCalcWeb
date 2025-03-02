import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import ImageUploader from '../components/ImageUploader';
import Grid from '@mui/material/Grid2';
import SubmitButton from '../components/SubmitButton';
import Pills from '../components/Pills';
import { Stack } from '@mui/material';
import ImageUploadButton from '../components/ImageUploadButton';
import CalorieCountMeter from '../components/CalorieCountMeter';
import Footer from '../components/Footer';

export default function Home(props) {
    const [imageDataUrl, setImageDataUrl] = React.useState(null);
    const [response, onResponse] = React.useState({ items: [], count: 0 });
    const onImageChange = (dataUrl) => {
        setImageDataUrl(dataUrl);
        onResponse({ items: [], count: 0 });
    }
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Container
                maxWidth="lg"
                component="main"
                sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
            >
                <Grid container spacing={2}>
                    <Grid size={{ lg: 4, xs: 12 }}>
                        <Stack direction="row" spacing={0.5}>
                            <ImageUploadButton imageDataUrl={imageDataUrl} onImageUpload={onImageChange} />
                            <SubmitButton dataUrl={imageDataUrl} onResponse={onResponse} />
                        </Stack>
                        {response.items.length > 0 && (
                            <Grid container spacing={1} mt={2}>
                                <Grid item size={{ xs: 6 }}>
                                    <Pills strings={response.items} />
                                </Grid>
                                <Grid item size={{ xs: 6 }}>
                                    <CalorieCountMeter value={response.count} />
                                </Grid>
                            </Grid>
                        )
                        }
                    </Grid>
                    <Grid size={{ lg: 8, xs: 12 }}>
                        <ImageUploader imageDataUrl={imageDataUrl} setImageDataUrl={onImageChange} />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </AppTheme >
    );
}