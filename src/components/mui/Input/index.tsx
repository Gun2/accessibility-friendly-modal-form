import {TextField, type TextFieldProps} from "@mui/material";
import FormLabel from "../FormLabel";
import FieldError, {type FieldErrorProps} from "../FieldError";
import {useMemo} from "react";
import {createUUID} from "../../../utils/createUUID";

export interface InputProps extends Omit<TextFieldProps, "label">{
    label?: string;
    validationErrors?: FieldErrorProps["validationErrors"];
}

export default function Input(
    {
        label,
        validationErrors,
        ...props
    }: InputProps
){
    if (!!label){
        return (
            <FormLabel
                label={label}
                htmlFor={props?.id}
            >
                <ValidInput validationErrors={validationErrors} {...props}/>
            </FormLabel>
        );
    }
    return <ValidInput validationErrors={validationErrors} {...props}/>
}

function ValidInput(
    {
        validationErrors,
        ...props
    }: InputProps
){
    const hasError = useMemo(() => !!props?.name && !!validationErrors?.[props?.name], [validationErrors, props.name]);
    const errorUuid = useMemo(() => {
        return createUUID();
    }, []);
    return(
        <>
            <TextField
                aria-invalid={hasError}
                aria-describedby={hasError ? errorUuid : undefined}
                {...props}
            />
            {
                props.name && validationErrors && (
                    <FieldError id={errorUuid} name={props.name} validationErrors={validationErrors}/>
                )
            }
        </>
    )
}