import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncounterModule } from './encounter/encounter.module';

@Module({
  imports: [TypeOrmModule.forRoot(), EncounterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
