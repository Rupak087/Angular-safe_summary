export class  SafeSummary{
    id!: string;
    date!: string;
    tillFloat!: number;
    safeFloat!: number;
    salesCash! : number;
    expenditure!: number;
    expenditureComments!: string;
    witnessId!: string;
}

export class  Transaction{
    id: string;
    employee: string;
    date: string;
    witness: string;
    safeFloat: number;
    tillFloat: number;
    salesCash: number;
}

export class  AddTransaction{
    id: string;
    employee: string;
    date: string;
    witness: string;
    safeFloat: number;
    tillFloat: number;
    salesCash: number;
}