import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReconciliationService {

  constructor() { }

  
getAllReconciles(){
  return this.reconcile;
}



reconcile = [
  {
    id: 1234,
    banking_date: new Date(2021, 2, 3),
    giro_slip: 45671,
    banking_total: 200,
    banked_total: 180,
    outstanding: -120,
    sealed_by: 'John Doe',
    cashup_sheets: [
      {
      sheet_date: new Date(2021, 2, 2),
      cash: 320,
      id: 12,
      card: [
        {
          name: 'Amex',
          price: 240,
          api_amount: 80,
          },
          {
            name: 'Master Card',
            price: 340,
            api_amount: 80,
          },
          {
          name: 'Visa',
          price: 540,
          api_amount: 80,
          },
      ],
      third_party: [
          {
          name: 'Zomato',
          price: 240,
          api_amount: 80,
          },
          {
            name: 'Just Eat',
            price: 240,
            api_amount: 80,
          },
          {
            name: 'Deliveroo',
            price: 240,
            api_amount: 80,
          },
          {
            name: 'Uber Eats',
            price: 240,
            api_amount: 80,
          },
        ],

      },
      {
        sheet_date: new Date(2021, 2, 1),
        cash: 320,
        id: 13,
        card: [
          {
            name: 'Amex',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Master Card',
              price: 340,
              api_amount: 80,
            },
            {
            name: 'Visa',
            price: 540,
            api_amount: 80,
            },
        ],
        third_party: [
            {
            name: 'Zomato',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Just Eat',
              price: 240,
              api_amount: 80,
            },
            {
            name: 'Deliveroo',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Uber Eats',
              price: 240,
              api_amount: 80,
            },
          ],

        },

    ],
  },
  {
    id: 1231,
    banking_date: new Date(2021, 3, 3),
    giro_slip: 45671,
    banking_total: 200,
    banked_total: 180,
    outstanding: -120,
    sealed_by: 'John Doe',
    cashup_sheets: [
      {
      sheet_date: new Date(2021, 3, 2),
      cash: 320,
      id: 12,
      card: [
        {
          name: 'Amex',
          price: 240,
          api_amount: 80,
          },
          {
            name: 'Master Card',
            price: 340,
            api_amount: 80,
          },
          {
          name: 'Visa',
          price: 540,
          api_amount: 80,
          },
      ],
      third_party: [
          {
          name: 'Zomato',
          price: 240,
          api_amount: 80,
          },
          {
            name: 'Just Eat',
            price: 240,
            api_amount: 80,
          },
          {
            name: 'Deliveroo',
            price: 240,
            api_amount: 80,
          },
          {
            name: 'Uber Eats',
            price: 240,
            api_amount: 80,
          },
        ],

      },
      {
        sheet_date: new Date(2021, 3, 1),
        cash: 320,
        id: 13,
        card: [
          {
            name: 'Amex',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Master Card',
              price: 340,
              api_amount: 80,
            },
            {
            name: 'Visa',
            price: 540,
            api_amount: 80,
            },
        ],
        third_party: [
            {
            name: 'Zomato',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Just Eat',
              price: 240,
              api_amount: 80,
            },
            {
            name: 'Deliveroo',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Uber Eats',
              price: 240,
              api_amount: 80,
            },
          ],

        },

    ],
  },


  {
    id: 1232,
    banking_date: new Date(2021, 3, 12),
    giro_slip: 45671,
    banking_total: 200,
    banked_total: 180,
    outstanding: -120,
    sealed_by: 'John Doe',
    cashup_sheets: [
      {
      sheet_date: new Date(2021, 3, 6),
      cash: 320,
      id: 12,
      card: [
        {
          name: 'Amex',
          price: 240,
          api_amount: 80,
          },
          {
            name: 'Master Card',
            price: 340,
            api_amount: 80,
          },
          {
          name: 'Visa',
          price: 540,
          api_amount: 80,
          },
      ],
      third_party: [
          {
          name: 'Zomato',
          price: 240,
          api_amount: 80,
          },
          {
            name: 'Just Eat',
            price: 240,
            api_amount: 80,
          },
          {
            name: 'Deliveroo',
            price: 240,
             api_amount: 80,
          },
          {
            name: 'Uber Eats',
            price: 240,
            api_amount: 80,
          },
        ],

      },
      {
        sheet_date: new Date(2021, 3, 4),
        cash: 320,
        id: 13,
        card: [
          {
            name: 'Amex',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Master Card',
              price: 340,
              api_amount: 80,
            },
            {
            name: 'Visa',
            price: 540,
            api_amount: 80,
            },
        ],
        third_party: [
            {
            name: 'Zomato',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Just Eat',
              price: 240,
              api_amount: 80,
            },
            {
            name: 'Deliveroo',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Uber Eats',
              price: 240,
              api_amount: 80,
            },
          ],

        },

    ],
  },

  {
    id: 1233,
    banking_date: new Date(2021, 3, 14),
    giro_slip: 45671,
    banking_total: 200,
    banked_total: 180,
    outstanding: -120,
    sealed_by: 'John Doe',
    cashup_sheets: [
      {
      sheet_date: new Date(2021, 3, 13),
      cash: 320,
      id: 12,
      card: [
        {
          name: 'Amex',
          price: 240,
          api_amount: 80,
          },
          {
            name: 'Master Card',
            price: 340,
            api_amount: 80,
          },
          {
          name: 'Visa',
          price: 540,
          api_amount: 80,
          },
      ],
      third_party: [
          {
          name: 'Zomato',
          price: 240,
          api_amount:80,
          },
          {
            name: 'Just Eat',
            price: 240,
            api_amount: 80,
          },
          {
             name: 'Deliveroo',
             price: 240,
             api_amount: 80,
          },
          {
            name: 'Uber Eats',
            price: 240,
            api_amount: 80,
          },
        ],

      },
      {
        sheet_date: new Date(2021, 3, 14),
        cash: 320,
        id: 13,
        card: [
          {
            name: 'Amex',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Master Card',
              price: 340,
              api_amount: 80,
            },
            {
            name: 'Visa',
            price: 540,
            api_amount: 80,
            },
        ],
        third_party: [
            {
            name: 'Zomato',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Just Eat',
              price: 240,
              api_amount: 80,
            },
            {
            name: 'Deliveroo',
            price: 240,
            api_amount: 80,
            },
            {
              name: 'Uber Eats',
              price: 240,
              api_amount: 80,
            },
          ],

        },

    ],
  },
];
}
