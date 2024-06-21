const staticText = {
  menu: {
    dashboard: 'Dashboard',
    workspace: 'Workspace',
    jobs: 'Jobs',
    timeTracker: 'Time Tracker',
    reports: 'Reports',
    contracts: 'Contracts',
    setting: 'Setting',
    logout: 'Log Out',
  },
  dashboard: {
    activity_overview: 'Activity Overview',
    track_activities_from_workspace: 'Track all of your activities from workspace',
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    yearly: 'Yearly',
    showing_today: 'Showing Today',
    today_total: 'Today Total',
    month_total: 'Month Total',
    income: 'Income',
    based_on_income: (income: number) => `Based on $${income} per hour`,
    insert_income: 'Insert your income per hr:',
    create_reports: 'Create Reports',
    calendar: 'Calendar',
    view_more: 'View more',
    upcoming_jobs: 'Upcoming Jobs',
    all_jobs: 'All Jobs',
  },
  jobs: {
    my_jobs: 'My Jobs',
    in_progress: 'In progress',
    to_do: 'To Do',
    done: 'Done',
  },
}

export default staticText
