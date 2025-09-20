import {Button, type ButtonProps} from "@mui/material";
import React from "react";

interface ConfirmButtonProps extends Omit<ButtonProps, "color" | "children" | "variant"> {
    label: React.ReactNode
}

/**
 * 확인 버튼
 * @param label
 * @param props
 * @constructor
 */
export default function ConfirmButton(
    {
        label,
        ...props
    }: ConfirmButtonProps
) {
    return <Button variant={"contained"} color={"primary"} {...props}>{label}</Button>
}