import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class FormSubmission extends Document {
  // Section 1: Client Information
  @Prop() section1_companyName: string;
  @Prop() section1_contactPerson: string;
  @Prop() section1_designation: string;
  @Prop() section1_mobilePrimary: string;
  @Prop() section1_mobileAlternate: string;
  @Prop() section1_email: string;
  @Prop() section1_whatsapp: string;
  @Prop() section1_address: string;
  @Prop() section1_cityStatePin: string;
  @Prop() section1_country: string;
  @Prop() section1_brandName: string;
  @Prop() section1_businessType: string;
  @Prop() section1_estYear: string;
  @Prop() section1_gstNumber: string;
  @Prop() section1_panNumber: string;
  @Prop() section1_msmeNumber: string;
  @Prop() section1_industry: string;
  @Prop() section1_enquiryDate: string;
  @Prop() section1_source: string;
  @Prop() section1_referredBy: string;

  // Section 2: Website Type
  @Prop([String]) section2_primaryType: string[];
  @Prop() section2_otherType: string;
  @Prop() section2_nature: string;
  @Prop() section2_existingUrl: string;
  @Prop() section2_redesignReason: string;

  // Section 3: Project Details
  @Prop() section3_domainName: string;
  @Prop() section3_domainStatus: string;
  @Prop() section3_registrar: string;
  @Prop() section3_hostingStatus: string;
  @Prop() section3_hostingProvider: string;
  @Prop() section3_primaryGoal: string;
  @Prop() section3_secondaryGoals: string;
  @Prop() section3_targetAudience: string;
  @Prop() section3_geographicMarket: string;
  @Prop() section3_competitorsList: Array<{ url: string; feedback: string }>;
  @Prop() section3_referencesList: Array<{ url: string; reason: string }>;
  @Prop([String]) section3_languages: string[];
  @Prop() section3_otherLanguages: string;
  @Prop() section3_contentWriter: string;
  @Prop() section3_imageProvider: string;
  @Prop() section3_logoStatus: string;
  @Prop() section3_brandColors: string;
  @Prop() section3_fontsPreferred: string;
  @Prop() section3_expectedLaunch: string;
  @Prop() section3_isLaunchFlexible: string;
  @Prop() section3_budget: string;
  @Prop() section3_paymentTerms: string;
  @Prop() section3_paymentTermsCustom: string;

  // Section 4: Sitemap & Pages
  @Prop([String]) section4_standardPages: string[];
  @Prop([String]) section4_ecommercePages: string[];
  @Prop([String]) section4_accountPages: string[];
  @Prop() section4_customPagesList: string[];
  @Prop() section4_totalPageCount: string;

  // Section 5: Design Preferences
  @Prop([String]) section5_designStyle: string[];
  @Prop([String]) section5_layoutPreference: string[];
  @Prop([String]) section5_imageryStyle: string[];
  @Prop() section5_mood: string;
  @Prop() section5_headerType: string;
  @Prop() section5_navStyle: string;
  @Prop() section5_logoPosition: string;
  @Prop([String]) section5_headerElements: string[];
  @Prop() section5_heroType: string;
  @Prop() section5_heroHeadline: string;
  @Prop([String]) section5_ctaButtons: string[];
  @Prop([String]) section5_footerElements: string[];
  @Prop([String]) section5_animations: string[];
  @Prop() section5_accessibility: string;
  @Prop() section5_devicePriority: string;
  @Prop() section5_specificComponents: string;

  // Section 6: Features
  @Prop([String]) section6_communication: string[];
  @Prop([String]) section6_notification: string[];
  @Prop([String]) section6_dynamicContent: string[];
  @Prop([String]) section6_media: string[];
  @Prop([String]) section6_marketing: string[];
  @Prop([String]) section6_engagement: string[];
  @Prop([String]) section6_userSystem: string[];
  @Prop([String]) section6_adminFeatures: string[];
  @Prop([String]) section6_integrations: string[];
  @Prop() section6_crmName: string;
  @Prop() section6_otherIntegrations: string;

  // Section 7A: E-commerce
  @Prop() section7A_productTypes: string;
  @Prop() section7A_productCountLaunch: string;
  @Prop() section7A_productCountYear: string;
  @Prop() section7A_categories: string;
  @Prop([String]) section7A_attributes: string[];
  @Prop([String]) section7A_variableProducts: string[];
  @Prop([String]) section7A_pricingFeatures: string[];
  @Prop([String]) section7A_discountTools: string[];
  @Prop() section7A_taxConfig: string;
  @Prop([String]) section7A_paymentGateways: string[];
  @Prop([String]) section7A_paymentMethods: string[];
  @Prop([String]) section7A_checkoutOptions: string[];
  @Prop([String]) section7A_invoiceType: string[];
  @Prop([String]) section7A_shippingLogic: string[];
  @Prop([String]) section7A_courierIntegration: string[];
  @Prop([String]) section7A_orderManagement: string[];
  @Prop() section7A_returnPolicy: string;
  @Prop([String]) section7A_inventoryLogic: string[];
  @Prop([String]) section7A_adminFeatures: string[];
  @Prop() section7A_multiVendor: string;

  // Section 7B: Hotel
  @Prop() section7B_propertyName: string;
  @Prop() section7B_propertyAddress: string;
  @Prop() section7B_starCategory: string;
  @Prop() section7B_totalRooms: string;
  @Prop() section7B_roomTypeCount: string;
  @Prop() section7B_roomDescriptions: string;
  @Prop([String]) section7B_bookingSystem: string[];
  @Prop() section7B_bookingEngineName: string;
  @Prop([String]) section7B_bookingFeatures: string[];
  @Prop() section7B_pricingStructure: string;
  @Prop([String]) section7B_amenities: string[];
  @Prop() section7B_specialPackages: string;
  @Prop() section7B_photoCount: string;
  @Prop([String]) section7B_galleryFormat: string[];
  @Prop() section7B_videoTour: string;
  @Prop() section7B_reviewsSource: string;

  // Section 7C: Travel
  @Prop() section7C_companyName: string;
  @Prop([String]) section7C_businessType: string[];
  @Prop([String]) section7C_tourTypes: string[];
  @Prop() section7C_destinations: string;
  @Prop() section7C_packageCount: string;
  @Prop() section7C_packageFields: string;
  @Prop([String]) section7C_packageFeatures: string[];
  @Prop([String]) section7C_filterOptions: string[];
  @Prop([String]) section7C_leadType: string[];
  @Prop() section7C_upfrontPayment: string;
  @Prop([String]) section7C_postBooking: string[];
  @Prop([String]) section7C_contentSections: string[];
  @Prop() section7C_loyaltyProgram: string;

  // Section 7D: Clothing
  @Prop() section7D_brandPositioning: string;
  @Prop([String]) section7D_segment: string[];
  @Prop([String]) section7D_style: string[];
  @Prop() section7D_priceSegment: string;
  @Prop() section7D_categories: string;
  @Prop([String]) section7D_variants: string[];
  @Prop([String]) section7D_details: string[];
  @Prop([String]) section7D_specialFeatures: string[];
  @Prop([String]) section7D_sellingModel: string[];
  @Prop([String]) section7D_customOrders: string[];
  @Prop([String]) section7D_returns: string[];
  @Prop() section7D_minOrderQuantity: string;
  @Prop([String]) section7D_socialIntegration: string[];
  @Prop([String]) section7D_influencerPage: string[];

  // Section 7E: Finance
  @Prop() section7E_firmName: string;
  @Prop([String]) section7E_firmType: string[];
  @Prop() section7E_partnerCount: string;
  @Prop() section7E_teamSize: string;
  @Prop() section7E_estYear: string;
  @Prop() section7E_achievements: string;
  @Prop() section7E_services: string;
  @Prop() section7E_servicesList: Array<{ name: string; description: string }>;
  @Prop() section7E_pageFormat: string;
  @Prop([String]) section7E_leadGenType: string[];
  @Prop([String]) section7E_clientPortal: string[];
  @Prop() section7E_portalAuth: string;
  @Prop([String]) section7E_docTypes: string[];
  @Prop([String]) section7E_trustElements: string[];
  @Prop([String]) section7E_tools: string[];
  @Prop([String]) section7E_resources: string[];

  // Section 7F: Portfolio
  @Prop() section7F_fullName: string;
  @Prop() section7F_title: string;
  @Prop([String]) section7F_portfolioType: string[];
  @Prop() section7F_experienceYears: string;
  @Prop() section7F_projectCount: string;
  @Prop() section7F_projectsList: Array<{ title: string; client: string; details: string; link: string }>;
  @Prop([String]) section7F_displayType: string[];
  @Prop([String]) section7F_categories: string[];
  @Prop() section7F_skills: string;
  @Prop() section7F_servicesOffered: string;
  @Prop() section7F_pricingModel: string;
  @Prop([String]) section7F_credentials: string[];
  @Prop([String]) section7F_ctaType: string[];
  @Prop() section7F_socialProfiles: string;

  // Section 7G: Restaurant
  @Prop() section7G_restaurantName: string;
  @Prop() section7G_cuisineType: string;
  @Prop() section7G_outletCount: string;
  @Prop() section7G_capacity: string;
  @Prop([String]) section7G_serviceType: string[];
  @Prop([String]) section7G_menuType: string[];
  @Prop() section7G_categoryCount: string;
  @Prop([String]) section7G_orderingSystem: string[];
  @Prop([String]) section7G_reservationType: string[];
  @Prop([String]) section7G_contentSections: string[];

  // Section 7H: Real Estate
  @Prop([String]) section7H_businessType: string[];
  @Prop() section7H_propertyTypes: string;
  @Prop() section7H_launchCount: string;
  @Prop() section7H_detailFields: string;
  @Prop([String]) section7H_filterOptions: string[];
  @Prop([String]) section7H_listingFeatures: string[];
  @Prop([String]) section7H_leadCapture: string[];
  @Prop([String]) section7H_adminPortal: string[];
  @Prop() section7H_mlsIntegration: string;

  // Section 7I: Education
  @Prop([String]) section7I_institutionType: string[];
  @Prop() section7I_subjects: string;
  @Prop() section7I_targetStudents: string;
  @Prop([String]) section7I_lmsFeatures: string[];
  @Prop([String]) section7I_enrollmentType: string[];
  @Prop([String]) section7I_paymentType: string[];
  @Prop([String]) section7I_offlineFeatures: string[];
  @Prop() section7I_loginNeeded: string;

  // Section 8: Technical
  @Prop() section8_cmsFramework: string;
  @Prop() section8_frontend: string;
  @Prop() section8_backend: string;
  @Prop() section8_database: string;
  @Prop() section8_versionControl: string;
  @Prop() section8_deployment: string;
  @Prop() section8_targetScore: string;
  @Prop() section8_expectedTraffic: string;
  @Prop() section8_sslCert: string;
  @Prop() section8_waf: string;
  @Prop() section8_captcha: string;
  @Prop() section8_compliance: string;
  @Prop() section8_urlStructure: string;
  @Prop() section8_schemaTypes: string;
  @Prop() section8_browsers: string;
  @Prop() section8_devices: string;
  @Prop() section8_uat: string;
  @Prop() section8_accessibilityTesting: string;

  // Section 10: Maintenance
  @Prop([String]) section10_amcType: string[];
  @Prop([String]) section10_amcCoverage: string[];
  @Prop() section10_amcCost: string;
  @Prop([String]) section10_trainingType: string[];
  @Prop([String]) section10_trainingFormat: string[];
  @Prop() section10_teamMemberCount: string;
  @Prop() section10_phase2Features: string;
  @Prop([String]) section10_futureIntegrations: string[];
  @Prop() section10_scalabilityReqs: string;

  // Section 11: Milestones
  @Prop() section11_milestones: Array<{
    id: number;
    task: string;
    targetDate: string;
    actualDate: string;
    status: string;
    signoff: boolean;
  }>;

  // Section 12: Declaration
  @Prop([String]) section12_clientTerms: string[];
  @Prop([String]) section12_devTerms: string[];
  @Prop() section12_clientName: string;
  @Prop() section12_clientDesignation: string;
  @Prop() section12_signDate: string;
  @Prop() section12_clientSignatureCanvas: string;
  @Prop() section12_companyStampFile: string;
  @Prop() section12_agencyName: string;
  @Prop() section12_agencyManager: string;
  @Prop() section12_agencySignDate: string;
  @Prop() section12_agencySignatureCanvas: string;

  // Admin Fields
  @Prop({ default: 'New' }) status: string;
  @Prop() assignedDev: string; // Single developer (backward compatibility)
  @Prop({ type: [String], default: [] }) assignedDevs: string[]; // Multiple developers
  @Prop() progress: number;
  @Prop() adminNotes: string;
}

export const FormSubmissionSchema = SchemaFactory.createForClass(FormSubmission);
