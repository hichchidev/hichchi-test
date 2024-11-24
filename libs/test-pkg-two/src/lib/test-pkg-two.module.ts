import { Module } from "@nestjs/common";
import { TestGenService } from "./services";

@Module({
    controllers: [],
    providers: [TestGenService],
    exports: [TestGenService],
})
export class TestPkgTwoModule {}
