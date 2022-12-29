export interface Pagination {
  page: number;
  limit: number;
}

export interface PaginationResult<Model = unknown> {
  previous: Pagination | null;
  current: Model;
  next: Pagination | null;
}
