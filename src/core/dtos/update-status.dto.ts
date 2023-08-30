import { IsNotEmpty } from "class-validator";
import { toErrString } from "../converters";
import { Errors } from "../responses";

export class UpdateStatusDto {
    @IsNotEmpty(toErrString(Errors.E_400_EMPTY_STATUS))
    status: string;
}
