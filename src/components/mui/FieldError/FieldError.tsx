import type {ValidationErrors} from "../../../types/validationErrors.type";
import {styled} from "@mui/material";


export interface FieldErrorProps {
    name: string;
    validationErrors: ValidationErrors;
}
export default function FieldError(
    {
        name,
        validationErrors,
    }: FieldErrorProps
) {
    const message : string | undefined = validationErrors[name];
    if (!message) {
        return null;
    }
    return <ErrorText>{message}</ErrorText>
};

const ErrorText = styled("div")(({theme}) => ({
    fontSize: "0.8rem",
    color: theme.palette.error.main,
}))