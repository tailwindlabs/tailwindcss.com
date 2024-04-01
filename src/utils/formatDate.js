export const DateTimeFormats = {
  short: {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  },
  medium: {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric'
  },
  BLOG_POST: {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
}

export function formatDate(dateString, options = DateTimeFormats.simple) {
  const date = new Date(dateString);
  const defaultTimeZoneOptions = options.hour
    ? {
      timeZoneName: 'shortGeneric',
      timeZone: 'America/New_York',
    }
    : {};

  return new Intl.DateTimeFormat("en-US", {
    ...defaultTimeZoneOptions,
    ...options,
  }).format(date);
}
