// Utility function to track custom events in Google Analytics
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...eventParams,
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }
};

// Predefined events
export const analyticsEvents = {
  // Publication events
  viewPublication: (title) => trackEvent('view_publication', { publication_title: title }),
  downloadPDF: (title) => trackEvent('download_pdf', { publication_title: title }),
  copyCitation: (title) => trackEvent('copy_citation', { publication_title: title }),
  
  // Navigation events
  viewResearch: () => trackEvent('view_research'),
  viewTeaching: () => trackEvent('view_teaching'),
  viewPublications: () => trackEvent('view_publications'),
  
  // Contact events
  sendMessage: () => trackEvent('send_message'),
  clickEmail: () => trackEvent('click_email'),
  clickSocial: (platform) => trackEvent('click_social', { platform }),
  
  // Search events
  searchPublications: (query) => trackEvent('search_publications', { search_query: query }),
  filterPublications: (filter) => trackEvent('filter_publications', { filter_type: filter }),
  
  // Theme events
  toggleTheme: (theme) => trackEvent('toggle_theme', { theme }),
}; 