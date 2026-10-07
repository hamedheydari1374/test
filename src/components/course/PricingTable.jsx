import { pricingTable } from '../../data/course.js'

export default function PricingTable() {
  return (
    <section className="bg-night-800 py-14" aria-labelledby="pricing-table-title">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <p className="text-[13px] font-bold text-gold-400">جزئیات شهریه</p>
          <h2 id="pricing-table-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
            مقایسه دوره آنلاین و حضوری
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-right text-[13px]">
            <thead>
              <tr className="bg-night-900 text-white">
                {pricingTable.head.map((cell) => (
                  <th key={cell} scope="col" className="px-5 py-4 font-extrabold">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingTable.rows.map((row, i) => (
                <tr key={row[0]} className={i % 2 ? 'bg-night-900/60' : 'bg-night-900/20'}>
                  <th scope="row" className="px-5 py-4 text-right font-medium text-white/60">
                    {row[0]}
                  </th>
                  <td className="px-5 py-4 text-white/85">{row[1]}</td>
                  <td className="px-5 py-4 text-white/85">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
