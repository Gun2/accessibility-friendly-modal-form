import React from 'react';
import ModalTemplate, {type ModalTemplateProps} from "./ModalTemplate";

export interface ModalProps {
    open : ModalTemplateProps["open"];
    handleOpen: ModalTemplateProps["handleOpen"];
    title?: ModalTemplateProps["title"];
    description?: ModalTemplateProps["description"];
    content?: ModalTemplateProps["content"];
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
        description,
        content,
        onClickConfirm,
        onClickCancel,
        confirmButtonLabel,
        cancelButtonLabel,
    }: ModalProps
){
    return (
        <ModalTemplate
            open={open}
            handleOpen={handleOpen}
            title={title ?? ''}
            description={description}
            content={content ?? ''}
            onClickConfirm={onClickConfirm}
            onClickCancel={onClickCancel}
            confirmButtonLabel={confirmButtonLabel}
            closeButtonLabel={cancelButtonLabel}
        />
    )
};