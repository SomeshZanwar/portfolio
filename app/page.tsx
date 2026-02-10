export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold">
          Data Analyst focused on business insights and decision-making
        </h1>

        <p className="text-lg text-neutral-600">
          I analyze large datasets to uncover profitability, customer behavior,
          and operational inefficiencies using SQL, Python, and BI tools.
        </p>

        <p className="text-sm text-neutral-600">
          SQL • Python • KPI Design • Exploratory Analysis • Dashboards • Business Insights
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a className="rounded-md border px-4 py-2" href="/projects">
            View Projects
          </a>
          <a className="rounded-md border px-4 py-2" href="/resume.pdf">
            Download Resume
          </a>
          <a
            className="rounded-md border px-4 py-2"
            href="github.com/SomeshZanwar"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="rounded-md border px-4 py-2"
            href="|linkedin.com/in/someshzanwar"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            className="rounded-xl border p-5 hover:bg-neutral-50"
            href="/projects/retail-inventory"
          >
            <h3 className="font-semibold">
              Retail Sales & Inventory Optimization
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              Analyzed 541K+ transactions to identify profitable products,
              demand patterns, and inventory priorities.
            </p>
          </a>

          <a
            className="rounded-xl border p-5 hover:bg-neutral-50"
            href="/projects/churn-shap"
          >
            <h3 className="font-semibold">
              Customer Churn Prediction (Explainable ML)
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              Built churn models and explained risk drivers using SHAP.
            </p>
          </a>

          <a
            className="rounded-xl border p-5 hover:bg-neutral-50"
            href="/projects/olympics-dashboard"
          >
            <h3 className="font-semibold">
              Olympic Performance Dashboard
            </h3>
            <p className="text-sm text-neutral-600 mt-2">
              Interactive dashboard analyzing Olympic performance trends.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
