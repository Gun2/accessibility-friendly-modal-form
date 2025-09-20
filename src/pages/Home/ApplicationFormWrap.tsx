import React, {useEffect, useState} from "react";
import ApplicationForm, {type ApplicationFormData, createInitData} from "./ApplicationForm";

export interface ApplicationFormWrapProps {
    onChange: (data: ApplicationFormData) => void;
}
export default function ApplicationFormWrap(
    {
        onChange
    }: ApplicationFormWrapProps
){
    const [data, setData] = useState<ApplicationFormData>(createInitData())
    useEffect(()=>{
        onChange(data)
    }, [data])
    return <ApplicationForm data={data} onChange={setData}/>
}