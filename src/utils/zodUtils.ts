import { ZodError } from "zod";
import type {ValidationErrors} from "../types/validationErrors.type";

/**
 * ZodError를 필드명-메시지 ValidationErrors로 변환
 * @param error ZodError 객체
 * @returns ValidationErrors
 */
function zodErrorToRecord(error?: ZodError): Record<string, string> {
    const errors: ValidationErrors = {};
    if (!error){
        return errors;
    }

    error.issues.forEach(err => {
        if (err.path.length > 0) {
            const fieldName = err.path[0].toString();
            errors[fieldName] = errors[fieldName]
                ? `${errors[fieldName]}, ${err.message}`
                : err.message;
        }
    });

    return errors;
}

export default {
    zodErrorToRecord
}