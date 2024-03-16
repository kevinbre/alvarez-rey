type GetLocalStorageResult<T> = T | null;
interface IUser {
    apellido: string;
    aplicacion: number;
    codiusuario: string;
    idUsuario: number;
    nombre: string;
    token: string;
}

export function getLocalStorageUser<T>(key: string): GetLocalStorageResult<T> {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(data);
    }

    return null;
}

function getheaders() {
    const user = getLocalStorageUser<IUser>("userData");

    return {
        ["x-access-token"]: user?.token || "",
        ["codiusuario"]: user?.codiusuario || "",
    };
}

export {getheaders};
