import { resolvable_pages } from '../../../data/resolvable_pages'

export default function pageHandler({ query: { link } }, res) {
  const filtered = resolvable_pages.filter((p) => p.link === link)

  // Page with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
    // res.status(200).send(filtered[0])
  } else {
    res.status(404).json({ message: `Page with link: ${link} not found.` })
  }
}