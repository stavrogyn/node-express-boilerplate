### Node express boilerplate

This project is created for the future to decrease potential efforts inventing some new service.

To start express server:

`yarn start`

To test express server:

`yarn test`

For development:

`yarn dev`


### Database

To connect your own database, change env variables in .env file

If you decide to use PrismaORM:

1. Generate scheme due `yarn prisma db pull`, `yarn generate`
2. To test your connection, correct file `src/connection/prisma.ts` and run `yarn ts-node src/connection/prisma.ts`
3. Remove mongoose connection from `/index.ts`

If you decide to use Mongoose:

1. Remove PrismaORM deps: `yarn remove prisma`
2. Remove example file `src/connection/prisma.ts`

To build your project for Docker:

`make docker_build`

To run image in Docker:

`make docker_run`
