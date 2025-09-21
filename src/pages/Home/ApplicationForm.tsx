import {MenuItem, Select, Stack, styled, TextField} from "@mui/material";
import FormLabel from "../../components/mui/FormLabel";
import {useHandleInputEvent} from "../../hooks/useHandleInputEvent";
import {useCallback} from "react";
import {z} from "zod";
import type {ValidationErrors} from "../../types/validationErrors.type";
import FieldError from "../../components/mui/FieldError/FieldError";

export const ApplicationFormSchema = z.object({
    name: z
        .string()
        .min(1, "이름/닉네임을 입력해주세요."),
    email: z
        .string()
        .email("올바른 이메일 주소를 입력해주세요."),
    level: z.string(),
    gitLink: z
        .string()
        .optional()
}).superRefine((data, ctx) => {
    if (["BEGINNER", "MID", "SENIOR"].indexOf(data.level) === -1) {
        ctx.addIssue({
            code: "custom",
            path: ["level"],
            message: `값을 선택해주세요`,
        });
    }
    // URL 검증
    try {
        if (!!data.gitLink){
            new URL(data.gitLink);
        }
    } catch {
        ctx.addIssue({
            code: "custom",
            path: ["gitLink"],
            message: "URL 형식으로 입력해주세요",
        });
    }
});

export interface ApplicationFormData {
    name: string;
    email: string;
    level: "NONE" | "BEGINNER" | "MID" | "SENIOR";
    gitLink: string;
}

export interface ApplicationFormProps {
    data: ApplicationFormData;
    onChange: (data: ApplicationFormData) => void;
    validationErrors: ValidationErrors;
}

export default function ApplicationForm(
    {
        data,
        onChange,
        validationErrors,
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
                    <FieldError name={"name"} validationErrors={validationErrors}/>
                </FormLabel>
                <FormLabel label={"이메일"}>
                    <TextField
                        name={"email"}
                        value={data.email}
                        onChange={handleInputEvent}
                    />
                    <FieldError name={"email"} validationErrors={validationErrors}/>
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
                    <FieldError name={"level"} validationErrors={validationErrors}/>
                </FormLabel>
                <FormLabel label={"Github 링크 (선택)"}>
                    <TextField
                        name={"gitLink"}
                        value={data.gitLink}
                        onChange={handleInputEvent}
                        placeholder={"https://github.com/username"}
                    />
                    <FieldError name={"gitLink"} validationErrors={validationErrors}/>
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