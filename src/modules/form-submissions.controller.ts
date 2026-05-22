import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FormSubmissionsService } from './form-submissions.service';
import { CreateFormSubmissionDto } from '../dto/create-form-submission.dto';
import { UpdateFormSubmissionDto } from '../dto/update-form-submission.dto';

@Controller('form-submissions')
export class FormSubmissionsController {
  constructor(private readonly formSubmissionsService: FormSubmissionsService) {}

  @Post()
  create(@Body() createFormSubmissionDto: CreateFormSubmissionDto) {
    return this.formSubmissionsService.create(createFormSubmissionDto);
  }

  @Get()
  findAll(@Query('status') status?: string) {
    if (status) {
      return this.formSubmissionsService.findByStatus(status);
    }
    return this.formSubmissionsService.findAll();
  }

  @Get('stats')
  getDashboardStats() {
    return this.formSubmissionsService.getDashboardStats();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formSubmissionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormSubmissionDto: UpdateFormSubmissionDto) {
    return this.formSubmissionsService.update(id, updateFormSubmissionDto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.formSubmissionsService.updateStatus(id, status);
  }

  @Patch(':id/assign')
  assignDeveloper(@Param('id') id: string, @Body('assignedDev') assignedDev: string) {
    return this.formSubmissionsService.assignDeveloper(id, assignedDev);
  }

  @Patch(':id/progress')
  updateProgress(@Param('id') id: string, @Body('progress') progress: number) {
    return this.formSubmissionsService.updateProgress(id, progress);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedProject = await this.formSubmissionsService.remove(id);
    return {
      message: 'Project deleted successfully',
      deletedProject
    };
  }
}
