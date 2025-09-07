// Core TypeScript definitions for the Cybercrime Portal

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  department?: string;
  badgeNumber?: string;
  phone?: string;
  createdAt: string;
  lastLogin?: string;
  isActive: boolean;
  avatar?: string;
}

export type UserRole = 'citizen' | 'law_enforcement' | 'admin';

export interface CrimeCase {
  id: string;
  reporterId: string;
  assignedOfficerId?: string;
  title: string;
  description: string;
  category: CrimeCategory;
  subCategory: string;
  severity: SeverityLevel;
  status: CaseStatus;
  location: Location;
  incidentDate: string;
  reportedDate: string;
  lastUpdated: string;
  evidence: Evidence[];
  communications: Communication[];
  tags: string[];
  estimatedLoss?: number;
  ipAddress?: string;
  websites?: string[];
  suspects?: Suspect[];
  priority: Priority;
  isPublic: boolean;
}

export type CrimeCategory = 
  | 'financial_fraud' 
  | 'identity_theft' 
  | 'cyberbullying' 
  | 'data_breach' 
  | 'malware' 
  | 'phishing' 
  | 'ransomware' 
  | 'hacking' 
  | 'online_harassment' 
  | 'cryptocurrency_fraud' 
  | 'social_engineering'
  | 'other';

export type SeverityLevel = 'low' | 'medium' | 'high' | 'critical';
export type CaseStatus = 'submitted' | 'under_review' | 'investigating' | 'resolved' | 'closed' | 'rejected';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export interface Location {
  country: string;
  state: string;
  city: string;
  zipCode?: string;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Evidence {
  id: string;
  caseId: string;
  type: EvidenceType;
  fileName: string;
  fileSize: number;
  uploadedBy: string;
  uploadedAt: string;
  description: string;
  hash: string;
  isVerified: boolean;
  chainOfCustody: ChainOfCustodyEntry[];
}

export type EvidenceType = 
  | 'screenshot' 
  | 'document' 
  | 'video' 
  | 'audio' 
  | 'log_file' 
  | 'email' 
  | 'chat_log' 
  | 'financial_record'
  | 'other';

export interface ChainOfCustodyEntry {
  id: string;
  userId: string;
  action: 'uploaded' | 'accessed' | 'modified' | 'transferred' | 'analyzed';
  timestamp: string;
  notes?: string;
  ipAddress: string;
}

export interface Communication {
  id: string;
  caseId: string;
  fromUserId: string;
  toUserId: string;
  message: string;
  timestamp: string;
  type: 'message' | 'status_update' | 'evidence_update' | 'system_notification';
  isRead: boolean;
  attachments?: string[];
}

export interface Suspect {
  id: string;
  name?: string;
  alias?: string;
  email?: string;
  phone?: string;
  socialMedia?: string[];
  knownAddresses?: string[];
  description: string;
  isVerified: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
  caseId?: string;
}

export type NotificationType = 
  | 'case_update' 
  | 'evidence_uploaded' 
  | 'message_received' 
  | 'assignment' 
  | 'priority_change'
  | 'system_alert';

export interface Analytics {
  totalCases: number;
  resolvedCases: number;
  activeCases: number;
  averageResolutionTime: number;
  casesByCategory: Record<CrimeCategory, number>;
  casesByStatus: Record<CaseStatus, number>;
  casesByMonth: Array<{
    month: string;
    count: number;
    resolved: number;
  }>;
  casesBySeverity: Record<SeverityLevel, number>;
  topOfficers: Array<{
    name: string;
    casesResolved: number;
    averageTime: number;
  }>;
  geographicalData: Array<{
    location: string;
    count: number;
    coordinates: { lat: number; lng: number };
  }>;
}

export interface AuthContext {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  isLoading: boolean;
  error: string | null;
}

export interface CaseFormData {
  title: string;
  description: string;
  category: CrimeCategory;
  subCategory: string;
  severity: SeverityLevel;
  location: Location;
  incidentDate: string;
  estimatedLoss?: number;
  ipAddress?: string;
  websites?: string[];
  evidence: File[];
  tags: string[];
}

export interface FilterOptions {
  status?: CaseStatus[];
  category?: CrimeCategory[];
  severity?: SeverityLevel[];
  priority?: Priority[];
  dateRange?: {
    start: string;
    end: string;
  };
  assignedOfficer?: string;
  searchTerm?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Dashboard-specific interfaces
export interface DashboardStats {
  totalCases: number;
  pendingCases: number;
  resolvedCases: number;
  newCasesToday: number;
  averageResponseTime: string;
  successRate: number;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export interface RecentActivity {
  id: string;
  type: 'case_created' | 'case_updated' | 'evidence_added' | 'case_resolved';
  message: string;
  timestamp: string;
  userId: string;
  userName: string;
  caseId?: string;
}

// Search and AI Classification
export interface AIClassificationResult {
  category: CrimeCategory;
  subCategory: string;
  severity: SeverityLevel;
  confidence: number;
  suggestedTags: string[];
  riskFactors: string[];
}

export interface SearchResult {
  cases: CrimeCase[];
  users: User[];
  evidence: Evidence[];
  totalResults: number;
}