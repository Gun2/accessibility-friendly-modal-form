import React from 'react';
import ModalTemplate, {type ModalTemplateProps} from "./ModalTemplate";

export interface ModalProps {
    open : ModalTemplateProps["open"];
    handleOpen: ModalTemplateProps["handleOpen"];
    title: ModalTemplateProps["title"];
    message: ModalTemplateProps["content"];
    onClickConfirm: ModalTemplateProps["onClickConfirm"];
    onClickCancel: ModalTemplateProps["onClickCancel"];
    confirmButtonLabel: ModalTemplateProps["confirmButtonLabel"];
    cancelButtonLabel: ModalTemplateProps["closeButtonLabel"];
}

/**
 * modal 템플릿
 */
export default function Modal(
    {
        open,
        handleOpen,
        title,
        message,
        onClickConfirm,
        onClickCancel,
    }: ModalProps
){
    return (
        <ModalTemplate
            open={open}
            handleOpen={handleOpen}
            title={title}
            content={message}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
};