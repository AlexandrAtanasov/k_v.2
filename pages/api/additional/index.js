import { additional_pages } from '../../../data/pages/additional_pages'

export default function handler(req, res) {
  res.status(200).json(additional_pages)
}