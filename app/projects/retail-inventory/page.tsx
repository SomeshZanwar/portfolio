export default function RetailInventoryProject() {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 space-y-10">
        <h1 className="text-3xl font-semibold">
          Retail Sales & Inventory Optimization Analytics
        </h1>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Business Context</h2>
          <p className="text-neutral-700">
            Retail businesses often struggle with overstocking, stockouts, and
            ineffective discounting due to a lack of clear inventory and demand
            metrics.
          </p>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Key Questions</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>Which products truly drive revenue and profit?</li>
            <li>How does demand vary by season and category?</li>
            <li>Where should inventory investment be prioritized?</li>
          </ul>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Data & Approach</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>Analyzed 541K+ retail transaction records</li>
            <li>Defined revenue, demand, and inventory KPIs</li>
            <li>Used SQL to identify top products, seasonality, and variability</li>
            <li>Conducted exploratory analysis in Python</li>
            <li>Applied ABC analysis for inventory prioritization</li>
          </ul>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Key Insights</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>A small percentage of products generate most revenue</li>
            <li>Aggressive discounting often reduces profitability</li>
            <li>Demand variability differs significantly by category</li>
          </ul>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Recommendations</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>Prioritize A-class products for availability</li>
            <li>Reduce blanket discounting strategies</li>
            <li>Adjust inventory levels based on seasonal demand</li>
          </ul>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Deliverable</h2>
          <p className="text-neutral-700">
            Built an interactive Streamlit dashboard to communicate insights and
            recommendations to stakeholders.
          </p>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What I’d Improve Next</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>Add demand forecasting for reorder point optimization</li>
            <li>Simulate inventory cost vs service-level tradeoffs</li>
          </ul>
        </section>
  
        <p className="text-sm text-neutral-600 pt-6">
          Skills: SQL, Python, KPI Development, EDA, Inventory Analytics, Data Visualization
        </p>
      </main>
    );
  }
  