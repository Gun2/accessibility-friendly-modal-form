import React from 'react';
import ModalTemplate, {type ModalTemplateProps} from "./ModalTemplate";

export interface ModalProps {
    open : ModalTemplateProps["open"];
    handleOpen: ModalTemplateProps["handleOpen"];
    title?: ModalTemplateProps["title"];
    defaultTitle?: ModalTemplateProps["title"];
    content?: ModalTemplateProps["content"];
    defaultContent?: ModalTemplateProps["content"];
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
        content,
        defaultTitle,
        defaultContent,
        onClickConfirm,
        onClickCancel,
    }: ModalProps
){
    return (
        <ModalTemplate
            open={open}
            handleOpen={handleOpen}
            title={title ?? defaultTitle ?? ''}
            content={content ?? defaultContent ?? ''}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
        />
    )
};