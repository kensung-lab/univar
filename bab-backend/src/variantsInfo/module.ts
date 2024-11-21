import { Module } from '@nestjs/common';
import { UtilsModule } from 'src/utils';
import { ApplicationModule } from 'src/applicationInfo';
import { VariantService } from './services';
import {
  GeneDBController,
  SampleController,
  VariantController,
} from './controllers';
import { AgendaModule } from 'src/agenda';
import { S3Module } from 'src/s3linker';

@Module({
  imports: [UtilsModule, ApplicationModule, AgendaModule, S3Module],
  controllers: [VariantController, SampleController, GeneDBController],
  exports: [VariantService],
  providers: [VariantService],
})
export class VariantInfoModule {}
