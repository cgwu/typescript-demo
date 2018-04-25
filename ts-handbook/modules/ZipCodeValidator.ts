import { StringValidator } from './Validation';

export const numberRegexp = /^[0-9]+$/;

//允许一个默认导出 export default.
export default class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
