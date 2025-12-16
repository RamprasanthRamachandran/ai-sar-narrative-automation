// SAR Narrative Assistant
// Portfolio project demonstrating AML domain understanding
// Focused on generating regulator-ready SAR narrative drafts
import React, { useState } from "react";

/**
 * SARGenerator.jsx
 * AI-assisted SAR Narrative drafting component
 * Portfolio project focused on AML regulatory outcomes
 */

const SARGenerator = () => {
  const [inputData, setInputData] = useState("");
  const [systemInstruction, setSystemInstruction] = useState(
    "Write a SAR narrative using a clear, objective, regulator-ready structure."
  );
  const [sarOutput, setSarOutput] = useState("");

  const generateNarrative = async () => {
    // NOTE:
    // This function represents where an LLM call (e.g. Google Gemini API)
    // would be made in a production environment.
    // For portfolio purposes, the focus is on structure and intent.

    const mockNarrative = `
BACKGROUND:
The subject account was reviewed following the identification of unusual transaction activity.

ACTIVITY:
Between [DATE RANGE], the account conducted transactions inconsistent with the customer's known profile.
The activity included repeated high-value transfers with no clear economic purpose.

RATIONALE:
The transaction patterns, frequency, and counterparties raised concerns of potential money laundering activity.

CONCLUSION:
Based on the observed behavior, this activity is considered suspicious and is being reported for regulatory review.
    `;

    setSarOutput(mockNarrative);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial" }}>
      <h2>SAR Narrative Assistant</h2>

      <label>
        <strong>Alert / Case Summary Input</strong>
      </label>
      <textarea
        rows="6"
        style={{ width: "100%" }}
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Paste alert details or investigation notes here..."
      />

      <label>
        <strong>Custom Narrative Instructions</strong>
      </label>
      <textarea
        rows="4"
        style={{ width: "100%" }}
        value={systemInstruction}
        onChange={(e) => setSystemInstruction(e.target.value)}
      />

      <button
        style={{ marginTop: "10px", padding: "8px 16px" }}
        onClick={generateNarrative}
      >
        Generate SAR Narrative
      </button>

      {sarOutput && (
        <>
          <h3>Generated SAR Narrative</h3>
          <pre
            style={{
              background: "#f4f4f4",
              padding: "12px",
              whiteSpace: "pre-wrap",
            }}
          >
            {sarOutput}
          </pre>
        </>
      )}
    </div>
  );
};

export default SARGenerator;
