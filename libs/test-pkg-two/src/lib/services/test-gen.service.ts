// noinspection JSUnusedGlobalSymbols

import { Injectable } from "@nestjs/common";

@Injectable()
export class TestGenService {
    testGen(): string {
        return "test";
    }
}
