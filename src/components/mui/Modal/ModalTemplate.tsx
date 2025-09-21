import React, {useCallback} from 'react';
import {Dialog, DialogContent, DialogTitle, Fade, FormHelperText, styled} from "@mui/material";
import ModalButtons, {type ModalButtonsProps} from "./button/ModalButtons";
import {useEscapeKey} from "../../../hooks/useEscapeKey";

export interface ModalTemplateProps {
    open: boolean;
    handleOpen: (open: boolean) => void;
    //확인 버튼 클릭 시 수행 함수, 반환값이 false일 경우 로직을 중단시킴
    onClickConfirm: () => undefined | void | boolean;
    onClickCancel: () => void;
    title: string;
    //설명
    description?: string;
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
 * @param description modal 설명
 * @param onClickConfirm modal 확인 클릭 시 호출
 * @param onClickCancel modal 취소 클릭 시 호출
 * @param confirmButtonLabel 확인 버튼 라벨
 * @param closeButtonLabel 닫기 버튼 라벨
 */
export default function ModalTemplate(
    {
        open,
        handleOpen,
        title,
        content,
        description,
        onClickConfirm,
        onClickCancel,
        confirmButtonLabel,
        closeButtonLabel,
    }: ModalTemplateProps
){
    const onClickClose = useCallback(() => {
        handleOpen(false);
        onClickCancel?.()
    }, [handleOpen, onClickCancel]);
    const onClickConfirmButton = useCallback(() => {
        const result = onClickConfirm?.();
        if (result !== false) {
            onClickClose();
        }
    }, [onClickClose, onClickConfirm]);
    useEscapeKey(() => {
        onClickClose();
    })

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return (
        <CustomDialog
            TransitionComponent={prefersReducedMotion ? React.Fragment : Fade}
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            disableEscapeKeyDown={true}
            open={open}
            onClose={onClickClose}
        >
            <DialogTitle id={"modal-title"} ref={element => element?.focus()}>{title}</DialogTitle>
            {
                description && (
                    <DialogContent>
                        <Description id="modal-desc">
                            {description}
                        </Description>
                    </DialogContent>
                )
            }
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


/**
 * 설명 문구
 * @constructor
 */

const Description = styled(FormHelperText)({})