import { IAuth, authorization } from "../api"
import { IFormInput } from "../components/Login";

export const login = async (data: any | IFormInput): Promise<IAuth> => {
    if (data.email.length > 0 && data.password.length > 0) {
        const auth: IAuth = await authorization(data.email, data.password)
        return auth
    }
    
    return {'id':'','token':''}
};
