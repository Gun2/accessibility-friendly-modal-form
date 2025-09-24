import {Dialog, type DialogProps, Fade, styled} from "@mui/material";
import React from "react";

export default function BaseModal(props : DialogProps) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return <CustomDialog {...props} TransitionComponent={prefersReducedMotion ? React.Fragment : Fade} />
}

const CustomDialog = styled(Dialog)(() => ({
    "& .MuiPaper-root" : {
        minWidth: 300
    }
}))

