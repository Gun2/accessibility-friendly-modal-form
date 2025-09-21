import {MenuItem, Select, Stack, styled, TextField} from "@mui/material";
import FormLabel from "../../components/mui/FormLabel";
import {useHandleInputEvent} from "../../hooks/useHandleInputEvent";
import {useCallback} from "react";

export interface ApplicationFormData {
    name: string;
    email: string;
    level: "NONE" | "BEGINNER" | "MID" | "SENIOR";
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
    const onChangeLevel = useCallback((level: ApplicationFormData["level"]) => {
        onChange({
            ...data,
            level: level
        })
    }, [data, onChange]);
    return (
        <Box>
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
                <FormLabel label={"FE 경력 연차"}>
                    <Select
                        name={"level"}
                        value={data.level}
                        onChange={event => onChangeLevel(event.target.value as ApplicationFormData["level"])}
                    >
                        <MenuItem value={"NONE"}>선택해주세요.</MenuItem>
                        <MenuItem value={"BEGINNER"}>0~3년</MenuItem>
                        <MenuItem value={"MID"}>4~7년</MenuItem>
                        <MenuItem value={"SENIOR"}>8년 이상</MenuItem>
                    </Select>
                </FormLabel>
                <FormLabel label={"Github 링크 (선택)"}>
                    <TextField
                        name={"gitLink"}
                        value={data.gitLink}
                        onChange={handleInputEvent}
                        placeholder={"https://github.com/username"}
                    />
                </FormLabel>

            </Stack>
        </Box>
    )
}

const Box = styled('div')({
    minWidth: 400
})

export const createInitData = ():ApplicationFormData  => ({
    name: "",
    email: "",
    level: "NONE",
    gitLink: "",
})