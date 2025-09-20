import {Stack} from "@mui/material";


export interface FormLabelProps {
    label: string;
    children?: React.ReactNode;
}
export default function FormLabel(
    {
        label,
        children
    }: FormLabelProps
){
    return (
        <Stack>
            <div style={{fontSize: "0.7rem"}}>{label}</div>
            {children}
        </Stack>
    )

}