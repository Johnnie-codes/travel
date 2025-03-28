<script setup lang="ts">
// import PdfMaker from '@/components/PdfMaker.vue';
import { formatCurrency } from '@/utils/utils';
import { ref } from 'vue';

const props = defineProps({
  data: {
    type: Object,
  },
});

const content = ref();

function getPdf() {
  const docDefinition = {
    content: [
      {
        style: 'header',
        text: 'Travel Insurance Policy',
        alignment: 'center',
        fontSize: 16,
        bold: true,
      },
    
      {
        columns: [
          {
            width: '75%',
            stack: [
              {
                margin: [0, 0, 0, 10],
                border: [true, true, true, true],
                padding: 10,
                stack: [
                  {
                    decoration: 'underline',
                    text: 'Policyholder Information',
                    bold: true,
                    fontSize: 12,
                  },
                  {
                    marginTop: 5,
                    columns: [
                      { text: 'Name:', width: 'auto' },
                      { text: props.data?.fullName, bold: true },
                    ],
                  },
                  {
                    marginTop: 5,
                    columns: [
                      { text: 'Passport Number:', width: 'auto' },
                      { text: props.data?.passportNumber, bold: true },
                    ],
                  },
                ],
              },
            ],
          },
          {
            width: '25%',
            stack: [
              {
                margin: [0, 0, 0, 10],
                border: [true, true, true, true],
                padding: 10,
                stack: [
                  {
                    marginTop: 10,
                    text: 'Policy Number:',
                    bold: true,
                  },
                  {
                    text: props.data?.policyNumber,
                    bold: true,
                    marginBottom: 10,
                  },
                  {
                    text: 'No. of Passengers:',
                    bold: true,
                  },
                  {
                    text: props.data?.numberOfPassengers,
                    bold: true,
                  },
                ],
              },
            ],
            alignment: 'right',
          },
        ],
      },
      {
        marginTop: 20,
        decoration: 'underline',
        text: 'Coverage Details',
        bold: true,
        fontSize: 12,
      },
      {
        marginTop: 5,
        text: 'This policy covers medical expenses, trip cancellations, and lost baggage.',
      },
      {
        marginTop: 20,
        decoration: 'underline',
        text: 'Premium Amount',
        bold: true,
        fontSize: 12,
      },
      {
        marginTop: 5,
        text: `Total Premium: ${formatCurrency(props.data?.premium)}`,
      },
      {
        marginTop: 20,
        decoration: 'underline',
        text: 'Claim Process',
        bold: true,
        fontSize: 12,
      },
      {
        marginTop: 5,
        text: 'To file a claim, please contact our support team at [contact details].',
      },
      {
        marginTop: 20,
        text: 'Thank you for choosing our travel insurance service!',
        alignment: 'center',
      },
    ],
    pageMargins: [80, 70, 80, 20],
  };

  content.value = docDefinition;
}

getPdf();
</script>

<template>
  <div class="p-4 relative">
    <PdfMaker v-if="content" :content="content" />
  </div>
</template>