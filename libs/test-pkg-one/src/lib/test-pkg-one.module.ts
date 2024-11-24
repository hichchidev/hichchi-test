import { Module } from "@nestjs/common";
import { TestService } from "./services";
import { TestPkgTwoModule } from "@hichchi-test/test-pkg-two";

@Module({
    imports: [TestPkgTwoModule],
    controllers: [],
    providers: [TestService],
    exports: [TestService],
})
export class TestPkgOneModule {}
