export function formatDate(dateString, options) {
  const date = new Date(dateString);
  const defaultTimeZoneOptions = options?.hour
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
