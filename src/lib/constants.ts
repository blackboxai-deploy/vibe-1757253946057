// Constants and configuration for the Cybercrime Portal

import type { CrimeCategory, SeverityLevel, CaseStatus, Priority, UserRole } from './types';

export const CRIME_CATEGORIES: Record<CrimeCategory, { label: string; description: string; subcategories: string[] }> = {
  financial_fraud: {
    label: 'Financial Fraud',
    description: 'Credit card fraud, banking fraud, investment scams',
    subcategories: ['Credit Card Fraud', 'Banking Fraud', 'Investment Scam', 'Cryptocurrency Fraud', 'Wire Transfer Fraud']
  },
  identity_theft: {
    label: 'Identity Theft',
    description: 'Unauthorized use of personal information',
    subcategories: ['Social Security Fraud', 'Medical Identity Theft', 'Tax Identity Theft', 'Account Takeover', 'Synthetic Identity']
  },
  cyberbullying: {
    label: 'Cyberbullying',
    description: 'Online harassment, threats, intimidation',
    subcategories: ['Social Media Harassment', 'Online Stalking', 'Doxxing', 'Revenge Porn', 'Cyberstalking']
  },
  data_breach: {
    label: 'Data Breach',
    description: 'Unauthorized access to sensitive data',
    subcategories: ['Personal Data Breach', 'Corporate Data Breach', 'Healthcare Data Breach', 'Government Data Breach', 'Academic Data Breach']
  },
  malware: {
    label: 'Malware',
    description: 'Malicious software attacks',
    subcategories: ['Virus', 'Trojan', 'Spyware', 'Adware', 'Rootkit', 'Keylogger']
  },
  phishing: {
    label: 'Phishing',
    description: 'Fraudulent attempts to obtain sensitive information',
    subcategories: ['Email Phishing', 'SMS Phishing (Smishing)', 'Voice Phishing (Vishing)', 'Website Phishing', 'Social Media Phishing']
  },
  ransomware: {
    label: 'Ransomware',
    description: 'Malicious software that encrypts data for ransom',
    subcategories: ['File Encryption', 'Database Encryption', 'System Lockout', 'Double Extortion', 'Ransomware-as-a-Service']
  },
  hacking: {
    label: 'Hacking',
    description: 'Unauthorized access to computer systems',
    subcategories: ['Network Intrusion', 'System Compromise', 'Website Defacement', 'DDoS Attack', 'SQL Injection', 'Cross-Site Scripting']
  },
  online_harassment: {
    label: 'Online Harassment',
    description: 'Persistent unwanted digital communication',
    subcategories: ['Threatening Messages', 'Hate Speech', 'Sexual Harassment', 'Workplace Harassment', 'Gaming Harassment']
  },
  cryptocurrency_fraud: {
    label: 'Cryptocurrency Fraud',
    description: 'Fraudulent cryptocurrency-related activities',
    subcategories: ['Crypto Investment Scam', 'Fake ICO', 'Wallet Theft', 'Mining Scam', 'Exchange Fraud']
  },
  social_engineering: {
    label: 'Social Engineering',
    description: 'Psychological manipulation for information gathering',
    subcategories: ['Pretexting', 'Baiting', 'Quid Pro Quo', 'Business Email Compromise', 'Romance Scam']
  },
  other: {
    label: 'Other',
    description: 'Other types of cybercrime not listed above',
    subcategories: ['Online Fraud', 'Digital Piracy', 'Cyber Espionage', 'Cyber Terrorism', 'Internet Gambling Fraud']
  }
};

export const SEVERITY_LEVELS: Record<SeverityLevel, { label: string; color: string; description: string }> = {
  low: {
    label: 'Low',
    color: 'text-green-600 bg-green-50',
    description: 'Minor impact, routine investigation'
  },
  medium: {
    label: 'Medium',
    color: 'text-yellow-600 bg-yellow-50',
    description: 'Moderate impact, standard investigation'
  },
  high: {
    label: 'High',
    color: 'text-orange-600 bg-orange-50',
    description: 'Significant impact, priority investigation'
  },
  critical: {
    label: 'Critical',
    color: 'text-red-600 bg-red-50',
    description: 'Severe impact, immediate investigation required'
  }
};

export const CASE_STATUSES: Record<CaseStatus, { label: string; color: string; description: string }> = {
  submitted: {
    label: 'Submitted',
    color: 'text-blue-600 bg-blue-50',
    description: 'Case has been submitted and awaiting review'
  },
  under_review: {
    label: 'Under Review',
    color: 'text-purple-600 bg-purple-50',
    description: 'Case is being reviewed by law enforcement'
  },
  investigating: {
    label: 'Investigating',
    color: 'text-yellow-600 bg-yellow-50',
    description: 'Active investigation is in progress'
  },
  resolved: {
    label: 'Resolved',
    color: 'text-green-600 bg-green-50',
    description: 'Case has been successfully resolved'
  },
  closed: {
    label: 'Closed',
    color: 'text-gray-600 bg-gray-50',
    description: 'Case has been closed'
  },
  rejected: {
    label: 'Rejected',
    color: 'text-red-600 bg-red-50',
    description: 'Case has been rejected due to insufficient information'
  }
};

export const PRIORITY_LEVELS: Record<Priority, { label: string; color: string }> = {
  low: {
    label: 'Low',
    color: 'text-gray-600 bg-gray-100'
  },
  medium: {
    label: 'Medium',
    color: 'text-blue-600 bg-blue-100'
  },
  high: {
    label: 'High',
    color: 'text-orange-600 bg-orange-100'
  },
  urgent: {
    label: 'Urgent',
    color: 'text-red-600 bg-red-100'
  }
};

export const USER_ROLES: Record<UserRole, { label: string; permissions: string[] }> = {
  citizen: {
    label: 'Citizen',
    permissions: ['create_case', 'view_own_cases', 'update_profile', 'upload_evidence']
  },
  law_enforcement: {
    label: 'Law Enforcement',
    permissions: [
      'view_all_cases',
      'update_case_status',
      'assign_cases',
      'view_evidence',
      'communicate_with_reporter',
      'create_investigation_notes',
      'view_analytics'
    ]
  },
  admin: {
    label: 'Administrator',
    permissions: [
      'manage_users',
      'view_all_cases',
      'system_configuration',
      'view_audit_logs',
      'manage_evidence',
      'view_analytics',
      'system_reports'
    ]
  }
};

export const NAVIGATION_ITEMS = {
  citizen: [
    { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/report', label: 'Report Crime', icon: 'report' },
    { href: '/cases', label: 'My Cases', icon: 'cases' },
    { href: '/profile', label: 'Profile', icon: 'profile' }
  ],
  law_enforcement: [
    { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/cases', label: 'Cases', icon: 'cases' },
    { href: '/evidence', label: 'Evidence', icon: 'evidence' },
    { href: '/analytics', label: 'Analytics', icon: 'analytics' },
    { href: '/profile', label: 'Profile', icon: 'profile' }
  ],
  admin: [
    { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/cases', label: 'Cases', icon: 'cases' },
    { href: '/users', label: 'Users', icon: 'users' },
    { href: '/analytics', label: 'Analytics', icon: 'analytics' },
    { href: '/audit', label: 'Audit Logs', icon: 'audit' },
    { href: '/profile', label: 'Profile', icon: 'profile' }
  ]
};

export const EVIDENCE_TYPES = {
  screenshot: { label: 'Screenshot', icon: 'image', maxSize: '10MB' },
  document: { label: 'Document', icon: 'document', maxSize: '25MB' },
  video: { label: 'Video', icon: 'video', maxSize: '100MB' },
  audio: { label: 'Audio', icon: 'audio', maxSize: '50MB' },
  log_file: { label: 'Log File', icon: 'file', maxSize: '10MB' },
  email: { label: 'Email', icon: 'email', maxSize: '5MB' },
  chat_log: { label: 'Chat Log', icon: 'chat', maxSize: '5MB' },
  financial_record: { label: 'Financial Record', icon: 'finance', maxSize: '10MB' },
  other: { label: 'Other', icon: 'file', maxSize: '25MB' }
};

export const QUICK_ACTIONS = {
  citizen: [
    {
      title: 'Report New Crime',
      description: 'File a new cybercrime incident report',
      icon: 'report',
      href: '/report',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Track My Cases',
      description: 'View status of your reported cases',
      icon: 'track',
      href: '/cases',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Emergency Report',
      description: 'File an urgent cybercrime report',
      icon: 'emergency',
      href: '/report?priority=urgent',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      title: 'Prevention Tips',
      description: 'Learn how to protect yourself online',
      icon: 'tips',
      href: '/prevention',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ],
  law_enforcement: [
    {
      title: 'View Active Cases',
      description: 'Review cases assigned to you',
      icon: 'cases',
      href: '/cases?status=investigating',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Evidence Review',
      description: 'Review pending evidence submissions',
      icon: 'evidence',
      href: '/evidence?status=pending',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      title: 'High Priority Cases',
      description: 'View urgent and high priority cases',
      icon: 'priority',
      href: '/cases?priority=high,urgent',
      color: 'bg-red-500 hover:bg-red-600'
    },
    {
      title: 'Case Analytics',
      description: 'View investigation statistics',
      icon: 'analytics',
      href: '/analytics',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ]
};

export const NOTIFICATION_SETTINGS = {
  email: {
    case_updates: 'Case Status Updates',
    evidence_uploads: 'New Evidence Uploads',
    assignments: 'Case Assignments',
    messages: 'New Messages'
  },
  push: {
    urgent_cases: 'Urgent Cases',
    case_updates: 'Case Updates',
    messages: 'Messages'
  }
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    PROFILE: '/api/auth/profile',
    REFRESH: '/api/auth/refresh'
  },
  CASES: {
    LIST: '/api/cases',
    CREATE: '/api/cases',
    UPDATE: '/api/cases',
    DELETE: '/api/cases',
    SEARCH: '/api/cases/search',
    ANALYTICS: '/api/cases/analytics'
  },
  EVIDENCE: {
    LIST: '/api/evidence',
    UPLOAD: '/api/evidence/upload',
    DELETE: '/api/evidence',
    DOWNLOAD: '/api/evidence/download'
  },
  USERS: {
    LIST: '/api/users',
    CREATE: '/api/users',
    UPDATE: '/api/users',
    DELETE: '/api/users'
  },
  NOTIFICATIONS: {
    LIST: '/api/notifications',
    MARK_READ: '/api/notifications/read',
    SETTINGS: '/api/notifications/settings'
  },
  AI: {
    CLASSIFY: '/api/ai/classify',
    ANALYZE: '/api/ai/analyze'
  }
};

export const FORM_VALIDATION = {
  TITLE: { min: 10, max: 200 },
  DESCRIPTION: { min: 50, max: 2000 },
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[\d\s\-\(\)]+$/,
  PASSWORD: {
    min: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
  }
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'cybercrime_auth_token',
  USER_DATA: 'cybercrime_user_data',
  PREFERENCES: 'cybercrime_preferences',
  DRAFT_REPORT: 'cybercrime_draft_report'
};