import { toastError } from '@/utils/toastHandler';
import { type HttpApiException } from '@/api';

export interface ErrorResponse {
  message: string;
  details?: string;
}

export function handleError(response: HttpApiException) {
  handleErrorMessage({
    message: response.name,
    details: response.message
  });
}

export function handleErrorMessage(message: ErrorResponse) {
  toastError({
    title: message.message,
    body: message.details ?? ''
  });
}
