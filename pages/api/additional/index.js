import { additional_pages } from '../../../data/additional_pages'

export default function handler(req, res) {
  // res.status(200).json(additional_pages)
  res.status(200).send(additional_pages)
}