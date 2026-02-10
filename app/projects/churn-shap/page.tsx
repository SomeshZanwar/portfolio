export default function ChurnSHAPProject() {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 space-y-10">
        <h1 className="text-3xl font-semibold">
          Customer Churn Prediction with SHAP Explainability
        </h1>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Business Context</h2>
          <p className="text-neutral-700">
            Customer churn directly impacts recurring revenue, yet many businesses
            lack visibility into which customers are at risk and why.
          </p>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Key Questions</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>Which customers are most likely to churn?</li>
            <li>What behaviors and attributes drive churn risk?</li>
            <li>How can insights be translated into retention actions?</li>
          </ul>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Data & Approach</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>Analyzed customer usage and demographic data</li>
            <li>Performed exploratory data analysis to identify churn patterns</li>
            <li>Built classification models using scikit-learn and XGBoost</li>
            <li>Evaluated performance using ROC-AUC</li>
            <li>Used SHAP to explain model predictions</li>
          </ul>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Key Insights</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>Usage frequency and tenure are the strongest churn predictors</li>
            <li>Certain customer segments show elevated churn risk</li>
            <li>Explainability is critical for business trust and actionability</li>
          </ul>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Recommendations</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>Target retention efforts based on key churn drivers</li>
            <li>Focus on early-tenure engagement strategies</li>
          </ul>
        </section>
  
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What I’d Improve Next</h2>
          <ul className="list-disc pl-5 text-neutral-700 space-y-1">
            <li>Optimize decision thresholds using cost-based analysis</li>
            <li>A/B test retention strategies</li>
          </ul>
        </section>
  
        <p className="text-sm text-neutral-600 pt-6">
          Skills: Python, Machine Learning, Model Evaluation, SHAP, Business Insights
        </p>
      </main>
    );
  }
  