import React, { useState } from 'react';
import { Box, Typography, Tooltip, Modal, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledSvg = styled('svg')(({ theme }) => ({
    width: '100%',
    maxWidth: '600px',
    margin: 'auto',
    display: 'block',
    cursor: 'pointer',
    '& .body-part': {
        fill: theme.palette.primary.light,
        transition: 'fill 0.2s ease',
        '&:hover': {
            fill: theme.palette.primary.main,
        },
    },
}));

const StyledModal = styled(Modal)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .content': {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[5],
        outline: 'none',
        maxWidth: '90%',
        maxHeight: '80%',
        overflowY: 'auto',
    },
}));

const OceanBodyModel: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [selectedPart, setSelectedPart] = useState<string | null>(null);

    const bodyPartsInfo: Record<string, string> = {
        coeur: "Le cœur représente les courants marins, comme la circulation thermohaline, qui agit comme une pompe régulant les températures globales.",
        poumons: "Les poumons illustrent les échanges gazeux océaniques, notamment la photosynthèse marine qui transforme le CO2 en oxygène.",
        estomac: "L'estomac est lié au cycle des nutriments dans l'océan, où les éléments essentiels sont redistribués dans les écosystèmes.",
    };

    const handleOpen = (part: string) => {
        setSelectedPart(part);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedPart(null);
    };

    return (
        <Box>
            <Typography variant="h6" textAlign="center" mb={2}>
                Cliquez sur une partie du corps pour explorer ses parallèles avec l’océan
            </Typography>
            <StyledSvg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 500"
                aria-label="Modèle du Corps-Océan"
            >
                {/* Cœur */}
                <Tooltip title="Cœur" placement="top">
                    <path
                        className="body-part"
                        d="M90 120 C85 110, 115 110, 110 120 S95 140, 90 120 Z"
                        onClick={() => handleOpen('coeur')}
                    />
                </Tooltip>

                {/* Poumons */}
                <Tooltip title="Poumons" placement="top">
                    <g>
                        <path
                            className="body-part"
                            d="M70 150 C65 145, 80 130, 90 150 Z"
                            onClick={() => handleOpen('poumons')}
                        />
                        <path
                            className="body-part"
                            d="M110 150 C115 145, 100 130, 90 150 Z"
                            onClick={() => handleOpen('poumons')}
                        />
                    </g>
                </Tooltip>

                {/* Estomac */}
                <Tooltip title="Estomac" placement="top">
                    <path
                        className="body-part"
                        d="M85 200 C80 220, 100 220, 95 200 Z"
                        onClick={() => handleOpen('estomac')}
                    />
                </Tooltip>
            </StyledSvg>

            {/* Modal pour afficher les informations */}
            <StyledModal open={open} onClose={handleClose}>
                <Box className="content">
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="h4" gutterBottom>
                        {selectedPart && selectedPart.charAt(0).toUpperCase() + selectedPart.slice(1)}
                    </Typography>
                    <Typography variant="body1">
                        {selectedPart && bodyPartsInfo[selectedPart]}
                    </Typography>
                </Box>
            </StyledModal>
        </Box>
    );
};

export default OceanBodyModel;