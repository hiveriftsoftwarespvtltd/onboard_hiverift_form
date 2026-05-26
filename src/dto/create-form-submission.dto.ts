export class CreateFormSubmissionDto {
  // Section 1
  section1_companyName?: string;
  section1_contactPerson?: string;
  section1_designation?: string;
  section1_mobilePrimary?: string;
  section1_mobileAlternate?: string;
  section1_email?: string;
  section1_whatsapp?: string;
  section1_address?: string;
  section1_cityStatePin?: string;
  section1_country?: string;
  section1_brandName?: string;
  section1_businessType?: string;
  section1_estYear?: string;
  section1_gstNumber?: string;
  section1_panNumber?: string;
  section1_msmeNumber?: string;
  section1_industry?: string;
  section1_enquiryDate?: string;
  section1_source?: string;
  section1_referredBy?: string;

  // Section 2
  section2_primaryType?: string[];
  section2_otherType?: string;
  section2_nature?: string;
  section2_existingUrl?: string;
  section2_redesignReason?: string;

  // Section 3
  section3_domainName?: string;
  section3_domainStatus?: string;
  section3_registrar?: string;
  section3_hostingStatus?: string;
  section3_hostingProvider?: string;
  section3_primaryGoal?: string;
  section3_secondaryGoals?: string;
  section3_targetAudience?: string;
  section3_geographicMarket?: string;
  section3_competitorsList?: Array<{ url: string; feedback: string }>;
  section3_referencesList?: Array<{ url: string; reason: string }>;
  section3_languages?: string[];
  section3_otherLanguages?: string;
  section3_contentWriter?: string;
  section3_imageProvider?: string;
  section3_logoStatus?: string;
  section3_logoFile?: any;
  section3_brandGuideFile?: any;
  section3_brandColors?: string;
  section3_fontsPreferred?: string;
  section3_expectedLaunch?: string;
  section3_isLaunchFlexible?: string;
  section3_budget?: string;
  section3_paymentTerms?: string;
  section3_paymentTermsCustom?: string;

  // Section 4
  section4_standardPages?: string[];
  section4_ecommercePages?: string[];
  section4_accountPages?: string[];
  section4_customPagesList?: string[];
  section4_totalPageCount?: string;

  // Section 5
  section5_designStyle?: string[];
  section5_layoutPreference?: string[];
  section5_imageryStyle?: string[];
  section5_mood?: string;
  section5_headerType?: string;
  section5_navStyle?: string;
  section5_logoPosition?: string;
  section5_headerElements?: string[];
  section5_heroType?: string;
  section5_heroHeadline?: string;
  section5_ctaButtons?: string[];
  section5_footerElements?: string[];
  section5_animations?: string[];
  section5_accessibility?: string;
  section5_devicePriority?: string;
  section5_specificComponents?: string;

  // Section 6
  section6_communication?: string[];
  section6_notification?: string[];
  section6_dynamicContent?: string[];
  section6_media?: string[];
  section6_marketing?: string[];
  section6_engagement?: string[];
  section6_userSystem?: string[];
  section6_adminFeatures?: string[];
  section6_integrations?: string[];
  section6_crmName?: string;
  section6_otherIntegrations?: string;

  // Section 7A
  section7A_productTypes?: string;
  section7A_productCountLaunch?: string;
  section7A_productCountYear?: string;
  section7A_categories?: string;
  section7A_attributes?: string[];
  section7A_variableProducts?: string[];
  section7A_pricingFeatures?: string[];
  section7A_discountTools?: string[];
  section7A_taxConfig?: string;
  section7A_paymentGateways?: string[];
  section7A_paymentMethods?: string[];
  section7A_checkoutOptions?: string[];
  section7A_invoiceType?: string[];
  section7A_shippingLogic?: string[];
  section7A_courierIntegration?: string[];
  section7A_orderManagement?: string[];
  section7A_returnPolicy?: string;
  section7A_inventoryLogic?: string[];
  section7A_adminFeatures?: string[];
  section7A_multiVendor?: string;

  // Section 7B
  section7B_propertyName?: string;
  section7B_propertyAddress?: string;
  section7B_starCategory?: string;
  section7B_totalRooms?: string;
  section7B_roomTypeCount?: string;
  section7B_roomDescriptions?: string;
  section7B_bookingSystem?: string[];
  section7B_bookingEngineName?: string;
  section7B_bookingFeatures?: string[];
  section7B_pricingStructure?: string;
  section7B_amenities?: string[];
  section7B_specialPackages?: string;
  section7B_photoCount?: string;
  section7B_galleryFormat?: string[];
  section7B_videoTour?: string;
  section7B_reviewsSource?: string;

  // Section 7C
  section7C_companyName?: string;
  section7C_businessType?: string[];
  section7C_tourTypes?: string[];
  section7C_destinations?: string;
  section7C_packageCount?: string;
  section7C_packageFields?: string;
  section7C_packageFeatures?: string[];
  section7C_filterOptions?: string[];
  section7C_leadType?: string[];
  section7C_upfrontPayment?: string;
  section7C_postBooking?: string[];
  section7C_contentSections?: string[];
  section7C_loyaltyProgram?: string;

  // Section 7D
  section7D_brandPositioning?: string;
  section7D_segment?: string[];
  section7D_style?: string[];
  section7D_priceSegment?: string;
  section7D_categories?: string;
  section7D_variants?: string[];
  section7D_details?: string[];
  section7D_specialFeatures?: string[];
  section7D_sellingModel?: string[];
  section7D_customOrders?: string[];
  section7D_returns?: string[];
  section7D_minOrderQuantity?: string;
  section7D_socialIntegration?: string[];
  section7D_influencerPage?: string[];

  // Section 7E
  section7E_firmName?: string;
  section7E_firmType?: string[];
  section7E_partnerCount?: string;
  section7E_teamSize?: string;
  section7E_estYear?: string;
  section7E_achievements?: string;
  section7E_services?: string;
  section7E_servicesList?: Array<{ name: string; description: string }>;
  section7E_pageFormat?: string;
  section7E_leadGenType?: string[];
  section7E_clientPortal?: string[];
  section7E_portalAuth?: string;
  section7E_docTypes?: string[];
  section7E_trustElements?: string[];
  section7E_tools?: string[];
  section7E_resources?: string[];

  // Section 7F
  section7F_fullName?: string;
  section7F_title?: string;
  section7F_portfolioType?: string[];
  section7F_experienceYears?: string;
  section7F_projectCount?: string;
  section7F_projectsList?: Array<{ title: string; client: string; details: string; link: string }>;
  section7F_displayType?: string[];
  section7F_categories?: string[];
  section7F_skills?: string;
  section7F_servicesOffered?: string;
  section7F_pricingModel?: string;
  section7F_credentials?: string[];
  section7F_ctaType?: string[];
  section7F_socialProfiles?: string;

  // Section 7G
  section7G_restaurantName?: string;
  section7G_cuisineType?: string;
  section7G_outletCount?: string;
  section7G_capacity?: string;
  section7G_serviceType?: string[];
  section7G_menuType?: string[];
  section7G_categoryCount?: string;
  section7G_orderingSystem?: string[];
  section7G_reservationType?: string[];
  section7G_contentSections?: string[];

  // Section 7H
  section7H_businessType?: string[];
  section7H_propertyTypes?: string;
  section7H_launchCount?: string;
  section7H_detailFields?: string;
  section7H_filterOptions?: string[];
  section7H_listingFeatures?: string[];
  section7H_leadCapture?: string[];
  section7H_adminPortal?: string[];
  section7H_mlsIntegration?: string;

  // Section 7I
  section7I_institutionType?: string[];
  section7I_subjects?: string;
  section7I_targetStudents?: string;
  section7I_lmsFeatures?: string[];
  section7I_enrollmentType?: string[];
  section7I_paymentType?: string[];
  section7I_offlineFeatures?: string[];
  section7I_loginNeeded?: string;

  // Section 8
  section8_cmsFramework?: string;
  section8_frontend?: string;
  section8_backend?: string;
  section8_database?: string;
  section8_versionControl?: string;
  section8_deployment?: string;
  section8_targetScore?: string;
  section8_expectedTraffic?: string;
  section8_sslCert?: string;
  section8_waf?: string;
  section8_captcha?: string;
  section8_compliance?: string;
  section8_urlStructure?: string;
  section8_schemaTypes?: string;
  section8_browsers?: string;
  section8_devices?: string;
  section8_uat?: string;
  section8_accessibilityTesting?: string;

  // Section 10
  section10_amcType?: string[];
  section10_amcCoverage?: string[];
  section10_amcCost?: string;
  section10_trainingType?: string[];
  section10_trainingFormat?: string[];
  section10_teamMemberCount?: string;
  section10_phase2Features?: string;
  section10_futureIntegrations?: string[];
  section10_scalabilityReqs?: string;

  // Section 11
  section11_milestones?: Array<{
    id: number;
    task: string;
    targetDate: string;
    actualDate: string;
    status: string;
    signoff: boolean;
  }>;

  // Section 12
  section12_clientTerms?: string[];
  section12_devTerms?: string[];
  section12_clientName?: string;
  section12_clientDesignation?: string;
  section12_signDate?: string;
  section12_clientSignatureFile?: any;
  section12_clientSignatureCanvas?: string;
  section12_companyStampFile?: string;
  section12_agencyName?: string;
  section12_agencyManager?: string;
  section12_agencySignDate?: string;
  section12_agencySignatureCanvas?: string;

  // Admin fields
  status?: string;
  assignedDev?: string;
  progress?: number;
  adminNotes?: string;
}
