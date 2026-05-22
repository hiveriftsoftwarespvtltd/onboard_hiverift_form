import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: any;
  private readonly logger = new Logger(EmailService.name);

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: parseInt(this.configService.get<string>('MAIL_PORT') || '587'),
      secure: this.configService.get<string>('MAIL_SECURE') === 'true',
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    });
  }

  async sendAdminNotification(formData: any) {
    const adminEmail = this.configService.get<string>('ADMIN_EMAIL');
    const clientName = formData.section1_contactPerson || 'Unknown';
    const companyName = formData.section1_companyName || 'Unknown';
    const clientEmail = formData.section1_email || '';

    const mailOptions = {
      from: this.configService.get<string>('MAIL_FROM'),
      to: adminEmail,
      cc: clientEmail || undefined,
      subject: `🎉 New Form Submission - ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">A new client requirement form has been submitted</p>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-top: 0;">Client Information</h2>
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
              <tr style="background: #f3f4f6;">
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Client Name</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${clientName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Company</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${companyName}</td>
              </tr>
              <tr style="background: #f3f4f6;">
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${clientEmail || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Mobile</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${formData.section1_mobilePrimary || 'N/A'}</td>
              </tr>
              <tr style="background: #f3f4f6;">
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Industry</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${formData.section1_industry || 'N/A'}</td>
              </tr>
            </table>

            <h2 style="color: #1f2937; margin-top: 30px;">Project Details</h2>
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
              <tr style="background: #f3f4f6;">
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Website Type</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${(formData.section2_primaryType || []).join(', ') || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Budget</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${formData.section3_budget || 'N/A'}</td>
              </tr>
              <tr style="background: #f3f4f6;">
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Expected Launch</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${formData.section3_expectedLaunch || 'N/A'}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #667eea;">
              <p style="margin: 0; color: #6b7280;">Login to admin panel to view complete details and manage this project.</p>
            </div>
          </div>

          <div style="background: #1f2937; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
            <p style="margin: 0;">This is an automated notification from your Agency Management System</p>
          </div>
        </div>
      `,
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      this.logger.log(`✅ Admin notification sent to ${adminEmail}`);
      return result;
    } catch (error) {
      this.logger.error(`❌ Failed to send admin notification: ${error.message}`);
      throw error;
    }
  }

  async sendClientConfirmation(formData: any) {
    const clientEmail = formData.section1_email;
    if (!clientEmail) {
      this.logger.warn('No client email provided, skipping confirmation');
      return;
    }

    const clientName = formData.section1_contactPerson || 'Valued Client';
    const companyName = formData.section1_companyName || 'Your Company';

    const mailOptions = {
      from: this.configService.get<string>('MAIL_FROM'),
      to: clientEmail,
      subject: `✅ Thank You - Your Website Requirements Have Been Received`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${clientName}!</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">Your website requirements have been successfully submitted</p>
          </div>
          
          <div style="padding: 30px; background: #f9fafb;">
            <h2 style="color: #1f2937; margin-top: 0;">What Happens Next?</h2>
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <ol style="margin: 0; padding-left: 20px; color: #4b5563; line-height: 2;">
                <li>Our team will review your requirements within 24 hours</li>
                <li>We'll prepare a detailed proposal for your project</li>
                <li>You'll receive a follow-up email with next steps</li>
                <li>A dedicated project manager will be assigned to your project</li>
              </ol>
            </div>

            <h2 style="color: #1f2937;">Your Submission Summary</h2>
            <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden;">
              <tr style="background: #f3f4f6;">
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Company</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${companyName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Project Type</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${(formData.section2_primaryType || []).join(', ') || 'Website Development'}</td>
              </tr>
              <tr style="background: #f3f4f6;">
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Submitted On</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</td>
              </tr>
            </table>

            <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e;"><strong>Need immediate assistance?</strong><br>Contact us at ${this.configService.get<string>('MAIL_USER')} or call us directly.</p>
            </div>
          </div>

          <div style="background: #1f2937; padding: 20px; text-align: center; color: #9ca3af; font-size: 12px;">
            <p style="margin: 0;">Thank you for choosing our services. We look forward to working with you!</p>
          </div>
        </div>
      `,
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      this.logger.log(`✅ Client confirmation sent to ${clientEmail}`);
      return result;
    } catch (error) {
      this.logger.error(`❌ Failed to send client confirmation: ${error.message}`);
      throw error;
    }
  }
}
