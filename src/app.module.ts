import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncounterModule } from './encounter/encounter.module';
import { WyrmService } from './wyrm/wyrm.service';

@Module({
  imports: [TypeOrmModule.forRoot(), EncounterModule],
  controllers: [AppController],
  providers: [AppService, WyrmService],
})
export class AppModule {}
