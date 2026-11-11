import { useState } from 'react'

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function App() {
  const [amount, setAmount] = useState('')
  const [percent, setPercent] = useState('')

  const price = Number.parseFloat(amount)
  const rate = Number.parseFloat(percent)

  const hasPrice = Number.isFinite(price) && price > 0
  const hasRate = Number.isFinite(rate) && rate >= 0

  // Keep the percentage within a sensible range (0% to 100%).
  const safeRate = hasRate ? Math.min(rate, 100) : 0
  const saved = hasPrice ? (price * safeRate) / 100 : 0
  const finalPrice = hasPrice ? price - saved : 0

  function reset() {
    setAmount('')
    setPercent('')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 p-6">
      <div className="w-full max-w-md flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Discount Calculator</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Enter a price and a discount to see what you pay.
          </p>
        </div>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">Original amount</span>
          <div className="flex items-center rounded-lg border border-slate-300 bg-slate-50 px-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200 dark:border-slate-600 dark:bg-slate-700">
            <span className="text-slate-400">$</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-transparent px-2 py-2.5 text-lg outline-none"
            />
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">Discount</span>
          <div className="flex items-center rounded-lg border border-slate-300 bg-slate-50 px-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-200 dark:border-slate-600 dark:bg-slate-700">
            <input
              type="number"
              inputMode="decimal"
              min="0"
              max="100"
              step="1"
              placeholder="0"
              value={percent}
              onChange={(e) => setPercent(e.target.value)}
              className="w-full bg-transparent px-2 py-2.5 text-lg outline-none"
            />
            <span className="text-slate-400">%</span>
          </div>
        </label>

        <div className="rounded-xl bg-slate-100 p-5 dark:bg-slate-700">
          <div className="flex items-baseline justify-between">
            <span className="text-slate-500 dark:text-slate-300">You save</span>
            <span className="text-lg font-semibold text-pink-600 dark:text-pink-400">
              {money.format(saved)}
            </span>
          </div>
          <div className="mt-3 flex items-baseline justify-between border-t border-slate-300 pt-3 dark:border-slate-600">
            <span className="font-medium">Final price</span>
            <span className="text-3xl font-bold">{money.format(finalPrice)}</span>
          </div>
        </div>

        <button
          onClick={reset}
          className="rounded-lg bg-purple-600 px-5 py-2.5 font-medium text-white shadow hover:bg-purple-500 active:scale-95 transition"
        >
          Reset
        </button>
      </div>
    </main>
  )
}

export default App
