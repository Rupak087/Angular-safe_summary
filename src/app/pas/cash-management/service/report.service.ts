import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }
 
  getAllReports(){
    return this.reports;
  }

  getReportById(id: number){
    return this.reports.find(x=> x.id==id);
  }

  deleteReportById(id: number){
    this.reports = this.reports.filter(x=> x.id != id);
  }

  getShowdiv(){
    return this.showDiv;
  }


  reports = [
    {
    id: 1,
    report_date:new Date(2021,2,29),
    report_name:"PDQ Report Febuary",
    user_name:"Krishna Kumar",
   
    tablesort:{
      Epo: true,
      food:true,
      drinks:true,
      takeAway:true,
      others:false,
      vat:true,
      seviceCharges:false,
      creditCardTips:false,    
    
      PettyCash: true,
      fd:true,
      repair:true,
      maintenance:true,
      sundries:true,    
    
      Pdq: true,
      debit:true,
      visa:true,
      amex:true,    
    
      Tpt: true,
      zomato:false,
      delivaro:false,    
    
      Pdd: true,
      cash: false,
      dif: true,    
    
      Brf: true,
      giro:true,
      banking:true,
      banked:true,
      cashup:false,
      sealed:false,   
    

    },
    sheets: [
      {
      sheet_id: 10,
      sheet_date:new Date(2021,2,1),
      time:"AM",
      
    epos:{
      food:"10",
      drinks:"10",
      take_away:"10",
      others:"10",
      vat:"10",
      service_charge:"10",
      debit_card_charge:"10"
    },
    petty_cash:{
      food_drinks:"10",
      repairs:"10",
      maintenance:"10",
      sundires:"10"
     
    },
    pdq_takings:{
      debit_card:"10",
      visa:"10",
      amex:"10" 
  
    },
    third_party_takings:{
      zomato:"10",
      delivaro:"10"
  
    },
    pending_deposits_deposits:{
      cash:"10",
      difference:"10"
  
    },
    banking_details:{
      giro_slip_number:"10756",
      banking_total:"10",
      banked_total:"10",
      cashup_sheet_date:new Date(2021,2,1),
      sealed_by:"John Doe"
  
    }
  },

  {
    sheet_id: 11,
    sheet_date:new Date(2021,2,2),
    time:"AM",
  epos:{
    food:"10",
    drinks:"10",
    take_away:"10",
    others:"10",
    vat:"10",
    service_charge:"10",
    debit_card_charge:"10"
  },
  petty_cash:{
    food_drinks:"10",
    repairs:"10",
    maintenance:"10",
    sundires:"10"
   
  },
  pdq_takings:{
    debit_card:"10",
    visa:"10",
    amex:"10" 

  },
  third_party_takings:{
    zomato:"10",
    delivaro:"10"

  },
  pending_deposits_deposits:{
    cash:"10",
    difference:"10"

  },
  banking_details:{
    giro_slip_number:"10345",
    banking_total:"10",
    banked_total:"10",
    cashup_sheet_date:new Date(2021,2,2),
    sealed_by:"John Doe"

  }
},

{
  sheet_id: 12,
  sheet_date:new Date(2021,2,3),
  time:"PM",
epos:{
  food:"10",
  drinks:"10",
  take_away:"10",
  others:"10",
  vat:"10",
  service_charge:"10",
  debit_card_charge:"10"
},
petty_cash:{
  food_drinks:"10",
  repairs:"10",
  maintenance:"10",
  sundires:"10"
 
},
pdq_takings:{
  debit_card:"10",
  visa:"10",
  amex:"10" 

},
third_party_takings:{
  zomato:"10",
  delivaro:"10"

},
pending_deposits_deposits:{
  cash:"10",
  difference:"10"

},
banking_details:{
  giro_slip_number:"10987",
  banking_total:"10",
  banked_total:"10",
  cashup_sheet_date:new Date(2021,2,3),
  sealed_by:"John Doe"

}
},

{
  sheet_id: 13,
  sheet_date:new Date(2021,2,4),
  time:"PM",
epos:{
  food:"10",
  drinks:"10",
  take_away:"10",
  others:"10",
  vat:"10",
  service_charge:"10",
  debit_card_charge:"10"
},
petty_cash:{
  food_drinks:"10",
  repairs:"10",
  maintenance:"10",
  sundires:"10"
 
},
pdq_takings:{
  debit_card:"10",
  visa:"10",
  amex:"10" 

},
third_party_takings:{
  zomato:"10",
  delivaro:"10"

},
pending_deposits_deposits:{
  cash:"10",
  difference:"10"

},
banking_details:{
  giro_slip_number:"10756",
  banking_total:"10",
  banked_total:"10",
  cashup_sheet_date:new Date(2021,2,4),
  sealed_by:"John Doe"

}
},

{
  sheet_id: 14,
  sheet_date:new Date(2021,2,5),
  time:"AM",
epos:{
  food:"10",
  drinks:"10",
  take_away:"10",
  others:"10",
  vat:"10",
  service_charge:"10",
  debit_card_charge:"10"
},
petty_cash:{
  food_drinks:"10",
  repairs:"10",
  maintenance:"10",
  sundires:"10"
 
},
pdq_takings:{
  debit_card:"10",
  visa:"10",
  amex:"10" 

},
third_party_takings:{
  zomato:"10",
  delivaro:"10"

},
pending_deposits_deposits:{
  cash:"10",
  difference:"10"

},
banking_details:{
  giro_slip_number:"10345",
  banking_total:"10",
  banked_total:"10",
  cashup_sheet_date:new Date(2021,2,5),
  sealed_by:"John Doe"

}
},

{
  sheet_id: 15,
  sheet_date:new Date(2021,2,5),
  time:"PM",
epos:{
  food:"10",
  drinks:"10",
  take_away:"10",
  others:"10",
  vat:"10",
  service_charge:"10",
  debit_card_charge:"10"
},
petty_cash:{
  food_drinks:"10",
  repairs:"10",
  maintenance:"10",
  sundires:"10"
 
},
pdq_takings:{
  debit_card:"10",
  visa:"10",
  amex:"10" 

},
third_party_takings:{
  zomato:"10",
  delivaro:"10"

},
pending_deposits_deposits:{
  cash:"10",
  difference:"10"

},
banking_details:{
  giro_slip_number:"10567",
  banking_total:"10",
  banked_total:"10",
  cashup_sheet_date:new Date(2021,2,5),
  sealed_by:"John Doe"

}
},


],
    },

{
  id: 2,
  report_date:new Date(2021,2,12),
  report_name:"EPOS & Petty Csh",
  user_name:"Pratian'",
  tablesort:{
    Epo: false,
    food:true,
    drinks:true,
    takeAway:true,
    others:false,
    vat:true,
    seviceCharges:false,
    creditCardTips:false,    
  
    PettyCash: true,
    fd:true,
    repair:true,
    maintenance:true,
    sundries:true,    
  
    Pdq: true,
    debit:true,
    visa:true,
    amex:true,    
  
    Tpt: true,
    zomato:false,
    delivaro:false,    
  
    Pdd: true,
    cash: false,
    dif: true,    
  
    Brf: true,
    giro:true,
    banking:true,
    banked:true,
    cashup:false,
    sealed:false,   
  

  },
  sheets: [
    {
    sheet_id: 10,
    sheet_date:new Date(2021,2,1),
    time:"AM",
  epos:{
    food:"10",
    drinks:"10",
    take_away:"10",
    others:"10",
    vat:"10",
    service_charge:"10",
    debit_card_charge:"10"
  },
  petty_cash:{
    food_drinks:"10",
    repairs:"10",
    maintenance:"10",
    sundires:"10"
   
  },
  pdq_takings:{
    debit_card:"10",
    visa:"10",
    amex:"10" 

  },
  third_party_takings:{
    zomato:"10",
    delivaro:"10"

  },
  pending_deposits_deposits:{
    cash:"10",
    difference:"10"

  },
  banking_details:{
    giro_slip_number:"10756",
    banking_total:"10",
    banked_total:"10",
    cashup_sheet_date:new Date(2021,2,1),
    sealed_by:"John Doe"

  }
},

{
  sheet_id: 11,
  sheet_date:new Date(2021,2,2),
  time:"AM",
epos:{
  food:"10",
  drinks:"10",
  take_away:"10",
  others:"10",
  vat:"10",
  service_charge:"10",
  debit_card_charge:"10"
},
petty_cash:{
  food_drinks:"10",
  repairs:"10",
  maintenance:"10",
  sundires:"10"
 
},
pdq_takings:{
  debit_card:"10",
  visa:"10",
  amex:"10" 

},
third_party_takings:{
  zomato:"10",
  delivaro:"10"

},
pending_deposits_deposits:{
  cash:"10",
  difference:"10"

},
banking_details:{
  giro_slip_number:"10345",
  banking_total:"10",
  banked_total:"10",
  cashup_sheet_date:new Date(2021,2,2),
  sealed_by:"John Doe"

}
},

{
sheet_id: 12,
sheet_date:new Date(2021,2,3),
time:"PM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10987",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,3),
sealed_by:"John Doe"

}
},

{
sheet_id: 13,
sheet_date:new Date(2021,2,4),
time:"PM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10756",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,4),
sealed_by:"John Doe"

}
},

{
sheet_id: 14,
sheet_date:new Date(2021,2,5),
time:"AM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10345",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,5),
sealed_by:"John Doe"

}
},

{
sheet_id: 15,
sheet_date:new Date(2021,2,5),
time:"PM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10567",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,5),
sealed_by:"John Doe"

}
},


],

},
{
  id: 3,
  report_date:new Date(2021,2,3),
  report_name:"Revenu Report Jan",
  user_name:"Skill Assure",
  tablesort:{
    Epo: true,
    food:true,
    drinks:true,
    takeAway:true,
    others:false,
    vat:true,
    seviceCharges:false,
    creditCardTips:false,    
  
    PettyCash: true,
    fd:true,
    repair:true,
    maintenance:true,
    sundries:true,    
  
    Pdq: false,
    debit:true,
    visa:true,
    amex:true,    
  
    Tpt: true,
    zomato:false,
    delivaro:false,    
  
    Pdd: true,
    cash: false,
    dif: true,    
  
    Brf: true,
    giro:true,
    banking:true,
    banked:true,
    cashup:false,
    sealed:false,   
  

  },
  sheets: [
    {
    sheet_id: 10,
    sheet_date:new Date(2021,2,1),
    time:"AM",
  epos:{
    food:"10",
    drinks:"10",
    take_away:"10",
    others:"10",
    vat:"10",
    service_charge:"10",
    debit_card_charge:"10"
  },
  petty_cash:{
    food_drinks:"10",
    repairs:"10",
    maintenance:"10",
    sundires:"10"
   
  },
  pdq_takings:{
    debit_card:"10",
    visa:"10",
    amex:"10" 

  },
  third_party_takings:{
    zomato:"10",
    delivaro:"10"

  },
  pending_deposits_deposits:{
    cash:"10",
    difference:"10"

  },
  banking_details:{
    giro_slip_number:"10756",
    banking_total:"10",
    banked_total:"10",
    cashup_sheet_date:new Date(2021,2,1),
    sealed_by:"John Doe"

  }
},

{
  sheet_id: 11,
  sheet_date:new Date(2021,2,2),
  time:"AM",
epos:{
  food:"10",
  drinks:"10",
  take_away:"10",
  others:"10",
  vat:"10",
  service_charge:"10",
  debit_card_charge:"10"
},
petty_cash:{
  food_drinks:"10",
  repairs:"10",
  maintenance:"10",
  sundires:"10"
 
},
pdq_takings:{
  debit_card:"10",
  visa:"10",
  amex:"10" 

},
third_party_takings:{
  zomato:"10",
  delivaro:"10"

},
pending_deposits_deposits:{
  cash:"10",
  difference:"10"

},
banking_details:{
  giro_slip_number:"10345",
  banking_total:"10",
  banked_total:"10",
  cashup_sheet_date:new Date(2021,2,2),
  sealed_by:"John Doe"

}
},

{
sheet_id: 12,
sheet_date:new Date(2021,2,3),
time:"PM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10987",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,3),
sealed_by:"John Doe"

}
},

{
sheet_id: 13,
sheet_date:new Date(2021,2,4),
time:"PM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10756",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,4),
sealed_by:"John Doe"

}
},

{
sheet_id: 14,
sheet_date:new Date(2021,2,5),
time:"AM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10345",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,5),
sealed_by:"John Doe"

}
},

{
sheet_id: 15,
sheet_date:new Date(2021,2,5),
time:"PM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10567",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,5),
sealed_by:"John Doe"

}
},


],

},
{
  id: 4,
  report_date:new Date(2021,2,29),
  report_name:"PDQ Report Febuary",
  user_name:"Krishna Kumar",
  sheets: [
    {
    sheet_id: 10,
    sheet_date:new Date(2021,2,1),
    time:"AM",
  epos:{
    food:"10",
    drinks:"10",
    take_away:"10",
    others:"10",
    vat:"10",
    service_charge:"10",
    debit_card_charge:"10"
  },
  petty_cash:{
    food_drinks:"10",
    repairs:"10",
    maintenance:"10",
    sundires:"10"
   
  },
  pdq_takings:{
    debit_card:"10",
    visa:"10",
    amex:"10" 

  },
  third_party_takings:{
    zomato:"10",
    delivaro:"10"

  },
  pending_deposits_deposits:{
    cash:"10",
    difference:"10"

  },
  banking_details:{
    giro_slip_number:"10756",
    banking_total:"10",
    banked_total:"10",
    cashup_sheet_date:new Date(2021,2,1),
    sealed_by:"John Doe"

  }
},

{
  sheet_id: 11,
  sheet_date:new Date(2021,2,2),
  time:"AM",
epos:{
  food:"10",
  drinks:"10",
  take_away:"10",
  others:"10",
  vat:"10",
  service_charge:"10",
  debit_card_charge:"10"
},
petty_cash:{
  food_drinks:"10",
  repairs:"10",
  maintenance:"10",
  sundires:"10"
 
},
pdq_takings:{
  debit_card:"10",
  visa:"10",
  amex:"10" 

},
third_party_takings:{
  zomato:"10",
  delivaro:"10"

},
pending_deposits_deposits:{
  cash:"10",
  difference:"10"

},
banking_details:{
  giro_slip_number:"10345",
  banking_total:"10",
  banked_total:"10",
  cashup_sheet_date:new Date(2021,2,2),
  sealed_by:"John Doe"

}
},

{
sheet_id: 12,
sheet_date:new Date(2021,2,3),
time:"PM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10987",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,3),
sealed_by:"John Doe"

}
},

{
sheet_id: 13,
sheet_date:new Date(2021,2,4),
time:"PM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10756",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,4),
sealed_by:"John Doe"

}
},

{
sheet_id: 14,
sheet_date:new Date(2021,2,5),
time:"AM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10345",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,5),
sealed_by:"John Doe"

}
},

{
sheet_id: 15,
sheet_date:new Date(2021,2,5),
time:"PM",
epos:{
food:"10",
drinks:"10",
take_away:"10",
others:"10",
vat:"10",
service_charge:"10",
debit_card_charge:"10"
},
petty_cash:{
food_drinks:"10",
repairs:"10",
maintenance:"10",
sundires:"10"

},
pdq_takings:{
debit_card:"10",
visa:"10",
amex:"10" 

},
third_party_takings:{
zomato:"10",
delivaro:"10"

},
pending_deposits_deposits:{
cash:"10",
difference:"10"

},
banking_details:{
giro_slip_number:"10567",
banking_total:"10",
banked_total:"10",
cashup_sheet_date:new Date(2021,2,5),
sealed_by:"John Doe"

}
},


],
  },

];


showDiv = {
  Epo: true,
  food:true,
  drinks:true,
  takeAway:true,
  others:false,
  vat:true,
  seviceCharges:false,
  creditCardTips:false,


  PettyCash: true,
  fd:true,
  repair:true,
  maintenance:true,
  sundries:true,


  Pdq: false,
  debit:true,
  visa:true,
  amex:true,


  Tpt: false,
  zomato:true,
  delivaro:true,


  Pdd: false,


  Brf: false,
  giro:true,
  banking:true,
  banked:true,
  cashup:false,
  sealed:false,

}


}