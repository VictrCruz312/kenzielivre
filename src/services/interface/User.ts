export interface IUserCliente {
    name?: string,
    lastname?: string,
    email?:string,
    imageLogo?: string,
    password?:string,
    auth?:string,
}

export interface IUserVendedor {
    name?: string,
    lastname?: string,
    email?: string,
    password?: string,
    imageLogo?: string,
    auth?: string,
}

export type IcreateUser = IUserVendedor | IUserCliente

export interface IUserCredentials {
    email: string,
    password: string,
}

export interface IUserClienteReturn extends IUserCliente {
    id:number
}

export interface IUserVendedorReturn extends IUserVendedor {
    id:number
}

export type IUserReturn = IUserVendedorReturn | IUserClienteReturn

export interface IReturnData {
    accessToken: string,
    user: IUserReturn,
}