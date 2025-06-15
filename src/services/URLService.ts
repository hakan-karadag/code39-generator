export class URLService {
  private static getBasePath(): string {
    // Détecte automatiquement le base path depuis l'URL actuelle
    const path = window.location.pathname;
    if (path.includes('/code39-generator/')) {
      return '/code39-generator';
    }
    return '';
  }

  /**
   * Met à jour l'URL avec les paramètres ID et PATTERN
   */
  static updateURL(id: string, pattern: string): void {
    const url = new URL(window.location.href);
    
    if (id) {
      url.searchParams.set('ID', id);
    } else {
      url.searchParams.delete('ID');
    }
    
    if (pattern) {
      url.searchParams.set('PATTERN', pattern);
    } else {
      url.searchParams.delete('PATTERN');
    }
    
    window.history.replaceState(null, '', url.toString());
  }

  /**
   * Navigue vers la page de résultat avec les paramètres
   */
  static navigateToResult(id: string, pattern: string): void {
    const params = new URLSearchParams();
    if (id) params.set('ID', id);
    if (pattern) params.set('PATTERN', pattern);
    
    const basePath = this.getBasePath();
    const newURL = `${basePath}/barcode?${params.toString()}`;
    window.history.pushState(null, '', newURL);
  }

  /**
   * Navigue vers la page d'accueil
   */
  static navigateToHome(): void {
    const basePath = this.getBasePath();
    window.history.pushState(null, '', basePath || '/');
  }

  /**
   * Récupère les paramètres ID et PATTERN depuis l'URL
   */
  static getURLParams(): { id: string | null; pattern: string | null } {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      id: urlParams.get('ID'),
      pattern: urlParams.get('PATTERN')
    };
  }

  /**
   * Détermine la page courante en fonction de l'URL
   */
  static getCurrentPage(): 'home' | 'result' {
    const path = window.location.pathname;
    return path.endsWith('/barcode') ? 'result' : 'home';
  }
} 