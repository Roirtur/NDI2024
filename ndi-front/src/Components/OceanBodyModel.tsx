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
        cerveau: "Le cerveau représente les courants marins, qui régulent les températures globales et influencent les climats.",
        poumons: "Les poumons illustrent les échanges gazeux océaniques, notamment la photosynthèse marine qui transforme le CO2 en oxygène.",
        bouche: "La bouche représente les estuaires et les zones côtières où les nutriments sont absorbés.",
        veines: "Les veines symbolisent les courants océaniques qui transportent les nutriments et l'énergie à travers le globe.",
        yeux: "Les yeux représentent la clarté de l'eau et la visibilité sous-marine, essentielle pour la vie marine.",
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
                {/* Cerveau */}
                <Tooltip title="Cerveau" placement="top">
                    <path
                        className="body-part"
                        d="M90 50 C85 40, 115 40, 110 50 S95 70, 90 50 Z"
                        onClick={() => handleOpen('cerveau')}
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

                {/* Bouche */}
                <Tooltip title="Bouche" placement="top">
                    <path
                        className="body-part"
                        d="M90 100 C85 95, 115 95, 110 100 S95 110, 90 100 Z"
                        onClick={() => handleOpen('bouche')}
                    />
                </Tooltip>

                {/* Veines */}
                <Tooltip title="Veines" placement="top">
                    <path
                        className="body-part"
                        d="M90 200 C85 190, 115 190, 110 200 S95 220, 90 200 Z"
                        onClick={() => handleOpen('veines')}
                    />
                </Tooltip>

                {/* Yeux */}
                <Tooltip title="Yeux" placement="top">
                    <g>
                        <path
                            className="body-part"
                            d="M70 80 C65 75, 80 60, 90 80 Z"
                            onClick={() => handleOpen('yeux')}
                        />
                        <path
                            className="body-part"
                            d="M110 80 C115 75, 100 60, 90 80 Z"
                            onClick={() => handleOpen('yeux')}
                        />
                    </g>
                </Tooltip>

                {/* Estomac */}
                <Tooltip title="Estomac" placement="top">
                    <path
                        className="body-part"
                        d="M85 250 C80 270, 100 270, 95 250 Z"
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