function getApiBaseUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_MAIN_PLATFORM_API;
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    if (!envUrl || envUrl.startsWith('http://')) {
      return '/api/proxy';
    }
  }
  return envUrl || '/api/proxy';
}

const API_BASE_URL = getApiBaseUrl();


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
    if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
      return data.url;
    }
    const backendOrigin = process.env.NEXT_PUBLIC_BACKEND_URL || API_BASE_URL.replace(/\/api\/main-platform\/?$/, '');
    return `${backendOrigin}${data.url}`;
  }
  return data.url;
}

export async function importSubjectJsx(jsxContent: string, imageUrl?: string, badgeColor?: string) {
  let processedJsx = jsxContent.trim();
  const exportConstMatch = processedJsx.match(/^export\s+const\s+(\w+)\s*=/m);
  if (exportConstMatch) {
    const varName = exportConstMatch[1];
    processedJsx = processedJsx.replace(/^export\s+const\s+/, 'const ');
    if (!processedJsx.includes('module.exports')) {
      processedJsx += `\nif (typeof module !== 'undefined') { module.exports = ${varName}; }`;
    }
  } else if (/^export\s+default/m.test(processedJsx)) {
    processedJsx = processedJsx.replace(/^export\s+default\s+/, 'const _defaultExport = ');
    if (!processedJsx.includes('module.exports')) {
      processedJsx += `\nif (typeof module !== 'undefined') { module.exports = _defaultExport; }`;
    }
  }

  // Client-side evaluation to produce clean JSON structure
  let parsedData: any = null;
  try {
    const evalCode = jsxContent.trim()
      .replace(/^export\s+const\s+\w+\s*=/m, 'return')
      .replace(/^export\s+default\s+/m, 'return')
      .replace(/^(const|var|let)\s+\w+\s*=/m, 'return')
      .replace(/;\s*$/, '');
    parsedData = new Function(evalCode)();
  } catch (e) {
    console.warn('Client-side JS object parsing notice:', e);
  }

  const res = await fetch(`${API_BASE_URL}/import-subject`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsxContent: processedJsx,
      rawJsxContent: jsxContent,
      parsedData,
      jsonContent: parsedData ? JSON.stringify(parsedData) : null,
      imageUrl,
      badgeColor
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.detail || 'Import failed');
  }
  return data;
}


