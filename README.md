<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Mashlom Assuta-Patients
</h1>

## Example for SSG with selective i18n implementation

### Instructions

1.  **Clone**


    ```shell
    # clone the repo to your machine
    git clone url
    ```

2.  **Start developing.**

    Open directory and run install & npm develop
    create .env.development and .env.production files with GA_ID=example_id value for the build to work

    ```shell
    cd mashlom-assuta-patients/
    npm install
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000  
    
    don't forget to add google analytics key to the env file

    Edit `src/pages/index.js` to see your site update in real-time!
</br>

4.  **Deploy to Github pages**

    In order to deploy to github pages you need to setup the remote origin to your local project and set the remote project build and deployment source to github actions

    after that mergeing or deploying to master/main will run a github action that will auto deploy the site. (make sure your main branch is allowed to deploy to the github-pages branch in the Deployment protection rules)

    see more information here: [Deploying gatsby to github pages](https://dev.to/arnonate/deploying-gatsby-to-github-pages-3af5)


### Using Environment Variables in GitHub Actions

To use environment variables in your GitHub Actions workflow, follow these steps:

1. **Add Secrets to GitHub**:
   - Go to your GitHub repository.
   - Click on the "Settings" tab.
   - Select "Secrets and variables" under "Security" and then "Actions".
   - Click "New repository secret".
   - Add your secret (e.g., `GA_ID`) and click "Add secret".

2. **Configure Your Workflow**:
   - In your `.github/workflows` directory, ensure that your workflow file specifies the environment for jobs that need the secrets.
   - Use `${{ secrets.GA_ID }}` in your workflow to access the secret.

   Example:
   ```yaml
   jobs:
     build:
       runs-on: ubuntu-latest
       environment: production
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Build
           env:
             GA_ID: ${{ secrets.GA_ID }}
           run: npm run build

3. **Usage in Gatsby**:
  - In your Gatsby configuration, use process.env.GA_ID to access the environment variable.

By following these steps, you ensure that sensitive information is securely managed and available during the build process.