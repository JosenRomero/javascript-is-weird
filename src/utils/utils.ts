
// returns the date as a string "day/month/year"
export const formattedDate = (pubDate: any, month = 'numeric') => {
	const options = { year: 'numeric', month: month, day: 'numeric', timeZone: "UTC" }
	return pubDate.toLocaleDateString('es', options)
}