import { Address } from "src/app/modules/authentication/models/address";

export class User {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth:number;
    gender: string;
    consent: string;
    email: string;
    password: string;
    address: Address;
}
