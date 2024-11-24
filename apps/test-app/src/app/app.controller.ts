import { Controller, Get } from "@nestjs/common";
import { TestService } from "@hichchi-test/test-pkg-one";

@Controller()
export class AppController {
    constructor(private readonly testService: TestService) {}

    @Get()
    getData(): { message: string } {
        return this.testService.testView();
    }
}
