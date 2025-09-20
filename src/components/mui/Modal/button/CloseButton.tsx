import {Button, type ButtonProps} from "@mui/material";
import React from "react";

interface CancelButtonProps extends Omit<ButtonProps, "color" | "children" | "variant"> {
    label: React.ReactNode
}

/**
 * 닫기 버튼
 * @param label
 * @param props
 * @constructor
 */
export default function CloseButton(
    {
        label,
        ...props
    }: CancelButtonProps
) {
    return <Button variant={"outlined"} {...props}>{label}</Button>
}