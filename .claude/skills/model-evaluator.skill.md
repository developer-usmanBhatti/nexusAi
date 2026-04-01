# Model Evaluator Skill

**Description:** Evaluate and compare AI models based on performance metrics, cost, and suitability for specific tasks

**Version:** 1.0.0

## Commands

### benchmark
- **Description:** Run benchmarks on multiple AI models
- **Usage:** `model-evaluator benchmark --models 'gpt-4,claude-3,llama-2' --task 'text-generation'`
- **Action:** Node script `skills/model-evaluator.js`

### analyze-cost
- **Description:** Analyze cost efficiency of different models
- **Usage:** `model-evaluator analyze-cost --models 'gpt-4,gpt-3.5' --usage-pattern 'high-volume'`
- **Action:** Node script `skills/model-evaluator.js`

### compare-features
- **Description:** Compare features and capabilities across models
- **Usage:** `model-evaluator compare-features --models 'claude-3,gpt-4,llama-2'`
- **Action:** Node script `skills/model-evaluator.js`