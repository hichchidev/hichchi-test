// noinspection JSUnusedGlobalSymbols

import { Injectable } from "@nestjs/common";
import { TestGenService } from "@hichchi-test/test-pkg-two";

@Injectable()
export class TestService {
    constructor(private readonly testGenService: TestGenService) {}

    testView(): { message: string } {
        // Hello
        return { message: this.testGenService.testGen() };
    }
}
