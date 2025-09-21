import React, {useCallback} from 'react';
import {Button} from "@mui/material";
import Modal from "../../components/mui/Modal";
import {useFormModal} from "../../components/mui/FormModal/hooks/useFormModal";
import ApplicationFormWrap from "../../pages/Home/ApplicationFormWrap";
import {useApplicationForm} from "./hooks/useApplicationForm";

/**
 * 신청 폼 작성하기 버튼
 * @constructor
 */
export default function ApplicationButton(){
    const {data, setData, validate, validationErrors, initData} = useApplicationForm();
    const {openFromModal, modalProps} = useFormModal({
        form: <ApplicationFormWrap data={data} onChange={setData} validationErrors={validationErrors}/>,
        data: data,
        confirmButtonLabel: "제출하기",
        defaultTitle: "신청 폼",
        beforeConfirm: (formData) => {
            const validationResult = validate(formData);
            return validationResult.success;
        }
    });
    /**
     * 버튼 클릭
     */
    const onClickButton = useCallback(() => {
        initData()
        openFromModal().then(res => {
            console.log(res);
        })
    }, [openFromModal, initData]);
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