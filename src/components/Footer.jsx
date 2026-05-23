export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-900">
      <div className="max-w-5xl mx-auto text-center px-4">
        <p className="text-sm">
          Building digital solutions. 
          <br className="md:hidden" /> 
          &copy; {new Date().getFullYear()} Athar Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}