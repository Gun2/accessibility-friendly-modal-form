import React, {useCallback, useEffect, useRef} from "react";
import {useModal} from "../../Modal/hooks/useModal";
import type {ModalProps} from "../../Modal";

export interface UseModalParams<T> {
    confirmButtonLabel?: ModalProps["confirmButtonLabel"];
    cancelButtonLabel?: ModalProps["cancelButtonLabel"];
    defaultTitle?: ModalProps["defaultTitle"];
    form: React.ReactNode;
    data: T
}

export interface UseFormModalResult<T> {
    modalProps : ModalProps
    /**
     * modal 나타내기
     * @param title 제목
     * @param message 내용
     */
    openFromModal: (prams?: OpenFormModalParams) => Promise<T | null>;

}

export interface OpenFormModalParams {
    title?: ModalProps["title"]
}

export const useFormModal = <T>(
    {
        form,
        defaultTitle,
        confirmButtonLabel,
        cancelButtonLabel,
        data
    }: UseModalParams<T>
) : UseFormModalResult<T> => {
    const {modalProps, openModal} = useModal({
        confirmButtonLabel,
        cancelButtonLabel,
        defaultTitle: defaultTitle,
        defaultContent: form,
    });
    const dataRef = useRef<T>(data);
    useEffect(() => {
        dataRef.current = data;
    }, [data]);

    const openFormModal = useCallback(({title} : OpenFormModalParams = {}) : Promise<T | null> => {
        return new Promise<T | null>(resolve => {
            openModal({
                title: title,
                onClickConfirm: () => resolve(dataRef.current),
                onClickCancel: () => resolve(null),
            })
        })

    }, [openModal, data]);

    return {
        modalProps,
        openFromModal: openFormModal
    }
}