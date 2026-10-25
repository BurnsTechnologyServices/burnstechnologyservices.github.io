# Burns Technology Services website

A static, responsive company website. No install, build step, API keys, paid plugins or backend is required. It can be opened locally or served by GitHub Pages.

## Files

- `index.html` — homepage, styling and browser interactions
- `privacy.html` — website privacy information
- `404.html` — missing-page view
- `favicon.svg` — brand mark
- `.nojekyll` — tells GitHub Pages to serve the static site without Jekyll

## Publish using the business GitHub account

The supplied screenshot shows the username `BurnsTechnologyServices`. Confirm the owner shown in GitHub before creating the repository.

1. Sign in to the business account and select **New repository**.
2. For an account homepage, use `burnstechnologyservices.github.io` as the repository name. Set it to **Public** for GitHub Free. Initialize with a README.
3. Open the repository and choose **Add file → Upload files**. Extract this ZIP first, then upload the website files to the repository root. Do not upload the ZIP itself. `index.html` must be at the top level, rather than inside an extra folder.
4. Commit the files to `main`.
5. Go to **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, then **main** and **/ (root)**. Save.
6. Wait for GitHub’s Pages deployment to finish. Use the **Visit site** link on the Pages settings screen. Verify the homepage, privacy link, mobile navigation and enquiry draft.

GitHub documents free Pages for public repositories, account-site naming, branch publishing and the possible publication delay:

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

This is an informational company portfolio and service overview. There is no checkout, online payment, customer account or hosted SaaS. GitHub limits sites primarily directed at commercial transactions or commercial SaaS. If the website expands into those functions, choose hosting that permits the intended use.

## Contact details and company disclosures to check before public launch

- The draft uses `ryandavidburns@hotmail.com`, the **Company Email Address** in the supplied incorporation application. Replace it throughout `index.html` and `privacy.html` if a different public business address is preferred.
- The supplied document is an incorporation application. It does not establish the current company registration number or status. Confirm current legal disclosures from the issued registration records before launch. Do not substitute the submission reference for a company number.
- No phone number, residential address, dates of birth, signatures or source PDFs have been included in the public website files.
- No unapproved prices, customer claims, testimonials, partner badges or guaranteed results are published.
- Review the privacy information against the final hosting and enquiry process before launch.

## Edit the content

Open `index.html` in a text editor. Styles and scripts are embedded so the homepage is easy to move. The six service descriptions come from the supplied company brief. Illustrative workflows are marked as examples.

To change the email address, replace all occurrences in `index.html` and `privacy.html`, including the `mailto:` links and enquiry script. To add phone details, add them in the contact section after deciding which number should be public.

The enquiry form only prepares a `mailto:` draft. It does not submit or save the form data. The visitor must review and send the email. A direct email link is available even if JavaScript is disabled or an email handler is not configured.

## A future custom domain

The same static website can move to a custom domain later. After choosing and buying a domain, follow GitHub’s custom-domain verification and DNS instructions. This package does not contain a `CNAME` or invented domain.

## Local preview

Open `index.html` directly in a browser, or serve the folder with a local static server. The `.openai` directory used for the development preview is not part of the downloadable publication package.
