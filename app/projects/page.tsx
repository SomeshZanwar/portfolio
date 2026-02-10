export default function Projects() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 space-y-6">
        <h1 className="text-3xl font-semibold">Projects</h1>
  
        <div className="space-y-4">
          <a
            href="/projects/retail-inventory"
            className="block rounded-xl border p-5 hover:bg-neutral-50"
          >
            <h2 className="font-semibold">
              Retail Sales & Inventory Optimization Analytics
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              SQL- and Python-based analysis of 541K+ retail transactions to
              improve inventory prioritization and profitability.
            </p>
          </a>
  
          <a
            href="/projects/churn-shap"
            className="block rounded-xl border p-5 hover:bg-neutral-50"
          >
            <h2 className="font-semibold">
              Customer Churn Prediction with SHAP Explainability
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Built explainable churn prediction models to identify high-risk
              customers and key churn drivers.
            </p>
          </a>
  
          <a
            href="/projects/olympics-dashboard"
            className="block rounded-xl border p-5 hover:bg-neutral-50"
          >
            <h2 className="font-semibold">
              Olympic Performance Dashboard
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Interactive dashboard analyzing Olympic performance trends across
              countries and sports.
            </p>
          </a>
        </div>
      </main>
    );
  }
  