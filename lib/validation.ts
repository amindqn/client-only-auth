/**
 * Valid Iranian mobile numbers (one of):
 * - 09XXXXXXXXX
 * - +989XXXXXXXXX
 * - 00989XXXXXXXXX
 */
const IR_MOBILE_REGEX = /^(?:09\d{9}|\+989\d{9}|00989\d{9})$/;

export function isValidIranianMobile(input: string): boolean {
    return IR_MOBILE_REGEX.test(input.trim());
}
