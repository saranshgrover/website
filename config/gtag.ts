import { GA_TACKING_ID } from "./settings"
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
	// @ts-ignore
  window.gtag('config', GA_TACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
//@ts-ignore
export const event = ({ action, category, label, value }) => {
	//@ts-ignore
	window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

export {}
