/* NAWAH Verify - consolidated application script. */

/* ===== i18n.js ===== */
/* ==========================================================================
   NAWAH Verify â€” i18n dictionary and language helpers
   ========================================================================== */
const NAWAH_I18N = {
  en: {
    dir: 'ltr', lang: 'en',
    nav_home: 'Home', nav_verify: 'Verify Certificate', nav_search: 'Search Certificate',
    nav_admin: 'Admin Dashboard', nav_login: 'Admin Login',
    academy_name: 'NAWAH Medical Academy', system_name: 'NAWAH Verify',
    hero_title: 'Certificate Verification System',
    hero_subtitle: 'Verify the authenticity of certificates issued by NAWAH Medical Academy.',
    cert_number_label: 'Enter Certificate Number',
    cert_number_placeholder: 'e.g. NMH-2026-000001',
    btn_verify: 'Verify Certificate',
    features_title: 'Why NAWAH Verify',
    features_subtitle: 'A secure, fast and trusted way to confirm the authenticity of any certificate issued by our academy.',
    f1_title: 'Instant Verification', f1_desc: 'Get real-time validation of any certificate number in seconds.',
    f2_title: 'QR Code Verification', f2_desc: 'Scan the QR code printed on the certificate to verify it instantly.',
    f3_title: 'Secure Records', f3_desc: 'All certificate data is securely stored and protected against tampering.',
    f4_title: 'Bilingual Platform', f4_desc: 'Fully available in Arabic and English for all users.',
    steps_title: 'How Verification Works', steps_subtitle: 'Three simple steps to verify any certificate.',
    step1_title: 'Enter or Scan', step1_desc: 'Type the certificate number or scan its QR code.',
    step2_title: 'We Check Our Records', step2_desc: 'Our system searches the secure certificate database instantly.',
    step3_title: 'Get Verified Result', step3_desc: 'View the official verification result with full certificate details.',
    footer_about: 'NAWAH Medical Academy is committed to delivering world-class medical training and issuing verifiable, trusted certificates.',
    footer_links: 'Quick Links', footer_contact: 'Contact',
    footer_rights: 'All rights reserved.',
    search_page_title: 'Search Certificate', search_page_subtitle: 'Search by certificate number or student name.',
    tab_by_number: 'By Certificate Number', tab_by_name: 'By Student Name',
    search_placeholder_number: 'Enter certificate number...', search_placeholder_name: 'Enter student name...',
    btn_search: 'Search',
    no_results_title: 'No results found', no_results_desc: 'Try a different certificate number or student name.',
    view_certificate: 'View Certificate',
    verify_page_title: 'Verify Certificate', verify_page_subtitle: 'Enter the certificate number to check its authenticity.',
    cert_verified: 'Certificate Verified', cert_notfound: 'Certificate Not Found', cert_revoked: 'Certificate Revoked', cert_expired: 'Certificate Expired',
    cert_notfound_desc: 'This certificate is not available in our records.',
    cert_revoked_desc: 'This certificate has been revoked by NAWAH Medical Academy.',
    cert_expired_desc: 'This certificate has expired and is no longer valid.',
    revoke_reason_label: 'Revocation Reason',
    lbl_organization: 'Organization', lbl_student: 'Student Full Name', lbl_cert_number: 'Certificate Number',
    lbl_course: 'Course Name', lbl_hours: 'Training Hours', lbl_instructor: 'Instructor',
    lbl_issue_date: 'Issue Date', lbl_expiry_date: 'Expiry Date', lbl_status: 'Certificate Status',
    lbl_verify_date: 'Verification Date', lbl_qr: 'QR Verification',
    status_active: 'Active', status_revoked: 'Revoked', status_expired: 'Expired',
    verified_badge: 'VERIFIED', official_note: 'This certificate has been officially issued and verified by NAWAH Medical Academy.',
    btn_print: 'Print', btn_new_search: 'Verify Another Certificate', btn_back_home: 'Back to Home',
    scan_note: 'Scan to verify online',
    login_title: 'Admin Login', login_subtitle: 'Sign in to manage certificates and settings.',
    lbl_username: 'Username', lbl_password: 'Password', btn_login: 'Login',
    login_error: 'Invalid username or password.',
    demo_creds: 'Demo accounts â€” Administrator: admin / Nawah@2026 Â· Instructor: instructor / Instr@2026 Â· Viewer: viewer / View@2026',
    sd_dashboard: 'Dashboard', sd_certificates: 'Certificates', sd_students: 'Students', sd_courses: 'Courses',
    sd_logs: 'Verification Logs', sd_settings: 'Settings', sd_logout: 'Logout', sd_backsite: 'View Public Site',
    dash_title: 'Dashboard', dash_subtitle: 'Overview of certificate verification activity.',
    stat_total: 'Total Certificates', stat_active: 'Active Certificates', stat_revoked: 'Revoked Certificates', stat_month: 'Issued This Month',
    recent_activity: 'Recent Verification Activity',
    col_cert_number: 'Certificate #', col_student: 'Student Name', col_course: 'Course', col_instructor: 'Instructor',
    col_issue_date: 'Issue Date', col_status: 'Status', col_actions: 'Actions', col_result: 'Result', col_date: 'Date',
    col_browser: 'Browser', col_device: 'Device', col_country: 'Country',
    certs_title: 'Certificates Management', certs_subtitle: 'Add, edit, revoke and manage issued certificates.',
    btn_add_cert: 'Add Certificate', btn_export_pdf: 'Download PDF', btn_qr: 'QR Code',
    modal_add_cert: 'Add New Certificate', modal_edit_cert: 'Edit Certificate',
    lbl_student_name: 'Student Name', lbl_notes: 'Notes', lbl_image: 'Certificate Image URL (Optional)',
    btn_save: 'Save', btn_cancel: 'Cancel', btn_close: 'Close',
    confirm_delete: 'Are you sure you want to delete this certificate?',
    confirm_revoke: 'Enter the reason for revoking this certificate:',
    toast_saved: 'Certificate saved successfully', toast_deleted: 'Certificate deleted', toast_revoked: 'Certificate revoked',
    toast_restored: 'Certificate restored to active',
    students_title: 'Students Management', students_subtitle: 'Manage student records.',
    btn_add_student: 'Add Student', lbl_email: 'Email', lbl_phone: 'Phone', lbl_national_id: 'National ID',
    courses_title: 'Courses Management', courses_subtitle: 'Manage training courses and programs.',
    btn_add_course: 'Add Course', lbl_course_name: 'Course Name', lbl_default_hours: 'Default Hours', lbl_description: 'Description',
    logs_title: 'Verification Logs', logs_subtitle: 'History of all certificate verification attempts.',
    settings_title: 'Settings', settings_subtitle: 'Configure academy information and branding.',
    lbl_academy_name: 'Academy Name', lbl_website: 'Website', lbl_support_email: 'Support Email',
    lbl_logo_url: 'Academy Logo URL', lbl_primary_color: 'Primary Color', lbl_secondary_color: 'Secondary Color',
    lbl_footer_text: 'Footer Text', lbl_cert_template: 'Certificate Template', btn_save_settings: 'Save Settings',
    toast_settings_saved: 'Settings saved successfully',
    result_verified: 'verified', result_not_found: 'not found', result_revoked: 'revoked', result_expired: 'expired',
    lbl_role: 'Role', role_administrator: 'Administrator', role_instructor: 'Instructor', role_viewer: 'Viewer',
    access_denied: 'Access denied for your role.',
    search_by_number: 'Search by number', search_by_name: 'Search by name',
    loading: 'Loading...', na: 'N/A', none: 'â€”',
    verify_hint: 'This page verifies a certificate directly from its unique number or via QR code scan.',
    quick_search_placeholder: 'Search table...',
    optional: 'optional',
    generate: 'Generate', download: 'Download', copy_link: 'Copy Verification Link', copied: 'Link copied!',

    /* ---- New: dynamic academy / homepage / admin extensions ---- */
    sd_academy_settings: 'Academy Settings', sd_website_settings: 'Website Settings',
    sd_partners: 'Partners', sd_media: 'Media Library', sd_homepage: 'Homepage Content',
    academy_settings_title: 'Academy Settings', academy_settings_subtitle: 'Manage the academy identity, contact info, social links and location â€” changes appear across the whole site instantly.',
    website_settings_title: 'Website Settings', website_settings_subtitle: 'Configure general, branding, SEO, email, homepage, certificate and verification settings.',
    lbl_academy_desc: 'Academy Description', lbl_academy_desc_ar: 'Academy Description (Arabic)',
    lbl_academy_name_ar: 'Academy Name (Arabic)',
    lbl_whatsapp: 'WhatsApp', lbl_address: 'Address', lbl_address_ar: 'Address (Arabic)',
    lbl_maps_url: 'Google Maps Location URL', lbl_copyright: 'Copyright Text', lbl_copyright_ar: 'Copyright Text (Arabic)',
    tab_general: 'General', tab_branding: 'Branding', tab_contact: 'Contact Info', tab_social: 'Social Media',
    tab_seo: 'SEO', tab_email: 'Email', tab_theme: 'Theme', tab_homepage: 'Homepage', tab_certificate: 'Certificate', tab_verification: 'Verification',
    lbl_seo_title: 'SEO Title', lbl_seo_desc: 'SEO Description', lbl_seo_keywords: 'SEO Keywords', lbl_og_image: 'Social Share Image',
    lbl_email_from_name: 'Sender Name', lbl_email_from_address: 'Sender Email Address',
    lbl_cert_footer_note: 'Certificate Footer Note', lbl_cert_footer_note_ar: 'Certificate Footer Note (Arabic)',
    lbl_show_qr: 'Show QR Code on Verification', lbl_log_verifications: 'Log Every Verification Attempt',
    lbl_show_stats: 'Show Statistics Section', lbl_show_courses: 'Show Courses Section',
    lbl_show_partners: 'Show Partners Section', lbl_show_testimonials: 'Show Testimonials Section',
    lbl_bg_color: 'Background Color', lbl_text_color: 'Text Color', lbl_button_style: 'Button Style',
    lbl_border_radius: 'Border Radius', lbl_font_family: 'Font Family', lbl_dark_mode: 'Enable Dark Mode Toggle',
    lbl_default_mode: 'Default Color Mode', mode_light: 'Light', mode_dark: 'Dark',
    style_rounded: 'Rounded', style_pill: 'Pill', style_square: 'Square',
    btn_save_changes: 'Save Changes', toast_academy_saved: 'Academy settings saved â€” now live across the site',
    toast_theme_saved: 'Theme applied across the site',
    logo_upload_title: 'Academy Logo', logo_upload_hint: 'Upload an image (PNG, JPG, SVG). Recommended: square, transparent background.',
    btn_upload_logo: 'Upload Logo', btn_replace_logo: 'Replace Logo', btn_delete_logo: 'Delete Logo', logo_preview: 'Preview',
    no_logo: 'No logo uploaded yet',
    partners_title: 'Partners Management', partners_subtitle: 'Add and manage academy partners shown on the homepage.',
    btn_add_partner: 'Add Partner', lbl_partner_name: 'Partner Name', lbl_partner_name_ar: 'Partner Name (Arabic)',
    lbl_partner_logo: 'Partner Logo', lbl_partner_desc: 'Short Description', lbl_partner_website: 'Website URL',
    lbl_display_order: 'Display Order', lbl_active: 'Active', col_partner: 'Partner', col_order: 'Order',
    our_partners_title: 'Our Partners', our_partners_subtitle: 'Trusted organizations we work with.',
    media_title: 'Media Library', media_subtitle: 'Upload and manage images, logos, documents and icons.',
    btn_upload_file: 'Upload File', lbl_file_name: 'File Name', lbl_file_type: 'File Type', lbl_folder: 'Folder',
    type_image: 'Image', type_logo: 'Logo', type_icon: 'Icon', type_document: 'Document', type_certificate: 'Certificate',
    all_folders: 'All Folders', search_media_placeholder: 'Search media...', btn_replace: 'Replace',
    homepage_content_title: 'Homepage Content', homepage_content_subtitle: 'Edit hero, mission, vision, about, statistics, and testimonials shown on the homepage.',
    section_hero: 'Hero Section', section_mission: 'Mission', section_vision: 'Vision', section_about: 'About Academy', section_footer: 'Footer',
    lbl_section_title: 'Title', lbl_section_subtitle: 'Subtitle', lbl_section_content: 'Content',
    stats_title: 'Statistics', btn_add_stat: 'Add Statistic', lbl_stat_label: 'Label', lbl_stat_value: 'Value', lbl_stat_icon: 'Icon Class',
    testimonials_title: 'Testimonials', btn_add_testimonial: 'Add Testimonial', lbl_person_name: 'Name', lbl_person_role: 'Role', lbl_rating: 'Rating',
    mission_title: 'Our Mission', vision_title: 'Our Vision', about_title: 'About Us',
    testimonials_section_title: 'What Our Graduates Say', testimonials_section_subtitle: 'Real feedback from our certified professionals.',
    stats_section_title: 'Our Impact in Numbers',
    courses_section_title: 'Our Training Programs', courses_section_subtitle: 'Explore our accredited medical training courses.',
    empty_partners: 'No partners added yet.', empty_media: 'No media files found.', empty_stats: 'No statistics added yet.',
    empty_testimonials: 'No testimonials added yet.',
    confirm_delete_generic: 'Are you sure you want to delete this item?',
    toast_upload_success: 'File uploaded successfully', toast_upload_error: 'Upload failed â€” please try a smaller file or different format',
    saving: 'Saving...', submitting: 'Submitting...',
    validation_required: 'This field is required.', validation_invalid_email: 'Please enter a valid email address.',
    validation_invalid_url: 'Please enter a valid URL.', validation_duplicate_cert: 'This certificate number already exists.',
    dark_mode_toggle: 'Dark Mode', light_mode_toggle: 'Light Mode',
    empty_courses: 'No courses added yet.', view_website: 'Visit Website'
  },
  ar: {
    dir: 'rtl', lang: 'ar',
    nav_home: 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©', nav_verify: 'Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', nav_search: 'Ø§Ù„Ø¨Ø­Ø« Ø¹Ù† Ø´Ù‡Ø§Ø¯Ø©',
    nav_admin: 'Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ…', nav_login: 'Ø¯Ø®ÙˆÙ„ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©',
    academy_name: 'Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ù†ÙˆØ§Ø© Ø§Ù„Ø·Ø¨ÙŠØ©', system_name: 'Ù†ÙˆØ§Ø© ÙÙŠØ±ÙŠÙØ§ÙŠ',
    hero_title: 'Ù†Ø¸Ø§Ù… Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª',
    hero_subtitle: 'ØªØ­Ù‚Ù‚ Ù…Ù† ØµØ­Ø© Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±Ø© Ø¹Ù† Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ù†ÙˆØ§Ø© Ø§Ù„Ø·Ø¨ÙŠØ©.',
    cert_number_label: 'Ø£Ø¯Ø®Ù„ Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©',
    cert_number_placeholder: 'Ù…Ø«Ø§Ù„: NMH-2026-000001',
    btn_verify: 'ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©',
    features_title: 'Ù„Ù…Ø§Ø°Ø§ Ù†ÙˆØ§Ø© ÙÙŠØ±ÙŠÙØ§ÙŠ',
    features_subtitle: 'Ø·Ø±ÙŠÙ‚Ø© Ø¢Ù…Ù†Ø© ÙˆØ³Ø±ÙŠØ¹Ø© ÙˆÙ…ÙˆØ«ÙˆÙ‚Ø© Ù„Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ØµØ­Ø© Ø£ÙŠ Ø´Ù‡Ø§Ø¯Ø© ØµØ§Ø¯Ø±Ø© Ø¹Ù† Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØªÙ†Ø§.',
    f1_title: 'ØªØ­Ù‚Ù‚ ÙÙˆØ±ÙŠ', f1_desc: 'Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ ØªØ­Ù‚Ù‚ ÙÙˆØ±ÙŠ Ù…Ù† Ø±Ù‚Ù… Ø£ÙŠ Ø´Ù‡Ø§Ø¯Ø© ÙÙŠ Ø«ÙˆØ§Ù†Ù.',
    f2_title: 'Ø§Ù„ØªØ­Ù‚Ù‚ Ø¹Ø¨Ø± Ø±Ù…Ø² QR', f2_desc: 'Ù‚Ù… Ø¨Ù…Ø³Ø­ Ø±Ù…Ø² QR Ø§Ù„Ù…Ø·Ø¨ÙˆØ¹ Ø¹Ù„Ù‰ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© Ù„Ù„ØªØ­Ù‚Ù‚ Ù…Ù†Ù‡Ø§ ÙÙˆØ±Ø§Ù‹.',
    f3_title: 'Ø³Ø¬Ù„Ø§Øª Ø¢Ù…Ù†Ø©', f3_desc: 'Ø¬Ù…ÙŠØ¹ Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª Ù…Ø­ÙÙˆØ¸Ø© Ø¨Ø£Ù…Ø§Ù† ÙˆÙ…Ø­Ù…ÙŠØ© Ù…Ù† Ø§Ù„ØªÙ„Ø§Ø¹Ø¨.',
    f4_title: 'Ù…Ù†ØµØ© Ø«Ù†Ø§Ø¦ÙŠØ© Ø§Ù„Ù„ØºØ©', f4_desc: 'Ù…ØªÙˆÙØ±Ø© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ø¨Ø§Ù„Ù„ØºØªÙŠÙ† Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© ÙˆØ§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ© Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†.',
    steps_title: 'ÙƒÙŠÙ ÙŠØªÙ… Ø§Ù„ØªØ­Ù‚Ù‚', steps_subtitle: 'Ø«Ù„Ø§Ø« Ø®Ø·ÙˆØ§Øª Ø¨Ø³ÙŠØ·Ø© Ù„Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø£ÙŠ Ø´Ù‡Ø§Ø¯Ø©.',
    step1_title: 'Ø£Ø¯Ø®Ù„ Ø£Ùˆ Ø§Ù…Ø³Ø­', step1_desc: 'Ø§ÙƒØªØ¨ Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© Ø£Ùˆ Ù‚Ù… Ø¨Ù…Ø³Ø­ Ø±Ù…Ø² QR Ø§Ù„Ø®Ø§Øµ Ø¨Ù‡Ø§.',
    step2_title: 'Ù†ØªØ­Ù‚Ù‚ Ù…Ù† Ø³Ø¬Ù„Ø§ØªÙ†Ø§', step2_desc: 'ÙŠØ¨Ø­Ø« Ù†Ø¸Ø§Ù…Ù†Ø§ ÙÙˆØ±Ø§Ù‹ ÙÙŠ Ù‚Ø§Ø¹Ø¯Ø© Ø¨ÙŠØ§Ù†Ø§Øª Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª Ø§Ù„Ø¢Ù…Ù†Ø©.',
    step3_title: 'Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ù†ØªÙŠØ¬Ø© Ø§Ù„ØªØ­Ù‚Ù‚', step3_desc: 'Ø§Ø¹Ø±Ø¶ Ù†ØªÙŠØ¬Ø© Ø§Ù„ØªØ­Ù‚Ù‚ Ø§Ù„Ø±Ø³Ù…ÙŠØ© Ù…Ø¹ ÙƒØ§ÙØ© ØªÙØ§ØµÙŠÙ„ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©.',
    footer_about: 'ØªÙ„ØªØ²Ù… Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ù†ÙˆØ§Ø© Ø§Ù„Ø·Ø¨ÙŠØ© Ø¨ØªÙ‚Ø¯ÙŠÙ… ØªØ¯Ø±ÙŠØ¨ Ø·Ø¨ÙŠ Ø¹Ø§Ù„Ù…ÙŠ Ø§Ù„Ù…Ø³ØªÙˆÙ‰ ÙˆØ¥ØµØ¯Ø§Ø± Ø´Ù‡Ø§Ø¯Ø§Øª Ù…ÙˆØ«ÙˆÙ‚Ø© ÙŠÙ…ÙƒÙ† Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù†Ù‡Ø§.',
    footer_links: 'Ø±ÙˆØ§Ø¨Ø· Ø³Ø±ÙŠØ¹Ø©', footer_contact: 'Ø§Ù„ØªÙˆØ§ØµÙ„',
    footer_rights: 'Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.',
    search_page_title: 'Ø§Ù„Ø¨Ø­Ø« Ø¹Ù† Ø´Ù‡Ø§Ø¯Ø©', search_page_subtitle: 'Ø§Ù„Ø¨Ø­Ø« Ø¨Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© Ø£Ùˆ Ø§Ø³Ù… Ø§Ù„Ø·Ø§Ù„Ø¨.',
    tab_by_number: 'Ø¨Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', tab_by_name: 'Ø¨Ø§Ø³Ù… Ø§Ù„Ø·Ø§Ù„Ø¨',
    search_placeholder_number: 'Ø£Ø¯Ø®Ù„ Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©...', search_placeholder_name: 'Ø£Ø¯Ø®Ù„ Ø§Ø³Ù… Ø§Ù„Ø·Ø§Ù„Ø¨...',
    btn_search: 'Ø¨Ø­Ø«',
    no_results_title: 'Ù„Ø§ ØªÙˆØ¬Ø¯ Ù†ØªØ§Ø¦Ø¬', no_results_desc: 'Ø­Ø§ÙˆÙ„ Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø±Ù‚Ù… Ø´Ù‡Ø§Ø¯Ø© Ø£Ùˆ Ø§Ø³Ù… Ø·Ø§Ù„Ø¨ Ù…Ø®ØªÙ„Ù.',
    view_certificate: 'Ø¹Ø±Ø¶ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©',
    verify_page_title: 'Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', verify_page_subtitle: 'Ø£Ø¯Ø®Ù„ Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© Ù„Ù„ØªØ­Ù‚Ù‚ Ù…Ù† ØµØ­ØªÙ‡Ø§.',
    cert_verified: 'ØªÙ… Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', cert_notfound: 'Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©', cert_revoked: 'Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© Ù…Ù„ØºØ§Ø©', cert_expired: 'Ø§Ù†ØªÙ‡Øª ØµÙ„Ø§Ø­ÙŠØ© Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©',
    cert_notfound_desc: 'Ù‡Ø°Ù‡ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© ØºÙŠØ± Ù…ØªÙˆÙØ±Ø© ÙÙŠ Ø³Ø¬Ù„Ø§ØªÙ†Ø§.',
    cert_revoked_desc: 'ØªÙ… Ø¥Ù„ØºØ§Ø¡ Ù‡Ø°Ù‡ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© Ù…Ù† Ù‚Ø¨Ù„ Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ù†ÙˆØ§Ø© Ø§Ù„Ø·Ø¨ÙŠØ©.',
    cert_expired_desc: 'Ø§Ù†ØªÙ‡Øª ØµÙ„Ø§Ø­ÙŠØ© Ù‡Ø°Ù‡ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© ÙˆÙ‡ÙŠ ØºÙŠØ± ØµØ§Ù„Ø­Ø© Ø­Ø§Ù„ÙŠØ§Ù‹.',
    revoke_reason_label: 'Ø³Ø¨Ø¨ Ø§Ù„Ø¥Ù„ØºØ§Ø¡',
    lbl_organization: 'Ø§Ù„Ø¬Ù‡Ø© Ø§Ù„Ù…ØµØ¯Ø±Ø©', lbl_student: 'Ø§Ø³Ù… Ø§Ù„Ø·Ø§Ù„Ø¨ Ø§Ù„ÙƒØ§Ù…Ù„', lbl_cert_number: 'Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©',
    lbl_course: 'Ø§Ø³Ù… Ø§Ù„Ø¯ÙˆØ±Ø©', lbl_hours: 'Ø³Ø§Ø¹Ø§Øª Ø§Ù„ØªØ¯Ø±ÙŠØ¨', lbl_instructor: 'Ø§Ù„Ù…Ø¯Ø±Ø¨',
    lbl_issue_date: 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥ØµØ¯Ø§Ø±', lbl_expiry_date: 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø§Ù†ØªÙ‡Ø§Ø¡', lbl_status: 'Ø­Ø§Ù„Ø© Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©',
    lbl_verify_date: 'ØªØ§Ø±ÙŠØ® Ø§Ù„ØªØ­Ù‚Ù‚', lbl_qr: 'Ø§Ù„ØªØ­Ù‚Ù‚ Ø¹Ø¨Ø± QR',
    status_active: 'Ø³Ø§Ø±ÙŠØ©', status_revoked: 'Ù…Ù„ØºØ§Ø©', status_expired: 'Ù…Ù†ØªÙ‡ÙŠØ©',
    verified_badge: 'ØªÙ… Ø§Ù„ØªØ­Ù‚Ù‚', official_note: 'ØªÙ… Ø¥ØµØ¯Ø§Ø± Ù‡Ø°Ù‡ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© ÙˆØ§Ù„ØªØ­Ù‚Ù‚ Ù…Ù†Ù‡Ø§ Ø±Ø³Ù…ÙŠØ§Ù‹ Ù…Ù† Ù‚Ø¨Ù„ Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ù†ÙˆØ§Ø© Ø§Ù„Ø·Ø¨ÙŠØ©.',
    btn_print: 'Ø·Ø¨Ø§Ø¹Ø©', btn_new_search: 'Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø´Ù‡Ø§Ø¯Ø© Ø£Ø®Ø±Ù‰', btn_back_home: 'Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ù„Ø±Ø¦ÙŠØ³ÙŠØ©',
    scan_note: 'Ù‚Ù… Ø¨Ø§Ù„Ù…Ø³Ø­ Ù„Ù„ØªØ­Ù‚Ù‚ Ø¹Ø¨Ø± Ø§Ù„Ø¥Ù†ØªØ±Ù†Øª',
    login_title: 'Ø¯Ø®ÙˆÙ„ Ø§Ù„Ø¥Ø¯Ø§Ø±Ø©', login_subtitle: 'Ø³Ø¬Ù„ Ø§Ù„Ø¯Ø®ÙˆÙ„ Ù„Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª ÙˆØ§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª.',
    lbl_username: 'Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…', lbl_password: 'ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ±', btn_login: 'ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø¯Ø®ÙˆÙ„',
    login_error: 'Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ø£Ùˆ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± ØºÙŠØ± ØµØ­ÙŠØ­Ø©.',
    demo_creds: 'Ø­Ø³Ø§Ø¨Ø§Øª ØªØ¬Ø±ÙŠØ¨ÙŠØ© â€” Ù…Ø¯ÙŠØ±: admin / Nawah@2026 Â· Ù…Ø¯Ø±Ø¨: instructor / Instr@2026 Â· Ù…Ø´Ø§Ù‡Ø¯: viewer / View@2026',
    sd_dashboard: 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©', sd_certificates: 'Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª', sd_students: 'Ø§Ù„Ø·Ù„Ø§Ø¨', sd_courses: 'Ø§Ù„Ø¯ÙˆØ±Ø§Øª',
    sd_logs: 'Ø³Ø¬Ù„Ø§Øª Ø§Ù„ØªØ­Ù‚Ù‚', sd_settings: 'Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª', sd_logout: 'ØªØ³Ø¬ÙŠÙ„ Ø§Ù„Ø®Ø±ÙˆØ¬', sd_backsite: 'Ø¹Ø±Ø¶ Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø¹Ø§Ù…',
    dash_title: 'Ù„ÙˆØ­Ø© Ø§Ù„ØªØ­ÙƒÙ…', dash_subtitle: 'Ù†Ø¸Ø±Ø© Ø¹Ø§Ù…Ø© Ø¹Ù„Ù‰ Ù†Ø´Ø§Ø· Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª.',
    stat_total: 'Ø¥Ø¬Ù…Ø§Ù„ÙŠ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª', stat_active: 'Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª Ø§Ù„Ø³Ø§Ø±ÙŠØ©', stat_revoked: 'Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª Ø§Ù„Ù…Ù„ØºØ§Ø©', stat_month: 'ØµØ¯Ø±Øª Ù‡Ø°Ø§ Ø§Ù„Ø´Ù‡Ø±',
    recent_activity: 'Ø£Ø­Ø¯Ø« Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„ØªØ­Ù‚Ù‚',
    col_cert_number: 'Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', col_student: 'Ø§Ø³Ù… Ø§Ù„Ø·Ø§Ù„Ø¨', col_course: 'Ø§Ù„Ø¯ÙˆØ±Ø©', col_instructor: 'Ø§Ù„Ù…Ø¯Ø±Ø¨',
    col_issue_date: 'ØªØ§Ø±ÙŠØ® Ø§Ù„Ø¥ØµØ¯Ø§Ø±', col_status: 'Ø§Ù„Ø­Ø§Ù„Ø©', col_actions: 'Ø¥Ø¬Ø±Ø§Ø¡Ø§Øª', col_result: 'Ø§Ù„Ù†ØªÙŠØ¬Ø©', col_date: 'Ø§Ù„ØªØ§Ø±ÙŠØ®',
    col_browser: 'Ø§Ù„Ù…ØªØµÙØ­', col_device: 'Ø§Ù„Ø¬Ù‡Ø§Ø²', col_country: 'Ø§Ù„Ø¯ÙˆÙ„Ø©',
    certs_title: 'Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª', certs_subtitle: 'Ø¥Ø¶Ø§ÙØ© ÙˆØªØ¹Ø¯ÙŠÙ„ ÙˆØ¥Ù„ØºØ§Ø¡ ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª Ø§Ù„ØµØ§Ø¯Ø±Ø©.',
    btn_add_cert: 'Ø¥Ø¶Ø§ÙØ© Ø´Ù‡Ø§Ø¯Ø©', btn_export_pdf: 'ØªØ­Ù…ÙŠÙ„ PDF', btn_qr: 'Ø±Ù…Ø² QR',
    modal_add_cert: 'Ø¥Ø¶Ø§ÙØ© Ø´Ù‡Ø§Ø¯Ø© Ø¬Ø¯ÙŠØ¯Ø©', modal_edit_cert: 'ØªØ¹Ø¯ÙŠÙ„ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©',
    lbl_student_name: 'Ø§Ø³Ù… Ø§Ù„Ø·Ø§Ù„Ø¨', lbl_notes: 'Ù…Ù„Ø§Ø­Ø¸Ø§Øª', lbl_image: 'Ø±Ø§Ø¨Ø· ØµÙˆØ±Ø© Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© (Ø§Ø®ØªÙŠØ§Ø±ÙŠ)',
    btn_save: 'Ø­ÙØ¸', btn_cancel: 'Ø¥Ù„ØºØ§Ø¡', btn_close: 'Ø¥ØºÙ„Ø§Ù‚',
    confirm_delete: 'Ù‡Ù„ Ø£Ù†Øª Ù…ØªØ£ÙƒØ¯ Ù…Ù† Ø­Ø°Ù Ù‡Ø°Ù‡ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©ØŸ',
    confirm_revoke: 'Ø£Ø¯Ø®Ù„ Ø³Ø¨Ø¨ Ø¥Ù„ØºØ§Ø¡ Ù‡Ø°Ù‡ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©:',
    toast_saved: 'ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© Ø¨Ù†Ø¬Ø§Ø­', toast_deleted: 'ØªÙ… Ø­Ø°Ù Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', toast_revoked: 'ØªÙ… Ø¥Ù„ØºØ§Ø¡ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©',
    toast_restored: 'ØªÙ…Øª Ø¥Ø¹Ø§Ø¯Ø© ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©',
    students_title: 'Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø·Ù„Ø§Ø¨', students_subtitle: 'Ø¥Ø¯Ø§Ø±Ø© Ø³Ø¬Ù„Ø§Øª Ø§Ù„Ø·Ù„Ø§Ø¨.',
    btn_add_student: 'Ø¥Ø¶Ø§ÙØ© Ø·Ø§Ù„Ø¨', lbl_email: 'Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ', lbl_phone: 'Ø§Ù„Ù‡Ø§ØªÙ', lbl_national_id: 'Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„ÙˆØ·Ù†ÙŠØ©',
    courses_title: 'Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¯ÙˆØ±Ø§Øª', courses_subtitle: 'Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø¯ÙˆØ±Ø§Øª ÙˆØ§Ù„Ø¨Ø±Ø§Ù…Ø¬ Ø§Ù„ØªØ¯Ø±ÙŠØ¨ÙŠØ©.',
    btn_add_course: 'Ø¥Ø¶Ø§ÙØ© Ø¯ÙˆØ±Ø©', lbl_course_name: 'Ø§Ø³Ù… Ø§Ù„Ø¯ÙˆØ±Ø©', lbl_default_hours: 'Ø§Ù„Ø³Ø§Ø¹Ø§Øª Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠØ©', lbl_description: 'Ø§Ù„ÙˆØµÙ',
    logs_title: 'Ø³Ø¬Ù„Ø§Øª Ø§Ù„ØªØ­Ù‚Ù‚', logs_subtitle: 'Ø³Ø¬Ù„ Ø¬Ù…ÙŠØ¹ Ø¹Ù…Ù„ÙŠØ§Øª Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª.',
    settings_title: 'Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª', settings_subtitle: 'ØªÙ‡ÙŠØ¦Ø© Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© ÙˆØ§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ø¨ØµØ±ÙŠØ©.',
    lbl_academy_name: 'Ø§Ø³Ù… Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©', lbl_website: 'Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ', lbl_support_email: 'Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¯Ø¹Ù…',
    lbl_logo_url: 'Ø±Ø§Ø¨Ø· Ø´Ø¹Ø§Ø± Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©', lbl_primary_color: 'Ø§Ù„Ù„ÙˆÙ† Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ', lbl_secondary_color: 'Ø§Ù„Ù„ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙˆÙŠ',
    lbl_footer_text: 'Ù†Øµ Ø§Ù„ØªØ°ÙŠÙŠÙ„', lbl_cert_template: 'Ù‚Ø§Ù„Ø¨ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', btn_save_settings: 'Ø­ÙØ¸ Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª',
    toast_settings_saved: 'ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø¨Ù†Ø¬Ø§Ø­',
    result_verified: 'ØªÙ… Ø§Ù„ØªØ­Ù‚Ù‚', result_not_found: 'ØºÙŠØ± Ù…ÙˆØ¬ÙˆØ¯Ø©', result_revoked: 'Ù…Ù„ØºØ§Ø©', result_expired: 'Ù…Ù†ØªÙ‡ÙŠØ©',
    lbl_role: 'Ø§Ù„Ø¯ÙˆØ±', role_administrator: 'Ù…Ø¯ÙŠØ± Ø§Ù„Ù†Ø¸Ø§Ù…', role_instructor: 'Ù…Ø¯Ø±Ø¨', role_viewer: 'Ù…Ø´Ø§Ù‡Ø¯',
    access_denied: 'Ø§Ù„ÙˆØµÙˆÙ„ Ù…Ø±ÙÙˆØ¶ Ø¨Ù†Ø§Ø¡Ù‹ Ø¹Ù„Ù‰ Ø¯ÙˆØ±Ùƒ.',
    search_by_number: 'Ø¨Ø­Ø« Ø¨Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', search_by_name: 'Ø¨Ø­Ø« Ø¨Ø§Ø³Ù… Ø§Ù„Ø·Ø§Ù„Ø¨',
    loading: 'Ø¬Ø§Ø±Ù Ø§Ù„ØªØ­Ù…ÙŠÙ„...', na: 'ØºÙŠØ± Ù…ØªÙˆÙØ±', none: 'â€”',
    verify_hint: 'ØªØªØ­Ù‚Ù‚ Ù‡Ø°Ù‡ Ø§Ù„ØµÙØ­Ø© Ù…Ù† Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© Ù…Ø¨Ø§Ø´Ø±Ø© Ø¹Ø¨Ø± Ø±Ù‚Ù…Ù‡Ø§ Ø§Ù„ÙØ±ÙŠØ¯ Ø£Ùˆ Ù…Ù† Ø®Ù„Ø§Ù„ Ù…Ø³Ø­ Ø±Ù…Ø² QR.',
    quick_search_placeholder: 'Ø¨Ø­Ø« ÙÙŠ Ø§Ù„Ø¬Ø¯ÙˆÙ„...',
    optional: 'Ø§Ø®ØªÙŠØ§Ø±ÙŠ',
    generate: 'Ø¥Ù†Ø´Ø§Ø¡', download: 'ØªØ­Ù…ÙŠÙ„', copy_link: 'Ù†Ø³Ø® Ø±Ø§Ø¨Ø· Ø§Ù„ØªØ­Ù‚Ù‚', copied: 'ØªÙ… Ù†Ø³Ø® Ø§Ù„Ø±Ø§Ø¨Ø·!',

    /* ---- New: dynamic academy / homepage / admin extensions ---- */
    sd_academy_settings: 'Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©', sd_website_settings: 'Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù…ÙˆÙ‚Ø¹',
    sd_partners: 'Ø§Ù„Ø´Ø±ÙƒØ§Ø¡', sd_media: 'Ù…ÙƒØªØ¨Ø© Ø§Ù„ÙˆØ³Ø§Ø¦Ø·', sd_homepage: 'Ù…Ø­ØªÙˆÙ‰ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©',
    academy_settings_title: 'Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©', academy_settings_subtitle: 'Ø¥Ø¯Ø§Ø±Ø© Ù‡ÙˆÙŠØ© Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© ÙˆØ¨ÙŠØ§Ù†Ø§Øª Ø§Ù„ØªÙˆØ§ØµÙ„ ÙˆØ±ÙˆØ§Ø¨Ø· Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠ ÙˆØ§Ù„Ù…ÙˆÙ‚Ø¹ â€” ØªØ¸Ù‡Ø± Ø§Ù„ØªØºÙŠÙŠØ±Ø§Øª ÙÙˆØ±Ø§Ù‹ ÙÙŠ ÙƒÙ„ Ø§Ù„Ù…ÙˆÙ‚Ø¹.',
    website_settings_title: 'Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù…ÙˆÙ‚Ø¹', website_settings_subtitle: 'ØªÙ‡ÙŠØ¦Ø© Ø§Ù„Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø¹Ø§Ù…Ø©ØŒ Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ø¨ØµØ±ÙŠØ©ØŒ ØªØ­Ø³ÙŠÙ† Ù…Ø­Ø±ÙƒØ§Øª Ø§Ù„Ø¨Ø­Ø«ØŒ Ø§Ù„Ø¨Ø±ÙŠØ¯ØŒ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©ØŒ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø§Øª ÙˆØ§Ù„ØªØ­Ù‚Ù‚.',
    lbl_academy_desc: 'ÙˆØµÙ Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©', lbl_academy_desc_ar: 'ÙˆØµÙ Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© (Ø¹Ø±Ø¨ÙŠ)',
    lbl_academy_name_ar: 'Ø§Ø³Ù… Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© (Ø¹Ø±Ø¨ÙŠ)',
    lbl_whatsapp: 'ÙˆØ§ØªØ³Ø§Ø¨', lbl_address: 'Ø§Ù„Ø¹Ù†ÙˆØ§Ù†', lbl_address_ar: 'Ø§Ù„Ø¹Ù†ÙˆØ§Ù† (Ø¹Ø±Ø¨ÙŠ)',
    lbl_maps_url: 'Ø±Ø§Ø¨Ø· Ø§Ù„Ù…ÙˆÙ‚Ø¹ Ø¹Ù„Ù‰ Ø®Ø±Ø§Ø¦Ø· Ø¬ÙˆØ¬Ù„', lbl_copyright: 'Ù†Øµ Ø­Ù‚ÙˆÙ‚ Ø§Ù„Ù†Ø´Ø±', lbl_copyright_ar: 'Ù†Øµ Ø­Ù‚ÙˆÙ‚ Ø§Ù„Ù†Ø´Ø± (Ø¹Ø±Ø¨ÙŠ)',
    tab_general: 'Ø¹Ø§Ù…', tab_branding: 'Ø§Ù„Ù‡ÙˆÙŠØ© Ø§Ù„Ø¨ØµØ±ÙŠØ©', tab_contact: 'Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªÙˆØ§ØµÙ„', tab_social: 'Ø§Ù„ØªÙˆØ§ØµÙ„ Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠ',
    tab_seo: 'ØªØ­Ø³ÙŠÙ† Ù…Ø­Ø±ÙƒØ§Øª Ø§Ù„Ø¨Ø­Ø«', tab_email: 'Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ', tab_theme: 'Ø§Ù„Ù…Ø¸Ù‡Ø±', tab_homepage: 'Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©', tab_certificate: 'Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', tab_verification: 'Ø§Ù„ØªØ­Ù‚Ù‚',
    lbl_seo_title: 'Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø³ÙŠÙˆ', lbl_seo_desc: 'ÙˆØµÙ Ø§Ù„Ø³ÙŠÙˆ', lbl_seo_keywords: 'ÙƒÙ„Ù…Ø§Øª Ù…ÙØªØ§Ø­ÙŠØ©', lbl_og_image: 'ØµÙˆØ±Ø© Ø§Ù„Ù…Ø´Ø§Ø±ÙƒØ© Ø§Ù„Ø§Ø¬ØªÙ…Ø§Ø¹ÙŠØ©',
    lbl_email_from_name: 'Ø§Ø³Ù… Ø§Ù„Ù…Ø±Ø³Ù„', lbl_email_from_address: 'Ø¨Ø±ÙŠØ¯ Ø§Ù„Ù…Ø±Ø³Ù„',
    lbl_cert_footer_note: 'Ù†Øµ ØªØ°ÙŠÙŠÙ„ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø©', lbl_cert_footer_note_ar: 'Ù†Øµ ØªØ°ÙŠÙŠÙ„ Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© (Ø¹Ø±Ø¨ÙŠ)',
    lbl_show_qr: 'Ø¥Ø¸Ù‡Ø§Ø± Ø±Ù…Ø² QR Ø¹Ù†Ø¯ Ø§Ù„ØªØ­Ù‚Ù‚', lbl_log_verifications: 'ØªØ³Ø¬ÙŠÙ„ ÙƒÙ„ Ø¹Ù…Ù„ÙŠØ© ØªØ­Ù‚Ù‚',
    lbl_show_stats: 'Ø¥Ø¸Ù‡Ø§Ø± Ù‚Ø³Ù… Ø§Ù„Ø¥Ø­ØµØ§Ø¦ÙŠØ§Øª', lbl_show_courses: 'Ø¥Ø¸Ù‡Ø§Ø± Ù‚Ø³Ù… Ø§Ù„Ø¯ÙˆØ±Ø§Øª',
    lbl_show_partners: 'Ø¥Ø¸Ù‡Ø§Ø± Ù‚Ø³Ù… Ø§Ù„Ø´Ø±ÙƒØ§Ø¡', lbl_show_testimonials: 'Ø¥Ø¸Ù‡Ø§Ø± Ù‚Ø³Ù… Ø¢Ø±Ø§Ø¡ Ø§Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ†',
    lbl_bg_color: 'Ù„ÙˆÙ† Ø§Ù„Ø®Ù„ÙÙŠØ©', lbl_text_color: 'Ù„ÙˆÙ† Ø§Ù„Ù†Øµ', lbl_button_style: 'Ø´ÙƒÙ„ Ø§Ù„Ø£Ø²Ø±Ø§Ø±',
    lbl_border_radius: 'Ø§Ø³ØªØ¯Ø§Ø±Ø© Ø§Ù„Ø­ÙˆØ§Ù', lbl_font_family: 'Ù†ÙˆØ¹ Ø§Ù„Ø®Ø·', lbl_dark_mode: 'ØªÙØ¹ÙŠÙ„ Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„Ù„ÙŠÙ„ÙŠ',
    lbl_default_mode: 'Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠ', mode_light: 'ÙØ§ØªØ­', mode_dark: 'Ù„ÙŠÙ„ÙŠ',
    style_rounded: 'Ù…Ø³ØªØ¯ÙŠØ±', style_pill: 'ÙƒØ¨Ø³ÙˆÙ„Ø©', style_square: 'Ù…Ø±Ø¨Ø¹',
    btn_save_changes: 'Ø­ÙØ¸ Ø§Ù„ØªØºÙŠÙŠØ±Ø§Øª', toast_academy_saved: 'ØªÙ… Ø­ÙØ¸ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© â€” ÙˆÙ‡ÙŠ Ù…ÙØ¹Ù‘Ù„Ø© Ø§Ù„Ø¢Ù† ÙÙŠ Ø§Ù„Ù…ÙˆÙ‚Ø¹',
    toast_theme_saved: 'ØªÙ… ØªØ·Ø¨ÙŠÙ‚ Ø§Ù„Ù…Ø¸Ù‡Ø± Ø¹Ù„Ù‰ Ø§Ù„Ù…ÙˆÙ‚Ø¹',
    logo_upload_title: 'Ø´Ø¹Ø§Ø± Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©', logo_upload_hint: 'Ù‚Ù… Ø¨Ø±ÙØ¹ ØµÙˆØ±Ø© (PNGØŒ JPGØŒ SVG). ÙŠÙØ¶Ù„ Ø£Ù† ØªÙƒÙˆÙ† Ù…Ø±Ø¨Ø¹Ø© Ø¨Ø®Ù„ÙÙŠØ© Ø´ÙØ§ÙØ©.',
    btn_upload_logo: 'Ø±ÙØ¹ Ø§Ù„Ø´Ø¹Ø§Ø±', btn_replace_logo: 'Ø§Ø³ØªØ¨Ø¯Ø§Ù„ Ø§Ù„Ø´Ø¹Ø§Ø±', btn_delete_logo: 'Ø­Ø°Ù Ø§Ù„Ø´Ø¹Ø§Ø±', logo_preview: 'Ù…Ø¹Ø§ÙŠÙ†Ø©',
    no_logo: 'Ù„Ù… ÙŠØªÙ… Ø±ÙØ¹ Ø´Ø¹Ø§Ø± Ø¨Ø¹Ø¯',
    partners_title: 'Ø¥Ø¯Ø§Ø±Ø© Ø§Ù„Ø´Ø±ÙƒØ§Ø¡', partners_subtitle: 'Ø¥Ø¶Ø§ÙØ© ÙˆØ¥Ø¯Ø§Ø±Ø© Ø´Ø±ÙƒØ§Ø¡ Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ø§Ù„Ø¸Ø§Ù‡Ø±ÙŠÙ† ÙÙŠ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©.',
    btn_add_partner: 'Ø¥Ø¶Ø§ÙØ© Ø´Ø±ÙŠÙƒ', lbl_partner_name: 'Ø§Ø³Ù… Ø§Ù„Ø´Ø±ÙŠÙƒ', lbl_partner_name_ar: 'Ø§Ø³Ù… Ø§Ù„Ø´Ø±ÙŠÙƒ (Ø¹Ø±Ø¨ÙŠ)',
    lbl_partner_logo: 'Ø´Ø¹Ø§Ø± Ø§Ù„Ø´Ø±ÙŠÙƒ', lbl_partner_desc: 'ÙˆØµÙ Ù…Ø®ØªØµØ±', lbl_partner_website: 'Ø±Ø§Ø¨Ø· Ø§Ù„Ù…ÙˆÙ‚Ø¹',
    lbl_display_order: 'ØªØ±ØªÙŠØ¨ Ø§Ù„Ø¹Ø±Ø¶', lbl_active: 'Ù…ÙØ¹Ù„', col_partner: 'Ø§Ù„Ø´Ø±ÙŠÙƒ', col_order: 'Ø§Ù„ØªØ±ØªÙŠØ¨',
    our_partners_title: 'Ø´Ø±ÙƒØ§Ø¤Ù†Ø§', our_partners_subtitle: 'Ù…Ø¤Ø³Ø³Ø§Øª Ù…ÙˆØ«ÙˆÙ‚Ø© Ù†ØªØ¹Ø§ÙˆÙ† Ù…Ø¹Ù‡Ø§.',
    media_title: 'Ù…ÙƒØªØ¨Ø© Ø§Ù„ÙˆØ³Ø§Ø¦Ø·', media_subtitle: 'Ø±ÙØ¹ ÙˆØ¥Ø¯Ø§Ø±Ø© Ø§Ù„ØµÙˆØ± ÙˆØ§Ù„Ø´Ø¹Ø§Ø±Ø§Øª ÙˆØ§Ù„Ù…Ø³ØªÙ†Ø¯Ø§Øª ÙˆØ§Ù„Ø£ÙŠÙ‚ÙˆÙ†Ø§Øª.',
    btn_upload_file: 'Ø±ÙØ¹ Ù…Ù„Ù', lbl_file_name: 'Ø§Ø³Ù… Ø§Ù„Ù…Ù„Ù', lbl_file_type: 'Ù†ÙˆØ¹ Ø§Ù„Ù…Ù„Ù', lbl_folder: 'Ø§Ù„Ù…Ø¬Ù„Ø¯',
    type_image: 'ØµÙˆØ±Ø©', type_logo: 'Ø´Ø¹Ø§Ø±', type_icon: 'Ø£ÙŠÙ‚ÙˆÙ†Ø©', type_document: 'Ù…Ø³ØªÙ†Ø¯', type_certificate: 'Ø´Ù‡Ø§Ø¯Ø©',
    all_folders: 'ÙƒÙ„ Ø§Ù„Ù…Ø¬Ù„Ø¯Ø§Øª', search_media_placeholder: 'Ø¨Ø­Ø« ÙÙŠ Ø§Ù„ÙˆØ³Ø§Ø¦Ø·...', btn_replace: 'Ø§Ø³ØªØ¨Ø¯Ø§Ù„',
    homepage_content_title: 'Ù…Ø­ØªÙˆÙ‰ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©', homepage_content_subtitle: 'ØªØ¹Ø¯ÙŠÙ„ Ù‚Ø³Ù… Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©ØŒ Ø§Ù„Ù…Ù‡Ù…Ø©ØŒ Ø§Ù„Ø±Ø¤ÙŠØ©ØŒ Ù…Ù† Ù†Ø­Ù†ØŒ Ø§Ù„Ø¥Ø­ØµØ§Ø¦ÙŠØ§Øª ÙˆØ¢Ø±Ø§Ø¡ Ø§Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ† ÙÙŠ Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©.',
    section_hero: 'Ù‚Ø³Ù… Ø§Ù„Ø¨Ø¯Ø§ÙŠØ©', section_mission: 'Ø§Ù„Ù…Ù‡Ù…Ø©', section_vision: 'Ø§Ù„Ø±Ø¤ÙŠØ©', section_about: 'Ø¹Ù† Ø§Ù„Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ©', section_footer: 'Ø§Ù„ØªØ°ÙŠÙŠÙ„',
    lbl_section_title: 'Ø§Ù„Ø¹Ù†ÙˆØ§Ù†', lbl_section_subtitle: 'Ø§Ù„Ø¹Ù†ÙˆØ§Ù† Ø§Ù„ÙØ±Ø¹ÙŠ', lbl_section_content: 'Ø§Ù„Ù…Ø­ØªÙˆÙ‰',
    stats_title: 'Ø§Ù„Ø¥Ø­ØµØ§Ø¦ÙŠØ§Øª', btn_add_stat: 'Ø¥Ø¶Ø§ÙØ© Ø¥Ø­ØµØ§Ø¦ÙŠØ©', lbl_stat_label: 'Ø§Ù„ØªØ³Ù…ÙŠØ©', lbl_stat_value: 'Ø§Ù„Ù‚ÙŠÙ…Ø©', lbl_stat_icon: 'Ø£ÙŠÙ‚ÙˆÙ†Ø©',
    testimonials_title: 'Ø¢Ø±Ø§Ø¡ Ø§Ù„Ù…ØªØ¯Ø±Ø¨ÙŠÙ†', btn_add_testimonial: 'Ø¥Ø¶Ø§ÙØ© Ø±Ø£ÙŠ', lbl_person_name: 'Ø§Ù„Ø§Ø³Ù…', lbl_person_role: 'Ø§Ù„ÙˆØ¸ÙŠÙØ©', lbl_rating: 'Ø§Ù„ØªÙ‚ÙŠÙŠÙ…',
    mission_title: 'Ù…Ù‡Ù…ØªÙ†Ø§', vision_title: 'Ø±Ø¤ÙŠØªÙ†Ø§', about_title: 'Ù…Ù† Ù†Ø­Ù†',
    testimonials_section_title: 'Ù…Ø§Ø°Ø§ ÙŠÙ‚ÙˆÙ„ Ø®Ø±ÙŠØ¬ÙˆÙ†Ø§', testimonials_section_subtitle: 'Ø¢Ø±Ø§Ø¡ Ø­Ù‚ÙŠÙ‚ÙŠØ© Ù…Ù† Ø§Ù„Ù…ØªØ®ØµØµÙŠÙ† Ø§Ù„Ù…Ø¹ØªÙ…Ø¯ÙŠÙ† Ù„Ø¯ÙŠÙ†Ø§.',
    stats_section_title: 'Ø£Ø«Ø±Ù†Ø§ Ø¨Ø§Ù„Ø£Ø±Ù‚Ø§Ù…',
    courses_section_title: 'Ø¨Ø±Ø§Ù…Ø¬Ù†Ø§ Ø§Ù„ØªØ¯Ø±ÙŠØ¨ÙŠØ©', courses_section_subtitle: 'Ø§Ø³ØªÙƒØ´Ù Ø¯ÙˆØ±Ø§ØªÙ†Ø§ Ø§Ù„Ø·Ø¨ÙŠØ© Ø§Ù„Ù…Ø¹ØªÙ…Ø¯Ø©.',
    empty_partners: 'Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø´Ø±ÙƒØ§Ø¡ Ø­ØªÙ‰ Ø§Ù„Ø¢Ù†.', empty_media: 'Ù„Ø§ ØªÙˆØ¬Ø¯ Ù…Ù„ÙØ§Øª ÙˆØ³Ø§Ø¦Ø·.', empty_stats: 'Ù„Ø§ ØªÙˆØ¬Ø¯ Ø¥Ø­ØµØ§Ø¦ÙŠØ§Øª Ø­ØªÙ‰ Ø§Ù„Ø¢Ù†.',
    empty_testimonials: 'Ù„Ø§ ØªÙˆØ¬Ø¯ Ø¢Ø±Ø§Ø¡ Ø­ØªÙ‰ Ø§Ù„Ø¢Ù†.',
    confirm_delete_generic: 'Ù‡Ù„ Ø£Ù†Øª Ù…ØªØ£ÙƒØ¯ Ù…Ù† Ø­Ø°Ù Ù‡Ø°Ø§ Ø§Ù„Ø¹Ù†ØµØ±ØŸ',
    toast_upload_success: 'ØªÙ… Ø±ÙØ¹ Ø§Ù„Ù…Ù„Ù Ø¨Ù†Ø¬Ø§Ø­', toast_upload_error: 'ÙØ´Ù„ Ø§Ù„Ø±ÙØ¹ â€” Ø¬Ø±Ø¨ Ù…Ù„ÙØ§Ù‹ Ø£ØµØºØ± Ø£Ùˆ ØµÙŠØºØ© Ù…Ø®ØªÙ„ÙØ©',
    saving: 'Ø¬Ø§Ø±Ù Ø§Ù„Ø­ÙØ¸...', submitting: 'Ø¬Ø§Ø±Ù Ø§Ù„Ø¥Ø±Ø³Ø§Ù„...',
    validation_required: 'Ù‡Ø°Ø§ Ø§Ù„Ø­Ù‚Ù„ Ù…Ø·Ù„ÙˆØ¨.', validation_invalid_email: 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ­ÙŠØ­.',
    validation_invalid_url: 'ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ Ø±Ø§Ø¨Ø· ØµØ­ÙŠØ­.', validation_duplicate_cert: 'Ø±Ù‚Ù… Ø§Ù„Ø´Ù‡Ø§Ø¯Ø© Ù‡Ø°Ø§ Ù…ÙˆØ¬ÙˆØ¯ Ù…Ø³Ø¨Ù‚Ø§Ù‹.',
    dark_mode_toggle: 'Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„Ù„ÙŠÙ„ÙŠ', light_mode_toggle: 'Ø§Ù„ÙˆØ¶Ø¹ Ø§Ù„Ù†Ù‡Ø§Ø±ÙŠ',
    empty_courses: 'Ù„Ø§ ØªÙˆØ¬Ø¯ Ø¯ÙˆØ±Ø§Øª Ø­ØªÙ‰ Ø§Ù„Ø¢Ù†.', view_website: 'Ø²ÙŠØ§Ø±Ø© Ø§Ù„Ù…ÙˆÙ‚Ø¹'
  }
};

function nawahGetLang(){
  return localStorage.getItem('nawah_lang') || 'en';
}
function nawahSetLang(lang){
  localStorage.setItem('nawah_lang', lang);
  nawahApplyLang();
}
function nawahT(key){
  const lang = nawahGetLang();
  return (NAWAH_I18N[lang] && NAWAH_I18N[lang][key]) || (NAWAH_I18N.en[key]) || key;
}
function nawahApplyLang(){
  const lang = nawahGetLang();
  const dict = NAWAH_I18N[lang] || NAWAH_I18N.en;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', dict.dir);
  document.body.classList.toggle('rtl', dict.dir === 'rtl');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.dispatchEvent(new CustomEvent('nawah-lang-changed', { detail: { lang } }));
}
document.addEventListener('DOMContentLoaded', nawahApplyLang);


/* ===== common.js ===== */
/* ==========================================================================
   NAWAH Verify â€” Shared utilities: API helpers, dynamic branding/theme,
   header/footer, auth, validation, uploads, toast
   ========================================================================== */

const NAWAH_IN_ADMIN = window.location.pathname.includes('/admin/');
const NAWAH_ASSET_BASE = NAWAH_IN_ADMIN ? '../' : '';

/* ---------------- Browser storage API ----------------
   The original export depended on Base44's private /tables API. Netlify only
   hosts static files, so the same CRUD interface is implemented with localStorage.
   It keeps the public pages and admin demo working after deployment. */
const NAWAH_STORAGE_KEY = 'nawah-verify-data-v1';
const NAWAH_DEFAULT_DATA = {
  certificates: [
    { id: 'cert-1', certificate_number: 'NMH-2026-000001', student_name: 'Ahmad Al-Hassan', student_name_ar: 'Ø£Ø­Ù…Ø¯ Ø§Ù„Ø­Ø³Ù†', course_name: 'Basic Life Support', course_name_ar: 'Ø¯Ø¹Ù… Ø§Ù„Ø­ÙŠØ§Ø© Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ', instructor: 'Dr. Sarah Khalil', training_hours: 8, issue_date: '2026-01-15', expiry_date: '2028-01-15', status: 'active', revoke_reason: '' },
    { id: 'cert-4', certificate_number: 'NMH-2026-000004', student_name: 'Lina Saad', student_name_ar: 'Ù„ÙŠÙ†Ø§ Ø³Ø¹Ø¯', course_name: 'First Aid', course_name_ar: 'Ø§Ù„Ø¥Ø³Ø¹Ø§ÙØ§Øª Ø§Ù„Ø£ÙˆÙ„ÙŠØ©', instructor: 'Dr. Sarah Khalil', training_hours: 6, issue_date: '2025-03-01', expiry_date: '2027-03-01', status: 'revoked', revoke_reason: 'Certificate withdrawn for administrative review.' },
    { id: 'cert-5', certificate_number: 'NMH-2026-000005', student_name: 'Omar Nasser', student_name_ar: 'Ø¹Ù…Ø± Ù†Ø§ØµØ±', course_name: 'Infection Control', course_name_ar: 'Ù…ÙƒØ§ÙØ­Ø© Ø§Ù„Ø¹Ø¯ÙˆÙ‰', instructor: 'Dr. Sarah Khalil', training_hours: 5, issue_date: '2023-01-10', expiry_date: '2025-01-10', status: 'active', revoke_reason: '' }
  ],
  students: [
    { id: 'student-1', full_name: 'Ahmad Al-Hassan', full_name_ar: 'Ø£Ø­Ù…Ø¯ Ø§Ù„Ø­Ø³Ù†', email: 'ahmad@example.com', phone: '', national_id: '', notes: '' }
  ],
  courses: [
    { id: 'course-1', course_name: 'Basic Life Support', course_name_ar: 'Ø¯Ø¹Ù… Ø§Ù„Ø­ÙŠØ§Ø© Ø§Ù„Ø£Ø³Ø§Ø³ÙŠ', description: 'Essential emergency response skills.', default_hours: 8, instructor: 'Dr. Sarah Khalil' },
    { id: 'course-2', course_name: 'First Aid', course_name_ar: 'Ø§Ù„Ø¥Ø³Ø¹Ø§ÙØ§Øª Ø§Ù„Ø£ÙˆÙ„ÙŠØ©', description: 'Practical first aid training.', default_hours: 6, instructor: 'Dr. Sarah Khalil' }
  ],
  verification_logs: [],
  admin_users: [
    { id: 'admin-1', username: 'admin', password: 'Nawah@2026', full_name: 'Administrator', role: 'administrator', email: 'admin@example.com' },
    { id: 'admin-2', username: 'instructor', password: 'Instr@2026', full_name: 'Instructor', role: 'instructor', email: 'instructor@example.com' },
    { id: 'admin-3', username: 'viewer', password: 'View@2026', full_name: 'Viewer', role: 'viewer', email: 'viewer@example.com' }
  ],
  academy_settings: [{ id: 'academy-1', academy_name: 'NAWAH Medical Academy', academy_name_ar: 'Ø£ÙƒØ§Ø¯ÙŠÙ…ÙŠØ© Ù†ÙˆØ§Ø© Ø§Ù„Ø·Ø¨ÙŠØ©', website: '', support_email: '' }],
  theme_settings: [{ id: 'theme-1', primary_color: '#0F3D7A', secondary_color: '#28A745' }],
  site_settings: [{ id: 'site-1', homepage_show_stats: true, homepage_show_courses: true, homepage_show_partners: true, homepage_show_testimonials: true, verification_log_enabled: true }],
  social_links: [], homepage_sections: [], homepage_stats: [], partners: [], testimonials: [], settings: []
};
function nawahReadData() {
  try {
    const saved = localStorage.getItem(NAWAH_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) { console.warn('Could not read saved NAWAH data', e); }
  const data = JSON.parse(JSON.stringify(NAWAH_DEFAULT_DATA));
  localStorage.setItem(NAWAH_STORAGE_KEY, JSON.stringify(data));
  return data;
}
function nawahWriteData(data) { localStorage.setItem(NAWAH_STORAGE_KEY, JSON.stringify(data)); }
function nawahTable(data, table) { return Array.isArray(data[table]) ? data[table] : (data[table] = []); }
function nawahNewId(table) { return `${table}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`; }
async function apiList(table, opts = {}) {
  let rows = nawahTable(nawahReadData(), table);
  if (opts.search) {
    const q = String(opts.search).toLowerCase();
    rows = rows.filter(row => JSON.stringify(row).toLowerCase().includes(q));
  }
  return { data: rows.slice(0, opts.limit || rows.length) };
}
async function apiGetAll(table) { return (await apiList(table, { limit: 500 })).data; }
async function apiGet(table, id) { return nawahTable(nawahReadData(), table).find(row => row.id === id) || null; }
async function apiCreate(table, payload) {
  const data = nawahReadData(); const row = { id: nawahNewId(table), ...payload };
  nawahTable(data, table).push(row); nawahWriteData(data); return row;
}
async function apiUpdate(table, id, payload) {
  const data = nawahReadData(); const rows = nawahTable(data, table); const i = rows.findIndex(row => row.id === id);
  if (i < 0) throw new Error('Record not found');
  rows[i] = { ...rows[i], ...payload, id }; nawahWriteData(data); return rows[i];
}
async function apiDelete(table, id) {
  const data = nawahReadData(); const rows = nawahTable(data, table); const i = rows.findIndex(row => row.id === id);
  if (i < 0) return false;
  rows.splice(i, 1); nawahWriteData(data); return true;
}
/* Singleton-row tables (one settings row per table) */
async function apiGetSingleton(table) {
  const all = await apiGetAll(table);
  return all[0] || null;
}
async function apiSaveSingleton(table, id, payload) {
  if (id) return apiUpdate(table, id, payload);
  return apiCreate(table, payload);
}
/* Prevent duplicate certificate numbers (case-insensitive) */
async function isCertificateNumberTaken(number, excludeId) {
  if (!number) return false;
  const clean = number.trim().toUpperCase();
  const all = await apiGetAll('certificates');
  return all.some(c => c.id !== excludeId && (c.certificate_number || '').toUpperCase() === clean);
}

/* ---------------- Certificate helpers ---------------- */
async function findCertificateByNumber(number) {
  if (!number) return null;
  const clean = number.trim().toUpperCase();
  const all = await apiGetAll('certificates');
  return all.find(c => (c.certificate_number || '').toUpperCase() === clean) || null;
}
function computeEffectiveStatus(cert) {
  if (!cert) return 'not_found';
  if (cert.status === 'revoked') return 'revoked';
  if (cert.expiry_date && new Date(cert.expiry_date).getTime() < Date.now()) return 'expired';
  if (cert.status === 'expired') return 'expired';
  return 'active';
}
async function logVerification(certificate_number, result) {
  try {
    const site = await getCachedSiteSettings();
    if (site && site.verification_log_enabled === false) return;
    await apiCreate('verification_logs', {
      certificate_number: certificate_number || '',
      verification_date: new Date().toISOString(),
      browser: detectBrowser(),
      device: detectDevice(),
      country: '',
      result: result
    });
  } catch (e) { /* silent */ }
}
function detectBrowser(){
  const ua = navigator.userAgent;
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari')) return 'Safari';
  return 'Other';
}
function detectDevice(){
  const ua = navigator.userAgent;
  if (/Mobi|Android/i.test(ua)) return 'Mobile';
  if (/Tablet|iPad/i.test(ua)) return 'Tablet';
  return 'Desktop';
}
function formatDate(iso, opts = {}) {
  if (!iso) return nawahT('none');
  const d = new Date(iso);
  if (isNaN(d.getTime())) return nawahT('none');
  const lang = nawahGetLang();
  return d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', ...opts });
}
function formatDateTime(iso) {
  if (!iso) return nawahT('none');
  const d = new Date(iso);
  if (isNaN(d.getTime())) return nawahT('none');
  const lang = nawahGetLang();
  return d.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}
function statusBadgeHtml(status) {
  const map = {
    active: { cls: 'badge-active', icon: 'fa-circle-check', key: 'status_active' },
    revoked: { cls: 'badge-revoked', icon: 'fa-ban', key: 'status_revoked' },
    expired: { cls: 'badge-expired', icon: 'fa-clock', key: 'status_expired' }
  };
  const m = map[status] || map.active;
  return `<span class="badge ${m.cls}"><i class="fa-solid ${m.icon}"></i> ${nawahT(m.key)}</span>`;
}
function certificateVerifyUrl(certNumber) {
  return `${window.location.origin}/certificate/${encodeURIComponent(certNumber)}`;
}
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}

/* ---------------- Toast ---------------- */
function showToast(message, type = 'info') {
  let toast = document.getElementById('nawah-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'nawah-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  const iconMap = { success: 'fa-circle-check', error: 'fa-circle-exclamation', info: 'fa-circle-info' };
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid ${iconMap[type] || iconMap.info}"></i><span>${message}</span>`;
  requestAnimationFrame(() => toast.classList.add('show'));
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ---------------- Form validation helpers ---------------- */
function markFieldError(inputEl, message) {
  if (!inputEl) return;
  inputEl.classList.add('field-invalid');
  let hint = inputEl.parentElement.querySelector('.field-error-msg');
  if (!hint) {
    hint = document.createElement('div');
    hint.className = 'field-error-msg';
    inputEl.parentElement.appendChild(hint);
  }
  hint.textContent = message;
}
function clearFieldError(inputEl) {
  if (!inputEl) return;
  inputEl.classList.remove('field-invalid');
  const hint = inputEl.parentElement.querySelector('.field-error-msg');
  if (hint) hint.remove();
}
function clearAllFieldErrors(formEl) {
  if (!formEl) return;
  formEl.querySelectorAll('.field-invalid').forEach(el => clearFieldError(el));
}
function validateRequired(inputEl) {
  const val = (inputEl.value || '').trim();
  if (!val) { markFieldError(inputEl, nawahT('validation_required')); return false; }
  clearFieldError(inputEl);
  return true;
}
function validateEmail(inputEl, required = false) {
  const val = (inputEl.value || '').trim();
  if (!val) {
    if (required) { markFieldError(inputEl, nawahT('validation_required')); return false; }
    clearFieldError(inputEl); return true;
  }
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  if (!ok) { markFieldError(inputEl, nawahT('validation_invalid_email')); return false; }
  clearFieldError(inputEl);
  return true;
}
function validateUrl(inputEl, required = false) {
  const val = (inputEl.value || '').trim();
  if (!val) {
    if (required) { markFieldError(inputEl, nawahT('validation_required')); return false; }
    clearFieldError(inputEl); return true;
  }
  const ok = /^https?:\/\/.+/i.test(val) || /^www\..+/i.test(val);
  if (!ok) { markFieldError(inputEl, nawahT('validation_invalid_url')); return false; }
  clearFieldError(inputEl);
  return true;
}

/* Wrap a submit handler to prevent double-submission and show a loading state on the button */
function guardSubmit(button, handler) {
  return async function (e) {
    if (e && e.preventDefault) e.preventDefault();
    if (button.disabled) return;
    const originalHtml = button.innerHTML;
    button.disabled = true;
    button.dataset.origHtml = originalHtml;
    button.innerHTML = `<i class="fa-solid fa-circle-notch spin"></i> ${nawahT('saving')}`;
    try {
      await handler(e);
    } catch (err) {
      console.error(err);
      showToast(nawahT('validation_required') === err.message ? err.message : (err.message || 'Error'), 'error');
    } finally {
      button.disabled = false;
      button.innerHTML = button.dataset.origHtml || originalHtml;
    }
  };
}

/* ---------------- File upload helpers (data-URL based, static-site friendly) ---------------- */
const NAWAH_MAX_UPLOAD_BYTES = 1.8 * 1024 * 1024; // ~1.8MB safety cap for table text fields
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) { reject(new Error('No file selected')); return; }
    if (file.size > NAWAH_MAX_UPLOAD_BYTES) {
      reject(new Error(nawahT('toast_upload_error')));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(nawahT('toast_upload_error')));
    reader.readAsDataURL(file);
  });
}
/* Wire a <input type=file> to preview into an <img>, and optionally store the resulting dataURL */
function wireFileInputPreview(inputEl, previewImgEl, onLoaded) {
  if (!inputEl) return;
  inputEl.addEventListener('change', async () => {
    const file = inputEl.files && inputEl.files[0];
    if (!file) return;
    try {
      const dataUrl = await readFileAsDataUrl(file);
      if (previewImgEl) { previewImgEl.src = dataUrl; previewImgEl.style.display = ''; }
      if (onLoaded) onLoaded(dataUrl, file);
    } catch (err) {
      showToast(err.message || nawahT('toast_upload_error'), 'error');
      inputEl.value = '';
    }
  });
}

/* ---------------- Dynamic Academy / Theme / Site / Social settings (cached) ---------------- */
let _nawahAcademyPromise = null;
let _nawahThemePromise = null;
let _nawahSitePromise = null;
let _nawahSocialPromise = null;

function getCachedAcademySettings(force) {
  if (!_nawahAcademyPromise || force) {
    _nawahAcademyPromise = apiGetAll('academy_settings').then(a => a[0] || {}).catch(() => ({}));
  }
  return _nawahAcademyPromise;
}
function getCachedThemeSettings(force) {
  if (!_nawahThemePromise || force) {
    _nawahThemePromise = apiGetAll('theme_settings').then(a => a[0] || {}).catch(() => ({}));
  }
  return _nawahThemePromise;
}
function getCachedSiteSettings(force) {
  if (!_nawahSitePromise || force) {
    _nawahSitePromise = apiGetAll('site_settings').then(a => a[0] || {}).catch(() => ({}));
  }
  return _nawahSitePromise;
}
function getCachedSocialLinks(force) {
  if (!_nawahSocialPromise || force) {
    _nawahSocialPromise = apiGetAll('social_links').then(a => a.sort((x, y) => (x.display_order || 0) - (y.display_order || 0))).catch(() => []);
  }
  return _nawahSocialPromise;
}
function nawahInvalidateSettingsCache() {
  _nawahAcademyPromise = null; _nawahThemePromise = null; _nawahSitePromise = null; _nawahSocialPromise = null;
}

/* Resolve a stored asset value (data URL / absolute URL / relative site path) to a usable <img src> */
function resolveAssetUrl(url) {
  if (!url) return '';
  if (/^(https?:)?\/\//i.test(url) || url.startsWith('data:')) return url;
  return NAWAH_ASSET_BASE + url;
}
const NAWAH_SOCIAL_ICON_MAP = {
  facebook: 'fa-brands fa-facebook', instagram: 'fa-brands fa-instagram', linkedin: 'fa-brands fa-linkedin',
  telegram: 'fa-brands fa-telegram', youtube: 'fa-brands fa-youtube', twitter: 'fa-brands fa-x-twitter', other: 'fa-solid fa-link'
};

/* Apply logo / academy name / theme colors / dark-mode across the current page */
async function applyDynamicBranding() {
  try {
    const [academy, theme] = await Promise.all([getCachedAcademySettings(), getCachedThemeSettings()]);
    const lang = nawahGetLang();

    // Favicon
    const favUrl = resolveAssetUrl(academy.favicon_url || academy.logo_url) || (NAWAH_ASSET_BASE + 'images/logo.png');
    let favEl = document.querySelector('link[rel="icon"]');
    if (!favEl) { favEl = document.createElement('link'); favEl.rel = 'icon'; document.head.appendChild(favEl); }
    if (favUrl) favEl.href = favUrl;

    // Logos everywhere marked with .dyn-logo
    const logoSrc = resolveAssetUrl(academy.logo_url) || (NAWAH_ASSET_BASE + 'images/logo.png');
    document.querySelectorAll('.dyn-logo').forEach(img => { img.src = logoSrc; img.alt = academy.academy_name || 'Logo'; });

    // Academy name text everywhere marked with [data-dyn="academy_name"]
    const name = (lang === 'ar' && academy.academy_name_ar) ? academy.academy_name_ar : (academy.academy_name || nawahT('academy_name'));
    document.querySelectorAll('[data-dyn="academy_name"]').forEach(el => { el.textContent = name; });

    // Theme colors / typography / button style
    if (theme && Object.keys(theme).length) {
      const root = document.documentElement.style;
      if (theme.primary_color) { root.setProperty('--nawah-blue', theme.primary_color); root.setProperty('--nawah-blue-dark', shadeColor(theme.primary_color, -18)); root.setProperty('--nawah-blue-light', shadeColor(theme.primary_color, 88)); }
      if (theme.secondary_color) { root.setProperty('--nawah-green', theme.secondary_color); root.setProperty('--nawah-green-dark', shadeColor(theme.secondary_color, -18)); root.setProperty('--nawah-green-light', shadeColor(theme.secondary_color, 88)); }
      if (theme.background_color) root.setProperty('--nawah-gray', theme.background_color);
      if (theme.text_color) root.setProperty('--nawah-text', theme.text_color);
      if (theme.border_radius) { root.setProperty('--radius-sm', theme.border_radius); }
      document.body.classList.remove('btn-style-rounded', 'btn-style-pill', 'btn-style-square');
      document.body.classList.add('btn-style-' + (theme.button_style || 'rounded'));
      const fontMap = { inter: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", cairo: "'Cairo', 'Tajawal', sans-serif", poppins: "'Poppins', sans-serif", tajawal: "'Tajawal', sans-serif" };
      if (theme.font_family && fontMap[theme.font_family]) root.setProperty('--font-en', fontMap[theme.font_family]);

      document.querySelectorAll('.dark-mode-toggle-btn').forEach(b => { b.style.display = theme.dark_mode_enabled === false ? 'none' : ''; });
      if (!localStorage.getItem('nawah_color_mode') && theme.default_mode === 'dark') {
        document.body.classList.add('dark-mode');
      }
    }
    if (localStorage.getItem('nawah_color_mode') === 'dark') document.body.classList.add('dark-mode');
    document.querySelectorAll('.dark-mode-toggle-btn i').forEach(i => {
      i.className = document.body.classList.contains('dark-mode') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
  } catch (e) { console.error('applyDynamicBranding failed', e); }
}
/* small helper: lighten(+)/darken(-) a hex color by percent, used to derive shade variants */
function shadeColor(hex, percent) {
  try {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    let r = parseInt(hex.substring(0, 2), 16), g = parseInt(hex.substring(2, 4), 16), b = parseInt(hex.substring(4, 6), 16);
    const amt = Math.round(2.55 * percent);
    r = Math.max(0, Math.min(255, r + amt));
    g = Math.max(0, Math.min(255, g + amt));
    b = Math.max(0, Math.min(255, b + amt));
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
  } catch (e) { return hex; }
}
function toggleColorMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('nawah_color_mode', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  document.querySelectorAll('.dark-mode-toggle-btn i').forEach(i => {
    i.className = document.body.classList.contains('dark-mode') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  });
}

/* ---------------- Auth / session (demo, client-side only) ---------------- */
const NAWAH_SESSION_KEY = 'nawah_session';
function setSession(user) {
  sessionStorage.setItem(NAWAH_SESSION_KEY, JSON.stringify(user));
}
function getSession() {
  try { return JSON.parse(sessionStorage.getItem(NAWAH_SESSION_KEY)); } catch (e) { return null; }
}
function clearSession() {
  sessionStorage.removeItem(NAWAH_SESSION_KEY);
}
function requireAuth() {
  const session = getSession();
  if (!session) {
    // admin pages live under /admin/, public pages at root â€” detect which base to use
    window.location.href = NAWAH_IN_ADMIN ? '../login.html' : 'login.html';
    return null;
  }
  return session;
}
async function attemptLogin(username, password) {
  const users = await apiGetAll('admin_users');
  const found = users.find(u => u.username === username && u.password === password);
  return found || null;
}

/* ---------------- Header / Footer injection ---------------- */
const NAWAH_PUBLIC_NAV = [
  { key: 'nav_home', href: 'index.html' },
  { key: 'nav_verify', href: 'verify.html' },
  { key: 'nav_search', href: 'search.html' },
  { key: 'nav_admin', href: 'login.html' }
];

function renderSiteHeader(activeHref) {
  const el = document.getElementById('site-header');
  if (!el) return;
  const navLinks = NAWAH_PUBLIC_NAV.map(n =>
    `<a href="${n.href}" data-i18n="${n.key}" class="${activeHref === n.href ? 'active' : ''}"></a>`
  ).join('');
  el.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="brand">
        <img src="${NAWAH_ASSET_BASE}images/logo.png" alt="NAWAH Medical Academy" class="logo dyn-logo">
        <span class="brand-text">
          <strong data-dyn="academy_name" data-i18n="academy_name"></strong>
          <span data-i18n="system_name"></span>
        </span>
      </a>
      <nav class="main-nav" id="main-nav">${navLinks}</nav>
      <div class="header-actions">
        <button class="icon-btn dark-mode-toggle-btn" id="dark-mode-toggle-btn" title="Dark Mode" style="display:none;"><i class="fa-solid fa-moon"></i></button>
        <div class="lang-switch">
          <button data-lang="en" onclick="nawahSetLang('en')">EN</button>
          <button data-lang="ar" onclick="nawahSetLang('ar')">AR</button>
        </div>
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu"><i class="fa-solid fa-bars"></i></button>
      </div>
    </div>`;
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
  const dm = document.getElementById('dark-mode-toggle-btn');
  if (dm) dm.addEventListener('click', toggleColorMode);
  nawahApplyLang();
  applyDynamicBranding();
}

async function renderSiteFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  const year = new Date().getFullYear();
  el.innerHTML = `
    <div class="footer-grid">
      <div class="f-brand">
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="${NAWAH_ASSET_BASE}images/logo.png" alt="logo" class="dyn-logo" style="width:42px;height:42px;object-fit:contain;border-radius:8px;background:#fff;padding:2px;">
          <strong data-dyn="academy_name" data-i18n="academy_name"></strong>
        </div>
        <p id="footer-about-text" data-i18n="footer_about" style="margin-top:12px;font-size:.85rem;"></p>
        <div class="footer-social" id="footer-social"></div>
      </div>
      <div>
        <h4 data-i18n="footer_links"></h4>
        <ul>
          <li><a href="index.html" data-i18n="nav_home"></a></li>
          <li><a href="verify.html" data-i18n="nav_verify"></a></li>
          <li><a href="search.html" data-i18n="nav_search"></a></li>
          <li><a href="login.html" data-i18n="nav_admin"></a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n="footer_contact"></h4>
        <ul id="footer-contact-list">
          <li><i class="fa-solid fa-globe"></i> nawa.base44.app</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom" id="footer-copyright">
      &copy; ${year} <span data-dyn="academy_name" data-i18n="academy_name"></span> â€” <span data-i18n="footer_rights"></span>
    </div>`;
  nawahApplyLang();
  applyDynamicBranding();

  try {
    const [academy, social] = await Promise.all([getCachedAcademySettings(), getCachedSocialLinks()]);
    const lang = nawahGetLang();

    // Contact list
    const contactItems = [];
    if (academy.email) contactItems.push(`<li><a href="mailto:${escapeHtml(academy.email)}"><i class="fa-solid fa-envelope"></i> ${escapeHtml(academy.email)}</a></li>`);
    if (academy.phone) contactItems.push(`<li><a href="tel:${escapeHtml(academy.phone)}"><i class="fa-solid fa-phone"></i> ${escapeHtml(academy.phone)}</a></li>`);
    if (academy.whatsapp) contactItems.push(`<li><a href="https://wa.me/${encodeURIComponent(academy.whatsapp.replace(/[^\d+]/g, ''))}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> ${escapeHtml(academy.whatsapp)}</a></li>`);
    const address = (lang === 'ar' && academy.address_ar) ? academy.address_ar : academy.address;
    if (address) contactItems.push(`<li><i class="fa-solid fa-location-dot"></i> ${escapeHtml(address)}</li>`);
    if (academy.website) contactItems.push(`<li><a href="${escapeHtml(academy.website)}" target="_blank" rel="noopener"><i class="fa-solid fa-globe"></i> ${escapeHtml(academy.website.replace(/^https?:\/\//, ''))}</a></li>`);
    const contactList = document.getElementById('footer-contact-list');
    if (contactList && contactItems.length) contactList.innerHTML = contactItems.join('');

    // About text
    const aboutEl = document.getElementById('footer-about-text');
    const desc = (lang === 'ar' && academy.description_ar) ? academy.description_ar : academy.description;
    if (aboutEl && desc) { aboutEl.removeAttribute('data-i18n'); aboutEl.innerHTML = desc; }

    // Social icons
    const socialEl = document.getElementById('footer-social');
    if (socialEl) {
      const active = (social || []).filter(s => s.active !== false && s.url);
      socialEl.innerHTML = active.map(s => `
        <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener" class="footer-social-icon" title="${escapeHtml(s.platform)}">
          <i class="${escapeHtml(s.icon) || NAWAH_SOCIAL_ICON_MAP[s.platform] || 'fa-solid fa-link'}"></i>
        </a>`).join('');
    }

    // Copyright
    const copyEl = document.getElementById('footer-copyright');
    const copy = (lang === 'ar' && academy.copyright_text_ar) ? academy.copyright_text_ar : academy.copyright_text;
    if (copyEl && copy) { copyEl.removeAttribute('data-i18n'); copyEl.innerHTML = escapeHtml(copy); }
  } catch (e) { /* keep static fallback footer content */ }
}

/* ---------------- Admin layout ---------------- */
const NAWAH_ADMIN_NAV = [
  { key: 'sd_dashboard', href: 'dashboard.html', icon: 'fa-gauge-high' },
  { key: 'sd_certificates', href: 'certificates.html', icon: 'fa-certificate' },
  { key: 'sd_students', href: 'students.html', icon: 'fa-user-graduate' },
  { key: 'sd_courses', href: 'courses.html', icon: 'fa-book-medical' },
  { key: 'sd_homepage', href: 'homepage.html', icon: 'fa-house' },
  { key: 'sd_partners', href: 'partners.html', icon: 'fa-handshake' },
  { key: 'sd_media', href: 'media.html', icon: 'fa-photo-film' },
  { key: 'sd_academy_settings', href: 'academy-settings.html', icon: 'fa-building-columns' },
  { key: 'sd_website_settings', href: 'website-settings.html', icon: 'fa-sliders' },
  { key: 'sd_logs', href: 'logs.html', icon: 'fa-clipboard-list' }
];

function renderAdminLayout(activeHref, titleKey) {
  const session = requireAuth();
  if (!session) return null;
  const sidebarEl = document.getElementById('admin-sidebar');
  const topbarEl = document.getElementById('admin-topbar');
  if (sidebarEl) {
    const navLinks = NAWAH_ADMIN_NAV.map(n =>
      `<a href="${n.href}" class="${activeHref === n.href ? 'active' : ''}"><i class="fa-solid ${n.icon}"></i> <span data-i18n="${n.key}"></span></a>`
    ).join('');
    sidebarEl.innerHTML = `
      <a href="../index.html" class="brand">
        <img src="../images/logo.png" alt="logo" class="logo dyn-logo">
        <span class="brand-text">
          <strong data-dyn="academy_name" data-i18n="academy_name"></strong>
          <span data-i18n="system_name"></span>
        </span>
      </a>
      <nav class="admin-nav">
        ${navLinks}
        <div class="nav-divider"></div>
        <a href="../index.html"><i class="fa-solid fa-arrow-up-right-from-square"></i> <span data-i18n="sd_backsite"></span></a>
        <a href="#" id="admin-logout-btn"><i class="fa-solid fa-right-from-bracket"></i> <span data-i18n="sd_logout"></span></a>
      </nav>`;
    document.getElementById('admin-logout-btn').addEventListener('click', (e) => {
      e.preventDefault();
      clearSession();
      window.location.href = '../login.html';
    });
  }
  if (topbarEl) {
    topbarEl.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;">
        <button class="sidebar-toggle" id="sidebar-toggle"><i class="fa-solid fa-bars"></i></button>
        <h1 data-i18n="${titleKey}"></h1>
      </div>
      <div style="display:flex;align-items:center;gap:12px;">
        <button class="icon-btn dark-mode-toggle-btn" id="dark-mode-toggle-btn" title="Dark Mode" style="display:none;"><i class="fa-solid fa-moon"></i></button>
        <div class="lang-switch">
          <button data-lang="en" onclick="nawahSetLang('en')">EN</button>
          <button data-lang="ar" onclick="nawahSetLang('ar')">AR</button>
        </div>
        <div class="admin-user-chip">
          <i class="fa-solid fa-circle-user"></i> ${escapeHtml(session.full_name)}
          <span class="role-tag" data-i18n="role_${session.role}"></span>
        </div>
      </div>`;
    const st = document.getElementById('sidebar-toggle');
    if (st) st.addEventListener('click', () => document.getElementById('admin-sidebar').classList.toggle('open'));
    const dm = document.getElementById('dark-mode-toggle-btn');
    if (dm) dm.addEventListener('click', toggleColorMode);
  }
  nawahApplyLang();
  applyDynamicBranding();
  return session;
}

document.addEventListener('nawah-lang-changed', () => {
  // re-apply role tag translation in topbar user chip if present
  const session = getSession();
  if (session) {
    document.querySelectorAll('.role-tag').forEach(t => {
      t.textContent = nawahT(`role_${session.role}`);
    });
  }
  applyDynamicBranding();
});


/* ===== homepage.js ===== */
if (document.getElementById('home-verify-form')) {
/* ==========================================================================
   NAWAH Verify â€” Homepage dynamic content loader
   Pulls hero / mission / vision / about / stats / courses / partners /
   testimonials from the database. Falls back to i18n defaults when a
   section has no admin-entered content yet, so the page never looks broken.
   ========================================================================== */

function hpLang() { return nawahGetLang(); }
function hpText(row, field) {
  if (!row) return '';
  const lang = hpLang();
  const arField = field + '_ar';
  return (lang === 'ar' && row[arField]) ? row[arField] : (row[field] || '');
}
function hpEscape(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}
function starsHtml(rating) {
  const r = Math.max(0, Math.min(5, Number(rating) || 5));
  let html = '';
  for (let i = 0; i < 5; i++) html += `<i class="fa-solid fa-star" style="${i < r ? '' : 'opacity:.25;'}"></i>`;
  return html;
}

async function loadHomepageSections() {
  try {
    const [sections, site] = await Promise.all([apiGetAll('homepage_sections'), getCachedSiteSettings()]);
    const byKey = {};
    (sections || []).forEach(s => { byKey[s.section_key] = s; });

    // Hero
    const hero = byKey.hero;
    if (hero && hero.active !== false) {
      const t = hpText(hero, 'title'); const st = hpText(hero, 'subtitle');
      if (t) { document.getElementById('hero-title').textContent = t; document.getElementById('hero-title').removeAttribute('data-i18n'); }
      if (st) { document.getElementById('hero-subtitle').textContent = st; document.getElementById('hero-subtitle').removeAttribute('data-i18n'); }
    }

    // Mission
    const mission = byKey.mission;
    if (mission && mission.active !== false && (hpText(mission, 'content') || hpText(mission, 'title'))) {
      document.getElementById('mission-section').style.display = '';
      document.getElementById('mission-title').textContent = hpText(mission, 'title') || nawahT('mission_title');
      document.getElementById('mission-content').innerHTML = hpText(mission, 'content');
    }

    // Vision
    const vision = byKey.vision;
    if (vision && vision.active !== false && (hpText(vision, 'content') || hpText(vision, 'title'))) {
      document.getElementById('vision-section').style.display = '';
      document.getElementById('vision-title').textContent = hpText(vision, 'title') || nawahT('vision_title');
      document.getElementById('vision-content').innerHTML = hpText(vision, 'content');
    }

    // About
    const about = byKey.about;
    if (about && about.active !== false && (hpText(about, 'content') || hpText(about, 'title'))) {
      document.getElementById('about-section').style.display = '';
      document.getElementById('about-title').textContent = hpText(about, 'title') || nawahT('about_title');
      document.getElementById('about-content').innerHTML = hpText(about, 'content');
      if (about.image_url) {
        const img = document.getElementById('about-image');
        img.src = resolveAssetUrl(about.image_url);
        img.style.display = '';
      }
    }

    // Section visibility toggles from site_settings
    const showStats = !site || site.homepage_show_stats !== false;
    const showCourses = !site || site.homepage_show_courses !== false;
    const showPartners = !site || site.homepage_show_partners !== false;
    const showTestimonials = !site || site.homepage_show_testimonials !== false;

    if (showStats) await loadHomepageStats();
    if (showCourses) await loadHomepageCourses();
    if (showPartners) await loadHomepagePartners();
    if (showTestimonials) await loadHomepageTestimonials();
  } catch (e) {
    console.error('loadHomepageSections failed', e);
  }
}

async function loadHomepageStats() {
  try {
    const stats = (await apiGetAll('homepage_stats')).filter(s => s.active !== false)
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
    if (!stats.length) return;
    const colors = ['var(--nawah-blue)', 'var(--nawah-green)', 'var(--nawah-red)', 'var(--nawah-amber)'];
    const grid = document.getElementById('stats-grid');
    grid.innerHTML = stats.map((s, i) => `
      <div class="stat-card">
        <div class="stat-icon" style="background:${colors[i % colors.length]};"><i class="fa-solid ${hpEscape(s.icon) || 'fa-chart-line'}"></i></div>
        <div class="stat-info"><strong>${hpEscape(s.value)}</strong><span>${hpEscape(hpText(s, 'label'))}</span></div>
      </div>`).join('');
    document.getElementById('stats-section').style.display = '';
  } catch (e) { console.error(e); }
}

async function loadHomepageCourses() {
  try {
    const courses = (await apiGetAll('courses')).slice(0, 8);
    if (!courses.length) return;
    const icons = ['fa-heart-pulse', 'fa-user-nurse', 'fa-syringe', 'fa-stethoscope', 'fa-kit-medical', 'fa-hospital'];
    const grid = document.getElementById('courses-grid');
    grid.innerHTML = courses.map((c, i) => `
      <div class="feature-card">
        <div class="icon"><i class="fa-solid ${icons[i % icons.length]}"></i></div>
        <h3>${hpEscape(c.course_name)}</h3>
        <p>${hpEscape(c.description) || (c.default_hours ? (c.default_hours + ' h') : '')}</p>
      </div>`).join('');
    document.getElementById('courses-section').style.display = '';
  } catch (e) { console.error(e); }
}

async function loadHomepagePartners() {
  try {
    const partners = (await apiGetAll('partners')).filter(p => p.active !== false)
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
    if (!partners.length) return;
    const slider = document.getElementById('partners-slider');
    slider.innerHTML = partners.map(p => {
      const logo = p.logo_url ? resolveAssetUrl(p.logo_url) : '';
      const name = hpEscape(hpText(p, 'name'));
      const desc = hpEscape(hpText(p, 'description'));
      const inner = `
        ${logo ? `<img src="${logo}" alt="${name}">` : `<div style="height:64px;display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-building" style="font-size:1.8rem;color:var(--nawah-blue-light);"></i></div>`}
        <strong>${name}</strong>
        <p>${desc}</p>`;
      return p.website_url
        ? `<a class="partner-card" href="${hpEscape(p.website_url)}" target="_blank" rel="noopener">${inner}</a>`
        : `<div class="partner-card">${inner}</div>`;
    }).join('');
    document.getElementById('partners-section').style.display = '';
  } catch (e) { console.error(e); }
}

async function loadHomepageTestimonials() {
  try {
    const items = (await apiGetAll('testimonials')).filter(t => t.active !== false)
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
    if (!items.length) return;
    const grid = document.getElementById('testimonials-grid');
    grid.innerHTML = items.map(t => {
      const avatar = t.avatar_url ? resolveAssetUrl(t.avatar_url) : (NAWAH_ASSET_BASE + 'images/logo.png');
      return `
      <div class="testimonial-card">
        <div class="stars">${starsHtml(t.rating)}</div>
        <p class="quote">&ldquo;${hpEscape(hpText(t, 'content'))}&rdquo;</p>
        <div class="person">
          <img src="${avatar}" alt="${hpEscape(hpText(t, 'name'))}">
          <div>
            <strong>${hpEscape(hpText(t, 'name'))}</strong>
            <span>${hpEscape(hpText(t, 'role'))}</span>
          </div>
        </div>
      </div>`;
    }).join('');
    document.getElementById('testimonials-section').style.display = '';
  } catch (e) { console.error(e); }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSiteHeader('index.html');
  renderSiteFooter();
  loadHomepageSections();

  document.getElementById('home-verify-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const val = document.getElementById('cert-number-input').value.trim();
    if (!val) return;
    window.location.href = `certificate.html?number=${encodeURIComponent(val)}`;
  });
});
document.addEventListener('nawah-lang-changed', () => {
  loadHomepageSections();
});

}

/* ===== certificate.js ===== */
if (document.getElementById('cert-result-area')) {
/* ==========================================================================
   NAWAH Verify â€” Certificate verification result page logic
   Supports: certificate.html?number=NMH-2026-000001
             /certificate/NMH-2026-000001 (via 404.html fallback redirect)
   ========================================================================== */

function getCertNumberFromUrl() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('number')) return params.get('number');
  // Fallback: support /certificate/NMH-2026-000001 style paths directly
  const path = window.location.pathname;
  const match = path.match(/certificate\/([^/?#]+)/i);
  if (match && match[1]) return decodeURIComponent(match[1]);
  return '';
}

function buildQrCanvas(container, text) {
  container.innerHTML = '';
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  if (window.QRCode) {
    QRCode.toCanvas(canvas, text, { width: 168, margin: 1, color: { dark: '#0F3D7A', light: '#ffffff' } }, function (err) {
      if (err) console.error(err);
    });
  }
}

function renderNotFound(certNumber) {
  const area = document.getElementById('cert-result-area');
  area.innerHTML = `
    <div class="cert-card">
      <div class="cert-card-header notfound">
        <div class="badge-icon">âŒ</div>
        <h2 data-i18n="cert_notfound"></h2>
        <p data-i18n="cert_notfound_desc"></p>
      </div>
      <div class="cert-card-body text-center">
        <p style="color:var(--nawah-text-muted);">${certNumber ? `<strong>${escapeHtml(certNumber)}</strong>` : ''}</p>
        <div class="cert-actions">
          <a href="search.html" class="btn btn-outline"><i class="fa-solid fa-magnifying-glass"></i> <span data-i18n="nav_search"></span></a>
          <a href="verify.html" class="btn btn-primary"><i class="fa-solid fa-rotate"></i> <span data-i18n="btn_new_search"></span></a>
        </div>
      </div>
    </div>`;
  nawahApplyLang();
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}

async function renderCertificateResult(cert, effectiveStatus) {
  const area = document.getElementById('cert-result-area');
  const verifyUrl = certificateVerifyUrl(cert.certificate_number);
  const lang = nawahGetLang();
  const site = await getCachedSiteSettings();
  const showQr = !site || site.verification_show_qr !== false;
  const footerNote = (lang === 'ar' && site && site.certificate_footer_note_ar) ? site.certificate_footer_note_ar : (site && site.certificate_footer_note) || '';
  const studentName = lang === 'ar' && cert.student_name_ar ? cert.student_name_ar : cert.student_name;
  const courseName = lang === 'ar' && cert.course_name_ar ? cert.course_name_ar : cert.course_name;

  let headerClass = '', badgeIcon = '', titleKey = '', descHtml = '';
  if (effectiveStatus === 'revoked') {
    headerClass = 'revoked'; badgeIcon = 'ðŸ”´'; titleKey = 'cert_revoked';
    descHtml = `<p data-i18n="cert_revoked_desc"></p>`;
  } else if (effectiveStatus === 'expired') {
    headerClass = 'expired'; badgeIcon = 'â±ï¸'; titleKey = 'cert_expired';
    descHtml = `<p data-i18n="cert_expired_desc"></p>`;
  } else {
    headerClass = ''; badgeIcon = 'âœ”ï¸'; titleKey = 'cert_verified';
  }

  const statusValClass = effectiveStatus === 'active' ? 'status-active' : (effectiveStatus === 'revoked' ? 'status-revoked' : 'status-expired');
  const statusLabelKey = effectiveStatus === 'active' ? 'status_active' : (effectiveStatus === 'revoked' ? 'status_revoked' : 'status_expired');

  area.innerHTML = `
    <div class="cert-card">
      <div class="cert-card-header ${headerClass}">
        <div class="badge-icon">${badgeIcon}</div>
        <h2 data-i18n="${titleKey}"></h2>
        ${descHtml}
        <div class="status-pill"><i class="fa-solid fa-shield-halved"></i> <span data-i18n="${statusLabelKey}"></span></div>
      </div>
      <div class="cert-card-body">
        <div class="cert-org">
          <img src="images/logo.png" alt="logo" class="dyn-logo">
          <strong data-dyn="academy_name" data-i18n="academy_name"></strong>
          <span data-i18n="lbl_organization"></span>
        </div>

        ${effectiveStatus === 'revoked' && cert.revoke_reason ? `
        <div class="cert-field full" style="background:#fbe3e5;margin-bottom:18px;">
          <label data-i18n="revoke_reason_label"></label>
          <div class="val" style="color:var(--nawah-red);">${escapeHtml(cert.revoke_reason)}</div>
        </div>` : ''}

        <div class="cert-fields">
          <div class="cert-field full">
            <label data-i18n="lbl_student"></label>
            <div class="val">${escapeHtml(studentName || '')}</div>
          </div>
          <div class="cert-field">
            <label data-i18n="lbl_cert_number"></label>
            <div class="val">${escapeHtml(cert.certificate_number)}</div>
          </div>
          <div class="cert-field">
            <label data-i18n="lbl_hours"></label>
            <div class="val">${escapeHtml(cert.training_hours)} h</div>
          </div>
          <div class="cert-field full">
            <label data-i18n="lbl_course"></label>
            <div class="val">${escapeHtml(courseName || '')}</div>
          </div>
          <div class="cert-field">
            <label data-i18n="lbl_instructor"></label>
            <div class="val">${escapeHtml(cert.instructor || '')}</div>
          </div>
          <div class="cert-field">
            <label data-i18n="lbl_status"></label>
            <div class="val ${statusValClass}" data-i18n="${statusLabelKey}"></div>
          </div>
          <div class="cert-field">
            <label data-i18n="lbl_issue_date"></label>
            <div class="val">${formatDate(cert.issue_date)}</div>
          </div>
          <div class="cert-field">
            <label data-i18n="lbl_expiry_date"></label>
            <div class="val">${cert.expiry_date ? formatDate(cert.expiry_date) : nawahT('none')}</div>
          </div>
          <div class="cert-field full">
            <label data-i18n="lbl_verify_date"></label>
            <div class="val">${formatDateTime(new Date().toISOString())}</div>
          </div>
        </div>

        ${showQr ? `
        <div class="qr-block">
          <label style="display:block;font-weight:700;color:var(--nawah-blue);margin-bottom:10px;" data-i18n="lbl_qr"></label>
          <div id="qr-canvas-holder"></div>
          <p data-i18n="scan_note"></p>
        </div>` : ''}

        ${effectiveStatus === 'active' ? `
        <div class="verified-badge">
          <i class="fa-solid fa-circle-check" style="font-size:1.3rem;"></i>
          <span data-i18n="verified_badge"></span>
        </div>` : ''}

        <div class="cert-footer-note" ${footerNote ? '' : 'data-i18n="official_note"'}>${footerNote ? escapeHtml(footerNote) : ''}</div>

        <div class="cert-actions">
          <button class="btn btn-outline" onclick="window.print()"><i class="fa-solid fa-print"></i> <span data-i18n="btn_print"></span></button>
          <button class="btn btn-outline" id="copy-link-btn"><i class="fa-solid fa-link"></i> <span data-i18n="copy_link"></span></button>
          <a href="verify.html" class="btn btn-primary"><i class="fa-solid fa-rotate"></i> <span data-i18n="btn_new_search"></span></a>
        </div>
      </div>
    </div>`;

  if (showQr) buildQrCanvas(document.getElementById('qr-canvas-holder'), verifyUrl);
  nawahApplyLang();
  applyDynamicBranding();

  document.getElementById('copy-link-btn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(verifyUrl);
      showToast(nawahT('copied'), 'success');
    } catch (e) {
      showToast(verifyUrl, 'info');
    }
  });
}

async function initCertificatePage() {
  const certNumber = getCertNumberFromUrl();
  if (!certNumber) {
    renderNotFound('');
    return;
  }
  try {
    const cert = await findCertificateByNumber(certNumber);
    if (!cert) {
      renderNotFound(certNumber);
      await logVerification(certNumber, 'not_found');
      return;
    }
    const effectiveStatus = computeEffectiveStatus(cert);
    await renderCertificateResult(cert, effectiveStatus);
    await logVerification(certNumber, effectiveStatus === 'active' ? 'verified' : effectiveStatus);
  } catch (e) {
    console.error(e);
    renderNotFound(certNumber);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderSiteHeader('verify.html');
  renderSiteFooter();
  initCertificatePage();
});
document.addEventListener('nawah-lang-changed', () => {
  // re-render fully to reflect localized names/status text properly
  initCertificatePage();
});

}

/* ===== search.js ===== */
if (document.getElementById('search-form')) {
/* ==========================================================================
   NAWAH Verify â€” Search Certificate page logic
   ========================================================================== */

let nawahSearchMode = 'number';

function escapeHtmlS(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}

function renderSearchResults(results) {
  const container = document.getElementById('search-results');
  if (!results || results.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="emoji">ðŸ”</span>
        <h3 data-i18n="no_results_title"></h3>
        <p data-i18n="no_results_desc"></p>
      </div>`;
    nawahApplyLang();
    return;
  }
  const lang = nawahGetLang();
  container.innerHTML = results.map(cert => {
    const effective = computeEffectiveStatus(cert);
    const studentName = lang === 'ar' && cert.student_name_ar ? cert.student_name_ar : cert.student_name;
    const courseName = lang === 'ar' && cert.course_name_ar ? cert.course_name_ar : cert.course_name;
    return `
      <div class="result-item">
        <div class="r-info">
          <strong>${escapeHtmlS(studentName)}</strong>
          <span>${escapeHtmlS(cert.certificate_number)} Â· ${escapeHtmlS(courseName)}</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          ${statusBadgeHtml(effective)}
          <a href="certificate.html?number=${encodeURIComponent(cert.certificate_number)}" class="btn btn-primary btn-sm">
            <span data-i18n="view_certificate"></span>
          </a>
        </div>
      </div>`;
  }).join('');
  nawahApplyLang();
}

async function performSearch(query) {
  const container = document.getElementById('search-results');
  container.innerHTML = `<div class="text-center" style="padding:30px;"><i class="fa-solid fa-circle-notch spin" style="color:var(--nawah-blue);font-size:1.5rem;"></i></div>`;
  const all = await apiGetAll('certificates');
  const q = query.trim().toLowerCase();
  let results = [];
  if (!q) { renderSearchResults([]); return; }
  if (nawahSearchMode === 'number') {
    results = all.filter(c => (c.certificate_number || '').toLowerCase().includes(q));
  } else {
    results = all.filter(c =>
      (c.student_name || '').toLowerCase().includes(q) ||
      (c.student_name_ar || '').toLowerCase().includes(q)
    );
  }
  renderSearchResults(results);
}

document.addEventListener('DOMContentLoaded', () => {
  renderSiteHeader('search.html');
  renderSiteFooter();

  const tabs = document.querySelectorAll('#search-tabs button');
  const input = document.getElementById('search-input');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      nawahSearchMode = tab.getAttribute('data-mode');
      const placeholderKey = nawahSearchMode === 'number' ? 'search_placeholder_number' : 'search_placeholder_name';
      input.setAttribute('data-i18n-placeholder', placeholderKey);
      input.setAttribute('placeholder', nawahT(placeholderKey));
      input.value = '';
      document.getElementById('search-results').innerHTML = '';
    });
  });

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch(input.value);
  });
});

}

/* ===== dashboard.js ===== */
if (document.getElementById('stat-total')) {
/* ==========================================================================
   NAWAH Verify â€” Admin Dashboard logic
   ========================================================================== */

function escapeHtmlD(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}

function resultBadge(result) {
  const map = {
    verified: { cls: 'badge-active', icon: 'fa-circle-check', key: 'result_verified' },
    not_found: { cls: 'badge-revoked', icon: 'fa-circle-xmark', key: 'result_not_found' },
    revoked: { cls: 'badge-revoked', icon: 'fa-ban', key: 'result_revoked' },
    expired: { cls: 'badge-expired', icon: 'fa-clock', key: 'result_expired' }
  };
  const m = map[result] || map.not_found;
  return `<span class="badge ${m.cls}"><i class="fa-solid ${m.icon}"></i> ${nawahT(m.key)}</span>`;
}

async function loadDashboard() {
  const [certs, logs] = await Promise.all([apiGetAll('certificates'), apiGetAll('verification_logs')]);

  const total = certs.length;
  const active = certs.filter(c => computeEffectiveStatus(c) === 'active').length;
  const revoked = certs.filter(c => c.status === 'revoked').length;
  const now = new Date();
  const monthCount = certs.filter(c => {
    if (!c.issue_date) return false;
    const d = new Date(c.issue_date);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-active').textContent = active;
  document.getElementById('stat-revoked').textContent = revoked;
  document.getElementById('stat-month').textContent = monthCount;

  const sortedLogs = logs.slice().sort((a, b) => new Date(b.verification_date) - new Date(a.verification_date)).slice(0, 10);
  const tbody = document.getElementById('recent-activity-body');
  if (sortedLogs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center" data-i18n="no_results_title"></td></tr>`;
  } else {
    tbody.innerHTML = sortedLogs.map(l => `
      <tr>
        <td><strong>${escapeHtmlD(l.certificate_number)}</strong></td>
        <td>${formatDateTime(l.verification_date)}</td>
        <td>${escapeHtmlD(l.browser)}</td>
        <td>${escapeHtmlD(l.device)}</td>
        <td>${resultBadge(l.result)}</td>
      </tr>`).join('');
  }
  nawahApplyLang();
}

document.addEventListener('DOMContentLoaded', () => {
  const session = renderAdminLayout('dashboard.html', 'dash_title');
  if (!session) return;
  loadDashboard();
});
document.addEventListener('nawah-lang-changed', () => {
  if (getSession()) loadDashboard();
});

}

/* ===== certificates-admin.js ===== */
if (document.getElementById('certificates-table-body')) {
/* ==========================================================================
   NAWAH Verify â€” Certificates Management (admin)
   ========================================================================== */

let nawahAllCerts = [];
let nawahCurrentSession = null;

function escapeHtmlC(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}
function toDateInputValue(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  return d.toISOString().slice(0, 10);
}

function canEdit() {
  return nawahCurrentSession && (nawahCurrentSession.role === 'administrator' || nawahCurrentSession.role === 'instructor');
}
function canDelete() {
  return nawahCurrentSession && nawahCurrentSession.role === 'administrator';
}

function renderCertsTable(list) {
  const tbody = document.getElementById('certs-table-body');
  if (!list || list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center" data-i18n="no_results_title"></td></tr>`;
    nawahApplyLang();
    return;
  }
  tbody.innerHTML = list.map(c => {
    const effective = computeEffectiveStatus(c);
    const canManage = canEdit();
    const canDel = canDelete();
    return `
    <tr>
      <td><strong>${escapeHtmlC(c.certificate_number)}</strong></td>
      <td>${escapeHtmlC(c.student_name)}</td>
      <td>${escapeHtmlC(c.course_name)}</td>
      <td>${escapeHtmlC(c.instructor)}</td>
      <td>${formatDate(c.issue_date)}</td>
      <td>${statusBadgeHtml(effective)}</td>
      <td>
        <div class="action-icons">
          <a class="icon-btn" href="../certificate.html?number=${encodeURIComponent(c.certificate_number)}" target="_blank" title="View"><i class="fa-solid fa-eye"></i></a>
          <button class="icon-btn" data-action="qr" data-id="${c.id}" title="QR"><i class="fa-solid fa-qrcode"></i></button>
          <button class="icon-btn" data-action="pdf" data-id="${c.id}" title="PDF"><i class="fa-solid fa-file-pdf"></i></button>
          ${canManage ? `<button class="icon-btn" data-action="edit" data-id="${c.id}" title="Edit"><i class="fa-solid fa-pen"></i></button>` : ''}
          ${canManage && c.status !== 'revoked' ? `<button class="icon-btn warn" data-action="revoke" data-id="${c.id}" title="Revoke"><i class="fa-solid fa-ban"></i></button>` : ''}
          ${canManage && c.status === 'revoked' ? `<button class="icon-btn success" data-action="restore" data-id="${c.id}" title="Restore"><i class="fa-solid fa-rotate-left"></i></button>` : ''}
          ${canDel ? `<button class="icon-btn danger" data-action="delete" data-id="${c.id}" title="Delete"><i class="fa-solid fa-trash"></i></button>` : ''}
        </div>
      </td>
    </tr>`;
  }).join('');
  nawahApplyLang();
  attachRowActions();
}

async function loadCertsTable() {
  nawahAllCerts = await apiGetAll('certificates');
  nawahAllCerts.sort((a, b) => new Date(b.issue_date || 0) - new Date(a.issue_date || 0));
  renderCertsTable(nawahAllCerts);
}

function attachRowActions() {
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      const action = btn.getAttribute('data-action');
      const cert = nawahAllCerts.find(c => c.id === id);
      if (!cert) return;
      if (action === 'qr') openQrModal(cert);
      if (action === 'pdf') downloadCertPdf(cert);
      if (action === 'edit') openEditModal(cert);
      if (action === 'revoke') await revokeCert(cert);
      if (action === 'restore') await restoreCert(cert);
      if (action === 'delete') await deleteCert(cert);
    });
  });
}

/* ---------------- Add/Edit Modal ---------------- */
function openAddModal() {
  clearAllFieldErrors(document.getElementById('cert-form'));
  document.getElementById('cert-modal-title').setAttribute('data-i18n', 'modal_add_cert');
  document.getElementById('cert-id-field').value = '';
  document.getElementById('f-student-name').value = '';
  document.getElementById('f-cert-number').value = '';
  document.getElementById('f-course-name').value = '';
  document.getElementById('f-instructor').value = '';
  document.getElementById('f-hours').value = '';
  document.getElementById('f-status').value = 'active';
  document.getElementById('f-issue-date').value = toDateInputValue(new Date().toISOString());
  document.getElementById('f-expiry-date').value = '';
  document.getElementById('f-image').value = '';
  document.getElementById('f-notes').value = '';
  document.getElementById('cert-modal-overlay').classList.add('open');
  nawahApplyLang();
}
function openEditModal(cert) {
  clearAllFieldErrors(document.getElementById('cert-form'));
  document.getElementById('cert-modal-title').setAttribute('data-i18n', 'modal_edit_cert');
  document.getElementById('cert-id-field').value = cert.id;
  document.getElementById('f-student-name').value = cert.student_name || '';
  document.getElementById('f-cert-number').value = cert.certificate_number || '';
  document.getElementById('f-course-name').value = cert.course_name || '';
  document.getElementById('f-instructor').value = cert.instructor || '';
  document.getElementById('f-hours').value = cert.training_hours || '';
  document.getElementById('f-status').value = cert.status || 'active';
  document.getElementById('f-issue-date').value = toDateInputValue(cert.issue_date);
  document.getElementById('f-expiry-date').value = toDateInputValue(cert.expiry_date);
  document.getElementById('f-image').value = cert.certificate_image || '';
  document.getElementById('f-notes').value = cert.notes || '';
  document.getElementById('cert-modal-overlay').classList.add('open');
  nawahApplyLang();
}
function closeCertModal() {
  document.getElementById('cert-modal-overlay').classList.remove('open');
}

async function handleCertFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('cert-form');
  clearAllFieldErrors(form);
  const id = document.getElementById('cert-id-field').value;
  const certNumber = document.getElementById('f-cert-number').value.trim();

  let valid = true;
  if (!validateRequired(document.getElementById('f-student-name'))) valid = false;
  if (!validateRequired(document.getElementById('f-cert-number'))) valid = false;
  if (!validateRequired(document.getElementById('f-course-name'))) valid = false;
  if (!valid) { showToast(nawahT('validation_required'), 'error'); return; }

  const taken = await isCertificateNumberTaken(certNumber, id || null);
  if (taken) {
    markFieldError(document.getElementById('f-cert-number'), nawahT('validation_duplicate_cert'));
    showToast(nawahT('validation_duplicate_cert'), 'error');
    return;
  }

  const payload = {
    student_name: document.getElementById('f-student-name').value.trim(),
    certificate_number: certNumber,
    course_name: document.getElementById('f-course-name').value.trim(),
    instructor: document.getElementById('f-instructor').value.trim(),
    training_hours: Number(document.getElementById('f-hours').value) || 0,
    status: document.getElementById('f-status').value,
    issue_date: document.getElementById('f-issue-date').value ? new Date(document.getElementById('f-issue-date').value).toISOString() : '',
    expiry_date: document.getElementById('f-expiry-date').value ? new Date(document.getElementById('f-expiry-date').value).toISOString() : '',
    certificate_image: document.getElementById('f-image').value.trim(),
    notes: document.getElementById('f-notes').value.trim(),
    verification_url: certificateVerifyUrl(certNumber)
  };
  try {
    if (id) {
      await apiUpdate('certificates', id, payload);
    } else {
      await apiCreate('certificates', payload);
    }
    showToast(nawahT('toast_saved'), 'success');
    closeCertModal();
    loadCertsTable();
  } catch (err) {
    showToast('Error saving certificate', 'error');
  }
}

/* ---------------- Revoke / Restore / Delete ---------------- */
async function revokeCert(cert) {
  const reason = window.prompt(nawahT('confirm_revoke'), '');
  if (reason === null) return;
  await apiUpdate('certificates', cert.id, { status: 'revoked', revoke_reason: reason });
  showToast(nawahT('toast_revoked'), 'success');
  loadCertsTable();
}
async function restoreCert(cert) {
  await apiUpdate('certificates', cert.id, { status: 'active', revoke_reason: '' });
  showToast(nawahT('toast_restored'), 'success');
  loadCertsTable();
}
async function deleteCert(cert) {
  if (!window.confirm(nawahT('confirm_delete'))) return;
  await apiDelete('certificates', cert.id);
  showToast(nawahT('toast_deleted'), 'success');
  loadCertsTable();
}

/* ---------------- QR ---------------- */
let nawahCurrentQrUrl = '';
function openQrModal(cert) {
  const url = certificateVerifyUrl(cert.certificate_number);
  nawahCurrentQrUrl = url;
  document.getElementById('qr-modal-url').textContent = url;
  const holder = document.getElementById('qr-modal-canvas-holder');
  holder.innerHTML = '';
  const canvas = document.createElement('canvas');
  holder.appendChild(canvas);
  QRCode.toCanvas(canvas, url, { width: 220, margin: 1, color: { dark: '#0F3D7A', light: '#ffffff' } });
  document.getElementById('qr-modal-overlay').classList.add('open');
}
function closeQrModal() {
  document.getElementById('qr-modal-overlay').classList.remove('open');
}
function downloadQrImage() {
  const canvas = document.querySelector('#qr-modal-canvas-holder canvas');
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = 'qr-code.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

/* ---------------- PDF Export ---------------- */
function downloadCertPdf(cert) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Border
  doc.setDrawColor(15, 61, 122);
  doc.setLineWidth(3);
  doc.rect(20, 20, pageWidth - 40, pageHeight - 40);
  doc.setLineWidth(1);
  doc.rect(32, 32, pageWidth - 64, pageHeight - 64);

  doc.setTextColor(15, 61, 122);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.text('NAWAH Medical Academy', pageWidth / 2, 90, { align: 'center' });

  doc.setFontSize(14);
  doc.setTextColor(90, 90, 90);
  doc.setFont('helvetica', 'normal');
  doc.text('Certificate of Completion', pageWidth / 2, 120, { align: 'center' });

  doc.setFontSize(12);
  doc.text('This is to certify that', pageWidth / 2, 165, { align: 'center' });

  doc.setFontSize(28);
  doc.setTextColor(40, 167, 69);
  doc.setFont('helvetica', 'bold');
  doc.text(cert.student_name || '', pageWidth / 2, 200, { align: 'center' });

  doc.setFontSize(13);
  doc.setTextColor(60, 60, 60);
  doc.setFont('helvetica', 'normal');
  doc.text(`has successfully completed the course`, pageWidth / 2, 230, { align: 'center' });
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(15, 61, 122);
  doc.text(cert.course_name || '', pageWidth / 2, 255, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(60, 60, 60);
  doc.text(`Training Hours: ${cert.training_hours || 0}   |   Instructor: ${cert.instructor || ''}`, pageWidth / 2, 280, { align: 'center' });
  doc.text(`Certificate Number: ${cert.certificate_number}`, pageWidth / 2, 300, { align: 'center' });
  doc.text(`Issue Date: ${cert.issue_date ? new Date(cert.issue_date).toDateString() : ''}`, pageWidth / 2, 318, { align: 'center' });

  doc.setFontSize(9);
  doc.setTextColor(140, 140, 140);
  doc.text(`Verify at: ${certificateVerifyUrl(cert.certificate_number)}`, pageWidth / 2, pageHeight - 45, { align: 'center' });

  doc.save(`${cert.certificate_number}.pdf`);
}

/* ---------------- Init ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  nawahCurrentSession = renderAdminLayout('certificates.html', 'certs_title');
  if (!nawahCurrentSession) return;

  loadCertsTable();

  const addBtn = document.getElementById('add-cert-btn');
  if (!canEdit()) {
    addBtn.style.display = 'none';
  }
  addBtn.addEventListener('click', openAddModal);
  document.getElementById('cert-modal-cancel').addEventListener('click', closeCertModal);
  const certSubmitBtn = document.querySelector('#cert-form button[type="submit"]');
  document.getElementById('cert-form').addEventListener('submit', guardSubmit(certSubmitBtn, handleCertFormSubmit));
  document.getElementById('qr-modal-close').addEventListener('click', closeQrModal);
  document.getElementById('qr-download-btn').addEventListener('click', downloadQrImage);

  document.getElementById('cert-search-input').addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) { renderCertsTable(nawahAllCerts); return; }
    const filtered = nawahAllCerts.filter(c =>
      (c.certificate_number || '').toLowerCase().includes(q) ||
      (c.student_name || '').toLowerCase().includes(q) ||
      (c.course_name || '').toLowerCase().includes(q) ||
      (c.instructor || '').toLowerCase().includes(q)
    );
    renderCertsTable(filtered);
  });

  [document.getElementById('cert-modal-overlay'), document.getElementById('qr-modal-overlay')].forEach(overlay => {
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
  });
});
document.addEventListener('nawah-lang-changed', () => {
  if (nawahAllCerts.length) renderCertsTable(nawahAllCerts);
});

}

/* ===== students-admin.js ===== */
if (document.getElementById('students-table-body')) {
/* ==========================================================================
   NAWAH Verify â€” Students Management (admin)
   ========================================================================== */

let nawahAllStudents = [];
let nawahStudentsSession = null;

function escapeHtmlSt(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}
function canManageStudents() {
  return nawahStudentsSession && (nawahStudentsSession.role === 'administrator' || nawahStudentsSession.role === 'instructor');
}

function renderStudentsTable(list) {
  const tbody = document.getElementById('students-table-body');
  if (!list || list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="text-center" data-i18n="no_results_title"></td></tr>`;
    nawahApplyLang();
    return;
  }
  const canManage = canManageStudents();
  tbody.innerHTML = list.map(s => `
    <tr>
      <td><strong>${escapeHtmlSt(s.full_name)}</strong></td>
      <td>${escapeHtmlSt(s.email)}</td>
      <td>${escapeHtmlSt(s.phone)}</td>
      <td>${escapeHtmlSt(s.national_id)}</td>
      <td>
        <div class="action-icons">
          ${canManage ? `<button class="icon-btn" data-action="edit" data-id="${s.id}"><i class="fa-solid fa-pen"></i></button>` : ''}
          ${nawahStudentsSession && nawahStudentsSession.role === 'administrator' ? `<button class="icon-btn danger" data-action="delete" data-id="${s.id}"><i class="fa-solid fa-trash"></i></button>` : ''}
        </div>
      </td>
    </tr>`).join('');
  nawahApplyLang();
  attachStudentActions();
}

async function loadStudentsTable() {
  nawahAllStudents = await apiGetAll('students');
  renderStudentsTable(nawahAllStudents);
}

function attachStudentActions() {
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      const action = btn.getAttribute('data-action');
      const student = nawahAllStudents.find(s => s.id === id);
      if (!student) return;
      if (action === 'edit') openEditStudentModal(student);
      if (action === 'delete') {
        if (!window.confirm(nawahT('confirm_delete'))) return;
        await apiDelete('students', student.id);
        showToast(nawahT('toast_deleted'), 'success');
        loadStudentsTable();
      }
    });
  });
}

function openAddStudentModal() {
  clearAllFieldErrors(document.getElementById('student-form'));
  document.getElementById('student-modal-title').setAttribute('data-i18n', 'btn_add_student');
  document.getElementById('s-id-field').value = '';
  document.getElementById('s-full-name').value = '';
  document.getElementById('s-email').value = '';
  document.getElementById('s-phone').value = '';
  document.getElementById('s-national-id').value = '';
  document.getElementById('s-notes').value = '';
  document.getElementById('student-modal-overlay').classList.add('open');
  nawahApplyLang();
}
function openEditStudentModal(student) {
  clearAllFieldErrors(document.getElementById('student-form'));
  document.getElementById('student-modal-title').setAttribute('data-i18n', 'btn_add_student');
  document.getElementById('s-id-field').value = student.id;
  document.getElementById('s-full-name').value = student.full_name || '';
  document.getElementById('s-email').value = student.email || '';
  document.getElementById('s-phone').value = student.phone || '';
  document.getElementById('s-national-id').value = student.national_id || '';
  document.getElementById('s-notes').value = student.notes || '';
  document.getElementById('student-modal-overlay').classList.add('open');
  nawahApplyLang();
}

async function handleStudentFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('student-form');
  clearAllFieldErrors(form);
  const id = document.getElementById('s-id-field').value;

  let valid = true;
  if (!validateRequired(document.getElementById('s-full-name'))) valid = false;
  if (!validateEmail(document.getElementById('s-email'), false)) valid = false;
  if (!valid) { showToast(nawahT('validation_required'), 'error'); return; }

  const payload = {
    full_name: document.getElementById('s-full-name').value.trim(),
    email: document.getElementById('s-email').value.trim(),
    phone: document.getElementById('s-phone').value.trim(),
    national_id: document.getElementById('s-national-id').value.trim(),
    notes: document.getElementById('s-notes').value.trim()
  };
  try {
    if (id) await apiUpdate('students', id, payload);
    else await apiCreate('students', payload);
    showToast(nawahT('toast_saved'), 'success');
    document.getElementById('student-modal-overlay').classList.remove('open');
    loadStudentsTable();
  } catch (err) {
    showToast('Error saving student', 'error');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  nawahStudentsSession = renderAdminLayout('students.html', 'students_title');
  if (!nawahStudentsSession) return;
  loadStudentsTable();

  const addBtn = document.getElementById('add-student-btn');
  if (!canManageStudents()) addBtn.style.display = 'none';
  addBtn.addEventListener('click', openAddStudentModal);
  document.getElementById('student-modal-cancel').addEventListener('click', () => document.getElementById('student-modal-overlay').classList.remove('open'));
  const studentSubmitBtn = document.querySelector('#student-form button[type="submit"]');
  document.getElementById('student-form').addEventListener('submit', guardSubmit(studentSubmitBtn, handleStudentFormSubmit));
  document.getElementById('student-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'student-modal-overlay') e.target.classList.remove('open');
  });
  document.getElementById('student-search-input').addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) { renderStudentsTable(nawahAllStudents); return; }
    renderStudentsTable(nawahAllStudents.filter(s =>
      (s.full_name || '').toLowerCase().includes(q) || (s.email || '').toLowerCase().includes(q)
    ));
  });
});
document.addEventListener('nawah-lang-changed', () => {
  if (nawahAllStudents.length) renderStudentsTable(nawahAllStudents);
});

}

/* ===== courses-admin.js ===== */
if (document.getElementById('courses-table-body')) {
/* ==========================================================================
   NAWAH Verify â€” Courses Management (admin)
   ========================================================================== */

let nawahAllCourses = [];
let nawahCoursesSession = null;

function escapeHtmlCo(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}
function canManageCourses() {
  return nawahCoursesSession && (nawahCoursesSession.role === 'administrator' || nawahCoursesSession.role === 'instructor');
}

function renderCoursesTable(list) {
  const tbody = document.getElementById('courses-table-body');
  if (!list || list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" class="text-center" data-i18n="no_results_title"></td></tr>`;
    nawahApplyLang();
    return;
  }
  const canManage = canManageCourses();
  tbody.innerHTML = list.map(c => `
    <tr>
      <td><strong>${escapeHtmlCo(c.course_name)}</strong></td>
      <td>${escapeHtmlCo(c.default_hours)} h</td>
      <td>${escapeHtmlCo(c.instructor)}</td>
      <td>
        <div class="action-icons">
          ${canManage ? `<button class="icon-btn" data-action="edit" data-id="${c.id}"><i class="fa-solid fa-pen"></i></button>` : ''}
          ${nawahCoursesSession && nawahCoursesSession.role === 'administrator' ? `<button class="icon-btn danger" data-action="delete" data-id="${c.id}"><i class="fa-solid fa-trash"></i></button>` : ''}
        </div>
      </td>
    </tr>`).join('');
  nawahApplyLang();
  attachCourseActions();
}

async function loadCoursesTable() {
  nawahAllCourses = await apiGetAll('courses');
  renderCoursesTable(nawahAllCourses);
}

function attachCourseActions() {
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      const action = btn.getAttribute('data-action');
      const course = nawahAllCourses.find(c => c.id === id);
      if (!course) return;
      if (action === 'edit') openEditCourseModal(course);
      if (action === 'delete') {
        if (!window.confirm(nawahT('confirm_delete'))) return;
        await apiDelete('courses', course.id);
        showToast(nawahT('toast_deleted'), 'success');
        loadCoursesTable();
      }
    });
  });
}

function openAddCourseModal() {
  clearAllFieldErrors(document.getElementById('course-form'));
  document.getElementById('course-modal-title').setAttribute('data-i18n', 'btn_add_course');
  document.getElementById('c-id-field').value = '';
  document.getElementById('c-course-name').value = '';
  document.getElementById('c-default-hours').value = '';
  document.getElementById('c-instructor').value = '';
  document.getElementById('c-description').value = '';
  document.getElementById('course-modal-overlay').classList.add('open');
  nawahApplyLang();
}
function openEditCourseModal(course) {
  clearAllFieldErrors(document.getElementById('course-form'));
  document.getElementById('c-id-field').value = course.id;
  document.getElementById('c-course-name').value = course.course_name || '';
  document.getElementById('c-default-hours').value = course.default_hours || '';
  document.getElementById('c-instructor').value = course.instructor || '';
  document.getElementById('c-description').value = course.description || '';
  document.getElementById('course-modal-overlay').classList.add('open');
  nawahApplyLang();
}

async function handleCourseFormSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('course-form');
  clearAllFieldErrors(form);
  const id = document.getElementById('c-id-field').value;

  if (!validateRequired(document.getElementById('c-course-name'))) {
    showToast(nawahT('validation_required'), 'error');
    return;
  }

  const payload = {
    course_name: document.getElementById('c-course-name').value.trim(),
    default_hours: Number(document.getElementById('c-default-hours').value) || 0,
    instructor: document.getElementById('c-instructor').value.trim(),
    description: document.getElementById('c-description').value.trim()
  };
  try {
    if (id) await apiUpdate('courses', id, payload);
    else await apiCreate('courses', payload);
    showToast(nawahT('toast_saved'), 'success');
    document.getElementById('course-modal-overlay').classList.remove('open');
    loadCoursesTable();
  } catch (err) {
    showToast('Error saving course', 'error');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  nawahCoursesSession = renderAdminLayout('courses.html', 'courses_title');
  if (!nawahCoursesSession) return;
  loadCoursesTable();

  const addBtn = document.getElementById('add-course-btn');
  if (!canManageCourses()) addBtn.style.display = 'none';
  addBtn.addEventListener('click', openAddCourseModal);
  document.getElementById('course-modal-cancel').addEventListener('click', () => document.getElementById('course-modal-overlay').classList.remove('open'));
  const courseSubmitBtn = document.querySelector('#course-form button[type="submit"]');
  document.getElementById('course-form').addEventListener('submit', guardSubmit(courseSubmitBtn, handleCourseFormSubmit));
  document.getElementById('course-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'course-modal-overlay') e.target.classList.remove('open');
  });
  document.getElementById('course-search-input').addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) { renderCoursesTable(nawahAllCourses); return; }
    renderCoursesTable(nawahAllCourses.filter(c => (c.course_name || '').toLowerCase().includes(q)));
  });
});
document.addEventListener('nawah-lang-changed', () => {
  if (nawahAllCourses.length) renderCoursesTable(nawahAllCourses);
});

}

/* ===== logs-admin.js ===== */
if (document.getElementById('logs-table-body')) {
/* ==========================================================================
   NAWAH Verify â€” Verification Logs (admin)
   ========================================================================== */

let nawahAllLogs = [];

function escapeHtmlL(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));
}
function resultBadgeL(result) {
  const map = {
    verified: { cls: 'badge-active', icon: 'fa-circle-check', key: 'result_verified' },
    not_found: { cls: 'badge-revoked', icon: 'fa-circle-xmark', key: 'result_not_found' },
    revoked: { cls: 'badge-revoked', icon: 'fa-ban', key: 'result_revoked' },
    expired: { cls: 'badge-expired', icon: 'fa-clock', key: 'result_expired' }
  };
  const m = map[result] || map.not_found;
  return `<span class="badge ${m.cls}"><i class="fa-solid ${m.icon}"></i> ${nawahT(m.key)}</span>`;
}

function renderLogsTable(list) {
  const tbody = document.getElementById('logs-table-body');
  if (!list || list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center" data-i18n="no_results_title"></td></tr>`;
    nawahApplyLang();
    return;
  }
  tbody.innerHTML = list.map(l => `
    <tr>
      <td><strong>${escapeHtmlL(l.certificate_number)}</strong></td>
      <td>${formatDateTime(l.verification_date)}</td>
      <td>${escapeHtmlL(l.browser)}</td>
      <td>${escapeHtmlL(l.device)}</td>
      <td>${escapeHtmlL(l.country) || nawahT('none')}</td>
      <td>${resultBadgeL(l.result)}</td>
    </tr>`).join('');
  nawahApplyLang();
}

async function loadLogsTable() {
  nawahAllLogs = await apiGetAll('verification_logs');
  nawahAllLogs.sort((a, b) => new Date(b.verification_date || 0) - new Date(a.verification_date || 0));
  renderLogsTable(nawahAllLogs);
}

document.addEventListener('DOMContentLoaded', () => {
  const session = renderAdminLayout('logs.html', 'logs_title');
  if (!session) return;
  loadLogsTable();

  document.getElementById('log-search-input').addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) { renderLogsTable(nawahAllLogs); return; }
    renderLogsTable(nawahAllLogs.filter(l =>
      (l.certificate_number || '').toLowerCase().includes(q) ||
      (l.browser || '').toLowerCase().includes(q) ||
      (l.device || '').toLowerCase().includes(q) ||
      (l.result || '').toLowerCase().includes(q)
    ));
  });
});
document.addEventListener('nawah-lang-changed', () => {
  if (nawahAllLogs.length) renderLogsTable(nawahAllLogs);
});

}

/* ===== settings-admin.js ===== */
if (document.getElementById('settings-form')) {
/* ==========================================================================
   NAWAH Verify â€” Settings (admin)
   ========================================================================== */

async function loadSettings() {
  const all = await apiGetAll('settings');
  const settings = all[0];
  if (!settings) return;
  document.getElementById('set-id-field').value = settings.id;
  document.getElementById('set-academy-name').value = settings.academy_name || '';
  document.getElementById('set-website').value = settings.website || '';
  document.getElementById('set-support-email').value = settings.support_email || '';
  document.getElementById('set-logo-url').value = settings.logo_url || '';
  document.getElementById('set-primary-color').value = settings.primary_color || '#0F3D7A';
  document.getElementById('set-secondary-color').value = settings.secondary_color || '#28A745';
  document.getElementById('set-footer-text').value = settings.footer_text || '';
  document.getElementById('set-cert-template').value = settings.certificate_template || 'classic';
}

async function handleSettingsSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('set-id-field').value;
  const payload = {
    academy_name: document.getElementById('set-academy-name').value.trim(),
    website: document.getElementById('set-website').value.trim(),
    support_email: document.getElementById('set-support-email').value.trim(),
    logo_url: document.getElementById('set-logo-url').value.trim(),
    primary_color: document.getElementById('set-primary-color').value,
    secondary_color: document.getElementById('set-secondary-color').value,
    footer_text: document.getElementById('set-footer-text').value.trim(),
    certificate_template: document.getElementById('set-cert-template').value
  };
  try {
    if (id) {
      await apiUpdate('settings', id, payload);
    } else {
      await apiCreate('settings', payload);
    }
    showToast(nawahT('toast_settings_saved'), 'success');
  } catch (err) {
    showToast('Error saving settings', 'error');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const session = renderAdminLayout('settings.html', 'settings_title');
  if (!session) return;
  loadSettings();
  document.getElementById('settings-form').addEventListener('submit', handleSettingsSubmit);
});

}
