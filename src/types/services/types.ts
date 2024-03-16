export interface IDataService {
    url: string;
    params?: {[key: string]: any};
}

export interface IGeneralResponse<Q> {
    body: Q;
    error: boolean;
    status: number;
}

export interface IDefaultResponse {
    Id: number;
    Message: string;
}

export type IGenericResponse<T = undefined> = T extends undefined ? IDefaultResponse : T;

export type Methods = "get" | "post" | "put" | "delete" | "patch";
