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
        text: "For and on behalf of",
        marginTop: 30,
      },
      {
        fontSize: 10,
        marginTop: 10,
        text: "NYALA INSURANCE S.C. ETHIOPIA",
        pageBreak: "after",
      },
    ],
    [
      {
        columns: [
          {
            stack: [
              { bold: "true", text: "NYALA INSURANCE S.C. TRAVEL PROTECT" },
              {
                text: "I. Preliminary Conditions affecting to this Policy and Contract: ",
              },
              {
                text: "Pre-existent illnesses, known or unknown, are expressly excluded.",
              },
              {
                text: "expressly excluded, save exceptions set out in the particular conditions, if any.",
              },

              {
                text: "Claims caused by terrorist actions are excluded unless they are expresslyincluded for the quotation, in that case claims caused by terrorism are only included for the Medical Expenses cover, as per the cover definition agreed with the reinsurer and included in the Conditions section of this document.",
              },
              {
                text: "Definition of Family: Policyholder + Spouse + up to 3 dependent children upto 18 years of age.",
              },
              {
                text: "In family policies, in case of a claim the economic limit is the limit for the whole family group, it is not a limit per insured.",
              },
              {
                text: "Labour accidents are not covered, meaning especially dangerous or grievous jobs.",
              },
              {
                text: "Professional Sports or Associated members of a Federation are excluded, this is, sports competitions and sports activities at a professional or competitive level.",
              },
              {
                text: "Coverage greater than 365 consecutive days is excluded from coverage.  ",
              },
              {
                text: "Duration of the trip up to 92 consecutive days in Annual Multi-Trip. For the “EUROPE” (Schengen) Cover, and only in case of unforeseen circumstances, not intentional and duly documented, obliging the Beneficiary to extend his/her stay in the covered geographical area, the covered period can be prolonged for a maximum of 15 additional days after the initially fixed end date of the cover",
              },
              {
                text: "Policies are not renewable or transferable.  ",
              },
              {
                text: "Insurance Benefits abroad in relation to Covid-19 will be excluded from cover when a travel advisory against the travel to the destination Country is issued in the media or by any regulatory authority, government authority or the like before the beginning of the insured journey.",
              },
              {
                text: "Premiums paid are not eligible for total or partial reimbursement once the Insurance policy is in force or has expired. The insurance premium cannot form part of any claim. Cancellations and refunds are only allowed on grounds of non-grant of visa / cancellation of travel program before commencement date as duly supported by passport entries.",
              },

              {
                bold: "true",
                text: "dsf",
              },
              {
                marginTop: 10,
                text: [
                  "II.",
                  {
                    bold: "true",
                    text: "    Limits affecting specific covers: ",
                  },
                ],
              },
              {
                marginTop: 10,
                text: [
                  "  (a) ",
                  {
                    bold: "true",
                    text: " Personal Accident cover:  ",
                  },
                  "Persons over the age of sixty-five are not ",
                ],
              },
              {
                marginLeft: 14,
                text: "   subject to these coverages. Minors and disabled persons may only be ",
              },
              {
                marginLeft: 14,

                text: "   insured with written authorization from their legal representatives. In  ",
              },
              {
                marginLeft: 14,
                text: "  any case, children under 14 are not insurable under this coverage. ",
              },
              {
                marginTop: 10,
                text: [
                  "  (b) ",
                  {
                    bold: "true",
                    text: " Covid-19 Cover: ",
                  },
                  "In case the Insured is infected and diagnosed with the ",
                ],
              },
              {
                marginLeft: 14,

                text: "   Covid-19 during a trip covered by the Insurance Policy, the Travel Insurance will cover the Medical Expenses & Hospitalization abroadas well as the ordered Compulsory Quarantine up to the limitsexpressed in the Cover defnition included in this policy andaccording to the terms and conditions of the same ",
              },
              {
                marginLeft: 14,

                text: "  Insurance will cover the Medical Expenses & Hospitalization abroad  ",
              },
              {
                marginLeft: 14,

                text: "   as well as the ordered Compulsory Quarantine up to the limits   ",
              },
              {
                marginLeft: 14,

                text: "  expressed in the Cover definition included in this policy and   ",
              },
              {
                marginLeft: 14,

                text: "   according to the terms and conditions of the same.   ",
              },
              {
                marginLeft: 14,

                text: "  Will be excluded the cover of the related Covid-19 expenses in those cases where the Insured travels when a travel advisory against thetravel to the destination Country is issued in the media or by anyregulatory authority, government authority or the like before thebeginning of the insured journey  ",
              },
              {
                marginLeft: 14,
                margin: 10,
                bold: "true",
                text: "  For verification purposes, The Insurer utilize the following websites but is not limitedto the:   ",
              },
              {
                marginLeft: 14,

                text: [
                  "•",
                  { text: "National Travel Health Network & Centre:" },
                  {
                    color: "blue",
                    text: " www.nathnac.org/pro/clinical_updates",
                  },
                ],
              },
              {
                marginLeft: 14,

                text: [
                  "•",
                  { text: "Foreign Commonwhealth Office: " },
                  { color: "blue", text: "www.gov.uk/foreign-traveladvice" },
                ],
              },
              {
                marginLeft: 14,

                text: [
                  "•",
                  { text: "Centre for disease Control & Prevention: " },
                  { color: "blue", text: " www.nc.cdc.gov/travel" },
                ],
              },
              {
                marginLeft: 14,

                text: [
                  "•",
                  { text: "World Health Organisation:  " },
                  { color: "blue", text: " www.who.int/csr/don/en/" },
                ],
              },
              {
                marginLeft: 14,
                bold: "true",

                text: "In case of infection, the Insured must contact the Emergency Assistance Service immediately to provide the necessary assistance",
              },
              {
                margin: 10,
                bold: "true",

                text: "III. Travel Insurance Policy Terms & Conditions",
              },
              {
                margin: 10,
                bold: "true",

                text: "3.1. GENERAL DEFINITIONS",
              },
              {
                margin: 10,
                bold: "true",

                text: "For the purposes of this Policy, these terms shall be understood as follows:",
              },
            ],
          },
          {
            margin: 10,
            stack: [
              { bold: "true", text: "ACCIDENT" },
              {
                marginBottom: 10,
                text: "The bodily injury sustained during the life of the contract, which derives from aviolent, sudden, external cause and one that is not intended by the Insured. Thefollowing will also be construed to be accidents:",
              },
              {
                marginTop: 5,
                text: "a.    Asphyxia or injuries as a consequence of gases or vapours, immersion orsubmersion, or from the consumption of liquid or solid matter other thanfoodstuffs.",
              },
              {
                marginTop: 5,
                text: "b.   Infections resulting from an accident covered by the policy",
              },
              {
                marginTop: 5,
                text: "c. Injuries that are a consequence of surgical operations or medical treatments resulting from an accident covered by the policy. ",
              },
              {
                marginTop: 5,
                text: "d. The injuries sustained as a result of self-defense.",
              },
              {
                marginTop: 5,
                text: "e. Save express agreement to the contrary, for the purposes of this policy, an“accident” shall not be deemed to include heart attacks and other similarcardiovascular or cerebrovascular episodes. ",
              },
              { bold: "true", marginTop: 10, text: "ACCOMPANYING INSURED " },
              {
                marginTop: 5,
                text: "Natural person accompanying the Insured and who is also insured for the sametrip by the Company, either through the same policy, or through a different one. ",
              },
              { bold: "true", marginTop: 10, text: "BAGGAGE" },
              {
                marginTop: 5,
                text: "Luggage, personal belongings, travel tickets, passports, visas and travel documents.",
              },
              { bold: "true", marginTop: 10, text: "BENEFICIARY" },
              {
                marginTop: 5,
                text: "Person or persons considered by the Policyholder or, where applicable, theInsured, to be entitled to receive any assistance duly covered or, whereapplicable, the amount corresponding to any indemnity provided for under theterms of the contracted policy.",
              },
              { bold: "true", marginTop: 10, text: "Child" },

              {
                margin: 5,
                text: "Any biological, adopted, step or surrogate child or a child to whom ThePolicyholder or, where applicable, The Insured is the legal guardian and whomeets all of the following criteria:",
              },
              {
                marginTop: 10,
                text: "• Is up to the age of 18 years or up to the age of 25 years if they are full-timestudents at an accredited educational institution;",
              },
              {
                marginTop: 5,
                text: "• Is financially dependent on you for maintenance and support;",
              },
              { marginTop: 5, text: "• Is not in full-time employment;" },
              { marginTop: 5, text: "• Is not married;" },
              {
                marginTop: 5,
                text: "• Is not pregnant or a parent at the time of an insured event.",
              },
              { bold: "true", marginTop: 10, text: "CLAIM" },
              {
                marginTop: 5,
                text: "Any event whose consequences are totally or partially covered by the guaranteesof this policy. The collection of damages arising out of one event constitutes oneloss/accident. ",
              },
              { bold: "true", marginTop: 10, text: "CLOSE RELATIVES" },
              {
                marginTop: 5,
                text: "Close relatives refers only to spouses, common-law partners, children, parents,grandparents, siblings and parents, sons, daughters, brothers and sisters-in-lawof the Insured, save specific provisions of each Cover or Guarantee. In addition tothis, the Insured’s legal guardians shall be included in this definition. ",
              },
              { bold: "true", marginTop: 10, text: "Country of Residence " },

              { marginTop: 5, text: "Ethiopia" },
              { bold: "true", marginTop: 10, text: "COVID-19 " },
              {
                marginTop: 5,
                text: "Infectious disease caused by the virus called severe acute respiratory syndromeCoronavirus 2 (SARS-Cov-2), in any of its variants.",
              },

              { bold: "true", marginTop: 10, text: "COVID-19 COVER " },
              {
                pageBreak: "after",

                marginTop: 5,
                text: "In case the Insured is infected with the Covid-19 during an international trip(outside Ethiopia) covered by the Insurance Policy, the Travel Insurance willcover:",
              },
            ],
          },
        ],
      },
    ],
    [
      {
        columns: [
          {
            stack: [
              {
                text: "• Medical and Hospitalization expenses in the destination Country up to theproposed limit on the particular conditions of the policy and according to theterms and conditions defined in the same. ",
              },
              {
                text: "• Compulsory Quarantine: The Insurer will cover the accommodation expensesassociated to a compulsory quarantine in case the Insured is diagnosedpositive with Covid-19 during an international insured trip and is secludedin a Hotel and/or Hospital at his/her own expenses. The maximum limit forthe Quarantine cover is USD80/day for a maximum of 14 days. Thisallowance will be limited to cover the accommodation expenses and subjectto the presentation of the medical diagnose, quarantine medical order andconvalescence hotel/hospital bill in order to obtain the reimbursement of theengaged expenses. Other expenses (food, laundry, extra services, etc…) will remain excluded from coverage. ",
              },
              {
                marginTop: 10,
                text: "Will be excluded the cover of the related Covid-19 expenses in those cases wherethe Insured travels when a travel advisory against the travel to the destinationCountry is issued in the media or by any regulatory authority, government authorityor the like before the beginning of the insured journey",
              },
              {
                marginTop: 10,
                text: "For verification purposes, The Insurer utilize the following websites but is not limitedto the: ",
              },
              {
                marginLeft: 14,

                text: [
                  "•",
                  { text: "National Travel Health Network & Centre:" },
                  {
                    color: "blue",
                    text: " www.nathnac.org/pro/clinical_updates",
                  },
                ],
              },
              {
                marginLeft: 14,

                text: [
                  "•",
                  { text: "Foreign Commonwhealth Office: " },
                  { color: "blue", text: "www.gov.uk/foreign-traveladvice" },
                ],
              },
              {
                marginLeft: 14,

                text: [
                  "•",
                  { text: "Centre for disease Control & Prevention: " },
                  { color: "blue", text: " www.nc.cdc.gov/travel" },
                ],
              },
              {
                marginLeft: 14,

                text: [
                  "•",
                  { text: "World Health Organisation:  " },
                  { color: "blue", text: " www.who.int/csr/don/en/" },
                ],
              },
              {
                marginLeft: 14,
                bold: "true",

                text: "In case of infection, the Insured must contact the Emergency Assistance Service immediately to provide the necessary assistance",
              },
              { marginTop: 10, text: "DATE OF LOSS", bold: "true" },

              {
                text: "The date that a claim or loss comes into existence. The date of loss depends onthe nature of the insured event:",
              },
              {
                text: "a. For illness, the date The Insured became aware of his/her illness or the datethe illness was first diagnosed, whichever happens first;",
              },
              { text: "b. For accidents, the date of the accident." },
              {
                text: "c. For all other claims, the date that the insured event happened",
              },
              { marginTop: 10, text: "EVENT", bold: "true" },
              {
                text: "Claims considered as Event are those originated by the same cause whichproduces individual damages affecting different policies.",
              },
              { marginTop: 10, text: "EXCESS", bold: "true" },
              {
                text: "The amount you must pay towards the claim. If an excess applies it will be shownon the travel insurance certificate.",
              },
              { marginTop: 10, text: "GEOGRAPHICAL SCOPE", bold: "true" },
              {
                text: "Geographical area over which the trip stipulated in the contract takes place andin which any incidents which occur shall be duly covered. This shall be duly statedin the Specific or Special Conditions of the policy.",
              },
              { marginTop: 10, text: "HAZARDOUS ACTIVITY", bold: "true" },

              {
                text: "An activity, excursion or hobby that introduces or increases the possibility of death or injury",
              },
              { marginTop: 10, text: "ILLNESS", bold: "true" },
              {
                marginTop: 7,
                text: "Any change in health diagnosed and confirmed by a legally recognized doctor during the life of the policy.",
              },
              {
                text: "a) Congenital disease: the disease that exists at the moment of birth as a consequence of hereditary factors or complaints acquired during pregnancy. ",
              },
              {
                text: "b) Pre-existing disease: the disease that the Insured suffered prior to the date of taking out this Policy, even if it wasn’t diagnosed. ",
              },
              { marginTop: 10, text: "INJURY", bold: "true" },
              {
                text: "Bodily injury caused by an accident directly and independently of all other causes",
              },
              { marginTop: 10, text: "IN-PATIENT", bold: "true" },
              {
                text: "An insured traveler who has been admitted to hospital for medical treatment forinjury or illness that in a medical practitioner’s opinion requires hospitaladmission.",
              },
              { text: "INSURED", bold: "true", marginTop: 10 },
            ],
          },
          {
            stack: [
              {
                margin: 1,
                // bold: "true",
                text: "Within the validity period of the policy, the person aged between 3 months and 80years, whose name and address are specified in the policy, with respect to whomthe premium has been paid before his/her travel and who is a permanent resident of the country where the policy was issued.",
              },
              {
                marginTop: 10,
                marginBottom: 10,
                text: "Not eligible as “Insured Person”:",
              },
              {
                text: "a) Insured intending to travel more than 92 consecutive days except the Students Plan where the maximum consecutive days per travel depends on the chosen program. ",
              },
              { text: "b) Persons of less than 3 months of age." },
              {
                text: "c) Persons aged from 81 years old, except in case a specific Plan including such cover for persons aged from 81 years is contracted.",
              },
              {
                text: "d) Non-residents in the country where the policy is issued;",
              },
              {
                text: "e) Those who have initiated the trip prior to the insurance underwriting.",
              },
              {
                text: "f) Insured travelling for work reasons (paid or otherwise), undertaking physicalor manual hazardous activities such as: driving vehicles, use of machinery,loading and unloading, working at heights or in confined spaces, assembly of machinery, working on floating or underwater platforms, mines or quarries,use of chemical substances, laboratory work of any kind and any other hazardous activities. ",
              },
              { text: "INSURED AMOUNT", bold: "true", marginTop: 10 },
              {
                text: "The amount set forth in the Specific Conditions of the policy and which represents the maximum value of the compensation for each cover section.",
              },
              { text: "INSURED EVENT", bold: "true", marginTop: 10 },
              {
                text: "An event that covered under this policy as set out in the Travel InsuranceCertificate.",
              },
              { text: "INSURED JOURNEY", bold: "true", marginTop: 10 },
              {
                text: "An international or local journey which includes a return journey.",
              },
              { text: "INSURER OR COMPANY", bold: "true", marginTop: 10 },
              {
                text: "NYALA INSURANCE COMPANY S.C. COMPANY referred as 'Company' throughout these General Conditions who assumes the coverage of the risks thatare the object of the contract according to the conditions of the policy",
              },
              { text: "INTERNATIONAL JOURNEY", bold: "true", marginTop: 10 },
              {
                text: "Travel from The Insured home or work (whichever The Insured leaves later) to thecovered international destination, and return to The Insured home or work(whichever The Insured arrives at earlier).",
              },
              { text: "LIMIT", bold: "true", marginTop: 10 },
              {
                text: "The amount set forth in the Specific Conditions of the policy, and which represents the maximum benefit (financial, temporary or another kind) coveredunder each guarantee",
              },
              { text: "LOCAL JOURNEY", bold: "true", marginTop: 10 },
              {
                text: "Travel from The Insured home or work (whichever The Insured leaves later) in adirect and uninterrupted manner to a destination within ETHIOPIA that is morethan 100 Km’s away from The Insured’s home, and return to The Insured homeor work (whichever The Insured arrives at earlier).",
              },
              { text: "OPTIONAL TOP UP COVER", bold: "true", marginTop: 10 },
              {
                text: "Benefits that can be bought that will supplement the automatic basic coverbenefits",
              },
              {
                text: "ORTHOPAEDIC MATERIAL OR ORTHESIS",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "Anatomical parts or items of any kind used to prevent or correct temporary orpermanent deformations of the body (for example walking sticks, cervical collarand wheelchair). ",
              },
              { text: "OSTEOSYNTHESIS MATERIALS", bold: "true", marginTop: 10 },
              {
                text: "Parts or pieces of metal or of any other kind used to join together the ends of afractured bone, or to knit together the tips of joints, by surgical operation andwhich can be reused. ",
              },
              {
                text: "Items that are normally worn or carried on you, for example, glasses, dentures,purses, wallets and cosmetics but excluding money and electronic equipment",
              },
              { text: "POLICY", bold: "true", marginTop: 10 },
              {
                text: "Document containing the conditions governing the Insurance. The GeneralConditions, the Specific Conditions which distinguish the risk and the SpecialConditions, if any, as well as the Endorsements or Appendices issued thereto tosupplement or amend it form an integral part of the Policy.",
              },
            ],
          },
        ],
      },
    ],
    [
      {
        columns: [
          {
            stack: [
              {
                text: "Seizing someone else's property without employing force to enter the premises where it is located, nor violence or intimidation against individuals. ",
              },
              { text: "THIRD PARTIES", bold: "true", marginTop: 10 },
              {
                text: "Any natural or legal person, other than the Policyholder, Insured, Beneficiary or person responsible for the loss. ",
              },
              {
                text: "TRAVEL INSURANCE CERTIFICATE",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "A document that is part of this policy that sets out The Insured details, details of the insured journey, the premiums, and the schedule of benefits.",
              },
              { text: "TRAVEL SUPPLIER", bold: "true", marginTop: 10 },
              {
                text: "Any one or more of the following licensed operators in South Africa:",
              },
              {
                text: "• A scheduled airline, exiting South Africa including all connecting and onward flights forming part of the insured journey. (This excludes chartered airlines);",
              },
              { text: "• A cruise line;" },
              { text: "• A rail or coach operator;" },
              { text: "• A car rental company:" },
              {
                text: "• A hotel boXed before The Insured starts the Insured journey.",
              },
              { text: "TRAVEL WHOLESALER", bold: "true", marginTop: 10 },
              {
                text: "An intermediary between a travel supplier and a consumer. A travel wholesalerputs together the services of public transport carriers, ground service suppliersand other travel needs into a tour package which is sold through retail travelagents to the public. A travel wholesaler develops, prepares, markets andreserves inclusive tours and individual travel packages.",
              },
              { text: "USUAL PLACE OF RESIDENCE", bold: "true", marginTop: 10 },
              {
                text: "The place where the Insured is officially resident, which, save express indicationin the Specific Policy Conditions, shall be in the country where the policy is issued,and to where the emergency repatriations and returns covers in this policy will be made. ",
              },
              { text: "VALIDITY OF THE POLICY", bold: "true", marginTop: 10 },
              {
                text: "The period that commences and ends on the dates stated on the Certificate ofthe Policy contracted. Such period of Insurance is in any case not renewable.For the “EUROPE” Cover, and only in case of unforeseen circumstances, notintentional and duly documented, obliging the Beneficiary to extend his/her stayin the covered geographical area, the covered period can be prolonged for amaximum of 15 additional days after the initially fixed end date of the cover. ",
              },
              { text: "WAITING PERIOD", bold: "true", marginTop: 10 },
              {
                text: "Period of time after insurance coverage has been bought during which no claimswill be accepted. ",
              },
              { text: "WARRANTY", bold: "true", marginTop: 10 },
              {
                text: "A conflict carried on by force as between nations or military forces or betweenparties within a nation whether declared or not.",
              },
              { text: "3.2. OBJECT AND SCOPE", bold: "true", marginTop: 10 },
              {
                text: "By virtue of this contract, the Company guarantees to provide the Insured withimmediate material help in the form of some service provision or, whereappropriate, the financial benefit that is required as a result of some unforeseen event occurring during the course of a trip for which this policy was taken out.",
              },
              {
                text: "The benefits guaranteed under the policy shall be provided, in every case,according to the terms and conditions set forth in the policy and in keeping with the specific guarantees that have actually been contracted. ",
              },
              {
                text: "The guarantees shall cease once the journey covered by the policy has terminatedor up to the maximum number of days set forth in the eligibility criteria table havealready passed. ",
              },
              {
                text: "Under some sections of your policy, the Insured will have to pay an excess. Thismeans that the Insured will be responsible for paying the first part of the claimfor each insured person, for each section, for each claim incident. The amount the Insured has to pay is the excess. ",
              },
              { text: "3.3. COVERS" },
              { text: "B0000 PERSONAL ASSISTANCE", color: "red" },
              { text: "COVER SECTION", bold: "true", marginTop: 10 },
              {
                text: "B0340 RELAY OF URGENT MESSAGES ",
                bold: "true",
                marginTop: 10,
              },
            ],
          },
          {
            stack: [
              {
                text: "The Company will take care of relaying the urgent messages of the insured,relating to any of the events covered in the policy.",
              },

              {
                text: "B0440 DISPATCH OF MEDICATION ",
                bold: "true",
              },
              {
                text: "The Company will take charge of delivering the medicines prescribed urgently bya doctor for the Insured during the trip and which cannot be found in the placewhere he/she had travelled to or be replaced by medicines that have a similar composition. Under no circumstances will the Company assume the cost of themedicines. ",
              },
              {
                text: "B0490 GENERAL INFORMATION ",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "The Company shall respond to any consultations, doubts or problems that the Insured may wish to pose over the telephone on any of the following matters:",
              },
              { text: "• Recommendations of the Foreign Affairs Ministry" },
              {
                text: "• Information on embassies, consulates, visas and procedures necessary to entera country.",
              },
              { text: "• Currencies. " },
              {
                text: "• Vaccinations and hygiene/health recommendations for travelers.",
              },
              { text: "• • Telephones, prefixes and time zones." },
              { text: "• Weather. " },
              {
                text: "B0010 MEDICAL TRASPORTATION AND REPATRIATION",
                color: "true",
                bold: "true",
                marginTop: 10,
              },
              { text: "COVER SECTION", bold: "true", marginTop: 10 },
              {
                text: "B0090 MEDICAL TRANSPORTATION OR REPATRIATION",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In the event of the Insured suffering an accident or illness while travelling outsidetheir usual place of residence , the Company will bear the costs, whenever isnecessary, of transferring or repatriating the Insured to a suitable equippedmedical centre or to their usual place of residence.",
              },
              {
                text: "Depending on the urgency of the situation or seriousness of the Insured’s condition, the Company’s medical team shall decide to which medical centre they should be transferred or whether repatriation is necessary and shall remain in permanent contact with the doctors attending to the Insured in order to ensurethe provision of suitable health care. Any necessary costs incurred from the rescue are not included in this cover. ",
              },

              {
                text: "B0130 TRANSPORT OF A PERSON DUE TO THE HOSPITALISATION OF THE INSURED ",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In the event that the Insured should be admitted to hospital for more than fivedays as a result of an accident or illness covered in the policy, the Company shallmeet the transportation expenses (economy return) for a companion designated by the Insured, from their usual place of residence to the Insured'shospitalisation place, up to the limit established in the Specific or SpecialConditions. ",
              },
              {
                text: "B0140 STAY OF A PERSON DUE TO THE HOSPITALISATION OF THE INSURED ",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In the event that the Insured should be admitted to hospital for more than five days as a result of an accident or illness covered in the policy, the Company shallmeet the accommodation expenses for a companion designated by the Insured to stay in the place where she/he has been hospitalised, up to the limit established in the Specific or Special Conditions.",
              },
              {
                text: "This guarantee does not include the maintenance expenses of the person transferred.",
              },
              {
                text: "B0190 TRANSPORTATION OR REPATRIATION OF THE ACCOMPANYING INSUREDS ",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "When the illness or accident suffered by the Insured prevents the continuation ofthe trip, the Company shall take charge of the transfer of the accompanying persons who contracted the journey together with the Insured (up to a maximum of 6) to the place where the former is hospitalised and/or to their usual place of residence, up to the limit established in the Specific or Special Conditions.",
              },
              {
                text: "B0030 MEDICAL EXPENSES ",
                bold: "true",
                marginTop: 10,
                color: "red",
              },
              {
                text: "SPECIFIC DEFINITIONS MEDICAL EXPENSES",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In addition to the General Definitions, in this cover the following terms shall beunderstood as follows:",
              },
              {
                text: "EPIMEDIC ILLNESS",
                bold: "true",
                marginTop: 10,
                pageBreak: "after",
              },
            ],
          },
        ],
      },
    ],
    [
      {
        columns: [
          {
            stack: [
              {
                text: "Infectious disease which spreads during a period of time within a specific region or country, affecting simultaneously a large number of people.",
              },
              { text: "FOLLOW UP TREATMENT", bold: "true", marginTop: 10 },
              {
                text: "Outpatient medical and rehabilitation expenses reasonably incurred by the Insured in his or her usual place of residence.",
              },
              { text: "ILLNESS", bold: "true", marginTop: 10 },
              {
                text: "Any change in health diagnosed and confirmed by a legally recognized doctor during the life of the policy. ",
              },
              { text: "PANDEMIC ILLNESS", bold: "true", marginTop: 10 },
              {
                text: "Infectious disease which spreads through a large geographical area, usually worldwide, which affects almost all people in a city, region or country. ",
              },
              { text: "SERIOUS ILLNESS", bold: "true", marginTop: 10 },
              {
                text: "An alteration in health that requires admission to hospital and which, in theopinion of the Insurer’s medical team, prevents the Insured for travelling or from continuing travelling on the date planned, or which involves risk of death. ",
              },
              {
                text: "B0090I MEDICAL EXPENSES AND HOSPITALIZATION ABROAD (INCLUDING COVID-19)",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In the event that the Insured should fall ill or have an accident while travellingoutside their usual place of residence, the Company shall meet the cost of anyhospitalization expenses, surgical operations, medical and nursing fees and anypharmaceutical products prescribed by the doctor attending them, until theircondition is sufficiently stabilized to allow them to continue the journey or be transferred to their usual place of residence or hospital close to it, all of these upto the limit duly established in the Specific or Special Conditions.",
              },
              {
                text: "The Company’s medical team shall maintain the necessary telephoneconversations with the centre and with the doctors attending the Insured in order to supervise the provision of suitable health care. ",
              },
              {
                text: "In addition to the above, the Company will meet the cost for strictly necessaryemergency dental treatment of natural teeth for the immediate relief of pain notoccasioned by the previous deteriorated state of the teeth, gums or jaws up tothe limit provided at the Specific or Special Conditions of the Policy. Crownedteeth, crowns, bridges, dentures etc. are not to be understood as natural teeth. ",
              },
              {
                text: "COVID-19 COVER on Medical Expenses Abroad:",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In case the Insured is infected with the Covid-19 during a trip covered by the Insurance Policy, the Travel Insurance will cover:",
              },
              {
                text: "1. Medical and Hospitalization expenses in the destination Country up to theproposed limit on the particular conditions of the policy and according to theterms and conditions defined in the same. ",
              },
              {
                text: "2. Accommodation Expenses due to Compulsory Ordered Quarantine: TheInsurer will cover the accommodation expenses associated to a compulsoryquarantine in case the Insured is diagnosed positive with Covid-19 during aninsured trip and is secluded in a Hotel and/or Hospital at his/her ownexpenses. The maximum limit for the Quarantine cover is 80€/day for amaximum of 14 days. This allowance will be limited to cover theaccommodation expenses and subject to the presentation of the medicaldiagnose, quarantine medical order and convalescence hotel/hospital bill inorder to obtain the reimbursement of the engaged expenses. Other expenses(food, laundry, extra services, etc…) will remain excluded from cover.",
              },
              { text: "B0060 DENTAL EXPENSES ", bold: "true", marginTop: 10 },
              {
                text: "In case of accident or illness covered under this policy the Company will meet thecost for strictly necessary emergency dental treatment of the Insured's naturalteeth only for the immediate relief of pain and not caused by the previousdeteriorated state of the teeth, gums or jaws, up to the limit duly established inthe Specific or Special Conditions. Crowned teeth, crowns, bridges, dentures etc. are not to be understood as natural teeth. ",
              },
              {
                text: "B0070 PHARMACEUTICAL EXPENSES ",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In the event that the Insured should fall ill or have an accident while travellingoutside their country of permanent residence, the Company shall meet the costof any pharmaceutical products prescribed by the doctor attending them, until their condition is sufficiently stabilized to permit them to continue the journey or ",
              },
            ],
          },
          {
            stack: [
              {
                text: "be transferred to their habitual residence or hospital close to the same, up to the limit duly established in the Specific or Special Conditions. ",
              },
              {
                text: "B0035 FIRST MEDICAL ASSISTANCE ABROAD ",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "The Company will assume the initial cost of the Emergency Medical, Surgical andHospital treatment and the cost of the ambulance up to the limit established inthe Specific or Special Conditions. If after receiving Emergency Medical Assistanceit is determined that the cause that originated the assistance is pre-existing, the Company will not be responsible for any additional expenses, therefore, all expenses will be paid by the Insured. ",
              },
              {
                text: "SPECIFIC EXCLUSIONS MEDICAL EXPENSES",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In addition to the General Exclusions to all the cover sections of this policy, this cover shall not be provided for the following cases and their consequences:",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "• Services required for treating pre-existing illnesses unless covered by thespecific program. This exclusion shall not apply to the 'Transfer orrepatriation of the deceased Insured' cover section. ",
                marginTop: 10,
                bold: "true",
              },
              {
                text: "• Medication or treatment started before the start date of the insured journey.",
                bold: "true",
              },
              {
                text: "• Diagnostic treatment not considered by a medical practitioner as immediatelynecessary.",
                bold: "true",
              },
              {
                text: "• Specialist medical treatment without a referral from a medical practitioner.",
                bold: "true",
              },
              {
                text: "• Illnesses or pathological states caused by the voluntary consumption ofalcohol, drugs, toxic substances, narcotics or medicines acquired without amedical prescription. ",
                bold: "true",
              },
              {
                text: "• Events related to the rejection or deferral of the transfer proposed by theCompany’s medical service, for some reason attributable to the Insured or their companions. ",
                bold: "true",
              },
              { text: "• Rehabilitation treatments. ", bold: "true" },
              {
                text: "• Periodical or preventive medical examinations. ",
                bold: "true",
              },
              {
                text: "• Events related to contraceptive devices, prosthetic and orthopedic devices,orthotic or osteosynthesis material, medical appliances or artificial aids. ",
                bold: "true",
              },
              {
                text: "• Preventive treatment, including any vaccinations or immunizations.",
                bold: "true",
              },
              {
                text: "• Physiotherapy or chiropractic treatment of more than 60€, unless The Insured is admitted to a hospital as an in-patient.",
                bold: "true",
              },
              {
                text: "• Events occurring during a trip undertaken for the following reasons: ",
                bold: "true",
              },
              {
                text: "        o With the intention of receiving medical treatment;  ",
                marginLeft: 5,
                bold: "true",
              },
              {
                text: "o Because the Insured was diagnosed with some terminal illness.  ",
                marginLeft: 5,
                bold: "true",
              },
              {
                text: "• Even when these are not the only reasons for the insured journey. ",
                bold: "true",
              },
              {
                text: "• Any costs that are a result of an Epidemic or Pandemic disease.",
                bold: "true",
              },
              {
                text: "• Pregnancy and giving birth. However, unexpected medical complications andemergencies that take place in the first 26 weeks of the pregnancy are covered.",
              },
              {
                text: "• For Insured over 70 years or older, any cardiac or cardiovascular or vascular orcerebra-vascular illness or consequences or complications that can reasonably be related to these conditions.",
              },
              {
                text: "• A terminal prognosis with a life expectancy of less than 24 months diagnosed before the start of the insured journey.",
              },
              {
                text: "• Claims caused by natural catastrophes, epidemics and pandemics are expressly excluded, save exceptions set out in the particular conditions, if any.",
              },
              {
                text: "B0270 REPATRIATION OF MORTAL REMAINS ",
                bold: "true",
                marginTop: 10,
                color: "green",
              },
              { text: "COVER SECTION", bold: "true", marginTop: 10 },
              {
                text: "B0270 TRANSPORT OR REPATRIATION OF THE DECEASED INSURED ",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In the event of the Insured's death, the Company shall make the necessaryarrangements for the transfer or repatriation of the mortal remains and shallassume the transportation expenses to the place of interment, cremation orfuneral ceremony in their usual place of residence. This cover does not include the payment of the interment, cremation or funeral ceremony expenses.",
              },
              {
                text: "C0000 LUGGAGE",
                bold: "true",
                marginTop: 10,
                color: "green",
              },
              {
                text: "SPECIFIC DEFINITIONS LUGGAGE",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In addition to the General Definitions, in this cover the following terms shall be understood as follows:",
              },
              {
                text: "BAGAGGE",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "Personal belongings of the Insured that the insured carries with them during the trip in the place destined for the purpose in the corresponding mean of transport",
                pageBreak: "after",
              },
            ],
          },
        ],
      },
    ],
    [
      {
        columns: [
          {
            stack: [
              {
                text: "or whose custody the insured has entrusted to the carrier through the corresponding check-in. ",
              },
              { text: "BAGAGGE DAMAGE", bold: "true", marginTop: 10 },
              {
                text: "It only will be considered as damage the breakage of external parts of the baggage(including locks, zippers, rudders and handles) that render it unusable. Scratches,small tears and any damage to the internal parts of the baggage and / or itscontents are excluded.",
              },
              { text: "BAGAGGE LOSS", bold: "true", marginTop: 10 },
              {
                text: "Total loss of Insured Luggage after 21 days from the time the baggage has beenlost, counted from the date of arrival at the destination airport. ",
              },
              { text: "VALUABLE OBJECTS", bold: "true", marginTop: 10 },
              {
                text: "Jewelry, watches, objects made from precious metal, furs, paintings, objects d’art, silver and gold articles, unique objects, mobile telephones and theiraccessories, cameras and photographic or video equipment, audiovisual reproduction or recording equipment, as well as any accessories thereof,computer equipment of any kind, radio-controlled models and accessories, rifles, hunting guns, as well as their optical accessories, wheel chairs and medicalequipment. ",
              },
              {
                text: "COVER SECTION",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "C0030 INDEMNITY DUE TO PROBLEMS WITH THE CHECKED - IN LUGGAGE(ACCIDENTAL DAMAGE, LOSS, ROBBERY) ",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "The Company shall inform the Insured of their rights and the steps to be takentowards the airline company responsible, in the event of the definitive loss orexternal damage of the baggage checked-in for a flight, and shall complement theindemnity received from the airline company up to the limit duly established in the Specific or Special Conditions.  ",
              },
              {
                text: "Any indemnities to be received under this guarantee shall be reduced by theamount of any indemnity that may be due under the “Compensation for Baggage delay' cover section.",
              },
              {
                text: "DOCUMENTS NECESSARY TO CLAIM UNDER THIS COVER:",
                bold: "true",
                marginBottom: 10,
              },
              {
                text: "In order to claim indemnity for the definitive loss of luggage, the Insured must present the following documents:",
                bold: "true",
              },
              { text: "a. Property Irregularity Report (PIR)." },
              {
                text: "b. Final settlement letter from the airline company certifying the definitive lossof the luggage checked-in for a flight",
              },
              {
                text: "c. List of the contents of the luggage with the Insured’s economic assessmentof their value.",
              },
              {
                text: "In the event of claiming indemnity for external damage to luggage, it is only necessary to present the Property Irregularity Report (PIR).",
                bold: "true",
              },
              {
                text: "In order to claim indemnity for stolen checked-in luggage, the Insured must present:",
                bold: "true",
              },
              {
                text: "a. A Property Irregularity Report (PIR) or formal complaint lodged with thepolice at the place where the robbery was detected, with a list of the missingitems and the damages caused by the robbery.",
              },
              {
                text: "b. List of the contents of the luggage with the Insured’s economic assessmentof their value. ",
              },
              {
                text: "C0040 COMPENSATION FOR BAGGAGE DELAY ",
                bold: "true",
                marginTop: 10,
              },
              {
                text: "In the event of a delay in delivering checked-in luggage in excess of 6 hours fromthe arrival of the flight, the Company shall inform the Insured of their rights andthe steps to be taken towards the airline company responsible and indemnify upto the limit duly established in the Specific or Special Conditions for the purchaseof basic necessity items that prove essential while awaiting the arrival of the delayed luggage.",
              },
              {
                text: "This benefit shall not be covered where the delay or the purchase of basicnecessities should occur within the province/state in which the Insured’s usualplace of residence is located. In order to claim for indemnity under this guarantee,the Insured must present the original invoices for the basic necessity items purchased. ",
              },
              {
                text: "SPECIFIC EXCLUSIONS LUGGAGE",
                bold: "true",
                marginBottom: 10,
              },
              {
                text: "In addition to the General Exclusions to all the cover sections of this policy, thiscover shall not be provided for the following cases and their consequences:",
                bold: "true",
              },
            ],
          },
          {
            stack: [
              {
                bold: "true",
                text: "• Merchandise, material of a professional nature unless the Business coverhas been contracted for this policy. Travel tickets, collections, securities ofany kind, identity documents and, in general, any paper documents andshare instruments, credit cards, money, jewelry, any contents stored onelectronic and/or computer media, documents recorded on magnetic strips or filmed. ",
              },
              {
                text: "• Any claim where the Insured Vehicle is stolen or driven without theInsured’s consent by any person who has access to a removable ignitiondevice, including but not limited to family members, spouse and partner,unless access was gained through forcible means",
                bold: "true",
              },
              {
                text: "• Any claim where the Insured Vehicle is left unattended, unless all securitydevices/immobilizers present on the Insured Vehicle have been activatedand the vehicle is locked, or any claim where a removable ignition device is left in, or on the Insured Vehicle. ",
                bold: "true",
              },
              {
                text: "• Any Total Loss that occurs while the Insured Vehicle is in the control ofanyone not permitted to drive the Insured Vehicle, unless the Total Lossoccurs as a result of fire or theft.",
                bold: "true",
              },
              {
                text: "• VAT if the Insured is VAT registered. ",
                bold: "true",
              },
              {
                text: "• Any claim if the driver of the Insured Vehicle is intoxicated by alcohol, underthe influence of non-prescribed drugs, or where they have been advised notto drive by a registered medical practitioner. ",
                bold: "true",
              },
              {
                text: "D0000 CANCELLATION ",
                bold: "true",
                color: "green",
              },
              {
                text: "COVER SECTION",
                bold: "true",
              },
              {
                text: "D0010 REIMBURSEMENT OF THE CANCELLATION EXPENSES OF THE TRIP  ",
                bold: "true",
              },
              {
                text: "This cover shall be valid from the date the insurance policy is taken out, and shall terminate on boarding the means of public transportation used to travel. Thispolicy only covers incidents occurring after taking out the insurance and beforeembarking on the journey stated in the policy. The guarantee will only be valid ifit is taken out at the same time as the trip object of the insurance, or as amaximum during the next three days",
              },
              {
                text: "Up to the limit duly established in the Specific or Special Conditions, the Companyshall reimburse the cost of cancelling the contracted trip, charged to the Insuredin application of the general sales conditions of their provider, provided that thet rip is cancelled before it actually starts and this is for one of the following reasons arising subsequent to taking out the insurance, which impedes undertaking the trip on the contracted dates:",
              },
              { text: "1. For family or health reasons:" },
              {
                text: "1.1. Serious illness, serious bodily injury or death of the Insured or of their relatives.",
              },
              { text: "1.2. Receiving custody of an adopted child." },
              { text: "2. Due to official requirements:" },
              {
                text: "2.1. The Insured is called before one of the State’s official bodies.",
              },
              { text: "3. For work-related reasons:", bold: "true" },
              {
                text: "3.1. Taking up a new position with a labour contract while unemployed or in adifferent company, which does not belong to the same business group.",
              },
              {
                text: "3.2. Unforeseen, obligatory transfer to a workplace located in a differentProvince/State to that of their residence, for a period in excess of three months.",
              },
              { text: "3.3. Professional dismissal of the Insured." },
              {
                text: "3.4. A justified or unforeseen change in the holiday leave previously granted by fthe company with which the Insured has an employment contract.",
              },
              {
                text: "3.5. Receiving a training grant or internship with a start date coinciding withthe expected date for travel, when the Insured was notified of its grantingafter the date on which the insurance was taken out.",
              },
              { text: "4. For extraordinary reasons:", bold: "true" },
              {
                text: "4.1. 4.1. Serious damage to their usual or secondary residence or owned or rentedbusiness premises that renders them uninhabitable or at serious risk of further damage occurring, thus making the Insured presence there essential.",
              },
              {
                text: "4.2. Declaration of disaster area in the Insured's usual town of residence.",
              },
              { text: "5. Other reasons:", bold: "true" },
              {
                text: "5.1. Due to breakdown or accident of the Insured's privately owned vehicle, occurring during the 48 hours prior to starting the journey, making it impossible for the Insured to begin the trip. In the case of breakdown,cancellation of the trip will be covered only if the vehicle is less than fouryears old.",
                pageBreak: "after",
              },
            ],
          },
        ],
      },
    ],
    [
      {
        columns: [
          {
            stack: [
              {
                text: "5.2. Due to breakdown or accident of the mode of transport used to travel tothe terminal, port or airport to begin the journey, causing the Insured tomiss the contracted transport. Only the costs of alternate transport torejoin the trip or 50% of the cancellation costs will be covered if the Insureddecides to cancel the trip.",
              },
              {
                text: "5.3. Theft of documentation or luggage up to 24 hours prior to the start of the journey, which impedes the Insured from initiating the journey",
              },
              {
                text: "5.4. Cancellation of a trip by the accompanying Insured Parties under this samecontract, provided this cancellation stems from one of the causes listedabove. Should the accompanying Insured Parties decide to continue thejourney, additional expenses shall be duly covered in respect of the Insured cancellation of a trip.",
              },
              {
                text: "DOCUMENTS NECESSARY TO CLAIM FOR PAYMENT OF CANCELLATION FEES",
                bold: "true",
              },
              {
                text: "1. Document certifying that the accident occurred (doctor's report, death certificate, police report, etc.). This document must reflect the date on which the accident occurred (hospitalisation, death, breakdown, accident, etc.)",
              },
              {
                text: "2. List of the services hired for the trip (accommodation, flights, etc.) and receipt of payment for the same.",
              },
              {
                text: "3. Cancellation conditions of said services and proof of their cancellation.",
              },
              {
                text: "4. Invoice of the cancellation costs or payment note for the costs that are not included in the “cancellation costs”",
              },
              {
                text: "5. It is essential that the expenses for cancelling the trip are duly reflected in the required documentation outlined above. ",
              },
              { text: "SPECIFIC EXCLUSIONS CANCELLATION", bold: "true" },
              {
                bold: "true",
                text: "In addition to the General Exclusions to all the cover sections of this policy, this cover shall not be provided for the following cases and their consequences:",
              },
              { bold: "true", text: "• Travel or vaccination contraindication or the impossibility of continuingrecommended preventive medical treatment in certain destinations." },
              { bold: "true", text: "• Epidemics and Pandemics." },
              { bold: "true", text: "• Epidemics and Pandemics." },
              { bold: "true", text: "• Non-emergency dental treatments and rehabilitation treatments. " },
              { bold: "true", text: "• The refund of expenses covered by this policy that the Insured can recover from the Transport Company, tour operator or authorized travel agent orfrom any other contracted supplier." },
           { bold: "true", text: "• Claims involving a vehicle with a gross vehicle weight of more than 3,500kg " }, 
           { bold: "true", text: "• The costs of transport or accommodation that have been paid for by the transport company, tour operator or authorized travel agent.  " }, 
          { bold: "true", text: "• The costs of transport or accommodation that have been paid for by the transport company, tour operator or authorized travel agent.  " },
          ],
          },
          {
            stack: [],
          },
        ],
      },
    ],
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
