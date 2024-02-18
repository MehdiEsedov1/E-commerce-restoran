import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1 }} style={{
            width: "100%",
            height: "1000px",
        }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                    height: "1000px"

                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        style={{
                            fontSize: "2rem",
                            color: "green"
                        }}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft sx={{
                                fontSize: "3rem"
                            }} />
                        ) : (
                            <KeyboardArrowRight sx={{
                                fontSize: "3rem"
                            }} />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        style={{
                            fontSize: "2rem",
                            color: "green"
                        }}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight sx={{
                                fontSize: "3rem"
                            }} />
                        ) : (
                            <KeyboardArrowLeft sx={{
                                fontSize: "3rem"
                            }} />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}

export default SwipeableTextMobileStepper;