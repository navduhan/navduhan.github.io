import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sky-100 bg-white py-12 px-6 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
        <div>
          &copy; {new Date().getFullYear()} Dr. Naveen Duhan &bull; South Dakota State University ADRDL
        </div>
        <div className="flex flex-wrap gap-5 text-xs">
          <Link href="/" className="hover:text-sky-700">About</Link>
          <Link href="/research-grants/" className="hover:text-sky-700">Research &amp; Grants</Link>
          <Link href="/software-tools/" className="hover:text-sky-700">Software &amp; Web Servers</Link>
          <Link href="/publications/" className="hover:text-sky-700">Publications</Link>
          <Link href="/teaching/" className="hover:text-sky-700">Teaching</Link>
          <Link href="/blog/" className="hover:text-sky-700 font-bold text-sky-700">Blog</Link>
          <Link href="/contact/" className="hover:text-sky-700">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
