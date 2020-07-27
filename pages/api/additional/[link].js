import { additional_pages } from '../../../data/additional_pages'

export default function pageHandler({ query: { link } }, res) {
  const filtered = additional_pages.filter((p) => p.link === link)

  // Page with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Page with link: ${link} not found.` })
  }
}