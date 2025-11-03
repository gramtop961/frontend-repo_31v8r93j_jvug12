import { Instagram, Mail, MapPin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-gray-200/60 bg-white/90">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-xl font-extrabold tracking-tight text-gray-900">
              Pickles in Pots
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Artisan pickles made with seasonal produce and whole spices.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-gray-900">Visit</h5>
            <p className="mt-2 flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="mt-0.5 h-4 w-4 text-amber-600" />
              Studio Kitchen, Local Market District, Your City
            </p>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-gray-900">Contact</h5>
            <a
              href="mailto:hello@picklesinpots.com"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <Mail className="h-4 w-4 text-amber-600" /> hello@picklesinpots.com
            </a>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-gray-900">Follow</h5>
            <a
              href="#"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <Instagram className="h-4 w-4 text-amber-600" /> @pickles.in.pots
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200/60 pt-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Pickles in Pots. All rights reserved.</p>
          <p>Handmade • Preservative-free • Vegan friendly</p>
        </div>
      </div>
    </footer>
  );
}
