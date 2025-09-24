import {Select as MuiSelect, type SelectProps as MuiSelectProps} from "@mui/material";
import FormLabel from "../FormLabel";
import FieldError, {type FieldErrorProps} from "../FieldError";
import {useMemo} from "react";
import {createUUID} from "../../../utils/createUUID";

export interface SelectProps extends Omit<MuiSelectProps, "label">{
    label?: string;
    validationErrors?: FieldErrorProps["validationErrors"];
}

export default function Select(
    {
        label,
        validationErrors,
        ...props
    }: SelectProps
){
    if (!!label){
        return (
            <FormLabel
                label={label}
                htmlFor={props?.id}
            >
                <ValidSelect validationErrors={validationErrors} {...props}/>
            </FormLabel>
        );
    }
    return <ValidSelect validationErrors={validationErrors} {...props}/>
}

function ValidSelect(
    {
        validationErrors,
        ...props
    }: SelectProps
){
    const hasError = useMemo(() => !!props?.name && !!validationErrors?.[props?.name], [validationErrors, props.name]);
    const errorUuid = useMemo(() => {
        return createUUID();
    }, []);
    return(
        <>
            <MuiSelect
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