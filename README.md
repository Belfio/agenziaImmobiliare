# GL1 Product Architecture

## Goal

The GL1 team aims to develop a production-ready Minimum Viable Product (MVP) to showcase their initial system to key stakeholders. This MVP must meet the following critical requirements:

1. Flexibility for rapid iterations
2. Scalability to evolve into a fully compliant professional tool
3. Clean integration with data models and pipelines
4. Cost-effectiveness

Notes:

- No-code tools are avoided as they are not well-suited for unique use-cases like a retrofit mortgage platform, and they don't necessarily increase development speed for this project.
- Vercel is not considered due to concerns about the reliability of their cost billing system. An error in the code could potentially lead to significant unexpected costs for the company.

These considerations have led to the selection of a more customizable and cost-controllable tech stack, as detailed in the following sections.

## Technology Stack

After careful consideration of the project requirements, we've selected the following technology stack:

### Infrastructure and Backend

- **Amazon Web Services (AWS)**: Chosen for its comprehensive suite of IaaS and serverless offerings, providing scalability, reliability, and cost-effectiveness.
  - Key services: Lambda, API Gateway, DynamoDB, RDS, S3, CloudFront

### Frontend

- **React**: A popular, efficient JavaScript library for building user interfaces.
- **Remix.run**: A full-stack web framework that leverages React's component model for both client and server-side rendering, offering improved performance and SEO capabilities.
- **Shadcn UI**: A collection of re-usable components built with Radix UI and Tailwind CSS, chosen for its accessibility, customizability, and design consistency.

### Deployment and DevOps

- **SST (Serverless Stack)**: An open-source framework for building and deploying serverless applications on AWS, selected for its seamless integration with AWS services and developer-friendly workflows.

## Detailed Architecture

### Web Application

- **Design Philosophy**: Desktop-first, with responsive design to ensure usability across various devices.
- **Content Delivery**:
  - Primary: AWS CloudFront CDN
  - Alternative: Cloudflare CDN (for potential multi-CDN strategy)
- **HTTPS**: Enforced for all connections to ensure data security and integrity.

### Server-Side Rendering with Remix

- Each request to the domain triggers an AWS Lambda function.
- Remix handles both server-side rendering and client-side navigation, improving initial load times and SEO.
- The Remix application has direct access to AWS services, allowing for efficient handling of business logic without the need for a separate API layer.

### Data Flow

1. User requests reach CloudFront CDN.
2. Requests are forwarded to AWS Lambda running the Remix application.
3. Remix handles the request, interacting with necessary AWS services (e.g., databases, other Lambda functions).
4. The response is sent back through CloudFront to the user.

### AWS Services Integration

- **API Gateway**: Manages and secures API endpoints for any external integrations.
- **Lambda**: Executes Remix application code and handles specific backend tasks.
- **DynamoDB**: Stores SaaS functional data (user profiles, settings, etc.).
- **RDS (PostgreSQL)**: Manages property and emission data, leveraging SQL capabilities for complex queries.
- **S3**: Stores static assets and potentially acts as a data lake for analytics.
- **EventBridge**: Orchestrates cron jobs and event-driven processes.

### Data Model Interface

- Currently, Remix interfaces with GL1 models primarily through database access.
- Future plans include developing dedicated data services on AWS to enhance modularity and scalability.

## Database Architecture

### NoSQL Database (DynamoDB)

- Purpose: Store SaaS functional data (user profiles, settings, company profiles)
- Justification: Fast read/write operations, scalability, and efficient key-based data retrieval
- Data Model: Designed around the userId as the primary key for optimal performance

### Relational Database (RDS - PostgreSQL)

- Purpose: Store property and emission data
- Justification: Complex relationships between data points, need for ACID transactions, and powerful querying capabilities
- Data Model: Normalized schema design to minimize data redundancy and ensure data integrity

## Development Workflow

### Local Development

1. Install dependencies:
   ```
   bun install  # or npm install
   ```
2. Start the SST development environment:

   ```
   npx sst dev
   ```

   This command:

   - Deploys a development stack to your AWS account
   - Sets up local emulation of AWS services
   - Enables hot reloading for rapid development

3. For frontend-only development:
   ```
   bun run dev
   ```
   This runs Remix in development mode without AWS service integration.

### Deployment Process

1. Development deployments are automated through the SST development workflow.
2. For production and other environments:
   ```
   npx sst deploy --stage <environment>
   ```
   This command:
   - Builds the application
   - Packages all resources
   - Deploys to the specified AWS environment using CloudFormation

## Scalability and Future Considerations

- The serverless architecture allows for automatic scaling based on demand.
- The separation of frontend and backend concerns enables independent scaling and updates.
- Future enhancements may include:
  - Implementing GraphQL for more efficient data fetching
  - Adopting a microservices architecture for specific high-load components
  - Integrating machine learning models for predictive analytics

This architecture provides a solid foundation for the GL1 MVP, balancing immediate needs with future scalability and feature expansion. The use of modern, cloud-native technologies ensures that the system can evolve to meet changing business requirements while maintaining performance and cost-effectiveness.
