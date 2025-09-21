import {useCallback, useState} from "react";
import {type ApplicationFormData, ApplicationFormSchema, createInitData} from "../ApplicationForm";
import type {ValidationErrors} from "../../../types/validationErrors.type";
import zodUtils from "../../../utils/zodUtils";


export const useApplicationForm = () => {
    const [data, setData] = useState<ApplicationFormData>(createInitData())
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({})
    const validate = useCallback((inputData: ApplicationFormData) => {
        const safeParse = ApplicationFormSchema.safeParse(inputData);
        setValidationErrors(zodUtils.zodErrorToRecord(safeParse.error))
        return safeParse;
    }, []);

    /**
     * 유효성 검증 에러 초기화
     */
    const clearValidationErrors = useCallback(() => {
        setValidationErrors({})
    }, []);
    /**
     * 값 초기화
     */
    const initData = useCallback(() => {
        setData(createInitData())
        clearValidationErrors()
    }, [clearValidationErrors]);


    return {
        data,
        setData,
        validate,
        validationErrors,
        initData,
    }
}