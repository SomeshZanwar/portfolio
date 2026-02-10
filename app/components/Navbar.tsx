export default function Navbar() {
    return (
      <nav className="border-b">
        <div className="mx-auto max-w-4xl px-6 py-4 flex justify-between">
          <a href="/" className="font-semibold">Somesh Zanwar</a>
          <div className="space-x-4 text-sm">
            <a href="/projects">Projects</a>
            <a href="/resume.pdf">Resume</a>
            <a href="https://github.com/YOUR_GITHUB" target="_blank">GitHub</a>
          </div>
        </div>
      </nav>
    );
  }
  