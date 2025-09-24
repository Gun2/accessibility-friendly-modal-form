import {Stack} from "@mui/material";


export interface FormLabelProps {
    label: React.ReactNode;
    htmlFor?: string;
    children?: React.ReactNode;
}
export default function FormLabel(
    {
        label,
        htmlFor,
        children
    }: FormLabelProps
){
    return (
        <Stack>
            <label style={{fontSize: "0.7rem"}} htmlFor={htmlFor}>{label}</label>
            {children}
        </Stack>
    )

}