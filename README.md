# GL1

## Product Architecture

### Goal

The GL1 team needs to develop a production ready MVP that will allow to showcase their initial system to a list of stakeholders.

The requirements are:

- flexible system for quick iterations
- system that can be scaled to a fully compliant professional tool
- system that will allow a clean connection with the data models and data pipeline
- low cost

### Stack

I selected the following stack:

- AWS for the IaaS and its serverless services
- React + Remix.run for the FE development
- Shadcn UI for the FE components library
- SST Ion for the deployment system and the orchestration of the AS services

### Architecture

Web platform designed for Desktop but reponsive (desktop-first).
Served through Cloudflare CDN or AWS CDN via https.
Remix is a server side FE framework - each call to the domain triggers a AWS lambda function connected to the CDN.
Remix has access to the AWS services that will handle the business logics - databases, lambda function, cron jobs, etc..

At the moment Remix main interface with the GL1 models is through a database that the Data team can access and modify.

Eventually, a set of data service will be deployed on AWS.

### Databases

The platform has 2 main kinds of data structures:

- SaaS functional data (userProfiles, settings, companyProfile) that can be served with a fast NoSQL database. Each retrieval can be done with the main key of userId
- Property and emission data. This is in the form of transactional data and due to the SQL ability to quickly filters and merge data, it is better served with a relational database.

### Development

SST manages the local and serverside deployment.

To start developing, in the command line run:

`bun install // or npm install`

`npx sst dev `

SST will deploy in a AWS account a development environment that is accessible in the local machine and gives access to AWS services like a database.

Alternatively, to only develop the FE without running AWS services, in the command line run:

`bun run dev`

When the system is ready to be deployed, SST manages the deployment in the different environments via the command:

`npx sst deploy --stage production`
