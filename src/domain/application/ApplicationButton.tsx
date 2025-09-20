import React, {useState} from 'react';
import {Button} from "@mui/material";
import Modal from "../../components/mui/Modal";
import ApplicationForm, {type ApplicationFormData, createInitData} from "../../pages/Home/ApplicationForm";
import {useFormModal} from "../../components/mui/FormModal/hooks/useFormModal";
import ApplicationFormWrap from "../../pages/Home/ApplicationFormWrap";

/**
 * 신청 폼 작성하기 버튼
 * @constructor
 */
export default function ApplicationButton(){
    const [data, setData] = useState<ApplicationFormData>(createInitData())
    const {openFromModal, modalProps} = useFormModal({
        form: <ApplicationFormWrap onChange={setData}/>,
        data: data,
        confirmButtonLabel: "제출하기"
    });

    return (
        <>
            <Button
                variant="contained"
                onClick={() => {
                        openFromModal().then(res => {
                            console.log(res);
                        })
                    }
                }
            >
                📄 신청 폼 작성하기
            </Button>
            <Modal {...modalProps}/>
        </>
    )
};