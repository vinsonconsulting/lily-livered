# Security Policy

## Supported Versions

This is a single-branch template repo. Security fixes land on `main` and propagate to forks via `git pull`.

## Reporting a Vulnerability

If you've found a security issue, please **don't open a public issue.** Instead, use one of the following:

- **GitHub Security Advisories** — [open a private report](https://github.com/vinsonconsulting/lily-livered/security/advisories/new) (preferred, lets us coordinate a fix and CVE if warranted)
- **Email** — `jim@vinson.org` with subject `lily-livered security`

Please include:

- A description of the issue and its impact
- Steps to reproduce
- Your suggested fix, if you have one

You'll get an acknowledgment within 72 hours. We'll work with you on a disclosure timeline; the default is 90 days from report to public disclosure, but we'll move faster for anything actively exploitable.

## Scope

This template ships:

- A static site (no server-side runtime, no database, no auth surface)
- Security headers via `public/_headers` for Cloudflare Pages
- A Content Security Policy
- Two GitHub Actions workflows with scoped `permissions:` blocks

In-scope reports include:

- CSP bypasses or weaknesses in `public/_headers`
- Workflow injection or privilege escalation in `.github/workflows/`
- Supply-chain concerns about pinned dependencies
- Information leakage via build output (`dist/`)

Out of scope:

- Issues that require an attacker to already control the repo or deployment
- Issues only present in user-modified forks
- Best-practice suggestions without a demonstrated exploit (please open a normal issue or PR for those)

## Thanks

This template borrows hardening ideas from the Cloudflare Pages, Astro, and Mozilla Web Security communities. If a finding here improves the template, you'll be credited in the changelog and on the demo site's `/llms.txt` page if you'd like.
