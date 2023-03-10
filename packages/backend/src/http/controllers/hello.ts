import { Request, Response } from 'express';
import { ApiResponse } from '../types/api-response';

export default function HelloController(
  _: Request,
  response: Response<ApiResponse>,
) {
  return response.status(200).json({
    success: true,
    data: {
      message: 'Hello, world! 👋',
    },
    now: new Date(),
  });
}
