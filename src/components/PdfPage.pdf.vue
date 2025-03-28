<script setup>
import PdfMaker from "./PdfMaker.vue";

const props = defineProps({
  user: Object,
});

const coverTable = [
  {
    title: "PERSONAL ASSISTANCE",
    content: [
      {
        left: "RELAY OF URGENT MESSAGES",
        right: "INCLUDED - SERVICE ONLY",
      },
      {
        left: "DISPATCH OF MEDICATION",
        right: "INCLUDED - SERVICE ONLY",
      },
      {
        left: "GENERAL INFORMATION",
        right: "INCLUDED - SERVICE ONLY",
      },
      {
        left: "HIJACK",
        right: "€50 HOUR MAX. 100 HOURS",
      },
    ],
  },
  {
    title: "MEDICAL TRANSPORTATION AND REPATRIATION",
    content: [
      {
        left: "MEDICAL TRANSPORTATION OR REPATRIATION",
        right: "40.000,00 €",
      },
      {
        left: "TRANSPORT OF A PERSON DUE TO THE HOSPITALISATION OF THE INSURED",
        right: "RETURN TICKETS IN ECONOMY CLASS",
      },
      {
        left: "STAY OF A PERSON DUE TO THE HOSPITALISATION OF THE INSURED",
        right: "€100 DAY MAX. 10 DAYS / MIN 5 DAYS HOSP",
      },
      {
        left: "TRANSPORTATION OR REPATRIATION OF THE ACCOMPANYING INSUREDS",
        right: "1.500,00 €",
      },
    ],
  },
  {
    title: "MEDICAL EXPENSES",
    content: [
      {
        left: "MEDICAL EXPENSES ABROAD (COVID-19 INCLUDED)",
        right: "40.000,00 € / EXCESS 30 €",
      },
      {
        left: "COMPULSORY QUARANTINE DUE TO DIAGNOSED COVID-19",
        right: "EUR 80 PER DAY - MAX. 14 DAYS",
      },
      {
        left: "FIRST MEDICAL ASSISTANCE ABROAD",
        right: "INCLUDED IN GENERAL LIMIT ESCESS 30 €",
      },
      {
        left: "DENTAL EXPENSES",
        right: "500,00 € / EXCESS 25,00 €",
      },
      {
        left: "PHARMACEUTICAL EXPENSES",
        right: "INCLUDED IN GENERAL LIMIT",
      },
    ],
  },
  {
    title: "REPATRIATION OF MORTAL REMAINS",
    content: [
      {
        left: "TRANSPORT OR REPATRIATION OF THE DECEASED INSURED",
        right: "10.000,00 €",
      },
    ],
  },
  {
    title: "BAGGAGE",
    content: [
      {
        left: "INDEMNITY DUE TO PROBLEMS WITH THE CHECKED - IN LUGGAGE & TRAVEL DOCUMENTS (ACCIDENTAL DAMAGE, LOSS, ROBBERY)",
        right: "1.500,00 € / EXCESS 50,00 €",
      },
      {
        left: "COMPENSATION FOR BAGGAGE DELAY",
        right: "250,00 € / 4 HOUR MIN DELAY",
      },
    ],
  },
  {
    title: "CANCELLATION",
    content: [
      {
        left: "REIMBURSEMENT OF THE CANCELLATION EXPENSES OF THE TRIP",
        right: "2.000,00 € / EXCESS 100,00 €",
      },
    ],
  },
  {
    title: "CURTAILMENT",
    content: [
      {
        left: "CURTAILMENT EXPENSES",
        right: "2.000,00 €",
      },
      {
        left: "EARLY RETURN DUE TO SERIOUS FAMILY MATTER",
        right: "SAME CLASS TICKET",
      },
    ],
  },
  {
    title: "PERSONAL ACCIDENT",
    content: [
      {
        left: "ACCIDENTAL DEATH MEANS OF TRANSPORT",
        right: "20.000,00 €",
      },
      {
        left: "PERMANENT ACCIDENTAL DISABILITY (MEANS OF TRANSPORT)",
        right: "% AS PER SCALE",
      },
    ],
  },
  {
    title: "PERSONAL LIABILITY",
    content: [
      {
        left: "PERSONAL LIABILITY DUE TO MATERIAL DAMAGES TO THIRD-PARTIES",
        right: "100.000,00 €",
      },
      {
        left: "LEGAL DEFENCE (NOT TRAFFIC)",
        right: "3.500,00 €",
      },
      {
        left: "DEPOSIT FOR LEGAL COSTS AND EXPENSES",
        right: "3.000,00 €",
      },
      {
        left: "PERSONAL LIABILITY DUE TO PHYSICAL DAMAGES TO THIRD-PARTIES",
        right: "100.000,00 €",
      },
    ],
  },
  {
    title: "MEDICAL COMPLEMENTARY SERVICES",
    content: [
      {
        left: "HOSPITAL COMPENSATION",
        right: "€35 DAY MAX. 10 DAYS",
      },
    ],
  },
  {
    title: "CARDS",
    content: [
      {
        left: "REPLACEMENT OF THE PASSPORT AND THE DRIVING LICENCE BY EMERGENCY DOCUMENTS",
        right: "500,00 €",
      },
    ],
  },
  {
    title: "DELAYS",
    content: [
      {
        left: "INDEMNITY DUE TO THE TRANSPORT DEPARTURE DELAY",
        right: "",
      },
    ],
  },
];

const headingTable = () => {
  return [
    [
      {
        colSpan: 2,
        columnGap: 20,
        columns: [
          {
            width: "auto",
            stack: [
              { bold: true, text: "Policyholder:" },
              { bold: true, text: "Passport:" },
              { bold: true, text: "Phone Num:" },
            ],
          },
          {
            width: "*",
            stack: ["KALEAB KAHESAY MENGESTAB", "EP7000838", "+251946704665"],
          },
        ],
      },
      {},
      {
        borderColor: "red",
        stack: ["Policy Number", "N. Passengers"],
      },
      {
        stack: ["877WBNYET", "1"],
      },
    ],
    [
      {
        stack: [
          { bold: true, text: "Coverage Period" },
          {
            columns: [{ text: "Effective from: " }, { text: "01/01/2023" }],
          },
          { columns: [{ text: "Expiry:" }, { text: "19/12/2024" }] },
        ],
      },
      {
        stack: [
          {
            columnGap: 10,
            columns: [
              { width: "auto", text: "Agent Code: " },
              { width: "*", text: "NYALA INSURANCE S.C. ETHIOPIA" },
            ],
          },
          {
            columnGap: 10,
            columns: [
              { width: "auto", text: "Policy period: " },
              { width: "*", text: "5 Day(s)" },
            ],
          },
          {
            columnGap: 10,
            columns: [
              { width: "auto", text: "Product: " },
              { width: "*", text: "WORLDWIDE BASIC" },
            ],
          },
        ],
      },
      {
        colSpan: 2,
        stack: [
          { bold: true, text: "Coverage Period" },
          {
            columnGap: 10,
            columns: [
              { width: "auto", text: "Net premium: " },
              { width: "*", text: "3678.54 ETB" },
            ],
          },
          {
            columnGap: 10,
            colSpan: 2,
            columns: [
              { width: "auto", text: "Revenue Stamp: " },
              { width: "*", text: "5 ETB" },
            ],
          },
          {
            columnGap: 10,
            colSpan: 2,
            columns: [
              { width: "auto", text: "Total: " },
              { width: "*", text: "3683.54 ETB" },
            ],
          },
        ],
      },
      {},
    ],
  ];
};

const dcoDeifinition = {
  content: [
    [
      {
        style: "heading",
        text: "TRAVEL INSURANCE POLICY",
      },
      {
        table: {
          widths: ["*", "*", "auto", "auto"],
          body: [
            ...headingTable(),
            [
              {
                colSpan: 2,
                columnGap: 20,
                columns: [
                  { width: "auto", text: "Destination Area:", bold: true },
                  "Worldwide - Provides Worldwide cover excluding the country of residence",
                ],
              },
              {},
              {
                colSpan: 2,
                text: "Country of Origin: ETHIOPIA",
              },
              {},
            ],
            [
              {
                colSpan: 4,
                text: "In case of unforeseen circumstances, the covered period can be extended for a maximum of 15 days after the end date of the cover.",
                bold: true,
              },
              {},
              {},
              {},
            ],
          ],
        },
      },
      {
        marginTop: 10 + 5,
        table: {
          widths: ["*", "auto"],
          body: [
            ...coverTable.reduce((state, el) => {
              state.push([
                {
                  fillColor: "#fff",
                  fontSize: 6,
                  bold: true,
                  colSpan: 2,
                  text: el.title,
                },
                {},
              ]);
              el.content.forEach((con) => {
                state.push([
                  {
                    fillColor: "#ddd",
                    fontSize: 6,
                    text: con.left,
                  },
                  {
                    fillColor: "#ddd",
                    fontSize: 6,

                    text: con.right,
                  },
                ]);
              });
              return state;
            }, []),
          ],
        },
        layout: {
          hLineColor: function (i, node) {
            return i === 0 || i === node.table.body.length ? "#000" : "#fff";
          },
          vLineColor: function (i, node) {
            return i === 0 || i === node.table.widths.length ? "#000" : "#fff";
          },
        },
        pageBreak: "after",
      },
    ],
    [
      { style: "heading", text: "LIST OF INSURED" },
      {
        table: {
          widths: ["*", "*", "auto", "auto"],
          body: [...headingTable()],
        },
      },
      {
        marginTop: 5 + 5,
        table: {
          widths: ["*", "*", "auto", "auto"],
          body: [
            [
              {
                colSpan: 2,
                stack: [
                  { text: "Name", bold: true },
                  "MENGESTAB , KALEAB KAHESAY",
                ],
              },
              {},
              {
                stack: [{ text: "PASSPORT", bold: true }, "EP7000838"],
              },
              {
                stack: [{ text: "DATE OF BIRTH", bold: true }, "EP7000838"],
              },
            ],
            [
              {
                absolutePosition: { x: 20, y: 780 },
                fontSize: 5,
                colSpan: 4,
                stack: [
                  "By signing this document, the Policyholder expressly accepts the clauses limiting the rights of the Insured included in the attached General Conditions of the Policy. This travel policy can only be modified or cancelled before the start date of the policy period.",
                  {
                    columns: [
                      {
                        alignment: "left",
                        style: "heading",
                        text: "POLICYHOLDER",
                      },
                      {
                        alignment: "left",
                        style: "heading",
                        text: "11/12/2024",
                      },
                      {
                        alignment: "left",
                        style: "heading",
                        text: "NYALA INSURANCE S.C. ETHIOPIA",
                      },
                    ],
                  },
                ],
              },
              {},
              {},
              {},
            ],
          ],
        },
        pageBreak: "after",
      },
    ],
    [
      {
        stack: [
          "11/12/2024",
          { bold: true, fontSize: 10, text: "TO: THE EMBASSY / CONSULATE" },
          {
            bold: true,
            fontSize: 10,
            text: "RE: Confirmation of Travel Insurance",
          },
        ],
      },
      {
        style: "heading",
        text: "TO WHOM IT MAY CONCERN",
        marginBottom: 5,
      },
      {
        fontSize: 10,
        text: "This letter serves to confirm that the traveller/s named below is/are adequately covered for International Travel Insurance underwritten by NYALA INSURANCE S.C. ETHIOPIA, whilst travelling on journeys during the period detailed below:",
      },
      {
        fontSize: 10,
        marginTop: 5 + 5,
        text: "POLICY DETAILS:",
        style: "smallHeading",
      },
      {
        stack: [
          {
            columns: [
              {
                fontSize: 10,
                width: "auto",
                text: "Policy Number: ",
                bold: true,
              },
              { fontSize: 10, width: "*", text: "877WBNYET" },
            ],
          },
          {
            columns: [
              {
                fontSize: 10,
                width: "auto",
                text: "Effective From: ",
                bold: true,
              },
              { fontSize: 10, width: "*", text: "15/12/2024" },
            ],
          },
          {
            columns: [
              { fontSize: 10, width: "auto", text: "Expiry: ", bold: true },
              { fontSize: 10, width: "*", text: "19/12/2024" },
            ],
          },
          {
            columns: [
              { fontSize: 10, width: "auto", text: "Plan Name: ", bold: true },
              { fontSize: 10, width: "*", text: "WORLDWIDE BASIC" },
            ],
          },
          {
            columns: [
              {
                fontSize: 10,
                width: "auto",
                text: "Territory covered: ",
                bold: true,
              },
              {
                fontSize: 10,
                width: "*",
                text: "Worldwide - Provides Worldwide cover excluding the country of residence",
              },
            ],
          },
          {
            fontSize: 10,
            marginTop: 2 + 5,
            text: "The following Insured Person(s) are covered for the Journey detailed above:",
          },
          {
            fontSize: 10,
            marginTop: 2 + 5,
            table: {
              widths: ["*", "*", "*", "*"],
              body: [
                ["First Name", "Last Name", "Passport Number", "Date of Birth"],
                ["KALEAB KAHESAY", "MENGESTAB", "EP7000838", "05/03/2001"],
              ],
            },
          },
        ],
        margin: [0, 5, 0, 5], // [left, top, right, bottom] margins
      },
      {
        marginTop: 5 + 5,
        fontSize: 10,
        text: "Insured Persons qualify for the Medical and Emergency Related Expenses listed in the Schedule of Covers of the Policy Certificate Nº 877WBNYET up to the following limits:",
      },
      {
        marginTop: 5 + 5,
        bold: true,
        fontSize: 10,
        text: "MEDICAL TRANSPORTATION OR REPATRIATION: 40.000,00 €",
      },
      {
        marginTop: 5 + 5,
        bold: true,
        fontSize: 10,
        text: "MEDICAL EXPENSES ABROAD: 40.000,00 €",
      },
      {
        marginTop: 5 + 5,
        fontSize: 10,
        text: "If an Insured Event occurs after the commencement of a Journey giving rise to a valid claim, the Journey will automatically be extended within the Terms & Conditions of the Policy. All Benefits are subject to the Terms & Conditions of the Policy and details of the sums insured, sub-limits and excesses are contained in the Schedule of Covers.",
      },
      {
        fontSize: 10,
        text: [
          "In the event of a medical emergency or security emergency, the Insured Person should contact the: ",
          {
            bold: true,
            text: "24 HOUR EMERGENCY ASSISTANCE HELPLINE:",
          },
        ],
      },
      {
        fontSize: 10,
        marginTop: 5 + 5,
        text: "By Phone: + 44 845 217 1379 - Please dial 011 44 845 217 13 79 if calling from the United States,",
      },
      {
        fontSize: 10,
        marginTop: 5 + 5,
        text: "By Email: afrcosiam@mapfre.com - Please include your contact information and the kind of assistance required.",
      },
			{
        fontSize: 10,
				text: 'For and on behalf of',
				marginTop: 30,
			},
			{
        fontSize: 10,
				marginTop: 10,
				text: 'NYALA INSURANCE S.C. ETHIOPIA',
				pageBreak: 'after'
			}
    ],
		[
			{
				columns: [
					{
						stack: [
							{ color: 'red', text: 'Pre-existent illnesses, known or unknown, are expressly excluded.'}
						]
					},
					{
						stack: [
							'The bodily injury sustained during the life of the contract, which derives from a'
						]
					}
				]
			}
		]
  ],
  styles: {
    defaultStyle: {
      fontSize: 8,
    },
    heading: {
      alignment: "center",
      fontSize: 12,
      bold: true,
      decoration: "underline",
      characterSpacing: -1,
    },
    smallHeading: {
      fontSize: 9,
      bold: true,
      decoration: "underline",
      characterSpacing: -1,
    },
  },
};
</script>
<template>
  <PdfMaker :content="dcoDeifinition" />
</template>
