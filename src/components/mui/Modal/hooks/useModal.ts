import React, {useCallback, useState} from "react";
import {type ModalProps} from "../index";
import type {ModalTemplateProps} from "../ModalTemplate";

interface ShowModalParams {
    title: ModalProps["title"];
    message: ModalProps["message"];
    onClickConfirm: ModalProps["onClickConfirm"];
    onClickCancel: ModalProps["onClickCancel"];
}

export interface UseModalParams {
    confirmButtonLabel?: ModalTemplateProps["confirmButtonLabel"];
    cancelButtonLabel?: ModalTemplateProps["closeButtonLabel"];
}

export interface UseModalResult {
    modalProps : ModalProps
    /**
     * modal 나타내기
     * @param title 제목
     * @param message 내용
     */
    openModal: (params: ShowModalParams) => void;
    setMessage: (message: React.ReactNode) => void;

}

export const useModal = (
    {
        confirmButtonLabel,
        cancelButtonLabel,
    }: UseModalParams = {}
) : UseModalResult => {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback((_open : boolean) => {
        setOpen(_open);
    }, []);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState<React.ReactNode>('');
    const [onClickConfirm, setOnClickConfirm] = useState<ModalProps["onClickConfirm"]>(() => {})
    const [onClickCancel, setOnCancelConfirm] = useState<ModalProps["onClickCancel"]>(() => {})

    const openModal = useCallback((params : ShowModalParams) => {
        setTitle(params.title);
        setMessage(params.message);
        setOnClickConfirm(() => params.onClickConfirm);
        setOnCancelConfirm(() => params.onClickCancel);
        handleOpen(true);
    }, [handleOpen]);

    return {
        modalProps : {
            open,
            handleOpen,
            title,
            message,
            onClickConfirm,
            onClickCancel,
            confirmButtonLabel,
            cancelButtonLabel,
        },
        openModal: openModal,
        setMessage
    }

}