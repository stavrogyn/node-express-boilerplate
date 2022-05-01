import { Response } from 'express'
import { Controller, Get, Response as Res } from '@decorators/express'
import { Injectable, Container } from '@decorators/di'

@Injectable()
class RootService {
  public getRoot(): string {
    return 'Hello World'
  }
}

@Controller('/')
export class RootController {
  constructor(readonly service: RootService) {
    this.service = Container.get<RootService>(RootService)
  }

  @Get('')
  getRoot(@Res() res: Response) {
    return res.send(this.service.getRoot())
  }
}
