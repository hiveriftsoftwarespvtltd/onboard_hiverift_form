import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormSubmission } from '../schemas/form-submission.schema';
import { CreateFormSubmissionDto } from '../dto/create-form-submission.dto';
import { UpdateFormSubmissionDto } from '../dto/update-form-submission.dto';
import { EmailService } from './email.service';

@Injectable()
export class FormSubmissionsService {
  constructor(
    @InjectModel(FormSubmission.name)
    private formSubmissionModel: Model<FormSubmission>,
    private emailService: EmailService
  ) {}

  async create(createDto: CreateFormSubmissionDto): Promise<FormSubmission> {
    const createdForm = new this.formSubmissionModel(createDto);
    const savedForm = await createdForm.save();
    
    // Send email notifications
    try {
      await this.emailService.sendAdminNotification(createDto);
      await this.emailService.sendClientConfirmation(createDto);
    } catch (error) {
      console.error('Email notification failed:', error);
      // Don't throw error - form should still be saved even if email fails
    }
    
    return savedForm;
  }

  async findAll(): Promise<FormSubmission[]> {
    return this.formSubmissionModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<FormSubmission> {
    const form = await this.formSubmissionModel.findById(id).exec();
    if (!form) {
      throw new NotFoundException(`Form submission with ID ${id} not found`);
    }
    return form;
  }

  async update(id: string, updateDto: UpdateFormSubmissionDto): Promise<FormSubmission> {
    const updatedForm = await this.formSubmissionModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
    
    if (!updatedForm) {
      throw new NotFoundException(`Form submission with ID ${id} not found`);
    }
    return updatedForm;
  }

  async remove(id: string): Promise<void> {
    const result = await this.formSubmissionModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Form submission with ID ${id} not found`);
    }
  }

  async updateStatus(id: string, status: string): Promise<FormSubmission> {
    return this.update(id, { status });
  }

  async assignDeveloper(id: string, assignedDev: string): Promise<FormSubmission> {
    return this.update(id, { assignedDev });
  }

  async updateProgress(id: string, progress: number): Promise<FormSubmission> {
    return this.update(id, { progress });
  }

  async findByStatus(status: string): Promise<FormSubmission[]> {
    return this.formSubmissionModel.find({ status }).sort({ createdAt: -1 }).exec();
  }

  async getDashboardStats() {
    const total = await this.formSubmissionModel.countDocuments().exec();
    const newCount = await this.formSubmissionModel.countDocuments({ status: 'New' }).exec();
    const inProgressCount = await this.formSubmissionModel.countDocuments({ status: 'In Progress' }).exec();
    const completedCount = await this.formSubmissionModel.countDocuments({ status: 'Completed' }).exec();
    const onHoldCount = await this.formSubmissionModel.countDocuments({ status: 'On Hold' }).exec();
    
    return {
      total,
      new: newCount,
      inProgress: inProgressCount,
      completed: completedCount,
      onHold: onHoldCount
    };
  }
}
