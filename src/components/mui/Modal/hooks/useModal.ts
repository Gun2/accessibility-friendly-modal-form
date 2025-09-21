import React, {useCallback, useState} from "react";
import {type ModalProps} from "../index";
import type {ModalTemplateProps} from "../ModalTemplate";

interface ShowModalParams {
    title?: ModalProps["title"];
    content?: ModalProps["content"];
    onClickConfirm?: ModalProps["onClickConfirm"];
    onClickCancel?: ModalProps["onClickCancel"];
}

export interface UseModalParams {
    //제목 기본값 (제목 미 입력 시 기본적으로 사용됨)
    defaultTitle?: ModalProps["defaultTitle"];
    //내용 기본값 (내용 미 입력 시 기본적으로 사용됨)
    defaultContent?: ModalProps["defaultContent"];
    confirmButtonLabel?: ModalTemplateProps["confirmButtonLabel"];
    cancelButtonLabel?: ModalTemplateProps["closeButtonLabel"];
}

export interface UseModalResult {
    modalProps : ModalProps
    /**
     * modal 나타내기
     * @param title 제목
     * @param content 내용
     */
    openModal: (params: ShowModalParams) => void;
    setContent: (content: React.ReactNode) => void;

}

export const useModal = (
    {
        defaultTitle,
        defaultContent,
        confirmButtonLabel,
        cancelButtonLabel,
    }: UseModalParams = {}
) : UseModalResult => {
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback((_open : boolean) => {
        setOpen(_open);
    }, []);
    const [title, setTitle] = useState<string>();
    const [message, setMessage] = useState<React.ReactNode>();
    const [onClickConfirm, setOnClickConfirm] = useState<ModalProps["onClickConfirm"]>(() => {})
    const [onClickCancel, setOnCancelConfirm] = useState<ModalProps["onClickCancel"]>(() => {})

    const openModal = useCallback((params : ShowModalParams) => {
        setTitle(params.title ?? undefined);
        setMessage(params.content ?? undefined);
        setOnClickConfirm(() => params.onClickConfirm);
        setOnCancelConfirm(() => params.onClickCancel);
        handleOpen(true);
    }, [handleOpen]);

    return {
        modalProps : {
            open,
            handleOpen,
            title,
            content: message,
            onClickConfirm,
            onClickCancel,
            confirmButtonLabel,
            cancelButtonLabel,
            defaultTitle: defaultTitle,
            defaultContent: defaultContent,
        },
        openModal: openModal,
        setContent: setMessage
    }

}