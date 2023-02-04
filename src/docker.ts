import got, { type Got } from 'got'
import { defu } from 'defu'
import { ContainersRepository } from './entities/containers'
import { ImagesRepository } from './entities/images'
import { NetworksRepository } from './entities/networks'
import { VolumesRepository } from './entities/volumes'
import { ExecRepository } from './entities/exec'
import { SwarmRepository } from './entities/swarm'
import { NodesRepository } from './entities/nodes'
import { ServicesRepository } from './entities/services'
import { TasksRepository } from './entities/tasks'
import { SecretsRepository } from './entities/secrets'
import { ConfigsRepository } from './entities/configs'
import { PluginsRepository } from './entities/plugins'
import { SystemRepository } from './entities/system'
import { DistributionRepository } from './entities/distribution'
import { SessionRepository } from './entities/session'

export interface DockerOptions {
  host: string
}

const DEFAULT_OPTIONS = {
  host: 'http://unix:/var/run/docker.sock:',
} satisfies DockerOptions

export class Docker {
  private dockerClient: Got

  // repos
  containers: ContainersRepository
  images: ImagesRepository
  networks: NetworksRepository
  volumes: VolumesRepository
  exec: ExecRepository
  swarm: SwarmRepository
  nodes: NodesRepository
  services: ServicesRepository
  tasks: TasksRepository
  secrets: SecretsRepository
  configs: ConfigsRepository
  plugins: PluginsRepository
  system: SystemRepository
  distribution: DistributionRepository
  session: SessionRepository

  constructor(opts: Partial<DockerOptions> = {}) {
    const options = defu(opts, DEFAULT_OPTIONS)

    this.dockerClient = got.extend({
      prefixUrl: options.host,
      enableUnixSockets: true,
    })

    // repos
    this.containers = new ContainersRepository({
      dockerClient: this.dockerClient,
    })
    this.images = new ImagesRepository({
      dockerClient: this.dockerClient,
    })
    this.networks = new NetworksRepository({
      dockerClient: this.dockerClient,
    })
    this.volumes = new VolumesRepository({
      dockerClient: this.dockerClient,
    })
    this.exec = new ExecRepository({
      dockerClient: this.dockerClient,
    })
    this.swarm = new SwarmRepository({
      dockerClient: this.dockerClient,
    })
    this.nodes = new NodesRepository({
      dockerClient: this.dockerClient,
    })
    this.services = new ServicesRepository({
      dockerClient: this.dockerClient,
    })
    this.tasks = new TasksRepository({
      dockerClient: this.dockerClient,
    })
    this.secrets = new SecretsRepository({
      dockerClient: this.dockerClient,
    })
    this.configs = new ConfigsRepository({
      dockerClient: this.dockerClient,
    })
    this.plugins = new PluginsRepository({
      dockerClient: this.dockerClient,
    })
    this.system = new SystemRepository({
      dockerClient: this.dockerClient,
    })
    this.distribution = new DistributionRepository({
      dockerClient: this.dockerClient,
    })
    this.session = new SessionRepository({
      dockerClient: this.dockerClient,
    })
  }
}
