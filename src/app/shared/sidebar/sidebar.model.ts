interface Mytype {
    name: string;
    link: string;
    icon: string;
}
export class Sidebar {
    name: string;
    pages: string;
    link: string;
    icon: string;
    children: Mytype[];


}

export const SIDEBAR_MENU_ITEMS = [
    {
        name: 'Cash Management',
        pages: 'pages1',
        link: 'cash-management',
        icon: 'icon-cashmanagement icon',
        children: [
            {
                name: 'Cash Up',
                link: '/PAS/cash-up',
                icon: 'icon-cashup icon',
            },
            {
                name: 'Safe Summary',
                link: '/PAS/deposit',
                icon: 'icon-deposit icon',
            },
            {
                name: 'Reports',
                link: '/PAS/report',
                icon: 'icon-report icon',
            },
            {
                name: 'Reconciliation',
                link: '/PAS/reconciliation',
                icon: 'icon-reconciliation icon',
            },
        ],
    },
    {
        name: 'Employees',
        pages: 'pages2',
        link: '',
        icon: 'icon-employee icon',
        children: [
            {
                name: 'Team',
                link: '/team',
                icon: 'icon-team icon',
            },
            {
                name: 'Shift Calendar',
                link: '/rota',
                icon: 'icon-rota icon',
            },
            {
                name: 'Payroll',
                link: '/payroll',
                icon: 'icon-payroll icon',
            },
            {
                name: 'Requests',
                link: '/requests',
                icon: 'icon-requests icon',
            },
            {
                name: 'Leaves',
                link: '/leaves',
                icon: 'icon-leaves icon',
            },
            {
                name: 'Profile',
                link: 'profile',
                icon: 'icon-profile icon',
            },

        ],
    },
    {
        name: 'Suppliers',
        pages: 'pages3',
        link: 'stock',
        icon: 'icon-stock icon',
        children: [
            {
                name: 'Products',
                link: '/PAS/products',
                icon: 'icon-products icon',
            },
            {
                name: 'Suppliers',
                link: '/PAS/suppliers',
                icon: 'icon-suppliers icon',
            },
            {
                name: 'Purchase Order',
                link: '/PAS/purchase-order',
                icon: 'icon-purchase icon',
            },
            {
                name: 'Invoice',
                link: '/PAS/invoice',
                icon: 'icon-invoices icon',
            },
            {
                name: 'Stocks',
                link: '/PAS/stock-management',
                icon: 'icon-reports icon',
            },

        ],
    },
];
