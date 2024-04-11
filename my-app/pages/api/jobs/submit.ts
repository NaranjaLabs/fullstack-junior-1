import type { NextApiRequest, NextApiResponse } from "next";

type Data = { message: string };

const bodyConstraints = {
  name: {
    type: 'string',
    errorUndefined: 'The field "name" is required.',
    errorType: 'The field "name" must be of the type string.',
    errorLength: 'The field "name" can not be an empty string.'
  },
  age: {
    type: 'number',
    errorUndefined: 'The field "age" is required.',
    errorType: 'The field "age" must be of the type number.'
  },
  phone: {
    type: 'string',
    errorUndefined: 'The field "phone" is required.',
    errorType: 'The field "phone" must be of the type string.',
    errorLength: 'The field "phone" can not be an empty string.'
  },
  state: {
    type: 'string',
    errorUndefined: 'The field "state" is required.',
    errorType: 'The field "state" must be of the type string.',
    errorLength: 'The field "phone" can not be an empty string.'
  },
  city: {
    type: 'string',
    errorUndefined: 'The field "city" is required.',
    errorType: 'The field "city" must be of the type string.',
    errorLength: 'The field "phone" can not be an empty string.'
  },
}

type Fields = 'name' | 'age' | 'phone' | 'state' | 'city';
type StringFields = 'name' | 'phone' | 'state' | 'city';

const validateBody = (req: NextApiRequest): { statusCode: number, message: string } => {
  const bodyKeys = Object.keys(req.body);
  const constraintKeys = Object.keys(bodyConstraints);
  if (bodyKeys.length === 0) return { statusCode: 400, message: 'No fields sent.' };

  const keyNotAllowed = bodyKeys.find((key) => !constraintKeys.includes(key));
  if (keyNotAllowed) return { statusCode: 400, message: `The field "${keyNotAllowed}" is not allowed.` };

  const error = constraintKeys.find((key) => typeof req.body[key] !== bodyConstraints[key as Fields].type || req.body[key] == '');
  if (error) {
    if (req.body[error] === undefined) return { statusCode: 400, message: bodyConstraints[error as Fields].errorUndefined };
    if (req.body[error] === '') return { statusCode: 400, message: bodyConstraints[error as StringFields].errorLength };
    return { statusCode: 400, message: bodyConstraints[error as Fields].errorType };
  }

  return { statusCode: 200, message: `Thank you for your application, ${req.body.name}`};
}

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    try {
      const { statusCode, message } = validateBody(req);
      return res.status(statusCode).json({ message });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error.' })
    }
  } else {
    return res.status(405).json({ message: `Cannot ${req.method} this route.`})
  }
}