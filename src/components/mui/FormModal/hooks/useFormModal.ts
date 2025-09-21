import React, {useCallback, useEffect, useRef} from "react";
import {useModal} from "../../Modal/hooks/useModal";
import type {ModalProps} from "../../Modal";

export interface UseModalParams<T> {
    //확인 전 로직 수행 (false 반환 시 확인 로직을 중단함)
    beforeConfirm?: (data: T) => boolean;
    confirmButtonLabel?: ModalProps["confirmButtonLabel"];
    cancelButtonLabel?: ModalProps["cancelButtonLabel"];
    defaultTitle?: ModalProps["defaultTitle"];
    defaultDescription?: ModalProps["description"];
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
    description?: ModalProps["description"]
}

export const useFormModal = <T>(
    {
        form,
        defaultTitle,
        beforeConfirm,
        confirmButtonLabel,
        cancelButtonLabel,
        defaultDescription,
        data
    }: UseModalParams<T>
) : UseFormModalResult<T> => {
    const {modalProps, openModal} = useModal({
        confirmButtonLabel,
        cancelButtonLabel,
        defaultTitle: defaultTitle,
        defaultDescription: defaultDescription,
        defaultContent: form,
    });
    const dataRef = useRef<T>(data);
    useEffect(() => {
        dataRef.current = data;
    }, [data]);

    const openFormModal = useCallback(({title, description} : OpenFormModalParams = {}) : Promise<T | null> => {
        return new Promise<T | null>(resolve => {
            openModal({
                title: title,
                description: description,
                onClickConfirm: () => {
                    const process = beforeConfirm ? beforeConfirm(dataRef.current) : true;
                    if (process) {
                        resolve(dataRef.current)
                        return true;
                    }else {
                        return false;
                    }
                },
                onClickCancel: () => resolve(null),
            })
        })

    }, [openModal, data, beforeConfirm]);

    return {
        modalProps,
        openFromModal: openFormModal
    }
}