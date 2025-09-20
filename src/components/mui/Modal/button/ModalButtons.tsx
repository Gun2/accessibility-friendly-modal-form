import React from 'react';
import {Stack} from "@mui/material";
import ConfirmButton from "./ConfirmButton";
import CloseButton from "./CloseButton";

export interface ModalButtonsProps {
    confirmButtonLabel?: React.ReactNode;
    closeButtonLabel?: React.ReactNode;
    onClickConfirmButton: () => void;
    onClickCloseButton: () => void;
}

/**
 * modal의 버튼 요소
 * @param onClickCancelButton 닫기 버튼 클릭
 * @param onClickConfirmButton 확인 버튼 클릭
 * @param confirmButtonLabel 확인 버튼 라벨
 * @param cancelButtonLabel 닫기 버튼 라벨
 * @constructor
 */
export default function ModalButtons(
    {
        confirmButtonLabel = "확인",
        closeButtonLabel = "닫기",
        onClickCloseButton,
        onClickConfirmButton,
    }: ModalButtonsProps
) {
    return (
        <Stack direction="row" alignItems="center" justifyContent={"flex-end"} gap={1}>
            <CloseButton label={closeButtonLabel} onClick={onClickCloseButton} />
            <ConfirmButton label={confirmButtonLabel} onClick={onClickConfirmButton} />
        </Stack>
    )
}
