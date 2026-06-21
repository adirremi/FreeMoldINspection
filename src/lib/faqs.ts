/** Shared FAQ types and the general homepage FAQ list. */
export interface FAQ {
  readonly question: string;
  readonly answer: string;
}

export const GENERAL_FAQS: readonly FAQ[] = [
  {
    question: "How much does a mold inspection cost?",
    answer:
      "Pricing depends on the size of the property and whether laboratory testing is required. Call us at (888) 800-4980 for a quote, and we'll explain what is included before we begin.",
  },
  {
    question: "How long does a mold inspection take?",
    answer:
      "Most residential inspections take between one and two hours, depending on the size and condition of the property. If we collect samples for lab analysis, laboratory results are typically returned within a few business days.",
  },
  {
    question: "What are the signs that I might have mold?",
    answer:
      "Common signs include a persistent musty odor, visible discoloration on walls or ceilings, peeling paint, warped surfaces, recent water damage or leaks, and unexplained allergy or respiratory symptoms that improve when you leave the property.",
  },
  {
    question: "Do you serve my area in South Florida?",
    answer:
      "Yes. We serve Pembroke Park, Hollywood, Hallandale Beach, Miramar, Pembroke Pines, Fort Lauderdale, and the surrounding Broward and Miami-Dade communities. If you are nearby, give us a call and we will confirm availability.",
  },
  {
    question: "Do you also remove the mold you find?",
    answer:
      "Yes. We are a licensed Florida Mold Assessor and Mold Remediator, so we can both inspect and remove mold. After your inspection we explain your options clearly, and if you'd like, our team can handle the remediation and verify the results afterward.",
  },
];
