/**
* Row 2 Data
*/
export class RecentActivity {
    title?: string;
    date?: string;
    text?: string;
    name?: string;
    work?: string;
}

export const recentActivitiesData: RecentActivity[] = [
    {
        title: 'Task Finished', date: '09 June 2020', text: 'finished task on', name: 'Joseph Ellison', work: 'Project Management'
    },
    {
        title: 'New Comment', date: '05 June 2020', text: 'Product delivered', name: 'Elizabeth Scott', work: 'Service Management'
    },
    {
        title: 'Target Completed', date: '01 June 2020', text: 'finished target on', name: 'Sonia Peters', work: 'this month Sales'
    },
    {
        title: 'Revenue Sources', date: '26 May 2020', text: 'source report on', name: 'Justin Nash', work: 'Generated'
    },
    {
        title: 'Dispatched Order', date: '22 May 2020', text: 'ontime order delivery', name: 'Ella Lambert', work: 'Service Management'
    },
    {
        title: 'New User Added', date: '19 May 2020', text: 'visit the site', name: 'Nicola Blake', work: 'Membership allocated'
    },
    {
        title: 'Revenue Sources', date: '15 May 2020', text: 'source report on', name: 'Richard Mills', work: 'Generated'
    },
    {
        title: 'New Order Placed', date: '11 May 2020', text: 'is proces the order', name: 'Steven Hart', work: '#987'
    }
]

/**
* Row 3 Data
*/
export class RecentCustomers {
    img?: string;
    name?: string;
    userid?: number;
    status?: string;
    payment?: number;
}

export const recentCustomersData: RecentCustomers[] = [
    {
        img: '../../assets/images/users/1.jpg', name: 'Lisa Marshall', userid: 2342, status: 'Paid', payment: 558
    },
    {
        img: '../../assets/images/users/2.jpg', name: 'John Chapman', userid: 6720, status: 'Pending', payment: 458
    },
    {
        img: '../../assets/images/users/3.jpg', name: 'Sonia Smith', userid: 8763, status: 'Paid', payment: 358
    },
    {
        img: '../../assets/images/users/4.jpg', name: 'Joseph Abraham', userid: 1076, status: 'Pending', payment: 796
    },
    {
        img: '../../assets/images/users/5.jpg', name: 'Joseph Abraham', userid: 986, status: 'Paid', payment: 867
    },
]


