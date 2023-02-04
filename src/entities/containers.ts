import { GenericRepository } from './generic'

export interface ContainerListFilters {
  ancestor?: string[]
  before?: string[]
  expose?: string[]
  exited?: number[]
  health?: string[]
  id?: string[]
  isolation?: string[]
  'is-task'?: string[]
  label?: string[]
  name?: string[]
  network?: string[]
  publish?: string[]
  since?: string[]
  status?: string[]
  volume?: string[]
}

export interface ContainerRepositoryListOptions extends Record<string, any> {
  all?: boolean
  limit?: number
  size?: boolean
  filters?: ContainerListFilters
}

export class ContainersRepository extends GenericRepository {
  async list(opts: ContainerRepositoryListOptions = {}): Promise<unknown> {
    return this.dockerClient.get('containers/json', {
      searchParams: opts,
    }).json()
  }
}
