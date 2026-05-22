import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeamMember } from '../schemas/team-member.schema';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(TeamMember.name) private teamMemberModel: Model<TeamMember>,
  ) {}

  async create(createData: any): Promise<TeamMember> {
    const member = new this.teamMemberModel(createData);
    return member.save();
  }

  async findAll(): Promise<TeamMember[]> {
    return this.teamMemberModel.find().exec();
  }

  async findOne(id: string): Promise<TeamMember> {
    const member = await this.teamMemberModel.findById(id).exec();
    if (!member) throw new NotFoundException('Team member not found');
    return member;
  }

  async update(id: string, updateData: any): Promise<TeamMember> {
    const member = await this.teamMemberModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    if (!member) throw new NotFoundException('Team member not found');
    return member;
  }

  async remove(id: string): Promise<TeamMember> {
    const member = await this.teamMemberModel.findByIdAndDelete(id).exec();
    if (!member) throw new NotFoundException('Team member not found');
    return member;
  }
}
