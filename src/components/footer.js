export default function Footer() {
  return (
    <footer className="mt-12 w-full bg-[#3F3DFF] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-[11px]">
          <div>
            <p className="font-semibold text-xs">Movie Z</p>
            <p className="mt-2 text-[11px] text-white/80">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>

          <div>
            <p className="font-semibold text-xs mb-2">Company</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Press</p>
          </div>

          <div>
            <p className="font-semibold text-xs mb-2">Contact Information</p>
            <p>Email: support@moviez.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>

          <div>
            <p className="font-semibold text-xs mb-2">Follow us</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>YouTube</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
