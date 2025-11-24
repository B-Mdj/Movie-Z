import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 w-full bg-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-[11px]">
          <div>
            <p className="font-semibold italic text-xs">Movie Z</p>
            <p className="mt-2 text-white/80">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>
          <div>
            <p className="text-xs mb-4 font-semibold">Contact Information</p>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-3 h-3" />
              <span>Email: support@movieZ.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              <span>Phone: +976 (11) 123-4567</span>
            </div>
          </div>
          <div>
            <p className="text-xs mb-4 font-semibold">Follow us</p>
            <p className="space-x-2">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>Twitter</span>
              <span>Youtube</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
