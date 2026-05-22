import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class TeamMember extends Document {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) role: string;
  @Prop() email: string;
  @Prop() phone: string;
  @Prop({ default: 0 }) workload: number;
  @Prop([String]) projects: string[];
  @Prop([String]) skills: string[];
  @Prop() joinDate: string;
  @Prop({ default: 'Active' }) status: string;
}

export const TeamMemberSchema = SchemaFactory.createForClass(TeamMember);
