const API_BASE_URL = process.env.NEXT_PUBLIC_MAIN_PLATFORM_API || 'http://localhost:9002/api/main-platform';

export interface LessonItem {
  id: string;
  title: string;
  duration?: string;
  videoUrl?: string;
  completed?: boolean;
}

export interface ChapterItem {
  id: string;
  title: string;
  lessons: LessonItem[];
}

export interface PageItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  category?: string;
  imageUrl?: string;
  iconName?: string;
  link?: string;
  badgeText?: string;
  badgeColor?: string;
  price?: string;
  isVisible: boolean;
  order: number;
  chapters?: ChapterItem[];
}

export interface PageSection {
  id: string;
  title: string;
  subtitle?: string;
  isVisible: boolean;
  items: PageItem[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  badgeText?: string;
}

export interface PageConfig {
  slug: string;
  title: string;
  subtitle?: string;
  heroSlides: HeroSlide[];
  sections: PageSection[];
  isPublished: boolean;
  updatedAt?: string;
}

export interface PageSummary {
  slug: string;
  title: string;
  subtitle?: string;
  sectionsCount: number;
  itemsCount: number;
  heroSlidesCount: number;
  isPublished: boolean;
  updatedAt?: string;
}

export async function adminLogin(username: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/admin/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || 'Login failed');
  }
  return data;
}

export async function verifyAdminToken(token: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/admin/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  } catch {
    return { success: false, valid: false };
  }
}

export async function fetchPagesSummary(): Promise<PageSummary[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/pages`, { cache: 'no-store' });
    const json = await res.json();
    if (json.success && Array.isArray(json.data)) {
      return json.data;
    }
    return [];
  } catch (error) {
    console.error('Failed to fetch pages summary:', error);
    return [];
  }
}

export async function fetchPageConfig(slug: string): Promise<PageConfig | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/pages/${slug}`, { cache: 'no-store' });
    const json = await res.json();
    if (json.success && json.data) {
      return json.data;
    }
    return null;
  } catch (error) {
    console.error(`Failed to fetch config for ${slug}:`, error);
    return null;
  }
}

export async function savePageConfig(slug: string, config: Partial<PageConfig>, token?: string) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch(`${API_BASE_URL}/pages/${slug}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(config),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || 'Failed to save configuration');
  }
  return data;
}

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('file', file);

  const res = await fetch(`${API_BASE_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();
  if (!res.ok || !data.url) {
    throw new Error(data.detail || 'Image upload failed');
  }

  // Convert relative backend path to absolute URL if needed
  if (data.url.startsWith('/uploads/')) {
    const backendOrigin = process.env.NEXT_PUBLIC_BACKEND_URL || API_BASE_URL.replace(/\/api\/main-platform\/?$/, '');
    return `${backendOrigin}${data.url}`;
  }
  return data.url;
}
