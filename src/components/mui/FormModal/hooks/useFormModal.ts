import React, {useCallback} from "react";
import {useModal} from "../../Modal/hooks/useModal";
import type {ModalProps} from "../../Modal";
import type {ModalTemplateProps} from "../../Modal/ModalTemplate";

export interface UseModalParams<T> {
    confirmButtonLabel?: ModalTemplateProps["confirmButtonLabel"];
    cancelButtonLabel?: ModalTemplateProps["closeButtonLabel"];
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
    openFromModal: () => Promise<T | null>;

}

export const useFormModal = <T>(
    {
        form,
        confirmButtonLabel,
        cancelButtonLabel,
        data
    }: UseModalParams<T>
) : UseFormModalResult<T> => {
    const {modalProps, openModal, setContent} = useModal({
        confirmButtonLabel,
        cancelButtonLabel,
    });

    const openFormModal = useCallback(() : Promise<T | null> => {
        return new Promise<T | null>(resolve => {
            openModal({
                title: '',
                content: form,
                onClickConfirm : () => resolve(data),
                onClickCancel: () => resolve(null),
            })
        })

    }, [openModal, data]);
    return {
        modalProps,
        openFromModal: openFormModal
    }
}