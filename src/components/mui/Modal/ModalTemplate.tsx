import React, {useCallback} from 'react';
import {Button, Dialog, DialogContent, DialogTitle, Stack, styled} from "@mui/material";
import ModalButtons, {type ModalButtonsProps} from "./button/ModalButtons";

export interface ModalTemplateProps {
    open: boolean;
    handleOpen: (open: boolean) => void;
    onClickConfirm: () => void;
    title: string;
    content: React.ReactNode;
    confirmButtonLabel?: ModalButtonsProps["confirmButtonLabel"];
    closeButtonLabel?: ModalButtonsProps["closeButtonLabel"];
}

/**
 *
 * @param open modal 표시 상태
 * @param handleOpen modal 표시 상태 핸들링
 * @param title modal 제목
 * @param message modal 메세지
 * @param onClickConfirm modal 확인 클릭 시 호출
 * @param confirmButtonLabel 확인 버튼 라벨
 * @param closeButtonLabel 닫기 버튼 라벨
 */
export default function ModalTemplate(
    {
        open,
        handleOpen,
        title,
        content,
        onClickConfirm,
        confirmButtonLabel,
        closeButtonLabel,
    }: ModalTemplateProps
){
    const onClickClose = useCallback(() => {
        handleOpen(false);
    }, [handleOpen]);
    const onClickConfirmButton = useCallback(() => {
        onClickConfirm?.();
        onClickClose();
    }, [onClickClose, onClickConfirm]);
    return (
        <CustomDialog
             open={open}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
            <DialogContent>
                <ModalButtons
                    confirmButtonLabel={confirmButtonLabel}
                    closeButtonLabel={closeButtonLabel}
                    onClickConfirmButton={onClickConfirmButton}
                    onClickCloseButton={onClickClose}
                />
            </DialogContent>

        </CustomDialog>
    );
};

const CustomDialog = styled(Dialog)((props) => ({
    "& .MuiPaper-root" : {
        minWidth: 300
    }
}))