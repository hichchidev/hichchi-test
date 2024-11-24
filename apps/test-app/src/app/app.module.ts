import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TestPkgOneModule } from "@hichchi-test/test-pkg-one";

@Module({
    imports: [TestPkgOneModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
