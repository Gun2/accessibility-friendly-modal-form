import { useEffect } from "react";

/**
 * Esc 키 입력을 감지하는 커스텀 훅
 * @param onEscape Esc 키 입력 시 호출되는 콜백 함수
 */
export function useEscapeKey(onEscape: () => void) {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onEscape();
            }
        };

        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onEscape]);
}
