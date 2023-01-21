import { Request, Response } from 'express';
import { ApiResponse } from '../types/api-response';
import { Pagination, PaginationResult } from '../types/pagination';

interface Project {
  id: string;
  title: string;
}

const projects: Project[] = [
  { id: '1', title: 'learning-rust' },
  { id: '2', title: 'learning-shell' },
  { id: '3', title: 'learning-postgres' },
  { id: '4', title: 'learning-redis' },
  { id: '5', title: 'learning-go' },
  { id: '6', title: 'learning-typescript' },
  { id: '7', title: 'learning-docker' },
  { id: '8', title: 'learning-cicd' },
  { id: '9', title: 'learning-mongobd' },
  { id: '10', title: 'learning-cassandra' },
  { id: '11', title: 'learning-cpp' },
];

export async function ProjectsController(
  request: Request<unknown, unknown, unknown, Pagination>,
  response: Response<ApiResponse<PaginationResult>>,
) {
  const page = Number(request.query.page);
  const limit = Number(request.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const resultProjects: PaginationResult = {
    previous: startIndex > 0
      ? { page: page - 1, limit }
      : null,
    current: projects.slice(startIndex, endIndex),
    next: startIndex > 0
      ? { page: page + 1, limit }
      : null,
  };

  return response.status(200).json({
    success: true,
    data: resultProjects,
    now: new Date(),
  });
}
