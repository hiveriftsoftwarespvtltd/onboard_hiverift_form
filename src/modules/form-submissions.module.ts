import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormSubmission, FormSubmissionSchema } from '../schemas/form-submission.schema';
import { FormSubmissionsController } from './form-submissions.controller';
import { FormSubmissionsService } from './form-submissions.service';
import { EmailService } from './email.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FormSubmission.name, schema: FormSubmissionSchema }
    ])
  ],
  controllers: [FormSubmissionsController],
  providers: [FormSubmissionsService, EmailService],
  exports: [FormSubmissionsService, EmailService]
})
export class FormSubmissionsModule {}
