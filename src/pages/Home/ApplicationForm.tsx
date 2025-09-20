import {Stack, TextField} from "@mui/material";
import FormLabel from "../../components/mui/FormLabel";
import {useHandleInputEvent} from "../../hooks/useHandleInputEvent";

export interface ApplicationFormData {
    name: string;
    email: string;
    level?: "BEGINNER" | "MID" | "SENIOR";
    gitLink: string;
}
export interface ApplicationFormProps {
    data: ApplicationFormData;
    onChange: (data: ApplicationFormData) => void;
}
export default function ApplicationForm(
    {
        data,
        onChange,
    }: ApplicationFormProps
){
    const {handleInputEvent} = useHandleInputEvent({
        data,
        onChange
    });
    return (
        <Stack gap={2}>
            <FormLabel label={"이름/닉네임"}>
                <TextField
                    name={"name"}
                    value={data.name}
                    onChange={handleInputEvent}
                />
            </FormLabel>
            <FormLabel label={"이메일"}>
                <TextField
                    name={"email"}
                    value={data.email}
                    onChange={handleInputEvent}
                />
            </FormLabel>
        </Stack>
    )
}

export const createInitData = ():ApplicationFormData  => ({
    email: "",
    gitLink: "",
    name: ""
})