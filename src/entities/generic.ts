import type { Got } from 'got'

export interface GenericRepositoryOptions {
  dockerClient: Got
}

export class GenericRepository {
  protected dockerClient: Got

  constructor(opts: GenericRepositoryOptions) {
    this.dockerClient = opts.dockerClient
  }
}
