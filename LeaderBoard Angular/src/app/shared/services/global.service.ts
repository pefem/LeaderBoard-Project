import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    public appName = 'LeaderBoard';

    public apiUrl = 'https://localhost:44310/api';
    public apiUrlProduction = '';

    public isLoading = false;
    public isPageLoading = false;

    public isMerchantLoggedIn = false;
    public isAccountLoggedIn = false;
    public isAccountLogInPage = false;

    public isHomepage = false;

    public selectedLoggedInAccountPageTab: any;
    public selectedModuleTitle: any;
    public selectedModuleIcon: any;

    // dropdown menu
    public productActionMenuItems: any = [
        {
            text: 'Edit',
            value: 'edit'
        },
        {
            text: 'Create Lecture Note',
            value: 'lecture-notes'
        },
        {
            text: 'Conduct Assessment',
            value: 'view-details'
        },
        {
            text: 'Upload Assignment',
            value: 'product-variants'
        }
    ];
    public schoolLectureDatagridItemActionMenuItems: any = [
        {
            text: 'Edit',
            value: 'edit'
        },
        {
            text: 'Create Lecture Note',
            value: 'lecture-notes'
        },
        {
            text: 'Conduct Assessment',
            value: 'view-details'
        },
        {
            text: 'Upload Assignment',
            value: 'product-variants'
        }
    ];
    public productMoreOptionsDatagridItemActionMenuItems: any = [
        {
            text: 'Manage Classes',
            value: 'manage-categories'
        },
        {
            text: 'Manage Classrooms',
            value: 'manage-categories'
        },
        {
            text: 'Manage Subjects',
            value: 'manage-brands'
        }
    ];
    public deleteDatagridItemActionMenuItems: any = [
        {
            text: 'Delete',
            value: 'delete'
        }
    ];
    public exportDatagridItemActionMenuItems: any = [
        {
            text: 'Download Lecture as PDF',
            value: 'export-pdf'
        }
    ];

    // app level callout menu
    public calloutDiscoverMenuItems: any = [
        {
            text: 'Board Players',
            icon: 'globe-black-icon',
            value: 'board'
        },
        {
            text: 'Users',
            icon: 'customers-black-icon',
            value: 'users',
            state: 'active'
        },
    ];
    public calloutLearningMenuItems: any = [];
    public calloutManagementMenuItems: any = [];

    // products
    public calloutProductMenuItems: any = [
        // {
        //     text: 'Product Categories',
        //     icon: 'category-black-icon',
        //     value: 'categories'
        // },
        {
            text: 'Products',
            icon: 'product-black-icon',
            value: 'products',
        },
    ];

    // customers
    public calloutSubscriptionsMenuItems: any = [
        {
            text: 'Customers',
            icon: 'customer-black-icon',
            value: 'customers'
        },
        {
            text: 'Newsletter Subscriptions',
            icon: 'newsletter-black-icon',
            value: 'newsletter'
        },
    ];

    // providers
    public calloutProviderMenuItems: any = [
        {
            text: 'Credit Providers',
            icon: 'credit-provider-black-icon',
            value: 'credit-providers'
        },
        {
            text: 'Savings Merchants',
            icon: 'merchant-bank-black-icon',
            value: 'suppliers'
        },
        {
            text: 'Internet Bundles',
            icon: 'internet-explorer-black-icon',
            value: 'suppliers'
        },
        {
            text: 'Others',
            icon: 'yelp-black-icon',
            value: 'suppliers'
        }
    ];

    // content
    public calloutContentManagementMenuItems: any = [
        {
            text: 'Content Management',
            icon: 'contents-black-icon',
            value: 'contents'
        },
        {
            text: 'Blogs & Articles',
            icon: 'blogger-black-icon',
            value: 'blogs'
        },
        {
            text: 'Photo Gallery',
            icon: 'pictures-folder-black-icon',
            value: 'gallery'
        },
    ];

    // settings
    public calloutSettingsMenuItems: any = [
        {
            text: 'Email Templates',
            icon: 'email-template-black-icon',
            value: 'blogs'
        },
        {
            text: 'Geo-locations',
            icon: 'marker-black-icon',
            value: 'settings'
        },
        {
            text: 'Reasons',
            icon: 'honeycomb-black-icon',
            value: 'settings'
        },
        {
            text: 'Requirements',
            icon: 'requirements-black-icon',
            value: 'requirements'
        },
        {
            text: 'Page Setup',
            icon: 'page-black-icon',
            value: 'webpages'
        },
        {
            text: 'Developers APIs',
            icon: 'api-black-icon',
            value: 'settings'
        }
    ];

    // reports
    public calloutReportsMenuItems: any = [
        {
            text: 'Registered Customers',
            icon: 'wallet-black-icon',
            value: 'wallets'
        },
        {
            text: 'Credit History Reports',
            icon: 'report-black-icon',
            value: 'subscriptions',
        },
        {
            text: 'Event Log',
            icon: 'report-black-icon',
            value: 'wallets'
        },
        {
            text: 'Register Report',
            icon: 'report-black-icon',
            value: 'wallets'
        },
        {
            text: 'Product Quantity Alerts',
            icon: 'report-black-icon',
            value: 'wallets'
        }
    ];

}