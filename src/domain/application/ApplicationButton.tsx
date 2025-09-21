import React, {useCallback, useState} from 'react';
import {Button} from "@mui/material";
import Modal from "../../components/mui/Modal";
import {type ApplicationFormData, createInitData} from "../../pages/Home/ApplicationForm";
import {useFormModal} from "../../components/mui/FormModal/hooks/useFormModal";
import ApplicationFormWrap from "../../pages/Home/ApplicationFormWrap";

/**
 * 신청 폼 작성하기 버튼
 * @constructor
 */
export default function ApplicationButton(){
    const [data, setData] = useState<ApplicationFormData>(createInitData())
    const {openFromModal, modalProps} = useFormModal({
        form: <ApplicationFormWrap data={data} onChange={setData}/>,
        data: data,
        confirmButtonLabel: "제출하기",
        defaultTitle: "신청 폼"
    });
    /**
     * form 초기화
     */
    const dataInit = useCallback(() => {
        setData(createInitData())
    }, []);
    /**
     * 버튼 클릭
     */
    const onClickButton = useCallback(() => {
        dataInit()
        openFromModal().then(res => {
            console.log(res);
        })
    }, [openFromModal, dataInit]);
    return (
        <>
            <Button
                variant="contained"
                onClick={onClickButton}
            >
                📄 신청 폼 작성하기
            </Button>
            <Modal {...modalProps}/>
        </>
    )
};