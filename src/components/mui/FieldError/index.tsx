import type {ValidationErrors} from "../../../types/validationErrors.type";
import {styled} from "@mui/material";


export interface FieldErrorProps {
    id?: string;
    name: string;
    validationErrors: ValidationErrors;
}
export default function Index(
    {
        id,
        name,
        validationErrors,
    }: FieldErrorProps
) {
    const message : string | undefined = validationErrors[name];
    if (!message) {
        return null;
    }
    return <ErrorText id={id} role={"alert"}>{message}</ErrorText>
};

const ErrorText = styled("div")(({theme}) => ({
    fontSize: "0.8rem",
    color: theme.palette.error.main,
}))