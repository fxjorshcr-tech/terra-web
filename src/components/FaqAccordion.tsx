import { Dict } from "@/i18n/dictionaries";

/** Acordeón de preguntas frecuentes con <details> nativo (funciona sin JS). */
export default function FaqAccordion({ dict }: { dict: Dict }) {
  const items = [
    { q: dict.faq.q1, a: dict.faq.a1 },
    { q: dict.faq.q2, a: dict.faq.a2 },
    { q: dict.faq.q3, a: dict.faq.a3 },
    { q: dict.faq.q4, a: dict.faq.a4 },
    { q: dict.faq.q5, a: dict.faq.a5 },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-accent-600 font-semibold text-xs uppercase tracking-[0.25em]">
            {dict.faq.overline}
          </p>
          <h2 className="text-3xl md:text-4xl text-secondary-700 mt-3">
            {dict.faq.titulo}
          </h2>
          <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.q}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-semibold text-secondary-700 hover:text-primary-700 transition-colors [&::-webkit-details-marker]:hidden">
                {item.q}
                <svg
                  className="w-5 h-5 flex-shrink-0 text-accent-500 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-gray-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
