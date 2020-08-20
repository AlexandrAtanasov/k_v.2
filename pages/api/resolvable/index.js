import { resolvable_pages } from '../../../data/resolvable_pages'

export default function handler(req, res) {
  res.status(200).json(resolvable_pages)
  // res.status(200).send(resolvable_pages)
}