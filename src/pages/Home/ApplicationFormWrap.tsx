import React, {useEffect, useState} from "react";
import ApplicationForm, {type ApplicationFormData, type ApplicationFormProps, createInitData} from "./ApplicationForm";
import {FormHelperText, Stack, Typography} from "@mui/material";

export interface ApplicationFormWrapProps extends ApplicationFormProps {
}
export default function ApplicationFormWrap(
    {
        ...props
    }: ApplicationFormWrapProps
){
    return (
        <Stack>
            <Description/>
            <Spacing/>
            <ApplicationForm {...props}/>
        </Stack>
    )
}

/**
 * 설명 문구
 * @constructor
 */
const Description = () => {
    return (
        <FormHelperText>
            이메일과 FE 경력 연차 등 간단한 정보를 입력해주세요.
        </FormHelperText>
    )
}

/**
 * 공백
 * @constructor
 */
const Spacing = () => {
    return <div style={{ padding: "10px" }}/>
}